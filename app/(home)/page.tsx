"use client"
import { AnimatedGridPattern } from "@/components/magicui/animated-grid-pattern";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import TextRevealByWord from "@/components/magicui/text-reveal";
import { WordRotate } from "@/components/magicui/word-rotate";
import HomeNavbar from "@/components/public/Navbar";
import Hero from "@/components/public/hero";
import Profile from "@/components/public/home/Profile";
import AnimatedContent from "@/components/ui/AnimatedContent/AnimatedContent";
import FuzzyText from "@/components/ui/FuzzyText/FuzzyText";
import { cn } from "@/lib/utils";
import { ExternalLink, MouseIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export default function Home() {
  return (
    <div className="max-w-[1700px] w-full mx-auto flex flex-col text-white min-h-screen">
      <div className="p-5">
        <nav className="w-full text-xl py-6 md:gap-10 gap-2 flex md:flex-row flex-col items-center border-w text-white/80">
          <p className="flex md:w-1/5 w-full capitalize leading-none font-normal pe-3"><span className="md:max-w-[200px]">Freelancer UI-UX Designer Full Stack Dev </span></p>
          <p className="flex md:w-3/5 w-full capitalize leading-none font-normal">Abin Antony </p>
          <p className="flex justify-end md:w-1/5 w-full capitalize leading-none font-normal text-end">Kerala, India</p>
        </nav>
      </div>
      <section className="flex flex-col relative justify-center overflow-hidden min-h-[80vh]">
        <div className="relative z-[2] p-6">

          <WordRotate
            className="text-center xl:text-[180px] lg:text-[100px] md:text-[50px] sm:text-[60px] text-[50px] font-bold tracking-tight mb-5"
            words={["AbinAntony", "Web Dev", "UIDESIGNER", "APP DEV", "ENGINEER", "CREATOR", "FREELANCER"]}
          />
          <AnimatedContent>
            <About />
          </AnimatedContent>
          {/* <header className=" text-center xl:text-[180px] lg:text-[100px] md:text-[50px] sm:text-[60px] text-[50px] font-bold tracking-wider mb-5">Abinantony</header> */}
          <div className="grid p-5 normal-case md:grid-cols-3 text-xl grid-cols-1 mt-8 md:gap-10 gap-10 tracking-tighter">
            <AnimatedContent>
              <p>Currently I have 5 year experience in UI Designing and Web development, Working for domestic and foreign clients. I am currently working at <Link href={'https://webcodecreators.com'} target="_blank">Webcodecreators</Link> as Full stack Developer</p>
            </AnimatedContent>
            <AnimatedContent delay={300}>
              <p>I like to describe myself as designer / developer with high discipline and enjoy working in a team or indepently</p>
            </AnimatedContent>
            <AnimatedContent delay={600}>
              <p className="text-2xl">Say Hi to <Link className="underline" href={'mailto:abina5448@gmail.com'}>abina5448@gmail.com</Link></p>
            </AnimatedContent>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 mt-8 md:gap-10 gap-4 lg:text-7xl md:text-5xl text-4xl">
            <LinkP name="GITHUB" link="" />
            <LinkP name="INSTAGRAM" link="" />
            <LinkP name="LINKEDIN" link="" />
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
          text="ABIN ANTONY - WEB | APP DEVELOPER / DESIGNER"
          default_velocity={1}
          className="text-center text-[100px] mb-20 font-regular tracking-[-0.04em] leading-[60px] text-white/5 font-semibold mt-10"
        />
        <Projects />
        <Achievements />
        <Contact />
      </main>
    </div>
  );
}

// components/Header.js

import React from 'react'

const LinkP = ({ name, link }: { name: string, link: string }) => {
  return (
    <Link href={link} className="border relative group overflow-hidden flex justify-center px-3 py-4 rounded-full font-normal  border-white/40 text-white/60 hover:text-white">
      <span className="md:group-hover:scale-[0.9] transition-all group-hover:opacity-10">{name}</span>
      <ExternalLink size={50} className="absolute top-full transition-all md:group-hover:top-[25%] group-hover:top-[20%]" />
    </Link >
  )
}

// components/About.js
export function About() {
  return (
    <section className="p-3 text-center border-w pb-10 ">
      <p className=" text-gray-100 tracking-normal lg:text-4xl md:text-2xl text-3xl font-medium">Hi, I'm a Kerala Based full-stack developer and entrepreneur. </p>
      <p className="lg:text-3xl sm:tracking-tighter md:text-2xl text-md tracking-tighter text-gray-500">I specialize in modern web technologies, UI/UX design, and software solutions. Passionate about coding, learning, and building innovative projects.</p>
    </section>
  );
}

// components/Projects.js
export function Projects() {
  return (
    <section className="p-10 w-full">
      <h2 className="text-7xl font-medium mb-10">Featured Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MainCard
          cards={["Fullstack Web Dev", "UI UX","App Dev"]}
          title="Construction Management App"
          subtitle="A web app for managing construction projects efficiently." />
        <MainCard
          title="Show My Ads Dashboard"
          subtitle="An analytics dashboard for advertisement publishers." />
      </div>
    </section>
  );
}


export const MainCard = ({ title, subtitle, link, cards }: { title: string, subtitle: string, link?: string, cards?: string[] }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg pt-10">
      {cards && <div className="flex gap-2 flex-wrap mb-3">
        {cards.map((item, index) => {
          return <div className="text-black px-4 py-2 border rounded-3xl" key={index}>{item}</div>
        })}
      </div>}
      <h3 className="text-4xl font-semibold text-black">{title}</h3>
      <p className="text-gray-400 mt-2">{subtitle}</p>
      <Link href={"#"} className="hover:underline text-black flex items-center mt-2">Case study <ExternalLink size={18} /></Link>
    </div>
  )
}

// components/Achievements.js
export function Achievements() {
  return (
    <section className="p-10 w-full">
      <h2 className="text-7xl font-medium mb-10">Achievements</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <MainCard
          cards={["Fullstack Web Dev", "UI UX","App Dev"]}
          title="Construction Management App"
          subtitle="A web app for managing construction projects efficiently." />
        <MainCard
          title="Show My Ads Dashboard"
          subtitle="An analytics dashboard for advertisement publishers." />
      </div>
    </section>
  );
}

// components/Contact.js
export function Contact() {
  return (
    <section className="p-10 text-center">
      <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
      <p className="text-lg text-gray-300">I am open to collaborations and freelance projects. Let's build something amazing together!</p>
      <button className="mt-6 px-6 py-3 bg-white text-black text-lg font-semibold rounded-lg shadow-md hover:bg-gray-300">Contact Me</button>
    </section>
  );
}
