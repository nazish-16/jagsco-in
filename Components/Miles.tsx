import React from 'react'

const Miles = () => {
    return (
        <div className='bg flex flex-col items-center justify-between p-10'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-4xl text-[#022A29] font-medium tracking-tighter m-4'>Milestones</h1>
                <p className='max-w-3xl text-center text-md text-[#022A29] m-2 font-medium'>Leading the way in interior designing, Jagsco transforms ordinary spaces into extraordinary havens with a touch of elegance and innovation.</p>
            </div>
            <div className='grid grid-cols-4 p-20'>
                <div className='flex flex-row items-center justify-center'>
                    <img src="https://img.icons8.com/?size=100&id=2797&format=png&color=022A29" className='m-2 w-20' />
                    <div className='m-2'>
                        <h1 className='font-bold text-[#022A29]'>100</h1>
                        <h1 className='text-[#022A29] text-xl font-medium'>Projects completed</h1>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <img src="https://img.icons8.com/?size=100&id=22118&format=png&color=022A29" className='m-2 w-20' />
                    <div className='m-2'>
                        <h1 className='font-bold text-[#022A29]'>750</h1>
                        <h1 className='text-[#022A29] text-xl font-medium'>Satisfied clients</h1>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <img src="https://img.icons8.com/?size=100&id=10994&format=png&color=022A29" className='m-2 w-20' />
                    <div className='m-2'>
                        <h1 className='font-bold text-[#022A29]'>35</h1>
                        <h1 className='text-[#022A29] text-xl font-medium'>Total Brands</h1>
                    </div>
                </div>
                <div className='flex flex-row items-center justify-center'>
                    <img src="https://img.icons8.com/?size=100&id=85620&format=png&color=022A29" className='m-2 w-20' />
                    <div className='m-2'>
                        <h1 className='font-bold text-[#022A29]'>20</h1>
                        <h1 className='text-[#022A29] text-xl font-medium'>Awards</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Miles