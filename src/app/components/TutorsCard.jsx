import React from 'react';
import Image from 'next/image';
import { Button } from '@heroui/react';
import { Plus } from '@gravity-ui/icons';
import Link from 'next/link';

const TutorsCard = ({ tutor }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col group">
      
      {/* Image Container with Dynamic Background + Full Uncropped Photo */}
      <div className="relative h-60 w-full bg-slate-900 overflow-hidden">
        
        {/* 1. Blurred background image to fill wide space gracefully */}
        <Image 
          src={tutor.image} 
          alt="" 
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover blur-xl scale-125 opacity-50 pointer-events-none" 
        />
        
        {/* 2. Main portrait image forced to fit completely without cropping */}
        <Image 
          src={tutor.image} 
          alt={tutor.name} 
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-center group-hover:scale-105 transition-transform duration-500 z-10 p-2" 
        />
      </div>

      {/* Card Content Body */}
      <div className="py-6 px-6 text-center flex-1 flex flex-col items-center justify-between">
        <div className="w-full">
          {/* Name */}
          <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
            {tutor.name}
          </h3>

          {/* Institution */}
          <p className="text-xs font-semibold text-slate-500 mt-1">
            {tutor.institution}
          </p>

          {/* Subject Badge */}
          <div className="my-3 inline-block bg-amber-400/20 text-amber-800 text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-md">
            ★ {tutor.subject}
          </div>

          {/* Experience */}
          <p className="text-xs font-medium text-slate-600">
            {tutor.experience} Experience
          </p>
        </div>
        <Link className="mt-4" href={`/detailstutor/${tutor._id}`}>
         <Button variant="primary">
        <Plus />
        Book Session
      </Button></Link>
        
      </div>

    </div>
  );
};

export default TutorsCard;