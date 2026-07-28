"use client";

import { Button } from "@heroui/react";
import { ArrowRight, Play, BookOpen, Users, Search, Calendar } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const slides = [
  {
    id: 1,
    badge: "Trusted by 10,000+ Students",
    title: (
      <>
        Master New Skills with{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-800">
          Expert Tutors
        </span>
      </>
    ),
    description:
      "Connect with verified tutors for Mathematics, Physics, Chemistry, English & more. Online or offline — your choice.",
    primaryBtn: { text: "Find Tutors", href: "/tutors", icon: Search },
    secondaryBtn: { text: "Book a Session", href: "/login", icon: Calendar },
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
    overlayText: "Join the community",
    overlaySub: "500+ new bookings this week",
  },
  {
    id: 2,
    badge: "Learn Anywhere, Anytime",
    title: (
      <>
        Education{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-pink-500">
          Everywhere
        </span>
      </>
    ),
    description:
      "Whether you prefer online classes or in-person sessions near you, find the perfect tutor that matches your schedule and learning style.",
    primaryBtn: { text: "Explore Tutors", href: "/tutors", icon: Users },
    secondaryBtn: { text: "Become a Tutor", href: "/add-tutors", icon: BookOpen },
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    overlayText: "1900+ Active Tutors",
    overlaySub: "Available across Bangladesh",
  },
  {
    id: 3,
    badge: "Flexible & Affordable",
    title: (
      <>
        eLearning{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500">
          for Everyone
        </span>
      </>
    ),
    description:
      "Book hourly sessions, track your progress, and learn from the best. Start your journey with just a few clicks.",
    primaryBtn: { text: "View Courses & Tutors", href: "/tutors", icon: BookOpen },
    secondaryBtn: { text: "How it Works", href: "/#demoVideoSection", icon: Play },
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    overlayText: "Start Learning Today",
    overlaySub: "Flexible schedules • Affordable rates",
  },
];

const Banner = () => {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Helper function to handle button clicks (supports hash scroll & normal navigation)
  const handleNavigation = (href) => {
    if (href.includes("#")) {
      const hash = href.split("#")[1];
      const element = document.getElementById(hash);
      
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        // If user is on a different page, navigate to homepage + section anchor
        router.push(href);
      }
    } else {
      router.push(href);
    }
  };

  // Auto-play
  const goToNext = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
      setIsAnimating(false);
    }, 300);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goToNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const goToSlide = (index) => {
    if (index === current) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 300);
  };

  const slide = slides[current];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-br from-blue-50 via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* ===== LEFT CONTENT ===== */}
          <div
            key={slide.id}
            className={`space-y-7 transition-all duration-700 ${
              isAnimating ? "opacity-0 translate-y-6" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/10 rounded-full border border-blue-600/20 text-blue-600 font-bold text-sm animate-[fadeInUp_0.6s_ease-out]">
              <StarIcon />
              <span>{slide.badge}</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] animate-[fadeInLeft_0.7s_ease-out]">
              {slide.title}
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-xl animate-[fadeInLeft_0.9s_ease-out]">
              {slide.description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2 animate-[fadeInUp_1.1s_ease-out]">
              <Button
                onPress={() => handleNavigation(slide.primaryBtn.href)}
                color="primary"
                size="lg"
                className="h-14 px-8 text-lg font-bold rounded-full shadow-xl shadow-blue-600/25 group cursor-pointer"
              >
                <slide.primaryBtn.icon className="w-5 h-5 mr-2" />
                {slide.primaryBtn.text}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                onPress={() => handleNavigation(slide.secondaryBtn.href)}
                variant="bordered"
                size="lg"
                className="h-14 px-8 text-lg font-bold rounded-full group border-2 cursor-pointer"
              >
                <slide.secondaryBtn.icon className="w-5 h-5 mr-2" />
                {slide.secondaryBtn.text}
              </Button>
            </div>
          </div>

          {/* ===== RIGHT IMAGE ===== */}
          <div
            key={`img-${slide.id}`}
            className={`relative group transition-all duration-700 ${
              isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-35 transition duration-700"></div>

            <div className="relative bg-white p-2 rounded-[2.5rem] shadow-2xl overflow-hidden aspect-[4/3] lg:aspect-square">
              <Image
                src={slide.image}
                alt="Tutor learning"
                fill
                priority
                className="rounded-[2rem] object-cover transform transition duration-700 group-hover:scale-105"
              />

              {/* Floating card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/80 backdrop-blur-md p-5 rounded-2xl border border-white/40 shadow-xl animate-[fadeInUp_1.2s_ease-out]">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-3">
                    {[11, 12, 13, 14].map((i) => (
                      <Image
                        key={i}
                        src={`https://i.pravatar.cc/100?img=${i}`}
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full border-2 border-white shadow"
                        alt="student"
                      />
                    ))}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-slate-800">{slide.overlayText}</p>
                    <p className="text-xs text-slate-500">{slide.overlaySub}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===== DOTS ===== */}
        <div className="flex justify-center gap-3 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === current
                  ? "w-10 bg-blue-600"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-32px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(32px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

const StarIcon = () => (
  <svg className="w-4 h-4 fill-blue-600" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default Banner;