"use client"
import React, { useEffect, useState } from 'react';
import TutorsCard from '../components/TutorsCard';
import { Button, DateField, Label, SearchField } from '@heroui/react';
import Link from 'next/link';

const TutorsPage = ({params}) => {

   
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [tutors, setTutors] = useState([]);

    const fetchTutors = async () => {
        try {
            setLoading(true);
        const params = new URLSearchParams();

    if (search) params.append("search", search);
    if (startDate) params.append("startDate", startDate);
    if (endDate) params.append("endDate", endDate);

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors?${params.toString()}`);
  

    const data = await res.json();
    setTutors(data);
    }
    catch (error) {
    console.error("Error fetching tutors:", error);
    }
    finally {
    setLoading(false);
    }
}
    useEffect(() => {
        fetchTutors();
    }, []);
        if (loading) {
        return (
            <div className="flex items-center justify-center h-screen">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
        }

    // console.log(tutors)

    return (
        <div className="max-w-7xl mx-auto mt-6">
            <h1 className="text-4xl font-bold text-slate-900 mb-6 text-center dark:text-white ">Available Tutors</h1>
                <div className='grid grid-cols-1 md:grid-cols-5 gap-4 items-end mb-10'>
                    <div>
                   <label className="block text-sm font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Search Tutor
                    </label>
                    <input
                     onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        name="search"
                        defaultValue=""
                        placeholder="Search tutor by name..."
                        className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>
                <div>
                     <label className="block text-sm font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Start Date
                    </label>
                    <input
                      onChange={(e) => setStartDate(e.target.value)}
                        type="date"
                        name="startDate"
                        defaultValue=''
                        className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>
                <div>
                    <label className="block text-sm font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        End Date
                    </label>
                    <input
                      onChange={(e) => setEndDate(e.target.value)}
                        type="date"
                        name="endDate"
                        defaultValue=''
                        className="w-full px-3 py-2 border rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-slate-300 dark:border-slate-700 outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                </div>
                <div className='flex gap-3'>
                    <div>
                     <Button type="submit" onClick={fetchTutors}
                        className="flex-1 py-2 bg-blue-500  text-white rounded-lg transition font-medium"
                     >Search</Button>
                </div>
                <div>
                   <Link href={"/tutors"}> <Button variant="tertiary">Reset</Button></Link>
                    </div>
                </div>
                
                </div>
                
               {tutors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {tutors.map((tutor) => (
                    <TutorsCard key={tutor._id} tutor={tutor} />
                    ))}
                </div>
                ) :  (
                    <div className="text-center py-12">
                    <h2 className="text-2xl font-bold text-red-500">
                        No Tutors Found
                    </h2>
                    <p className="text-gray-500 mt-2">
                        Try another name or date range.
                    </p>
                    </div>
                    )
                    }
                    </div>
    )
}
           
        
    


export default TutorsPage;