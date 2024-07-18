'use client'

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import icon from '../app/images/icon.png';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <nav className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${scrolled ? 'bg-[#022e2c]' : 'bg-transparent'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <a href="#">
                                <Image src={icon} alt="icon" className='relative top-3 w-[150px] xl:w-[180px]' />
                            </a>
                        </div>
                        <div className="hidden xl:flex md:ml-6 mt-3">
                            <ul className="flex space-x-4">
                                <li>
                                    <Link href="#" className="nav-link text-white hover:text-opacity-60 transition duration-300 ease-in-out m-4">Furnishing</Link>
                                </li>
                                <li>
                                    <Link href="#" className="nav-link text-white hover:text-opacity-60 transition duration-300 ease-in-out m-4">Modules</Link>
                                </li>
                                <li>
                                    <Link href="#" className="nav-link text-white hover:text-opacity-60 transition duration-300 ease-in-out m-4">Wardrobes</Link>
                                </li>
                                <li>
                                    <Link href="#" className="nav-link text-white hover:text-opacity-60 transition duration-300 ease-in-out m-4">Home Decor</Link>
                                </li>
                                <li>
                                    <Link href="#" className="nav-link text-white hover:text-opacity-60 transition duration-300 ease-in-out m-4">Appliances</Link>
                                </li>
                                <li>
                                    <Link href="#" className="nav-link text-white hover:text-opacity-60 transition duration-300 ease-in-out m-5">Accessories</Link>
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
                <div className={`xl:hidden bg-[#022e2c] bg-opacity-90 fixed inset-0 z-50 transition-opacity duration-300 ${menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
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
                                <Link href="#" className="nav-link text-white hover:text-opacity-60 transition duration-300 ease-in-out">Furnishing</Link>
                            </li>
                            <li className="animate-slide-in">
                                <Link href="#" className="nav-link text-white hover:text-opacity-60 transition duration-300 ease-in-out">Modules
                                </Link>
                            </li>
                            <li className="animate-slide-in">
                                <Link href="#" className="nav-link text-white hover:text-opacity-60 transition duration-300 ease-in-out">Home Decor</Link>
                            </li>
                            <li className="animate-slide-in">
                                <Link href="#" className="nav-link text-white hover:text-opacity-60 transition duration-300 ease-in-out">Wardrobes</Link>
                            </li>
                            <li className="animate-slide-in">
                                <Link href="#" className="nav-link text-white hover:text-opacity-60 transition duration-300 ease-in-out">Appliances</Link>
                            </li>
                            <li className="animate-slide-in">
                                <Link href="#" className="nav-link text-white hover:text-opacity-60 transition duration-300 ease-in-out">Accessories</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
