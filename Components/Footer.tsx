import React from 'react'
import Link from 'next/link'
import icon from '../app/images/icon.png';
import Image from 'next/image';

const Footer = () => {
    return (
        <div>
            <div className='flex flex-col md:flex-row p-[100px] mt-10 bg-[#ececec] items-center justify-center lg:justify-between'>
                <div>
                    <div className='items-center lg:items-start flex flex-col justify-center'>
                        <a href="/">
                            <img src="https://img.icons8.com/?size=100&id=2797&format=png&color=000000" width={25} className='pb-4' />
                        </a>
                        <a href="/" className='text-[25px] lg:text-2xl text-center font-medium'>Jagsco Interiors</a>
                        <p className='pt-3 lg:text-start max-w-lg text-center' >"Elevate your space with curated home decor that inspires comfort, style, and personal expression."</p>
                    </div>
                    <div className='flex flex-row pt-5 items-center justify-center lg:items-start lg:justify-start'>
                        <a href="https://www.instagram.com">
                            <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=000000" alt="insta" width={30} className='m-4 hover:translate-y-[-2px] transition-all' />
                        </a>
                        <a href="https://www.facebook.com">
                            <img src="https://img.icons8.com/?size=100&id=118468&format=png&color=000000" alt="fb" width={30} className='m-4 hover:translate-y-[-2px] transition-all' />
                        </a>
                        <a href='https://wa.me/'>
                            <img src="https://img.icons8.com/?size=100&id=16712&format=png&color=000000" alt="whatsapp" width={30} className='m-4 cursor-pointer hover:translate-y-[-2px] transition-all' />
                        </a>
                    </div>
                </div>
                <div className='hidden lg:flex flex-col items-center justify-center p-5 xl:p-0'>
                    <h1 className='text-xl text-center font-medium'>Interiors</h1>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Cabinet</Link>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Cupboards</Link>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Farmhouse</Link>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Industrial</Link>
                </div>
                <div className='hidden lg:flex flex-col items-center justify-center p-5 xl:p-0'>
                    <h1 className='text-xl text-center font-medium'>Modular</h1>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Furniture</Link>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Homes</Link>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Office</Link>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Closets</Link>
                </div>
                <div className='hidden lg:flex flex-col items-center justify-center p-5 xl:p-0'>
                    <h1 className='text-xl text-center font-medium'>Appliances</h1>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Kitchen</Link>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Laundry</Link>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Heating</Link>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Cleaning</Link>
                </div>
                <div className='hidden lg:flex flex-col items-center justify-center p-5 xl:p-0'>
                    <h1 className='text-xl text-center font-medium'>Wardrobe</h1>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Built-in </Link>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Sliding Door</Link>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Mirrored </Link>
                    <Link href="/" className='mt-4 hover:font-medium transition duration-200 ease-in-out'>Freestanding</Link>
                </div>
            </div>
        </div >
    )
}

export default Footer