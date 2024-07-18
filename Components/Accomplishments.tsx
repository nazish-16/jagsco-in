import React from 'react'
import world from '../app/images/world.png'
import Image from 'next/image'

const Accomplishments = () => {
    return (
        <div className='flex flex-col items-center justify-center mb-10'>
            <div>
                <h1 className='p-4 text-4xl text-[#454545] font-medium tracking-tighter text-center mb-3'>Milestones</h1>
                <p className='max-w-3xl text-center text-md text-gray-700 m-6'>Leading the way in interior designing. Since our inception, we have focused on delivering the highest quality marble products and exceptional customer service, and our dedication has yielded remarkable results.Each milestone represents our unwavering commitment to quality, innovation, and customer satisfaction.</p>
            </div>
            <div className='flex flex-row items-center justify-center'>
                <div>
                    <Image src={world} alt="" className='w-[200px] cursor-pointer' />
                </div>
                <div className='grid grid-cols-2 lg:grid-cols-2 justify-center items-center m-10'>
                    <div className='flex flex-row justify-center items-center p-6'>
                        <div className='h-16 w-1 bg-[#064747] rounded'></div>
                        <img src="https://img.icons8.com/?size=100&id=2797&format=png&color=064747" alt="projects" className='w-[40px] m-2' />
                        <h1 className='text-md'><strong>1000+</strong> <br /> Projects Completed</h1>
                    </div>
                    <div className='flex flex-row justify-center items-center p-6'>
                        <div className='h-16 w-1 bg-[#064747] rounded'></div>
                        <img src="https://img.icons8.com/?size=100&id=U2FkwMbhMlLj&format=png&color=064747" alt="clients" className='w-[40px] m-2' />
                        <h1 className='text-md'><strong>750+</strong> <br /> Satisfied Clients</h1>
                    </div>
                    <div className='flex flex-row justify-center items-center p-6'>
                        <div className='h-16 w-1 bg-[#064747] rounded'></div>
                        <img src="https://img.icons8.com/?size=100&id=59800&format=png&color=064747" alt="brands" className='w-[40px] m-2' />
                        <h1 className='text-xl'><strong>35+</strong> <br /> Total Brands</h1>
                    </div>
                    <div className='flex flex-row justify-center items-center p-6'>
                        <div className='h-16 w-1 bg-[#064747] rounded'></div>
                        <img src="https://img.icons8.com/?size=100&id=NIbnEMrBeW9K&format=png&color=064747" alt="awards" className='w-[40px] m-2' />
                        <h1 className='text-xl'><strong>18+</strong><br />  Awards</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accomplishments