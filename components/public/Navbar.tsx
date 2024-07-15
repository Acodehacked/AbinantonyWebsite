import React from 'react'
import Link from 'next/link'
import StaggerHoverText from './ui/StaggerHoverText'

const HomeNavbar = () => {
  return (
    <div className='flex text-[25px] fixed top-0 left-0 p-4
        right-0 items-center z-[10] justify-between w-full max-w-screen-lg mx-auto'>
      <div>
        <h4 className='text-[29px] font-semibold'>Abin Antony Kattady</h4>
      </div>
      <div className='flex text-[24px] items-center gap-5'>
        <StaggerHoverText text='Works' link='#'  />
        <StaggerHoverText text='About-Me' link='#'  />
        <StaggerHoverText text='Contact' link='#'  />
        <button className='bg-orange-600 px-4 py-2 rounded-full text-white'>Hire Me!</button>
      </div>
    </div>
  )
}

export default HomeNavbar