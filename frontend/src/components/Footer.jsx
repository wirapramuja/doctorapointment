/* eslint-disable no-unused-vars */
import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            {/* Left Section */}
            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                  <p className='w-full md:w-2/3 text-gray-600 leading-6'>Welcome to Prescripto, your trusted platform for easy and convenient doctor appointments. Find the right specialist, book appointments online, and manage your healthcare needs all in one place. Our mission is to simplify healthcare access and ensure you get the care you deserve, whenever you need it.</p>
            </div>
            {/* Center Section */}
            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Home</li>
                    <li>About US</li>
                    <li>Contact US</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            {/* Right Section */}
            <div>
                  <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                  <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>wiraapramuja44@gmail.com</li>
                </ul>
            </div>
        </div>
        {/* Copyright Text */}
        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyrihgt 2024@. Prescripto - All Right Reserved.</p>

        </div>

    </div>
  )
}

export default Footer