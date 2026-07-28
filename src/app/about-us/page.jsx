"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Send, Compass, Award } from "lucide-react";
import StatsSection from "../components/Stats/StatsSection";
import Link from "next/link";
// import StatsSection from "./StatsSection";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemFadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  },
};

const itemFadeRight = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  },
};

const tabContents = [
  {
    id: 0,
    title: "Creating a Better Future for You",
    subtitle: "Creating a Better Future for you",
    description: "We connect students with top-tier educators to unlock their full potential. Our platform provides personalized learning experiences designed to help you master new skills and achieve your academic or professional goals.",
    features: [
      { icon: Lightbulb, text: "Creative Study Pattern" },
      { icon: Send, text: "Quick Crash Courses" },
      { icon: Compass, text: "Provided with Experimental Examples" },
      { icon: Award, text: "Certification Awarded" },
    ],
    image1: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 1,
    title: "Learn why eLearning is Best",
    subtitle: "Learn why eLearning is Best",
    description: "Flexible learning schedules allowing students to balance study with everyday life. Access world-class educators from anywhere in the world.",
    features: [
      { icon: Lightbulb, text: "Flexible Schedules" },
      { icon: Send, text: "Interactive Live Classes" },
      { icon: Compass, text: "Practical Case Studies" },
      { icon: Award, text: "Global Credentials" },
    ],
    image1: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=800&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Our Simple & Effective Process",
    subtitle: "Our Simple & Effective Process",
    description: "Enroll in three simple steps: Pick a course, interact with mentor guidance, and complete your practical assessments to claim your degree.",
    features: [
      { icon: Lightbulb, text: "Step-by-Step Mentorship" },
      { icon: Send, text: "Instant Query Resolution" },
      { icon: Compass, text: "Real-world Projects" },
      { icon: Award, text: "Career Assistance" },
    ],
    image1: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop",
  },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);
  const currentContent = tabContents[activeTab];

  return (
    <div className="bg-white text-gray-800 font-sans overflow-hidden py-12 space-y-24">
      {/* SECTION 1: Tabs & Showcase */}
      <motion.section 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.div variants={itemFadeUp} className="text-center space-y-2 mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Know why we are best
          </h2>
          <p className="text-xs uppercase tracking-widest text-gray-400 font-semibold">
            Learning via app never gets easier
          </p>
        </motion.div>

        {/* Stepper Tabs Bar */}
        <motion.div variants={itemFadeUp} className="relative max-w-3xl mx-auto mb-16">
          <div className="flex justify-between items-center relative z-10">
            {tabContents.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <div 
                  key={tab.id} 
                  onClick={() => setActiveTab(idx)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  <span className={`text-xs sm:text-sm font-semibold mb-3 transition-colors ${
                    isActive ? "text-emerald-500" : "text-gray-400 group-hover:text-gray-600"
                  }`}>
                    {tab.subtitle}
                  </span>
                  <div className={`w-6 h-6 rounded-full border-2 bg-white flex items-center justify-center transition-all ${
                    isActive ? "border-emerald-500 scale-110" : "border-gray-300"
                  }`}>
                    {isActive && (
                      <motion.div 
                        layoutId="activeCircle"
                        className="w-2.5 h-2.5 bg-emerald-500 rounded-full" 
                      />
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="absolute bottom-3 left-0 right-0 h-[2px] bg-gray-200 z-0" />
        </motion.div>

        {/* Tab Content Box */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -15 }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left Column */}
            <div className="lg:col-span-6 space-y-6">
              <motion.h3 variants={itemFadeUp} className="text-2xl sm:text-3xl font-extrabold text-gray-900 leading-tight">
                {currentContent.title}
              </motion.h3>
              
              <motion.div variants={itemFadeUp} className="w-12 h-1 bg-emerald-400 rounded-full" />

              <motion.p variants={itemFadeUp} className="text-gray-500 text-sm leading-relaxed">
                {currentContent.description}
              </motion.p>

              <div className="space-y-3.5 pt-2">
                {currentContent.features.map((feat, i) => {
                  const Icon = feat.icon;
                  return (
                    <motion.div key={i} variants={itemFadeRight} className="flex items-center gap-3">
                      <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-500">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">
                        {feat.text}
                      </span>
                    </motion.div>
                  );
                })}
              </div>

             <Link href={"/#featuresSection"}>
              <motion.div variants={itemFadeUp} className="pt-4">
                <motion.button 
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-6 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-teal-400 to-indigo-500 shadow-md hover:shadow-xl transition-all"
                >
                  Discover our features
                </motion.button>
              </motion.div>
             </Link>
            </div>

            {/* Right Column Images */}
            <div className="lg:col-span-6 relative flex justify-center items-center h-[380px] sm:h-[420px]">
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-2 left-10 w-12 h-12 bg-indigo-500/80 rounded-full blur-[1px]" 
              />
              <motion.div 
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 right-8 w-24 h-24 bg-teal-400 rounded-full opacity-90" 
              />

              <motion.div 
                variants={itemFadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative w-48 sm:w-56 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-xl border-4 border-white z-10 -mr-6 transition-all"
              >
                <Image src={currentContent.image1} alt="Student learning" fill className="object-cover" />
              </motion.div>

              <motion.div 
                variants={itemFadeUp}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative w-48 sm:w-56 h-72 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-4 border-white z-20 mt-12 transition-all"
              >
                <Image src={currentContent.image2} alt="Student with headphones" fill className="object-cover" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.section>

      {/* SECTION 2: Separate Stats Section */}
      <StatsSection/>
    </div>
  );
}