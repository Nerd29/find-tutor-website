"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import TutorsCard from "./TutorsCard";

// Framer Motion Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function FeaturedClient({ tutors = [] }) {
  return (
    <motion.div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      {/* Header */}
      <motion.div variants={fadeUpVariant} className="text-center space-y-2">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-600">
          Featured Tutors
        </h1>
        <p className="text-sm text-gray-500 font-medium">
          Handpicked top-rated educators ready to guide your journey
        </p>
      </motion.div>

      {/* Swiper Carousel Container */}
      <motion.div variants={fadeUpVariant} className="relative px-8 sm:px-12 py-2">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{ 
            clickable: true, 
            dynamicBullets: true 
          }}
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          /* Added custom Swiper classes and spacing via CSS variables */
          className="featured-swiper !pb-14 !pt-4 !px-2"
        >
          {tutors.map((tutor) => (
            <SwiperSlide key={tutor._id || tutor.id} className="h-auto">
              <div className="h-full transform transition-transform duration-300 hover:-translate-y-2">
                <TutorsCard tutor={tutor} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Button */}
      <motion.div variants={fadeUpVariant} className="flex justify-center">
        <Link href="/tutors">
          <Button
            variant="solid"
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
          >
            All Tutors ({tutors.length > 0 ? "16+" : ""})
          </Button>
        </Link>
      </motion.div>

      {/* Custom Styles for Swiper Arrows and Pagination */}
      <style jsx global>{`
        /* Position arrows outside the cards */
        .featured-swiper .swiper-button-prev {
          left: -10px !important;
          color: #2563eb !important; /* Blue color matching your theme */
          transform: scale(0.7);
        }

        .featured-swiper .swiper-button-next {
          right: -12px !important;
          color: #2563eb !important;
          transform: scale(0.7);
        }

        /* Move pagination dots below cards */
        .featured-swiper .swiper-pagination {
          bottom: 4px !important;
        }

        /* Style pagination dots */
        .featured-swiper .swiper-pagination-bullet-active {
          background-color: #2563eb !important;
        }
      `}</style>
    </motion.div>
  );
}