'use client'
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern"
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity"
import { TextReveal } from "@/components/magicui/text-reveal"
import { Carousel } from "@/components/public/ui/card-carousel"
import AnimatedContent from "@/components/ui/AnimatedContent/AnimatedContent"
import BlurText from "@/components/ui/BlurText/BlurText"
import { EVENTS } from "@/constants"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"
import { useScroll, useTransform, motion } from "motion/react"
import Image from "next/image"
import Link from "next/link"
import React, { useRef } from 'react'

const Projects = ({ project }: {
    project: {
        title: string;
        subtitle: string;
        category: string[];
        image: string;
        description: string;
        aim: string;
        challenges: string;
        project_goals: string;
        tech_stack: string[];
        key_features: string[];
        link?:string;
        lessons_learned: string;
    } | null
}) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.4]); // Adjust scale range as needed

    return (
        <>
            <section className="flex flex-col relative justify-center overflow-hidden min-h-[80vh]" ref={ref}>
                <div className="relative z-[2] p-6">
                    <div className="flex items-center flex-wrap justify-center gap-1 mb-0 mt-10">
                        {project?.category.map((i, index) => <div className="md:text-3xl font-p font-medium sm:text-2xl text-xl text-center tracking-wide text-white/20 px-2 py-1 rounded-full " key={index}>
                            #{i}
                        </div>)}
                    </div>
                    <BlurText
                        text={project?.title ?? ''}
                        delay={150}
                        animateBy="words"
                        direction="top"
                        // onAnimationComplete={handleAnimationComplete}
                        className="text-center justify-center font-p xl:text-[100px] lg:text-[70px] md:text-[50px] text-[50px] font-medium md:leading-[80px] leading-10 tracking-tighter mb-5 "
                    />
                    {/* <h1 className="text-center font-p xl:text-[100px] lg:text-[70px] md:text-[30px] text-[50px] font-medium md:leading-[80px] leading-10 tracking-tighter mb-5 ">{project?.title}</h1> */}
                    <p className="text-center  sm:text-xl text-sm text-white/50 tracking-wider">{project?.subtitle}</p>
                    <div className="flex justify-center gap-2">
                        {project?.link ?  <Link href={project?.link} target="_blank" className="px-3 py-2 rounded-full border border-green-400 text-green-400 md:text-xl flex items-center gap-4  mt-10">Live View <ExternalLink /></Link> : 
                        <Link href="#" className="px-3 py-2 rounded-full border border-white/20 text-white/20 md:text-xl  mt-10">Live View Not Available</Link>}
                        <Link href="/" className="px-3 py-2 rounded-full border border-white/20 hover:border-white/40 text-white/20 hover:text-white/40 md:text-xl  mt-10">Home</Link>
                    </div>
                    <motion.div
                        className="max-w-[1200px] mt-20 md:mb-20 mb-5 mx-auto w-full rounded-xl"
                        style={{ scale }}
                    >
                        <Image
                            src={`/${project?.image ?? ''}`}
                            alt="alt"
                            width={1500}
                            height={1200}
                            className="rounded-xl"
                        />
                    </motion.div>
                    {/* <header className=" text-center xl:text-[180px] lg:text-[100px] md:text-[50px] sm:text-[60px] text-[50px] font-bold tracking-wider mb-5">Abinantony</header> */}
                    <div className="grid md:mt-[12rem] mt-[5rem] font-p font-light p-5 normal-case md:grid-cols-3 text-xl grid-cols-1  md:gap-10 gap-10 tracking-normal">
                        <AnimatedContent >
                            <div className="flex flex-col md:ps-5 md:border-l  border-white/30">
                                <h2 className="uppercase text-5xl font-semibold tracking-tighter text-white/30">Aim</h2>
                                <p>{project?.aim}</p>
                            </div>
                        </AnimatedContent>
                        <AnimatedContent delay={300}>
                            <div className="flex flex-col  md:ps-5 md:border-l border-white/30">
                                <h2 className="uppercase text-5xl tracking-tighter font-semibold text-white/30">Key Features</h2>
                                <p>{project?.key_features}</p>
                            </div>
                        </AnimatedContent>
                        <AnimatedContent delay={600}>
                            <div className="flex flex-col  md:ps-5 md:border-l border-white/30">
                                <h2 className="uppercase text-5xl tracking-tighter font-semibold text-white/30">Project Goals</h2>
                                <p>{project?.project_goals}</p>
                            </div>
                            {/* <p className="text-2xl">Say Hi to <Link className="underline" href={'mailto:abina5448@gmail.com'}>abina5448@gmail.com</Link></p> */}
                        </AnimatedContent>
                    </div>
                </div>
                <div className="absolute top-0 left-0  z-[1] h-full w-full">
                    <AnimatedGridPattern
                        numSquares={50}
                        maxOpacity={0.08}
                        duration={3}
                        repeatDelay={1}
                        className={cn(
                            "md:[mask-image:radial-gradient(500px_circle_at_center,white,transparent)] [mask-image:radial-gradient(300px_circle_at_center,white,transparent)]",
                            "inset-x-0 inset-y-[-70%] h-[200%] skew-y-12 opacity-30",
                        )}
                    />
                </div>
            </section>

            <main className="">
                <VelocityScroll
                    text={project?.subtitle ?? 'ABIN ANTONY - FULL STACK WEB-APP DEVELOPER'}
                    default_velocity={1}
                    className="text-center text-[100px] mb-20 font-regular tracking-[-0.04em] leading-[60px] text-white/5 font-semibold mt-10"
                />
                <div className="w-full text-5xl flex gap-5 px-10 border-w pb-5 overflow-hidden">
                    <motion.div initial={{ y: 200, rotate: 10 }} transition={{ stiffness: 10, duration: 0.5 }} whileInView={{ y: 0, rotate: 0 }} 
                    className="flex md:flex-row flex-col md:text-5xl text-2xl  gap-5 ">
                        <p className="">Challenges</p>
                        <p className="normal-case text-end md:text-3xl text-xl font-p font-light tracking-normal text-white/50">
                            {project?.challenges}
                        </p>
                    </motion.div>

                </div>
                <div className="w-full px-10 pt-5 overflow-hidden">
                    <motion.div style={{transformOrigin:'left'}} initial={{ y: -50, rotate: -10 }} transition={{ stiffness: 40, duration: 0.5 }} whileInView={{ y: 0, rotate: 0 }} 
                    className="flex md:text-5xl text-2xl  gap-5 md:flex-row flex-col ">
                        <p className="shrink-0">Tech Stack</p>
                        <p className="normal-case flex flex-wrap md:gap-3 gap-1 justify-end w-full text-end md:text-3xl text-xl font-p font-light tracking-normal text-white/50">
                            {project?.tech_stack.map((i, index) => <span key={index} className="border border-white/20 md:px-5 md:py-2 px-3 py-1 rounded-full">{i}</span>)}
                        </p>
                    </motion.div>
                </div>

                <div className="flex relative normal-case md:mx-20 mx-10 rounded-2xl py-20 justify-center md:my-[150px] my-[20px] bg-zinc-100 text-zinc-900 font-p  text-center  items-center">
                    <span className="relative z-[1] md:text-5xl sm:text-3xl text-xl">"{project?.lessons_learned}"</span>
                    <span className="absolute left-[50%] top-[50%] lg:text-8xl md:text-5xl text-3xl font-bold text-zinc-200 translate-x-[-50%] font-p translate-y-[-50%]">LESSON LEARNED</span>
                </div>

                <section className="relative md:min-h-[300px] mt-20 min-h-[30vh] ">
                    <h2 className="uppercase md:text-8xl text-5xl tracking-normal font-bold mb-[-170px] ps-10 text-white/5">#Project Description</h2>
                    <TextReveal className="md:text-5xl text-3xl w-full normal-case max-w-[1700px] mx-auto mb-6">
                        {project?.description.toString() ?? ''}
                    </TextReveal>
                </section>
                <h1 className="md:text-7xl sm:text-4xl text-3xl ps-10 mb-5">Other Works</h1>
                <Carousel title={project?.title} />

                <footer className="flex md:flex-row flex-col  justify-between px-20 md:mb-10 mb-[100px] p-4 font-light font-p text-white/70 normal-case w-full items-center">
                    <p className="me-3">Abin Antony Kattady</p>
                    <p>2025 @ all rights reserved </p>
                </footer>
                {/* <div className="relative min-h-[200px]">
                    <Image src="/imageabin.png" className="absolute z-[2] left-[50%] right-0 bottom-0 translate-x-[-50%] brightness-75" style={{ opacity: 1 }} alt="alt" width={400} height={300} />
                    <p className="font-p  md:text-[200px] sm:text-[150px] text-[50px] absolute bottom-0 right-0 text-center z-[1] left-0 normal-case text-white/10">abinantony.</p>
                </div> */}
            </main>
        </>
    )
}

export default Projects