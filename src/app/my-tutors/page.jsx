import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { BookingDelete } from '../components/BookingDelete';
import TutorDelete from '../components/TutorDelete';

const MyTutorsPage = async () => {
     const res=await fetch('http://localhost:8000/add-tutor',{
         cache: "no-store"
     })
     const tutors= await res.json()
     console.log(tutors)

    return (
        <div className="max-w-8xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                My Tutors List
            </h1>
                {Array.isArray(tutors) && tutors.length > 0 ?(
                                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                                <table className="w-full text-left border-collapse">
                                    <thead className="bg-gray-50 border-b border-gray-200 text-xs font-semibold uppercase text-gray-500">
                                        <tr>
                                            <th className="py-4 px-6">Tutor</th>
                                            <th className="py-4 px-6">Tutor ID</th>
                                            <th className="py-4 px-6">Availabilty</th>
                                            <th className="py-4 px-6">Institution & Experience</th>
                                            <th className="py-4 px-6">Total Slot</th>
                                            <th className="py-4 px-6">Hourly Fee</th>
                                            <th className="py-4 px-6">Session Start Date</th>
                                            <th className="py-4 px-6">Teaching Mode</th>
                                            <th className="py-4 px-6">Location</th>
                                            <th className="py-4 px-6">Delete</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100 text-sm">
                                        {Array.isArray(tutors) && tutors.map((Tutor) => (
                                            <tr key={Tutor._id} className="hover:bg-gray-50/80 transition-colors">
                                                <td className="py-4 px-6 flex items-center gap-4">
                                                    
                                                    <span className="font-bold text-gray-900 text-base">
                                                        {Tutor.name}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 font-bold text-black">
                                                    {Tutor._id}
                                                </td>
                                                <td className="py-4 px-6 font-bold text-black">
                                                    {Tutor.availability}
                                                </td>
                                                <td className="py-4 px-6 font-bold text-black">
                                                   {Tutor.institutionAndExperience}
                                                </td>
                                                <td className="py-4 px-6 font-bold text-black">
                                                    {Tutor.totalSlot}
                                                </td>
                                                <td className="py-4 px-6 font-bold text-black">
                                                    ${Tutor.hourlyFee}
                                                </td>
                                                <td className="py-4 px-6 font-bold  text-black">
                                                    {Tutor.sessionStartDate}
                                                </td>
                                                <td className="py-4 px-6 font-bold text-blue-500">
                                                    {Tutor.teachingMode}
                                                </td>
                                                <td className="py-4 px-6 font-bold text-black">
                                                    {Tutor.location}
                                                </td>
                                                
                                                <td className="py-4 px-6 font-bold text-red-600 text-base">
                                                   <TutorDelete

                                                    tutorId={Tutor._id} ></TutorDelete>
                                                </td>
                                                
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            ):(
                                <div className="text-center py-16 px-4 bg-white rounded-2xl border border-gray-100 shadow-sm max-w-md mx-auto">
                                    <div className="w-16 h-16 bg-cyan-50 text-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                                        📅
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">No Tutors have been added yet</h3>
                                    
                                </div>
                            )}
                
          
        </div>
    );
};

export default MyTutorsPage;