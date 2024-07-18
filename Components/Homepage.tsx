import React, { useState, useEffect } from 'react';

const Homepage = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "https://www.jagsco.in/wp-content/uploads/2017/02/hettich-modular-kitchen-6-1.jpg",
        "https://www.jagsco.in/wp-content/uploads/2017/02/hettich-modular-kitchen-5-1.jpg",
        "https://www.jagsco.in/wp-content/uploads/2017/02/hettich-modular-kitchen-4-1.jpg",
        "https://www.jagsco.in/wp-content/uploads/2017/02/hettich-modular-kitchen-3-1.jpg",
        "https://www.jagsco.in/wp-content/uploads/2017/02/hettich-modular-kitchen-2-1.jpg"
    ];

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 3000);
        return () => clearInterval(slideInterval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div>
            <div className='flex flex-row items-center justify-center'>
                <section className="text-white py-20 relative top-[140px] sm:top-[180px] left-0 xl:left-20 flex-col flex items-center justify-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center xl:text-start"><span className='text-[#eee]'>Jagsco Interiors</span></h1>
                        <p className='max-w-3xl text-[15px] mb-8 text-center xl:text-start'>Jagsco is your go-to destination for exquisite home decor that blends style and sophistication. We offer a curated selection of elegant furnishings, unique accents, and custom pieces designed to elevate your living spaces.</p>
                        <p className='hidden sm:flex max-w-3xl text-[15px] mb-14 text-center xl:text-start'>From chic modern designs to timeless classics, our collection is crafted to enhance the beauty and functionality of your home. At Jagsco, we believe that every detail matters, and our commitment to quality ensures that each piece adds a touch of luxury and charm to your interior. </p>
                        <div className='flex flex-row items-center justify-center xl:items-start xl:justify-start'>
                            <a href="#context" className="bg-white text-black px-12 py-3 tracking-wider rounded-full font-medium transition duration-300 ease-in-out hover:bg-opacity-70 mr-5">Explore</a>
                            <a href="#contact" className="bg-white text-black px-12 py-3 tracking-wider rounded-full font-medium transition duration-300 ease-in-out hover:bg-opacity-70 mr-5">Contact</a>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="hidden relative w-[500px] 2xl:w-[650px] mx-auto xl:flex items-center justify-center top-[180px] left-[100px] 2xl:left-[140px] mr-36">
                        <div className="slider">
                            <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                {slides.map((slide, index) => (
                                    <div className="slide" key={index}>
                                        <img src={slide} alt={`Slide ${index + 1}`} className='rounded-xl' />
                                    </div>
                                ))}
                            </div>
                            <div className="navigation">
                                <button onClick={prevSlide}>❮</button>
                                <button onClick={nextSlide}>❯</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <section className='flex flex-col justify-center items-center relative top-56 sm:top-64'>
                <h1 className='text-white animate-pulse'>Scroll down</h1>
                <img src="https://img.icons8.com/?size=100&id=85123&format=png&color=FFFFFF" alt="scroll-down" className='w-8 animate-bounce' />
            </section>
        </div>
    );
};

export default Homepage;
