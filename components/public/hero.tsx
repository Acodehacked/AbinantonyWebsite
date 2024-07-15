'use client'
import { useAnimationFrame, useMotionValue, motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { MouseIcon } from 'lucide-react'
import Image from 'next/image'
import React, { CSSProperties, useRef } from 'react'

const Hero = () => {
  const ref1 = useRef(null);
  const { scrollY } = useScroll({
    target: ref1,
    offset: ["0 1", "1 0"]
  });
  const variantstextanimate = {
    'hidden':{
      
    },
    'visible':{

    }
  }
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacity = useTransform(scrollY, [300, 500], [1, 0]);
  return (
    <motion.div ref={ref1} className='min-h-[100vh] bg-slate-100 rounded-bl-[4rem] rounded-br-[4rem] flex relative overflow-hidden'>
      <motion.div style={{y:y2,opacity:opacity}} className='select-none absolute bottom-0 flex justify-center right-0 left-0 items-end top-0  h-[600px] w-[auto] z-[2]'>
        <Image width={1000} height={1000} objectFit='contain' src={'/main.png'} className='z-[10] max-h-[600px] h-full object-contain object-top'  alt='' />
      </motion.div>
      <motion.h1 style={{ y: y1, x: '-50%' }} className='absolute top-[30%] w-full font-bold text-center left-[50%] z-[1] text-[97px]'>App-Web <br />UI/UX Designer - Developer</motion.h1>
      <motion.h1 style={{ y: y1, x: '-50%' }} className='absolute top-[30%] w-full font-bold text-center left-[50%] translate-x-[-50%] text-transparent strok-black z-[3] text-[97px]'>App-Web <br />UI/UX Designer - Developer</motion.h1>
      <h2 className='absolute bottom-[20px] text-[20px] right-0 left-0 disply flex justify-center gap-3 z-[10]'>
        <motion.div style={{y:y1,opacity:opacity}} className='flex animate-bounce bg-white py-2 px-5 rounded-full'>
        Scroll <MouseIcon /> Down 
        </motion.div>
      </h2>
    </motion.div>
  )
}

export default Hero