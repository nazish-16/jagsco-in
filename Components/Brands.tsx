import React from 'react'
import somany from '../app/images/somany.jpg'
import ebco from '../app/images/ebco.jpg'
import enox from '../app/images/enox.jpg'
import hafele from '../app/images/hafele.jpg'
import hettich from '../app/images/hettich.jpg'
import tabinterior from '../app/images/tabinterior.jpg'
import Image from 'next/image'
import Link from 'next/link'

const Brands = () => {
    return (
        <div className='items-center justify-center flex flex-col mt-16' id='brands'>
            <section className='flex flex-col justify-center items-center'>
                <h1 className='p-4 text-3xl font-normal text-center mb-3'>Cooperated brands</h1>
                <p className='max-w-5xl text-center text-md text-gray-700 m-6'>At Jagsco, we pride ourselves on collaborating with some of the most esteemed brands in the marble and stone industry. Our partnerships with leading names such as Somany, Hettich, Haffle and many others with access to a curated selection of premium materials renowned for their quality and elegance.</p>
            </section>
            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  items-center justify-center mb-28'>
                <Link href="https://www.somanyceramics.com/">
                    <Image alt='img' src={somany} width={300} className='m-3 hover:scale-105 transition ease-in-out duration-200' />
                </Link>
                <Link href="https://ebco.in/">
                    <Image alt='img' src={ebco} width={300} className='m-3 hover:scale-105 transition ease-in-out duration-200' />
                </Link>
                <Link href="https://www.enox.in/in/en">
                    <Image alt='img' src={enox} width={300} className='m-3 hover:scale-105 transition ease-in-out duration-200' />
                </Link>
                <Link href="https://www.hafeleindia.com/en/">
                    <Image alt='img' src={hafele} width={300} className='m-3 hover:scale-105 transition ease-in-out duration-200' />
                </Link>
                <Link href="https://web.hettich.com/en-in/home">
                    <Image alt='img' src={hettich} width={300} className='m-3 hover:scale-105 transition ease-in-out duration-200' />
                </Link>
                <Link href="https://www.tabinterior.com/">
                    <Image alt='img' src={tabinterior} width={300} className='m-3 hover:scale-105 transition ease-in-out duration-200' />
                </Link>
            </section>
        </div >
    )
}

export default Brands