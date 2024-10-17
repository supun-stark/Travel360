import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import newyork from '../assets/images/newyorkk.jpg';
import paris from '../assets/images/paris.jpg';
import tokyo from '../assets/images/tokyo.jpeg';
import galle from '../assets/images/galle.jpeg';
import bali from '../assets/images/bali.jpg';
import sydney from '../assets/images/sydney.jpg'

const destinations = [
    {
        image: newyork,
        title: 'New York, USA',
        description: 'Discover the city that never sleeps with its iconic skyline, art, and culture.'
    },
    {
        image: paris,
        title: 'Paris, France',
        description: 'Explore the City of Light, known for its art, fashion, and the Eiffel Tower.'
    },
    {
        image: tokyo,
        title: 'Tokyo, Japan',
        description: 'Experience the vibrant mix of modernity and tradition in Japan’s capital.'
    },
    {
        image: galle,
        title: 'Galle, Sri Lanka',
        description: 'Unwind in this coastal city known for its historic fort and beautiful beaches.'
    },
    {
        image: sydney,
        title: 'Sydney, Australia',
        description: 'Explore the vibrant harbor city, home to the iconic Sydney Opera House and Harbour Bridge.'
    },
    {
        image: bali,
        title: 'Bali, Indonesia',
        description: 'Relax in a tropical paradise with stunning beaches, temples, and culture.'
    },
];



const PopularDestinations = () => {
  return (
    <div className='h-auto main-container w-[88%] m-auto'>
        <div className="my-12 text-center title-section">
            <h1 className="text-2xl font-bold tracking-wide font-subfont text-[#004170]">Popular Destinations</h1>
        </div>

        <div className="grid grid-cols-1 gap-8 content-section sm:grid-cols-2 md:grid-cols-3">
            {destinations.map((destination, index) => (
                <div key={index} className="overflow-hidden rounded-lg shadow-lg cursor-pointer all-places hover:scale-105 hover:shadow-xl">
                    <img src={destination.image} alt='place' className="object-cover w-full h-56 transition-transform duration-300 transform hover:scale-110"/>

                    <div className="p-4 text-section">
                        <h3 className="mb-2 text-xl font-semibold text-[#004170]">{destination.title}</h3>
                        <p className="text-gray-700">{destination.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default PopularDestinations
