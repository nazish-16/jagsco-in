"use client";

import { useState } from "react";

const images = [
    "https://www.jagsco.in/wp-content/uploads/2017/02/hettich-modular-kitchen-6-1.jpg",
    "https://www.jagsco.in/wp-content/uploads/2017/02/hettich-modular-kitchen-5-1.jpg",
    "https://www.jagsco.in/wp-content/uploads/2017/02/hettich-modular-kitchen-4-1.jpg",
    "https://www.jagsco.in/wp-content/uploads/2017/02/hettich-modular-kitchen-3-1.jpg",
    "https://www.jagsco.in/wp-content/uploads/2017/02/hettich-modular-kitchen-2-1.jpg",
];

const ImageSlider = () => {
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
        <div className="bg-[#E6E7E8] p-10">
            <div className="relative max-w-7xl mx-auto flex flex-col items-center justify-center w-full" id="projects">
                <h1 className='p-4 text-4xl text-[#454545] font-medium tracking-tighter text-center mb36'>Projects</h1>
                <p className='max-w-5xl text-center text-md text-gray-700 m-6'>Transforming homes with exquisite marble flooring, adding a touch of elegance and luxury to living spaces. Providing high-quality marble countertops for kitchens and bathrooms, ensuring durability and aesthetic appeal.</p>
                <div className="flex items-center justify-center overflow-hidden">
                    <button
                        onClick={prevSlide}
                        className="absolute left-0 top-[460px] sm:top-[360px] transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10"
                    >
                        &lt;
                    </button>
                    <div className="flex">
                        {currentIndex > 0 && (
                            <img
                                src={images[currentIndex - 1]}
                                alt={`Slide ${currentIndex - 1}`}
                                className="w-[500px] object-cover m-10"
                            />
                        )}
                        <img
                            src={images[currentIndex]}
                            alt={`Slide ${currentIndex}`}
                            className="w-[500px] object-cover m-10"
                        />
                        {currentIndex < images.length - 1 && (
                            <img
                                src={images[currentIndex + 1]}
                                alt={`Slide ${currentIndex + 1}`}
                                className="w-[500px] object-cover m-10"
                            />
                        )}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="absolute right-0 top-[460px] sm:top-[360px] transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 z-10"
                    >
                        &gt;
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ImageSlider;
