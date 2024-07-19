import Navbar from '@/Components/Navbar'
import React from 'react'

const page = () => {
    return (
        <div className='background-new h-96 md:h-80'>
            <Navbar />
            <div className='flex flex-col md:flex-row items-center justify-center p-16 md:p-28'>
                <div>
                    <img src='https://img.icons8.com/?size=100&id=8083&format=png&color=ffffff' alt="#" className='w-28 h-28 md:w-36 md:h-36 mr-0 md:mr-20 lg:mr-10' />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-3xl sm:text-4xl text-[#cfcfcf] font-medium tracking-tighter text-center m-5 md:text-start'>Furnishing</h1>
                    <p className='max-w-lg text-white text-center md:text-start font-light'>Our meticulously crafted kitchen modules are designed to bring both elegance and functionality to your culinary space.</p>
                </div>
            </div>
        </div>
    )
}

export default page