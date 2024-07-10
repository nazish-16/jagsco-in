import React from 'react';
import Image from 'next/image';
import icon from '../app/images/icon.png';

const Homepage = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <section className="text-white py-20 relative top-[200px] xl:top-[240px]">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-3xl md:text-5xl font-bold text-center mb-8">Welcome to <span className='text-[#eee] underline underline-offset-1'>Jagsco Interiors</span></h1>
                        <p className="text-md md:text-lg text-center mb-8 max-w-3xl xl:max-w-5xl">Jagsco Interiors, your premier destination for exquisite marble and stone solutions. At Jagsco, we specialize in sourcing, crafting, and delivering the finest quality marble and stone products to transform your spaces into timeless masterpieces.</p>
                        <div>
                            <a href="#context" className="bg-white text-black px-10 py-3 rounded-lg font-medium transition duration-300 ease-in-out hover:bg-opacity-70 m-4">Explore</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className='relative bottom-[-280px] sm:bottom-[-430px] items-center justify-center flex flex-col animate-pulse'>
                <h1 className='text-white text-md xl:text-lg'>Scroll down</h1>
                <img src="https://img.icons8.com/?size=100&id=85018&format=png&color=FFFFFF" alt="down-arrow" width={30} className='top-1 relative animate-bounce' />
            </section>
        </div>
    );
};

export default Homepage;
