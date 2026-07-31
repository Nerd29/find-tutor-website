"use client"
import React from 'react';
import Image from 'next/image';
import { Button } from '@heroui/react';
import { FaStar } from "react-icons/fa";
import { Plus } from '@gravity-ui/icons';
import Link from 'next/link';

const TutorsCard = ({ tutor }) => {

  
  return (
    <div className="bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col group">
      
      <div className="relative h-60 w-full bg-slate-900 overflow-hidden">
        <Image 
          src={tutor.image} 
          alt={tutor.name} 
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover blur-xl scale-125 opacity-50 pointer-events-none" 
        />
        
        <Image 
          src={tutor.image} 
          alt={tutor.name} 
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-contain object-center group-hover:scale-105 transition-transform duration-500 z-10 p-2" 
        />
      </div>

      <div className="py-6 px-6 text-center flex-1 flex flex-col items-center justify-between">
        <div className="w-full">
          <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {tutor.name}
          </h3>

          <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 mt-1">
            {tutor.institution}
          </p>

          <div className="my-3 inline-block bg-amber-400/20 text-amber-800 dark:text-amber-300 text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-md">
            <span className='flex gap-1 justify-center items-center'><FaStar /> {tutor.subject}</span>
          </div>

          <p className="text-xs font-medium text-slate-600 dark:text-slate-400">
            {tutor.experience} Experience
          </p>
          <p className="mt-4 text-xs font-medium text-blue-600 dark:text-slate-400">Session Start Date : {tutor.sessionStartDate}</p>
          <p className="text-xs font-medium text-red-600 dark:text-slate-400">Session Start Date : {tutor.sessionEndDate}</p>
        </div>
        <Link className="mt-4" href={`/detailstutor/${tutor._id}`}>
          <Button className="bg-blue-500 text-white">
            <Plus />
            Book Session
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default TutorsCard;