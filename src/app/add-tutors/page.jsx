'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function AddTutorPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit =async (e) => {
        e.preventDefault();

        const formData=new FormData(e.currentTarget)
           const tutor = Object.fromEntries(formData.entries())

           console.log(tutor)
        // setLoading(true);

         const res = await fetch('http://localhost:8000/tutor', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(tutor)
        })

        const data = await res.json()


        

        
                console.log(data);
                toast.success('Tutor added successfully!');
                form.reset();
                setLoading(false);
                router.push('/tutors');
         
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-8">
                <div className="text-center space-y-2">
                    <h1 className="text-3xl font-black text-slate-900 tracking-tight">
                        Add <span className="text-blue-600">New Tutor</span>
                    </h1>
                    <p className="text-slate-500 font-medium">
                        Fill in the details below to register a tutor listing.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {/* Tutor Name */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">
                                Tutor Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                required
                                placeholder="e.g. John Doe"
                                className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none transition-all duration-200"
                            />
                        </div>

                        {/* Photo URL */}
                        <div className="space-y-2">
                            <label htmlFor="image" className="text-sm font-bold text-slate-700 ml-1">
                                Photo (ImgBB / PostImage link)
                            </label>
                            <input
                                id="image"
                                name="image"
                                type="url"
                                required
                                placeholder="https://i.ibb.co/..."
                                className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none transition-all duration-200"
                            />
                        </div>

                        {/* Subject / Category Dropdown */}
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-bold text-slate-700 ml-1">
                                Subject / Category
                            </label>
                            <select
                                id="subject"
                                name="subject"
                                required
                                defaultValue=""
                                className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none bg-white transition-all duration-200"
                            >
                                <option value="" disabled>Select Subject</option>
                                <option value="Mathematics">Mathematics</option>
                                <option value="Physics">Physics</option>
                                <option value="Chemistry">Chemistry</option>
                                <option value="Biology">Biology</option>
                                <option value="English">English</option>
                                <option value="ICT / Computer Science">ICT / Computer Science</option>
                            </select>
                        </div>

                        {/* Available Days and Time Slot */}
                        <div className="space-y-2">
                            <label htmlFor="availability" className="text-sm font-bold text-slate-700 ml-1">
                                Available Days & Time Slot
                            </label>
                            <input
                                id="availability"
                                name="availability"
                                type="text"
                                required
                                placeholder="Sun - Thu 5:00 PM - 8:00 PM"
                                className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none transition-all duration-200"
                            />
                        </div>

                        {/* Hourly Fee */}
                        <div className="space-y-2">
                            <label htmlFor="hourlyFee" className="text-sm font-bold text-slate-700 ml-1">
                                Hourly Fee ($ or ৳)
                            </label>
                            <input
                                id="hourlyFee"
                                name="hourlyFee"
                                type="number"
                                min="0"
                                required
                                placeholder="e.g. 25"
                                className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none transition-all duration-200"
                            />
                        </div>

                        {/* Total Slot */}
                        <div className="space-y-2">
                            <label htmlFor="totalSlot" className="text-sm font-bold text-slate-700 ml-1">
                                Total Slot
                            </label>
                            <input
                                id="totalSlot"
                                name="totalSlot"
                                type="number"
                                min="1"
                                required
                                placeholder="e.g. 5"
                                className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none transition-all duration-200"
                            />
                        </div>

                        {/* Session Start Date */}
                        <div className="space-y-2">
                            <label htmlFor="sessionStartDate" className="text-sm font-bold text-slate-700 ml-1">
                                Session Start Date
                            </label>
                            <input
                                id="sessionStartDate"
                                name="sessionStartDate"
                                type="date"
                                required
                                className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none transition-all duration-200"
                            />
                        </div>

                        {/* Teaching Mode Dropdown */}
                        <div className="space-y-2">
                            <label htmlFor="teachingMode" className="text-sm font-bold text-slate-700 ml-1">
                                Teaching Mode
                            </label>
                            <select
                                id="teachingMode"
                                name="teachingMode"
                                required
                                defaultValue="Online"
                                className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none bg-white transition-all duration-200"
                            >
                                <option value="Online">Online</option>
                                <option value="Offline">Offline</option>
                                <option value="Both">Both</option>
                            </select>
                        </div>
                    </div>

                    {/* Institution & Experience */}
                    <div className="space-y-2">
                        <label htmlFor="institutionAndExperience" className="text-sm font-bold text-slate-700 ml-1">
                            Institution & Experience
                        </label>
                        <input
                            id="institutionAndExperience"
                            name="institutionAndExperience"
                            type="text"
                            required
                            placeholder="e.g. CUET (3 years of teaching experience)"
                            className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none transition-all duration-200"
                        />
                    </div>

                    {/* Location */}
                    <div className="space-y-2">
                        <label htmlFor="location" className="text-sm font-bold text-slate-700 ml-1">
                            Location (Area / City)
                        </label>
                        <input
                            id="location"
                            name="location"
                            type="text"
                            required
                            placeholder="e.g. Chittagong, Bangladesh"
                            className="w-full h-12 px-4 rounded-2xl border-2 border-slate-200 focus:border-blue-600 outline-none transition-all duration-200"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-black text-lg rounded-2xl shadow-xl shadow-blue-600/20 transition-all duration-200 disabled:opacity-50"
                    >
                        {loading ? 'Submitting...' : 'Submit Tutor'}
                    </button>
                </form>
            </div>
        </div>
    );
}