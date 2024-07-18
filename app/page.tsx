'use client'

import { useEffect, useState } from 'react';
import About from '@/Components/About';
import Accomplishments from '@/Components/Accomplishments';
import Brands from '@/Components/Brands';
import Context from '@/Components/Context';
import Homepage from '@/Components/Homepage';
import ImageSlider from '@/Components/ImageSlider';
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer';
import Contact from '@/Components/Contact';
import Store from '@/Components/Store';

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <div>
      <main className="background h-screen md:h-[1000px] lg:h-screen">
        <Navbar />
        <Homepage />
      </main>
      <Context />
      {/* <About /> */}
      <ImageSlider />
      {/* <Store /> */}
      <Brands />
      <Accomplishments />
      <Contact />
      <Footer />

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-[#064747] text-white shadow-lg slide-in-icon"
        >
          <img src="https://img.icons8.com/?size=100&id=csz4StEyV1mA&format=png&color=FFFFFF" alt="top" className='w-8' />
        </button>
      )}
    </div >
  );
}