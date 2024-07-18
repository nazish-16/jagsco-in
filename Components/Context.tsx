import React from 'react'
import Image from 'next/image'
import type1 from '../app/images/type1.webp'
import type2 from '../app/images/type2.webp'
import type3 from '../app/images/type3.webp'
import typpe4 from '../app/images/typpe4.webp'
import type5 from '../app/images/type5.webp'
import type6 from '../app/images/type6.webp'
import Link from 'next/link'

const Context = () => {
    return (
        <div id='context' className='items-center justify-center flex flex-col mt-10'>
            <h1 className='text-4xl text-[#454545] font-medium tracking-tighter'>Our Services</h1>
            <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10 sm:gap-10 lg:gap-x-32 mt-16 mb-10'>
                <div className='flex flex-col items-center justify-center rounded-lg m-1 transition'>
                    <Image src={type1} alt="" className='w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] hover:scale-105 rounded-full transition ease-in-out duration-200 cursor-pointer' />
                    <Link href="#" className='pl-2 pr-2 pt-1 pb-1 mt-4 text-xl lg:text-2xl font-medium text-center text-[#064747]'>Furnishing</Link>
                </div>
                <div className='flex flex-col items-center justify-center m-1 transition'>
                    <Image src={type2} alt="#" className='w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] hover:scale-105 rounded-full transition ease-in-out duration-200 cursor-pointer' />
                    <Link href="#" className='pl-2 pr-2 pt-1 pb-1 mt-4 text-xl lg:text-2xl font-medium text-center text-[#064747]'>Modules</Link>
                </div>
                <div className='flex flex-col items-center justify-center m-1 transition'>
                    <Image src={type3} alt="#" className='w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] hover:scale-105 rounded-full transition ease-in-out duration-200 cursor-pointer' />
                    <Link href="#" className='pl-2 pr-2 pt-1 pb-1 mt-4 text-xl lg:text-2xl font-medium text-center text-[#064747]'>Wardrobes</Link>
                </div>
                <div className='flex flex-col items-center justify-center m-1 transition'>
                    <Image src={typpe4} alt="#" className='w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] hover:scale-105 rounded-full transition ease-in-out duration-200 cursor-pointer' />
                    <Link href="#" className='pl-2 pr-2 pt-1 pb-1 mt-4 text-xl lg:text-2xl font-medium text-center text-[#064747]'>Appliances</Link>
                </div>
                <div className='flex flex-col items-center justify-center m-1 transition'>
                    <Image src={type5} alt="#" className='w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] hover:scale-105 rounded-full transition ease-in-out duration-200 cursor-pointer' />
                    <Link href="#" className='pl-2 pr-2 pt-1 pb-1 mt-4 text-xl lg:text-2xl font-medium text-center text-[#064747]'>Accessories</Link>
                </div>
                <div className='flex flex-col items-center justify-center m-1 transition'>
                    <Image src={type6} alt="#" className='w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] hover:scale-105 rounded-full transition ease-in-out duration-200 cursor-pointer' />
                    <Link href="#" className='pl-2 pr-2 pt-1 pb-1 mt-4 text-xl lg:text-2xl font-medium text-center text-[#064747]'>Home Decor</Link>
                </div>
            </div>
        </div>
    )
}

export default Context