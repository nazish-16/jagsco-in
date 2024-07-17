'use client'

import React from 'react';
import { useState } from "react";

const images = [
    "https://images.pexels.com/photos/2117938/pexels-photo-2117938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2341290/pexels-photo-2341290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/8746906/pexels-photo-8746906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2117937/pexels-photo-2117937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/866351/pexels-photo-866351.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
const Homepage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };
    return (
        <div>
            <div className='flex flex-row items-center justify-center'>
                <section className="text-white py-20 relative top-[130px] sm:top-[80px] left-0 lg:left-[40px] flex-col flex items-center justify-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center xl:text-start"><span className='text-[#eee]'>Jagsco Interiors</span></h1>
                        <p className='max-w-3xl text-[15px] mb-8 text-center xl:text-start'>Jagsco Marble is a premier provider of high-quality marble for residential and commercial projects. We pride ourselves on offering an extensive selection of elegant and durable marble to elevate the aesthetics of any space.</p>
                        <p className='hidden lg:flex max-w-3xl text-[15px] mb-14 text-center xl:text-start'>Our products are sourced from the finest quarries, ensuring top-notch quality and timeless beauty. Whether you're renovating a home, designing a luxurious office, or creating a stunning commercial environment, Jagsco Marble delivers exceptional craftsmanship and unparalleled customer service.</p>
                        <div className='flex flex-row items-center justify-center xl:items-start xl:justify-start'>
                            <a href="#context" className="bg-white text-black px-12 py-3 tracking-wider rounded-full font-medium transition duration-300 ease-in-out hover:bg-opacity-70 mr-5">Explore</a>
                            <a href="#context" className="bg-white text-black px-12 py-3 tracking-wider rounded-full font-medium transition duration-300 ease-in-out hover:bg-opacity-70 mr-5">Shop</a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="hidden relative w-full mx-auto xl:flex items-center justify-center top-[110px] left-[50px] mr-36">
                        <div className="flex items-center justify-center">
                            <img src="https://images.pexels.com/photos/2117938/pexels-photo-2117938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="homepage-bgs" width={440} className='relative left-20 bottom-20 rounded-lg hover:scale-110 transition-transform ease-in-out duration-100' />
                            <img src="https://images.pexels.com/photos/8746906/pexels-photo-8746906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="homepage-bgs" width={300} className='relative right-20 top-6 rounded-lg hover:scale-110 transition-transform ease-in-out duration-100' />
                        </div>
                    </div>
                </section>
            </div>
            <section className='flex flex-col justify-center items-center relative top-64 sm:top-36'>
                <h1 className='text-white animate-pulse'>Scroll down</h1>
                <img src="https://img.icons8.com/?size=100&id=85123&format=png&color=FFFFFF" alt="scroll-down" className='w-8 animate-bounce' />
            </section>
        </div>
    );
};

export default Homepage;
