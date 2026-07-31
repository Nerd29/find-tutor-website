"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Play, 
  X, 
  Search, 
  Calendar, 
  Video, 
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Find Your Perfect Tutor",
    description: "Search verified tutors by subject, price, rating, and whether you prefer online or in-person sessions.",
    icon: Search
  },
  {
    number: "02",
    title: "Book a Demo or Session",
    description: "Select an available time slot that fits your schedule and book your first 1-on-1 lesson instantly.",
    icon: Calendar
  },
  {
    number: "03",
    title: "Learn & Interact",
    description: "Join interactive online classrooms or connect locally for hands-on, personalized tutoring.",
    icon: Video
  },
  {
    number: "04",
    title: "Track Progress & Excel",
    description: "Review study materials, track your academic improvements, and rate your overall experience.",
    icon: GraduationCap
  }
];

export default function DemoVideoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-gradient-to-br from-blue-50 via-slate-50 to-indigo-50/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="px-4 py-1.5 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400 font-semibold text-xs md:text-sm rounded-full tracking-wide uppercase">
            Simple & Effective Learning
          </span>
          <h2 className="text-3xl mt-4 md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Tutor Platform</span> Works
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg">
            Watch this quick 2-minute video to see how easily you can search, book, and start learning with top-rated tutors.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto mb-20 rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-slate-700 group">
          <div className="relative w-full h-[320px] sm:h-[420px] md:h-[500px]">
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1600&auto=format&fit=crop"
              alt="Tutor Platform Demo Video Thumbnail"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors duration-300"></div>

            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              <button
                onClick={() => setIsVideoOpen(true)}
                aria-label="Play Demo Video"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-blue-600 flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group/btn"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 fill-blue-600 translate-x-1 group-hover/btn:scale-110 transition-transform" />
              </button>

              <div className="mt-6 space-y-1">
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-full border border-white/30">
                  2 Min Demo
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white shadow-sm">
                  See How Easy It Is to Hire a Tutor
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200/80 dark:border-slate-700 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-extrabold text-slate-200 dark:text-slate-700 group-hover:text-blue-200 dark:group-hover:text-blue-800 transition-colors">
                    {step.number}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {step.title}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm p-4 transition-all duration-300">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-700">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative pt-[56.25%] w-full">
              <iframe
                className="absolute inset-0 w-full h-full"
               src="https://www.youtube-nocookie.com/embed/lG4VkPoG3ko"
                title="How It Works Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}