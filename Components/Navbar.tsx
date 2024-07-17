'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon from '../app/images/icon.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <div className='bg-black h-10 justify-center items-center flex p-7'>
                <h1 className='text-white tracking-widest'> <span className='font-light'>Experience 📦</span> <span className='font-semibold'>Jagsco Interiors</span></h1>
            </div>
            <div className='hidden lg:flex flex-row items-center justify-between p-1'>
                <div className='flex flex-row items-center justify-center'>
                    <Link href="#">
                        <img src="https://img.icons8.com/?size=100&id=60440&format=png&color=FFFFFF" alt="" className='w-7 m-1 hover:translate-y-[-2px] transition ease duration-200' />
                    </Link>
                    <Link href="#">
                        <img src="https://img.icons8.com/?size=100&id=32309&format=png&color=FFFFFF" alt="" className='w-7 m-1 hover:translate-y-[-2px] transition ease duration-200' />
                    </Link>
                    <Link href="#">
                        <img src="https://img.icons8.com/?size=100&id=16733&format=png&color=FFFFFF" alt="" className='w-7 m-1 hover:translate-y-[-2px] transition ease duration-200' />
                    </Link>
                </div>
                <div className='flex flex-row'>
                    <ul className='flex p-3'>
                        <li><Link href="#" className='m-5 text-white hover:text-opacity-60 transition duration-300 ease-in-out'>Home</Link></li>
                        <li><Link href="#about" className='m-5 text-white hover:text-opacity-60 transition duration-300 ease-in-out'>About us</Link></li>
                        <li><Link href="#context" className='m-5 text-white hover:text-opacity-60 transition duration-300 ease-in-out'>Services</Link></li>
                        <li><Link href="#projects" className='m-5 text-white hover:text-opacity-60 transition duration-300 ease-in-out'>Projects</Link></li>
                        <li><Link href="#brands" className='m-5 text-white hover:text-opacity-60 transition duration-300 ease-in-out'>Brands</Link></li>
                        <li><Link href="#contact" className='m-5 text-white hover:text-opacity-60 transition duration-300 ease-in-out'>Contact us</Link></li>
                    </ul>
                </div>
                <div className='hidden xl:flex'>
                    <a href="#contact" className="bg-white text-black px-4 py-1 rounded-full font-medium transition duration-300 ease-in-out bg-opacity-70 mr-5 hover:bg-opacity-100">Contact</a>
                </div>
            </div>
            <hr className='w-[100%] hidden md:flex ' />
            <nav className={`relative top-0 left-0 w-full z-50 opacity-100 transition-colors duration-300`} id='home'>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <a href="#">
                                <Image src={icon} alt="icon" width={30} height={30} />
                            </a>
                            <div className="ml-2 md:block">
                                <a className="text-white text-xl font-bold" href="#">Jagsco Interiors</a>
                            </div>
                        </div>
                        <div className="hidden xl:flex md:ml-6">
                            <ul className="flex space-x-4">
                                <li>
                                    <Link href="#" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out m-4">Furnishing</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out m-4">Modules</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out m-4">Wardrobes</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out m-4">Home Decor</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out m-4">Appliances</Link>
                                </li>
                                <li>
                                    <Link href="#" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out m-5">Accessories</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="xl:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-white focus:outline-none"
                            >
                                <img src="https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF" alt="logo" width={20} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className={`xl:hidden bg-black bg-opacity-90 fixed inset-0 z-50 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <div className="flex justify-end h-16 items-center px-4">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            <img src="https://img.icons8.com/?size=100&id=ZV8D2YZ6852I&format=png&color=FFFFFF" width={30} />
                        </button>
                    </div>
                    <div className="flex flex-col items-center justify-center h-full">
                        <ul className="flex flex-col items-center space-y-10 justify-center">
                            <li className="animate-slide-in">
                                <Link href="#" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out">Furnishing</Link>
                            </li>
                            <li className="animate-slide-in">
                                <Link href="#" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out">Modules</Link>
                            </li>
                            <li className="animate-slide-in">
                                <Link href="#" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out">Home Decor</Link>
                            </li>
                            <li className="animate-slide-in">
                                <Link href="#" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out">Wardrobes</Link>
                            </li>
                            <li className="animate-slide-in">
                                <Link href="#" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out">Appliances</Link>
                            </li>
                            <li className="animate-slide-in">
                                <Link href="#" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out">Accessories</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
