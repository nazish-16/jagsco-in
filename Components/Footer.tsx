import React from 'react';
import icon from '../app/images/icon.png';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    const getCurrentYear = () => new Date().getFullYear();

    return (
        <div className="bg-[#ececec]">
            <div className='flex flex-col md:flex-row pt-0 pb-0 pr-20 pl-20 mt-10 items-center justify-center xl:justify-between'>
                <div>
                    <div className='items-center xl:items-start flex flex-col justify-center'>
                        <a href="/">
                            <Image src={icon} alt="icon" className='w-[200px] relative top-8' />
                        </a>
                        <p className='pt-3 xl:text-start max-w-lg xl:max-w-lg text-center relative bottom-24'>
                            "Transform your space into a sanctuary with Jagsco's elegant - <br />and stylish home decor where every detail tells a story."
                        </p>
                    </div>
                    <div>
                        <div className='flex flex-row pt-5 items-center justify-center xl:items-start xl:justify-start relative bottom-24'>
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
                </div>
                <div className='hidden xl:flex flex-col items-center justify-center p-5 xl:p-0'>
                    <h1 className='text-2xl font-medium text-[#064747]'>Interiors</h1>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Cabinet</Link>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Cupboards</Link>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Farmhouse</Link>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Industrial</Link>
                </div>
                <div className='hidden xl:flex flex-col items-center justify-center p-5 xl:p-0'>
                    <h1 className='text-2xl font-medium text-[#064747]'>Modular</h1>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Furniture</Link>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Homes</Link>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Office</Link>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Closets</Link>
                </div>
                <div className='hidden xl:flex flex-col items-center justify-center p-5 xl:p-0'>
                    <h1 className='text-2xl font-medium text-[#064747]'>Appliances</h1>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Kitchen</Link>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Laundry</Link>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Heating</Link>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Cleaning</Link>
                </div>
                <div className='hidden xl:flex flex-col items-center justify-center p-5 xl:p-0'>
                    <h1 className='text-2xl font-medium text-[#064747]'>Wardrobe</h1>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Built-in </Link>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Sliding Door</Link>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Mirrored </Link>
                    <Link href="/" className='mt-4 transition ease hover:underline hover:underline-offset-1'>Freestanding</Link>
                </div>
            </div>
            <div className='bg-[#dcdcdc] py-4 text-center'>
                <p className='text-sm text-[#064747]'>
                    &copy; {getCurrentYear()} Jagsco Interiors. All rights reserved.
                </p>
            </div>
        </div>
    );
}

export default Footer;
