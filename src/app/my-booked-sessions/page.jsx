import React from 'react';
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from 'next/image';
// import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';
import { Button } from '@heroui/react';
import { BookingDelete } from '../components/BookingDelete';

const MyBookedSessionsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    });

    const user = session?.user;
    const res = await fetch(`http://localhost:8000/booking/${user?.id}`, {
        cache: "no-store"
    });

    const bookings = await res.json();

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
                My Booked Sessions
            </h1>

            {Array.isArray(bookings) && bookings.length > 0 ?(
                    <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 border-b border-gray-200 text-xs font-semibold uppercase text-gray-500">
                        <tr>
                            <th className="py-4 px-6">Tutor</th>
                            <th className="py-4 px-6">Booking ID</th>
                            <th className="py-4 px-6">User ID</th>
                            <th className="py-4 px-6">Username</th>
                            <th className="py-4 px-6">Time Slot</th>
                            <th className="py-4 px-6">Fee</th>
                            <th className="py-4 px-6">Delete</th>
                           
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 text-sm">
                        {Array.isArray(bookings) && bookings.map((booking) => (
                            <tr key={booking._id} className="hover:bg-gray-50/80 transition-colors">
                                <td className="py-4 px-6 flex items-center gap-4">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-gray-200">
                                        <Image
                                            src={booking.tutorImage}
                                            alt={booking.tutorName}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                    <span className="font-bold text-gray-900 text-base">
                                        {booking.tutorName}
                                    </span>
                                </td>
                                <td className="py-4 px-6 font-mono text-xs text-gray-500">
                                    {booking._id}
                                </td>
                                <td className="py-4 px-6 font-mono text-xs text-gray-500">
                                    {booking.userId}
                                </td>
                                <td className="py-4 px-6 font-mono text-xs text-gray-500">
                                   Booked By: {booking.userName}
                                </td>
                                <td className="py-4 px-6 font-medium text-gray-700">
                                    {booking.timeSlot}
                                </td>
                                <td className="py-4 px-6 font-bold text-cyan-600 text-base">
                                    ${booking.price}
                                </td>
                                <td className="py-4 px-6 font-bold text-red-600 text-base">
                                   <BookingDelete bookingId={booking._id} ></BookingDelete>
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
                    <h3 className="text-xl font-bold text-gray-800 mb-2">No Booked Sessions Yet</h3>
                    <p className="text-gray-500 text-sm mb-6">
                        You haven`t reserved any tutor sessions. Browse available tutors to get started.
                    </p>
                </div>
            )}

        
        </div>
    );
};

export default MyBookedSessionsPage;