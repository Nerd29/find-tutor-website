import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const TutorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:8000/tutors/${id}`);
  const tutor = await res.json();

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-gray-50/50">
      <div className="grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl border border-gray-100 shadow-xl overflow-hidden max-w-4xl w-full">
        {/* Left Side: Image */}
        <div className="relative min-h-[450px] w-full">
          <Image
            src={tutor.image}
            alt={tutor.name}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side: Tutor Details */}
        <div className="p-8 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold text-gray-900">{tutor.name}</h2>
            <p className="text-blue-600 font-medium text-lg">{tutor.subject}</p>
            <p className="text-xl font-bold text-gray-800 pt-1">
              Institution : {tutor.institution}
            </p>

            <div className="text-gray-700 space-y-1.5 pt-2 text-base">
              <p><span className="font-semibold text-gray-900">Experience :</span> {tutor.experience}</p>
              <p><span className="font-semibold text-gray-900">Location :</span> {tutor.location}</p>
              <p><span className="font-semibold text-gray-900">Mode :</span> {tutor.mode}</p>
              <p><span className="font-semibold text-gray-900">Availability :</span> {tutor.availableDays}</p>
              <p><span className="font-semibold text-gray-900">Timeslot :</span> {tutor.timeSlot}</p>
              <p><span className="font-semibold text-gray-900">Hourly Fee :</span> ${tutor.hourlyFee}</p>
              <p><span className="font-semibold text-gray-900">Remaining Slots :</span> {tutor.remainingSlots}</p>
              <p><span className="font-semibold text-gray-900">Session Start Date :</span> {tutor.sessionStartDate}</p>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-4">
            <Link href="/book-session">
              <Button color="primary" className="font-medium px-6 py-2.5 rounded-xl">
                Book Session
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorDetailsPage;