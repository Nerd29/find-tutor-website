import React from 'react';
import FeaturedClient from '../components/FeaturedClient';
// import FeaturedClient from './FeaturedClient';
export const metadata = {
  title: "Featured Tutors - MediQueue",
  description: "Discover our top-rated tutors and find the perfect match for your learning needs.",
};

const Featured = async () => {
    let tutors = [];

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured`, {
            // cache: 'no-store'
            //  // or next: { revalidate: 60 }
            next: { revalidate: 60 } // Revalidate every 60 seconds
        });
        if (res.ok) {
            tutors = await res.json();
        }
    } catch (error) {
        console.error("Failed to fetch featured tutors:", error);
    }

    return <FeaturedClient tutors={tutors} />;
};

export default Featured;