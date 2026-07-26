import { Button } from '@heroui/react';
import React from 'react';
import TutorsCard from './TutorsCard';
import Link from 'next/link';

const Featured = async() => {

    const res= await fetch('http://localhost:8000/featured')
    const tutors=await res.json()
    console.log(tutors)

    return (
        <div className=''>
            <div>
                <h1 className='text-3xl font-bold text-blue-500'>Featured Tutors</h1>
            </div>

            <div className='grid grid-cols-3 gap-5'>
                {tutors.map((tutor) => (
                    <TutorsCard key={tutor._id} tutor={tutor} />
                    
                ))
                }
            </div>
            <div>
               <Link href={'/tutors'}> <Button variant='primary' >All Tutors</Button></Link>
            </div>
            
        </div>
    );
};

export default Featured;