import React from 'react'
import {FaPlane, FaHotel, FaUmbrellaBeach, FaMapMarkedAlt,  } from 'react-icons/fa';


const allServices = [
    {
        icon: <FaPlane className='text-4xl text-black'/>,
        title: 'Flight Booking',
        description: 'Find and book flights at competitive rates with discounts with ease, for both domestic and international travel.',
    },
    {
        icon: <FaHotel className='text-4xl text-black'/>,
        title: 'Hotel Booking',
        description: 'Book hotels at the best price with our exclusive deals and discounts for a fabulous and comfortable stay.',
    },
    {
        icon: <FaUmbrellaBeach className='text-4xl text-black'/>,
        title: 'Beach Tours',
        description: 'Enjoy guided beach tours and relax at some of the world’s most beautiful beaches with exclusive activities.',
    },
    {
        icon: <FaMapMarkedAlt className='text-4xl text-black'/>,
        title: 'Tour Guides',
        description: 'Get professional, local tour guides to explore the best attractions and hidden gems at your destination.',
    },

];


const Services = () => {
  return (
    <div className='h-auto main-container w-[88%] m-auto'>
    <div className="text-center my-14 title-section">
        <h1 className="text-2xl font-bold tracking-wide font-subfont text-[#004170]">Our Services</h1>
    </div>

    <div className="grid grid-cols-1 gap-6 content-section sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {allServices.map((service, index) => (
            <div key={index} className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-lg cursor-pointer all-services hover:bg-gray-200">
                <div className="p-3 mb-5 bg-blue-200 rounded-lg icon-section">
                    {service.icon}
                </div>

                <div className="flex flex-col items-center justify-center text-section">
                    <h3 className="mb-3 text-xl font-semibold text-black font-subfont">{service.title}</h3>
                    <p className="text-[17px] text-[#004170] text-center p-2">{service.description}</p>
                </div>
            </div>

            

        ))}
    </div>
</div>
  )
}

export default Services