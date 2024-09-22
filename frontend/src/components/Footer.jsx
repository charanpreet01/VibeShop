import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
        <div>
            <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
                <div>
                    <Link to='/'>
                        <h1 className='text-3xl font-serif mb-5'>VibeShop</h1>
                    </Link>
                    <p className='w-full md:w-2/3 text-gray-600'>
                        VibeShop brings you the latest in fashion and accessories, with a focus on quality and customer satisfaction. Shop with confidence and enjoys a seamless experience with our carefully curated satisfaction.
                    </p>
                </div>

                <div>
                    <p className="text-xl font-medium mb-5">COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About us</Link>
                        <Link to="/collection">Delivery</Link>
                        <Link to="/contact">Privacy Policy</Link>
                    </ul>
                </div>

                <div>
                    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
                    <ul className="flex flex-col gap-1 text-gray-600">
                        <li>+91-987-654-3210</li>
                        <li>contact@vibeshop.com</li>
                    </ul>
                </div>
                
            </div>

            <div className="">
                <hr />
                <p className="py-5 text-sm text-center">
                    Copyright 2024@ vibeshop.com - All Rights Reserved.
                </p>
            </div>
            
        </div>
    )
}

export default Footer