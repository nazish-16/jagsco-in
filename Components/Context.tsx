import React from 'react'
import Image from 'next/image'
import type1 from '../app/images/type1.webp'
import type2 from '../app/images/type2.webp'
import type3 from '../app/images/type3.webp'
import typpe4 from '../app/images/typpe4.webp'
import type5 from '../app/images/type5.webp'
import type6 from '../app/images/type6.webp'

const Context = () => {
    return (
        <div id='context' className='items-center justify-center flex'>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6'>
                <div className='flex flex-col p-10 items-center justify-center rounded-lg m-1 transition'>
                    <Image src={type1} alt="" className='w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] rounded-full hover:scale-105 transition ease-in-out duration-200 cursor-pointer' />
                    <h1 className='p-4 text-2xl font-normal tracking-wide text-center'>Interior Designing</h1>
                    <p className='max-w-lg text-center text-md text-gray-700'>Jagsco Marble specializes in providing high-quality marble for various interior design needs.</p>
                </div>
                <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                    <Image src={type2} alt="#" className='w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] rounded-full hover:scale-105 transition ease-in-out duration-200 cursor-pointer' />
                    <h1 className='p-4 text-2xl font-normal tracking-wide text-center'>Modular Kitchens</h1>
                    <p className='max-w-lg text-center text-md text-gray-700'>Our modular kitchen designs emphasize elegance, practicality, and innovation. By integrating high-quality marble.</p>
                </div>
                <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                    <Image src={type3} alt="#" className='w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] rounded-full hover:scale-105 transition ease-in-out duration-200 cursor-pointer' />
                    <h1 className='p-4 text-2xl font-normal tracking-wide text-center'>Wardrobe</h1>
                    <p className='max-w-lg text-center text-md text-gray-700'>Our modular wardrobe designs focus on elegance, functionality, and customization. By integrating premium marble.</p>
                </div>
                <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                    <Image src={typpe4} alt="#" className='w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] rounded-full hover:scale-105 transition ease-in-out duration-200 cursor-pointer' />
                    <h1 className='p-4 text-2xl font-normal tracking-wide text-center'>Appliances</h1>
                    <p className='max-w-lg text-center text-md text-gray-700  m-1'>Seamlessly incorporating modern appliances such as built-in ovens, refrigerators, dishwashers, and induction cooktops into the kitchen design.</p>
                </div>
                <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                    <Image src={type5} alt="#" className='w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] rounded-full hover:scale-105 transition ease-in-out duration-200 cursor-pointer' />
                    <h1 className='p-4 text-[23px] font-normal tracking-wide text-center'>Accessories</h1>
                    <p className='max-w-lg text-center text-md text-gray-700'>high-quality marble with premium accessories, offering luxurious and functional spaces tailored to your needs.</p>
                </div>
                <div className='flex flex-col p-10 items-center justify-center m-1 transition'>
                    <Image src={type6} alt="#" className='w-[130px] h-[130px] sm:w-[170px] sm:h-[170px] rounded-full hover:scale-105 transition ease-in-out duration-200 cursor-pointer' />
                    <h1 className='p-4 text-[23px] font-normal tracking-wide text-center'>Home Decor</h1>
                    <p className='max-w-lg text-center text-md text-gray-700'>We offer a variety of different types of Luxurious home decor with premium marble accents.</p>
                </div>
            </div>
        </div>
    )
}

export default Context