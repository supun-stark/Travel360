import React from 'react'
import heroImage from '../assets/images/travel.jpg';
import PopularDestinations from '../components/PopularDestinations';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
    <div className='home-container'>

        <div className="hero-section w-full h-[80%] bg-cover bg-center relative">
            <img src={heroImage} alt="heroimage" className='object-cover w-full h-full opacity-90'/>

            {/* <div className="absolute text-center transform -translate-x-1/2 text-section top-6 left-1/2">
                <h1 className='font-subfont text-3xl font-bold mb-2 text-[#004170]'>Unforgettable Journeys Await, Let's Explore Together</h1>
                <p className='mb-3 text-4xl font-bold text-black font-captionfont'>Your journey starts here – Explore, Dream, Travel</p>
                <button>Read More</button>
            </div> */}
            <div className="absolute text-center transform -translate-x-1/2 text-section top-6 left-1/2">
        <h1 className='font-subfont text-2xl font-bold mb-2 text-[#004170] tracking-wide'>Unforgettable Journeys Await, Let's Explore Together!</h1>
    </div>

    {/* p and button at the bottom */}
    <div className="absolute text-center transform -translate-x-1/2 text-section bottom-24 left-1/2">
        <p className='mb-2 text-4xl font-bold text-black font-captionfont'>Your journey starts here  –  Explore, Dream, Travel..</p>
        {/* <button className='px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600'>Read More</button>
         */}
          <button className='px-4 py-2 text-white bg-[#004170] rounded-full hover:bg-blue-600'>Read More</button>
    </div>
        </div>

    </div>
    <PopularDestinations/>
    <Services/>
    <Clients/>
    <Footer/>
    </>
  )
}

export default Home