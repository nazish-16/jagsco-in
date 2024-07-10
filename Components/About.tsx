import React from 'react'

const About = () => {
    return (
        <div>
            <div className='flex flex-col xl:flex-row items-center justify-center p-12' id='company'>
                <div className='max-w-4xl text-center'>
                    <h1 className='text-3xl relative bottom-[10px] tracking-tight'>Company Profile</h1>
                    <p className='pt-5 text-gray-700'>Welcome to Jagsco, your premier destination for exquisite marble and stone solutions. At Jagsco, we specialize in sourcing, crafting, and delivering the finest quality marble and stone products to transform your spaces into timeless masterpieces. Jagsco Interiors offer a complete interior design and architectural design service from initial concept and detail design right through to submitting local authority applications, implementation and completion on site.</p>
                    <p className='pt-5 text-gray-700'> <strong>Hameed</strong>, the visionary behind Jagsco Interiors, embodies a passion for interior design that stems from a lifelong appreciation for aesthetics and functionality. With a keen eye for detail and a commitment to quality, Hameed has curated a collection of Interior designing that blend innovation with timeless elegance.</p>
                </div>
                <div className='pt-8 pr-6 pl-6 items-center flex flex-col hover:translate-y-[-4px] transition-transform'>
                    <a href="https://www.instagram.com/">
                        <img src="https://www.canfitpro.com/wp-content/uploads/2020/03/Fudge-Chris-2021.jpg" alt="owner" className='ml-4 rounded-full m-2' width={330} />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About