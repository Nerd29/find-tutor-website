import React from 'react';
import FeaturedClient from '../components/FeaturedClient';
// import FeaturedClient from './FeaturedClient';

const Featured = async () => {
    let tutors = [];

    try {
        const res = await fetch('http://localhost:8000/featured', {
            cache: 'no-store' // or next: { revalidate: 60 }
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