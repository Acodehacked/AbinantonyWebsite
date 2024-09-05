import React from 'react'
import Link from 'next/link'
import 'boxicons/css/boxicons.css'
import StaggerHoverText from './ui/StaggerHoverText'

const HomeNavbar = () => {
  return (
    <div className='flex text-[25px] fixed top-0 sm:top-[10px] left-0 px-4 py-2 
        right-0 items-center z-[10] justify-between bg-black/50 backdrop-blur-md sm:rounded-2xl rounded-none w-full max-w-screen-lg mx-auto'>
      <div>
        <h4 className='sm:text-[29px] text-[20px] font-regular'>Abin Antony Kattady</h4>
      </div>
      <div className='sm:hidden flex'>
        <i className='bx bx-menu-alt-right text-white text-[30px] p-2'></i>
      </div>
      <div className='text-[24px] sm:flex hidden items-center gap-5'>
        <StaggerHoverText text='Works' link='#' />
        <StaggerHoverText text='About-Me' link='#' />
        <StaggerHoverText text='Contact' link='#' />
        <button className='sizedbutton px-4 py-2  text-white'><span>
          Hire Me!</span></button>
      </div>
    </div>
  )
}

export default HomeNavbar