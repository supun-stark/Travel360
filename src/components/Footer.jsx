import React from 'react'
import logo from '../assets/images/logo1.jpg'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='w-full h-[260px] bg-[#004170] footer-container p-5 mt-10'>
        <div className="flex flex-row items-center justify-around gap-2 mt-3 mb-6 content">
        <div className="flex flex-col w-1/3 logo-section">
         
        <Link to='/'>
           <div className="flex flex-row items-center gap-2 p-2 ml-5 cursor-pointer logo-title">
            <img src={logo} alt="logo" className='object-cover w-10 h-10 rounded-full'/>
            <h3 className='font-bold text-white font-subfont'>Travel'360</h3>
           </div></Link>
           <p className='px-2 mt-2 ml-5 text-sm text-left text-gray-200'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste delectus tempore beatae voluptates distinctio, sequi ut, id laborum fugiat unde laudantium expedita cupiditate omnis explicabo adipisci dolore ipsam, fuga necessitatibus!</p>

        </div>

        <div className="w-1/3 links-section">
            <h3 className='font-semibold text-center text-white font-subfont'>Quick Links</h3>
            <div className="flex flex-col text-sm text-center text-white all-links font-subfont">
                <Link to='/' className='mt-4 hover:text-blue-300'>Home</Link>
                <Link to='/about' className='mt-4 hover:text-blue-300'>About</Link>
                <Link to='/gallery' className='mt-4 hover:text-blue-300'>Gallery</Link>
                <Link to='/contact' className='mt-4 hover:text-blue-300'>Contact us</Link>
            </div>
        </div>

        <div className="w-1/3 follow-section">
            <h3 className='font-semibold text-center text-white font-subfont'>Follow Us</h3>
            <div className="flex flex-row justify-center gap-3 mt-3 socials">
                
            <Link to='https://www.facebook.com'>
                <FaFacebook className='w-6 h-6 text-[#4267B2]' />
                </Link>
                <Link to='https://www.twitter.com'>
                <FaTwitter className='w-6 h-6 text-[#1DA1F2]' />
                </Link>
                <Link to='https://www.instagram.com'>
                <FaInstagram className='w-6 h-6 text-[#FCAF45]' />
                </Link>
                <Link to='https://www.youtube.com'>
                <FaYoutube className='w-6 h-6 text-red-500' />
                </Link>
                <Link to='https://www.linkedin.com'>
                <FaLinkedin className='w-6 h-6 text-[#0077B5]' />
            </Link>

            </div>
            <div className="flex flex-row items-center justify-center p-5 mt-5 news-section">
                <input type="email" name="email" id="email" placeholder='Enter your email' className='p-2 font-subfont'/>
                <button className='p-2 text-white bg-blue-500 font-subfont'>Subscribe</button>
            </div>
        </div>
        </div>
        <hr/>
        <div className="flex flex-row items-center justify-center rights-section">
            <p className='text-white text-[9px] mt-2'>Copyright © 2024 Travel'360. All Rights Reserved</p>
        </div>

    </div>
  )
}

export default Footer