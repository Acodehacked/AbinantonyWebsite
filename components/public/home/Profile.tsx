import Image from 'next/image'
import React from 'react'

const Profile = () => {
    return (
        <section className="min-h-screen  mt-[30px] bg-black px-2  w-full max-w-screen-2xl mx-auto">
            <div className='w-full text-start items-start max-w-screen-lg mx-auto mt-[30px] flex flex-col'>
                <span className='bg-white/10 text-white w-auto font-light text-[12px] tracking-wider px-3 py-1 rounded-sm mb-1'>projects</span>
                <h1 className='text-white mb-6 text-[40px] '>My Recent Works</h1>
            </div>
            <div className='flex w-full relative justify-center'>
                <Image className='object-cover object-top w-full '  alt='' src={'/assets/canopywork.jpg'} width={2000} height={2000}></Image>
            </div>
            <div className='flex justify-center items-center p-3 flex-col'>
                <span className='font-extralight tracking-widest'>-  Canopy weddings - Events  -</span>
            </div>
        </section>
    )
}

export default Profile