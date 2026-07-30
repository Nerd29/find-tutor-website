"use client";

import { motion } from "framer-motion";
import { Monitor, GraduationCap, ClipboardList, Apple } from "lucide-react";
import CountUpNumber from "./CountStats";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardPop = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const stats = [
  { icon: Monitor, value: 1600, label: "LEARN ANYTHING", category: "AVAILABLE COURSES" },
  { icon: GraduationCap, value: 1900, label: "FUTURE GENIUS", category: "ENROLLED STUDENTS" },
  { icon: ClipboardList, value: 15900, label: "THATS A LOT", category: "COMPLETED SESSIONS" },
  { icon: Apple, value: 250, label: "ALL TRAINED PROFESSIONALS", category: "EXPERT TUTORS" },
];

export default function StatsSection() {
  return (
    <section className="relative bg-slate-50/60 dark:bg-slate-900/50 py-16">

        <h1 className="text-center mb-4 text-3xl font-bold text-blue-500">Our Success Numbers</h1>
      <div className="absolute left-0 bottom-0 translate-y-1/3 -translate-x-1/3 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                variants={cardPop}
                whileHover={{ y: -10, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative p-8 rounded-2xl flex flex-col items-center text-center bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-700 shadow-sm transition-all duration-300 hover:bg-indigo-600 hover:border-indigo-600 hover:shadow-2xl cursor-pointer"
              >
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-500 bg-indigo-50 dark:bg-indigo-900/40 dark:text-indigo-300 px-2.5 py-1 rounded-full mb-4 transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                  {stat.category}
                </span>

                <div className="p-3.5 rounded-xl mb-4 bg-indigo-50 dark:bg-indigo-900/40 text-indigo-500 dark:text-indigo-300 transition-colors duration-300 group-hover:bg-white/20 group-hover:text-white">
                  <Icon className="w-8 h-8" />
                </div>

                <span className="text-3xl font-extrabold tracking-tight mb-1 text-gray-900 dark:text-white transition-colors duration-300 group-hover:text-white">
                  <CountUpNumber end={stat.value} suffix="+" />
                </span>

                <span className="text-xs font-bold tracking-wider uppercase text-gray-400 dark:text-slate-500 transition-colors duration-300 group-hover:text-indigo-100">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}