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
    'hidden': {

    },
    'visible': {

    }
  }
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, 100]);
  const opacity = useTransform(scrollY, [300, 500], [1, 0]);
  return (
    <motion.div ref={ref1} className='min-h-[100vh] bg-zinc-900/50 rounded-bl-[4rem] rounded-br-[4rem] flex relative overflow-hidden'>

      <motion.div style={{ y: y2, opacity: opacity }} className='select-none absolute bottom-0 flex justify-center right-0 left-0 items-end h-[600px] w-[auto] z-[1]'>
        <div className='w-[500px] relative bottom-0 h-[500px] rounded-full bg-blue-600 opacity-55 blur-[80px] mb-[-300px]'>
        </div>
      </motion.div>
      <motion.div style={{ y: y2, opacity: opacity }} className='select-none absolute bottom-0 flex justify-center right-0 left-0 items-end  h-[600px] w-[auto] z-[2] opacity-80'>
        <Image width={1000} height={1000} objectFit='contain' src={'/main.png'} className='z-[10] opacity-60 max-h-[600px] h-full object-contain object-top' alt='' />
      </motion.div>
      <motion.h1 style={{ y: y1, x: '-50%' }} className='absolute top-[30%] w-full font-regular drop-shadow-lg shadow-white text-center text-white left-[50%] z-[3] title-text  text-[97px] glow-text'>App-Web <br />UI/UX Designer - Developer</motion.h1>
      <h2 className='absolute bottom-[20px] text-[20px] right-0 left-0 disply flex justify-center gap-3 z-[10]'>
        <motion.div style={{ y: y1, opacity: opacity }} className='flex animate-bounce bg-white py-2 px-5 rounded-full text-black'>
          Scroll <MouseIcon /> Down
        </motion.div>
      </h2>
    </motion.div>
  )
}

export default Hero