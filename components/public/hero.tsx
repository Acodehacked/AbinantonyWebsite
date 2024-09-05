'use client'
import { useAnimationFrame, useMotionValue, motion, useScroll, useSpring, useTransform } from 'framer-motion'
import { MouseIcon } from 'lucide-react'
import Image from 'next/image'
import React, { CSSProperties, useRef } from 'react'
import { OrbitingCirclesDemo } from '../home/OrbitingCircles'
import { MeteorDemo } from '../home/MeteorsHero'
import Meteors from '../magicui/meteors'

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
      <motion.div style={{ y: y2, opacity: opacity }} className='select-none absolute bottom-0 flex justify-center right-0 left-0 items-end  h-[600px] w-[auto] z-[2] '>
        <Image width={1000} height={1000} objectFit='contain' src={'/main.png'} className='z-[10] opacity-100 max-h-[600px] h-full object-contain brightness-90 object-bottom' alt='' />
      </motion.div>
      <div className='z-[0] absolute top-0   bottom-0 left-0 right-0'>
        {/* <OrbitingCirclesDemo /> */}
        {/* <MeteorDemo /> */}
        <div className="relative flex h-full w-full flex-col items-center sm:justify-center
        justify-start pt-[100px] overflow-hidden rounded-lg border bg-background md:shadow-xl">
          <Meteors number={10} />
          <span className="pointer-events-none bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-4xl md:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
            APP WEB  -  UI / UX<br />DESIGNER  -  DEVELOPER
          </span>
        </div>
      </div>
      {/* <motion.h1 style={{ y: y1, x: '-50%' }} className='absolute top-[30%] font-regular drop-shadow-lg shadow-white text-center text-white left-[50%] w-[1400px] z-[3] title-text  text-[100px] glow-text'>APP WEB  -  UI/UX<br />DESIGNER  -  DEVELOPER</motion.h1> */}
      <h2 className='absolute bottom-[20px] text-[20px] right-0 left-0 disply flex justify-center gap-3 z-[10]'>
        <motion.div style={{ y: y1, opacity: opacity }} className='flex animate-bounce bg-white py-2 px-5 rounded-full text-black'>
          Scroll <MouseIcon /> Down
        </motion.div>
      </h2>
    </motion.div>
  )
}

export default Hero