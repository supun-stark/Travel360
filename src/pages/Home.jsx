// import React from 'react'
// import heroImage from '../assets/images/travel.jpg';
// import PopularDestinations from '../components/PopularDestinations';
// import Services from '../components/Services';
// import Clients from '../components/Clients';
// import Footer from '../components/Footer';

// const Home = () => {
//   return (
//     <>
//     <div className='home-container'>

//         <div className="hero-section w-full h-[80%] bg-cover bg-center relative">
//             <img src={heroImage} alt="heroimage" className='object-cover w-full h-full opacity-90'/>

           
//             <div className="absolute text-center transform -translate-x-1/2 text-section top-6 left-1/2">
//         <h1 className='font-subfont text-2xl font-bold mb-2 text-[#004170] tracking-wide'>Unforgettable Journeys Await, Let's Explore Together!</h1>
//     </div>

//     {/* p and button at the bottom */}
//     <div className="absolute text-center transform -translate-x-1/2 text-section bottom-24 left-1/2">
//         <p className='mb-2 text-4xl font-bold text-black font-captionfont'>Your journey starts here  –  Explore, Dream, Travel..</p>
       
//           <button className='px-4 py-2 text-white bg-[#004170] rounded-full hover:bg-blue-600'>Read More</button>
//     </div>
//         </div>

//     </div>
//     <PopularDestinations/>
//     <Services/>
//     <Clients/>
//     <Footer/>
//     </>
//   )
// }

// export default Home

import React from 'react';
import heroImage from '../assets/images/travel.jpg';
import PopularDestinations from '../components/PopularDestinations';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <div className="home-container">

        {/* Hero Section */}
        <div className="hero-section w-full h-[80%] bg-cover bg-center relative">
          <img src={heroImage} alt="heroimage" className="object-cover w-full h-full opacity-90" />

          {/* Top Text Section */}
          <div className="absolute text-center transform -translate-x-1/2 text-section top-6 left-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%]">
            <h1 className="font-subfont sm:text-md sm:block text-lg lg:text-xl font-bold mb-2 text-[#004170] tracking-wide">
              Unforgettable Journeys Await, Let's Explore Together!
            </h1>
          </div>

          {/* Bottom Text & Button */}
          <div className="absolute text-center transform -translate-x-1/2 text-section bottom-16 left-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%]">
            <p className="hidden mb-6 font-bold text-black md:block md:text-3xl lg:text-4xl font-captionfont">
              Your journey starts here – Explore, Dream, Travel..
            </p>

            <button className="px-4 py-2 text-sm sm:text-base md:text-lg lg:text-xl text-white bg-[#004170] rounded-full hover:bg-blue-600">
              Read More
            </button>
             {/* <button className="px-4 py-2 text-sm md:block md:text-lg lg:text-xl text-white bg-[#004170] rounded-full hover:bg-blue-600">
              Read More
            </button> */}
          </div>
        </div>

      </div>

      <PopularDestinations />
      <Services />
      <Clients />
      <Footer />
    </>
  );
};

export default Home;
