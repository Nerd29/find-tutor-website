"use client";

import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, 
  Lightbulb, 
  Zap, 
  CheckCircle2, 
  Award, 
  Smartphone, 
  Search, 
  Globe, 
  Headphones 
} from "lucide-react";

const features = [
  {
    icon: Lightbulb,
    title: "Creative Study Pattern",
    description: "Structured learning tailored specifically to your pace and goals.",
    color: "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
  },
  {
    icon: Zap,
    title: "Quick Crash Courses",
    description: "Fast-track learning modules designed for exam preparation.",
    color: "bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400"
  },
  {
    icon: CheckCircle2,
    title: "Experimental Examples",
    description: "Practical hands-on cases to help you master real-world skills.",
    color: "bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
  },
  {
    icon: Award,
    title: "Certification Awarded",
    description: "Earn verified certificates upon successful course completion.",
    color: "bg-orange-50 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400"
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Access your classes anytime from mobile, tablet, or desktop.",
    color: "bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400"
  },
  {
    icon: Search,
    title: "SEO & Search Friendly",
    description: "Easily search and filter top-rated tutors in your area.",
    color: "bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Connect with verified tutors and students from anywhere.",
    color: "bg-teal-50 dark:bg-teal-900/30 text-teal-600 dark:text-teal-400"
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "24/7 student support to assist you with any questions.",
    color: "bg-rose-50 dark:bg-rose-900/30 text-rose-600 dark:text-rose-400"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-100 via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-blue-600 tracking-tight">
            Core Features
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
            We connect students with top-tier educators to unlock their full potential with personalized learning experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group hover:bg-blue-50 dark:hover:bg-slate-800"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed group-hover:text-black dark:group-hover:text-slate-200">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-700 hover:bg-indigo-50 dark:hover:bg-slate-800 p-8 md:p-12 shadow-lg overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <span className="px-3 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-400 font-semibold text-xs rounded-full uppercase tracking-wider">
                Start Learning Today
              </span>
              <h3 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-snug">
                Creating a Better Future for You
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                Our platform provides structured study patterns, quick crash courses, and experimental examples to help you achieve your goals faster.
              </p>
              
              <div>
                <Link
                  href="/tutors"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-600 hover:to-blue-700 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Discover Tutors</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div className="relative w-full h-[260px] md:h-[300px] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop"
                alt="Students studying together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}