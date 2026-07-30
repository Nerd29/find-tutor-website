import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';
import { BookingDelete } from '../components/BookingDelete';
import TutorDelete from '../components/TutorDelete';
import TutorUpdate from '../components/TutorUpdate';

const MyTutorsPage = async () => {
    const res = await fetch('http://localhost:8000/add-tutor', {
        cache: "no-store"
    })
    const tutors = await res.json()
    console.log(tutors)

    return (
        <div className="max-w-8xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-extrabold text-blue-600 dark:text-white text-center mb-8">
                My Tutors List
            </h1>
            {Array.isArray(tutors) && tutors.length > 0 ? (
                <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-900">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 text-xs font-semibold uppercase text-gray-500 dark:text-slate-400">
                            <tr>
                                <th className="py-4 px-6">Tutor</th>
                                <th className="py-4 px-6">Subject</th>
                                <th className="py-4 px-6">Availabilty</th>
                                <th className="py-4 px-6">Institution & Experience</th>
                                <th className="py-4 px-6">Total Slot</th>
                                <th className="py-4 px-6">Hourly Fee</th>
                                <th className="py-4 px-6">Session Start Date</th>
                                <th className="py-4 px-6">Teaching Mode</th>
                                <th className="py-4 px-6">Location</th>
                                <th className="py-4 px-6">Delete</th>
                                <th className="py-4 px-6">Update</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-slate-700 text-sm">
                            {tutors.map((Tutor) => (
                                <tr key={Tutor._id} className="hover:bg-gray-50/80 dark:hover:bg-slate-800/80 transition-colors">
                                    <td className="py-4 px-6 flex items-center gap-4">
                                        <span className="font-bold text-gray-900 dark:text-white text-base">
                                            {Tutor.name}
                                        </span>
                                    </td>
                                    <td className="py-4 px-6 font-bold text-black dark:text-slate-200">{Tutor.subject}</td>
                                    <td className="py-4 px-6 font-bold text-black dark:text-slate-200">{Tutor.availability}</td>
                                    <td className="py-4 px-6 font-bold text-black dark:text-slate-200">{Tutor.institutionAndExperience}</td>
                                    <td className="py-4 px-6 font-bold text-black dark:text-slate-200">{Tutor.totalSlot}</td>
                                    <td className="py-4 px-6 font-bold text-black dark:text-slate-200">${Tutor.hourlyFee}</td>
                                    <td className="py-4 px-6 font-bold text-black dark:text-slate-200">{Tutor.sessionStartDate}</td>
                                    <td className="py-4 px-6 font-bold text-blue-500">{Tutor.teachingMode}</td>
                                    <td className="py-4 px-6 font-bold text-black dark:text-slate-200">{Tutor.location}</td>
                                    <td className="py-4 px-6 font-bold text-red-600 text-base">
                                        <TutorDelete tutorId={Tutor._id} />
                                    </td>
                                    <td className="py-4 px-6 font-bold text-black dark:text-white">
                                        <TutorUpdate tutor={Tutor} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-center py-16 px-4 bg-white dark:bg-slate-900 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm max-w-md mx-auto">
                    <div className="w-16 h-16 bg-cyan-50 dark:bg-cyan-900/30 text-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                        📅
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">No Tutors have been added yet</h3>
                </div>
            )}
        </div>
    );
};

export default MyTutorsPage;