// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import mainLogo from '../assets/images/logo1.jpg'
// import { FaHamburger } from 'react-icons/fa'

// const Navbar = () => {

//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className='h-[100px] w-full bg-[#004170] navbar-container flex flex-row items-center justify-between'>

//         <div className="flex flex-row items-center gap-3 px-5 ml-10 navbar-left">
         
//             <img src={mainLogo} alt='logo' className='h-[60px] w-[60px] object-cover rounded-full'></img>
//             <Link to='/'>
//               <span className='text-3xl font-semibold text-white font-titlefont'>Travel' 360</span>
//             </Link>
//         </div>

//         <div className="hidden mr-10 navbar-right md:flex">
//             <div className="flex flex-row gap-8 navbar-links">
//                 <Link to='/' className='text-lg text-white font-subfont hover:text-blue-300'>Home</Link>
//                 <Link to='/about' className='text-lg text-white font-subfont hover:text-blue-300'>About</Link>
//                 <Link to='/gallery' className='text-lg text-white font-subfont hover:text-blue-300'>Gallery</Link>
//                 <Link to='/contact' className='text-lg text-white font-subfont hover:text-blue-300'>Contact us</Link>
//             </div>   
    
//         </div>

//         <div className="res-icon md:hidden">
//             <FaHamburger className='w-6 h-6 text-black' />
//         </div>

//     </div>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/images/logo1.jpg';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-[100px] w-full bg-[#004170] navbar-container flex items-center justify-between px-5">
      {/* Logo Section */}
      <div className="flex items-center gap-3 ml-6 navbar-left">
        <img src={mainLogo} alt="logo" className="md:h-[60px] md:w-[60px] object-cover rounded-full h-[40px] w-[40px]" />
        <Link to="/">
          <span className="font-semibold text-white 2xl md:text-3xl font-titlefont">Travel' 360</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden gap-8 md:flex navbar-links">
        <Link to="/" className="text-lg text-white font-subfont hover:text-blue-300">Home</Link>
        <Link to="/about" className="text-lg text-white font-subfont hover:text-blue-300">About</Link>
        <Link to="/gallery" className="text-lg text-white font-subfont hover:text-blue-300">Gallery</Link>
        <Link to="/contact" className="text-lg text-white font-subfont hover:text-blue-300">Contact us</Link>
      </div>

      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-3xl text-white">
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-[#004170] md:hidden flex flex-col items-center py-5">
          <Link
            to="/"
            className="mb-4 text-lg text-white font-subfont hover:text-blue-300"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="mb-4 text-lg text-white font-subfont hover:text-blue-300"
            onClick={toggleMenu}
          >
            About
          </Link>
          <Link
            to="/gallery"
            className="mb-4 text-lg text-white font-subfont hover:text-blue-300"
            onClick={toggleMenu}
          >
            Gallery
          </Link>
          <Link
            to="/contact"
            className="mb-4 text-lg text-white font-subfont hover:text-blue-300"
            onClick={toggleMenu}
          >
            Contact us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
