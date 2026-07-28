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
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Zap,
    title: "Quick Crash Courses",
    description: "Fast-track learning modules designed for exam preparation.",
    color: "bg-emerald-50 text-emerald-600"
  },
  {
    icon: CheckCircle2,
    title: "Experimental Examples",
    description: "Practical hands-on cases to help you master real-world skills.",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Award,
    title: "Certification Awarded",
    description: "Earn verified certificates upon successful course completion.",
    color: "bg-orange-50 text-orange-600"
  },
  {
    icon: Smartphone,
    title: "Fully Responsive",
    description: "Access your classes anytime from mobile, tablet, or desktop.",
    color: "bg-pink-50 text-pink-600"
  },
  {
    icon: Search,
    title: "SEO & Search Friendly",
    description: "Easily search and filter top-rated tutors in your area.",
    color: "bg-indigo-50 text-indigo-600"
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Connect with verified tutors and students from anywhere.",
    color: "bg-teal-50 text-teal-600"
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "24/7 student support to assist you with any questions.",
    color: "bg-rose-50 text-rose-600"
  }
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-indigo-100 via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Core Features
          </h2>
          <p className="text-slate-600 text-base md:text-lg">
            We connect students with top-tier educators to unlock their full potential with personalized learning experiences.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group hover:bg-blue-300  "
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${item.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-black">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner Card with Discover Link */}
        <div className="bg-white rounded-3xl border hover:bg-indigo-400 border-slate-200 p-8 md:p-12 shadow-lg overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Info & Button */}
            <div className="space-y-6">
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 font-semibold text-xs rounded-full uppercase tracking-wider">
                Start Learning Today
              </span>
              <h3 className="text-3xl font-extrabold text-slate-900 leading-snug">
                Creating a Better Future for You
              </h3>
              <p className="text-slate-600">
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

            {/* Right Side Card Image */}
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