import React from 'react'
import { Link } from 'react-router-dom'
import mainLogo from '../assets/images/logo1.jpg'

const Navbar = () => {
  return (
    <div className='h-[100px] w-full bg-[#004170] navbar-container flex flex-row items-center justify-between'>

        <div className="flex flex-row items-center gap-3 px-5 ml-10 navbar-left">
         
            <img src={mainLogo} alt='logo' className='h-[60px] w-[60px] object-cover rounded-full'></img>
            <Link to='/'>
              <span className='text-3xl font-semibold text-white font-titlefont'>Travel' 360</span>
            </Link>
        </div>

        <div className="mr-10 navbar-right">
            <div className="flex flex-row gap-8 navbar-links">
                <Link to='/' className='text-lg text-white font-subfont hover:text-blue-300'>Home</Link>
                <Link to='/about' className='text-lg text-white font-subfont hover:text-blue-300'>About</Link>
                <Link to='/gallery' className='text-lg text-white font-subfont hover:text-blue-300'>Gallery</Link>
                <Link to='/contact' className='text-lg text-white font-subfont hover:text-blue-300'>Contact us</Link>
            </div>   
        </div>

    </div>
  )
}

export default Navbar