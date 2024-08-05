'use client'

import { useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Brands from '@/Components/Brands';
import Context from '@/Components/Context';
import Homepage from '@/Components/Homepage';
import ImageSlider from '@/Components/ImageSlider';
import Navbar from '@/Components/Navbar';
import Footer from '@/Components/Footer';
import Contact from '@/Components/Contact';
import Store from '@/Components/Store';

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

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

  useEffect(() => {
    const animated = sessionStorage.getItem('hasAnimated');
    if (animated === 'true') {
      setHasAnimated(true);
    } else {
      sessionStorage.setItem('hasAnimated', 'true');
      setHasAnimated(true);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const slideInFromBottom = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const slideInFromTop = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const zoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  const MotionComponent = ({ children, variants }: { children: ReactNode, variants: any }) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const shouldAnimate = hasAnimated && inView;

    return (
      <motion.div
        ref={ref}
        initial="hidden"
        animate={shouldAnimate ? "visible" : "hidden"}
        variants={variants}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div>
      <main className="background h-screen md:h-[1000px] lg:h-screen">
        <Navbar />
        <Homepage />
      </main>
      <MotionComponent variants={zoomIn}>
        <Context />
      </MotionComponent>
      <MotionComponent variants={zoomIn}>
        <ImageSlider />
      </MotionComponent>
      <MotionComponent variants={zoomIn}>
        <Brands />
      </MotionComponent>
      <MotionComponent variants={zoomIn}>
        <Contact />
      </MotionComponent>
      <MotionComponent variants={slideInFromBottom}>
        <Footer />
      </MotionComponent>

      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full bg-[#064747] text-white shadow-lg slide-in-icon"
        >
          <img src="https://img.icons8.com/?size=100&id=csz4StEyV1mA&format=png&color=FFFFFF" alt="top" className='w-8' />
        </button>
      )}
    </div>
  );
}
