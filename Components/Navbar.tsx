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
        <nav className={`relative top-0 left-0 w-full z-50 opacity-100 transition-colors duration-300`} id='home'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <a href="#">
                            <Image src={icon} alt="icon" width={30} height={30} />
                        </a>
                        <div className="ml-2 md:block">
                            <a className="text-white text-xl font-bold underline underline-offset-1" href="#">Jagsco Interiors</a>
                        </div>
                    </div>
                    <div className="hidden lg:flex md:ml-6">
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="#home" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out m-5">Home</Link>
                            </li>
                            <li>
                                <Link href="#context" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out m-5">Services</Link>
                            </li>
                            <li>
                                <Link href="#company" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out m-5">About Us</Link>
                            </li>
                            <li>
                                <Link href="#projects" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out m-5">Projects</Link>
                            </li>
                            <li>
                                <Link href="#brands" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out m-5">Brands</Link>
                            </li>
                            <li>
                                <Link href="#contact" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out m-5">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            <img src="https://img.icons8.com/?size=100&id=8113&format=png&color=FFFFFF" alt="logo" width={20} />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`lg:hidden bg-black bg-opacity-90 fixed inset-0 z-50 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
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
                            <Link href="#home" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out">Home</Link>
                        </li>
                        <li className="animate-slide-in">
                            <Link href="#context" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out">Services</Link>
                        </li>
                        <li className="animate-slide-in">
                            <Link href="#company" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out">About Us</Link>
                        </li>
                        <li className="animate-slide-in">
                            <Link href="#projects" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out">Projects</Link>
                        </li>
                        <li className="animate-slide-in">
                            <Link href="#brands" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out">Brands</Link>
                        </li>
                        <li className="animate-slide-in">
                            <Link href="#contact" className="text-white hover:text-opacity-60 transition duration-300 ease-in-out">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
