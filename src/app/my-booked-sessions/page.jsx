import React from 'react';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from 'next/image';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '@heroui/react';
import { BookingDelete } from '../components/BookingDelete';
export const metadata = {
    title: "My Booked Sessions - MediQueue",
    description: "View and manage your booked tutoring sessions with MediQueue.",
};

const MyBookedSessionsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/booking/${user?.id}`, {
        cache: "no-store"
    });

    const bookings = await res.json();

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white text-center mb-8">
                My Booked Sessions
            </h1>

            {Array.isArray(bookings) && bookings.length > 0 ? (
                <div className="overflow-x-auto rounded-2xl border border-gray-200 dark:border-slate-700 shadow-sm bg-white dark:bg-slate-900">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 dark:bg-slate-800 border-b border-gray-200 dark:border-slate-700 text-xs font-semibold uppercase text-gray-500 dark:text-slate-400">
                            <tr>
                                <th className="py-4 px-6">Tutor</th>
                                {/* <th className="py-4 px-6">Booking ID</th> */}
                                <th className="py-4 px-6">User ID</th>
                                <th className="py-4 px-6">Username</th>
                                <th className="py-4 px-6">User Email</th>
                                <th className="py-4 px-6">Time Slot</th>
                                <th className="py-4 px-6">Delete</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100 dark:divide-slate-700 text-sm">
                            {bookings.map((booking) => (
                                <tr key={booking._id} className="hover:bg-gray-50/80 dark:hover:bg-slate-800/80 transition-colors">
                                    <td className="py-4 px-6 flex items-center gap-4">
                                        <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-200 dark:border-slate-600">
                                            <Image
                                               src={booking.tutorImage || "https://images.unsplash.com/photo-1534528741775-53994a69daeb"}
                                                alt={booking.tutorName || "Tutor Image"}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <span className="font-bold text-gray-900 dark:text-white text-base">
                                            {booking.tutorName}
                                        </span>
                                    </td>
                                    {/* <td className="py-4 px-6 font-mono text-xs text-gray-500 dark:text-slate-400">
                                        {booking._id}
                                    </td> */}
                                    <td className="py-4 px-6 font-mono text-xs text-gray-500 dark:text-slate-400">
                                        {booking.userId}
                                    </td>
                                    <td className="py-4 px-6 font-mono text-xs text-gray-500 dark:text-slate-400">
                                        Booked By: {booking.userName}
                                    </td>
                                    <td className="py-4 px-6 font-bold text-cyan-600 dark:text-cyan-400 text-base">
                                        {booking.userEmail}
                                    </td>
                                    <td className="py-4 px-6 font-medium text-gray-700 dark:text-slate-300">
                                        {booking.timeSlot}
                                    </td>
                                    <td className="py-4 px-6 font-bold text-red-600 text-base">
                                        <BookingDelete bookingId={booking._id} />
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
                    <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">No Booked Sessions Yet</h3>
                    <p className="text-gray-500 dark:text-slate-400 text-sm mb-6">
                        You haven`t reserved any tutor sessions. Browse available tutors to get started.
                    </p>
                </div>
            )}
        </div>
    );
};

export default MyBookedSessionsPage;