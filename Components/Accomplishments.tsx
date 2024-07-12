import React from 'react'

const Accomplishments = () => {
    return (
        <div className='flex flex-col items-center justify-center mb-10'>
            <div>
                <h1 className='p-4 text-3xl font-normal text-center mb-3'>Milestones</h1>
                <p className='max-w-5xl text-center text-md text-gray-700 mb-10'>Leading the way in interior designing. Since our inception, we have focused on delivering the highest quality marble products and exceptional customer service, and our dedication has yielded remarkable results.Each milestone represents our unwavering commitment to quality, innovation, and customer satisfaction.</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 justify-center items-center'>
                <div className='flex flex-row justify-center items-center m-6'>
                    <img src="https://img.icons8.com/?size=100&id=2797&format=png&color=000000" alt="projects" className='w-[40px] m-2' />
                    <h1><strong>1000+</strong> Projects Completed</h1>
                </div>
                <div className='flex flex-row justify-center items-center m-6'>
                    <img src="https://img.icons8.com/?size=100&id=n4KePqtA8LZG&format=png&color=000000" alt="clients" className='w-[40px] m-2' />
                    <h1><strong>750+</strong> Satisfied Clients</h1>
                </div>
                <div className='flex flex-row justify-center items-center m-6'>
                    <img src="https://img.icons8.com/?size=100&id=59800&format=png&color=000000" alt="brands" className='w-[40px] m-2' />
                    <h1><strong>35+</strong> Total Brands</h1>
                </div>
                <div className='flex flex-row justify-center items-center m-6'>
                    <img src="https://img.icons8.com/?size=100&id=NIbnEMrBeW9K&format=png&color=000000" alt="awards" className='w-[40px] m-2' />
                    <h1><strong>18+</strong> Awards</h1>
                </div>
                <div className='flex flex-row justify-center items-center m-6'>
                    <img src="https://img.icons8.com/?size=100&id=EOaYvcQnwrsI&format=png&color=000000" alt="awards" className='w-[40px] m-2' />
                    <h1><strong>6+</strong> Collaberated Brands</h1>
                </div>
                <div className='flex flex-row justify-center items-center m-6'>
                    <img src="https://img.icons8.com/?size=100&id=33295&format=png&color=000000" alt="awards" className='w-[40px] m-2' />
                    <h1><strong>2</strong> Outlets</h1>
                </div>
            </div>
        </div>
    )
}

export default Accomplishments