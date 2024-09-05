import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import TextRevealByWord from "@/components/magicui/text-reveal";
import HomeNavbar from "@/components/public/Navbar";
import Hero from "@/components/public/hero";
import Profile from "@/components/public/home/Profile";
import { MouseIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <div className="z-10 relative flex min-h-[16rem] items-center justify-center rounded-lg border-none mt-[-100px]">
        <div className="flex flex-col w-full md:max-w-[1300px]  absolute z-[1] top-[400px] left-0 right-0 bottom-0 mx-auto gap-[300px]">
          <span className="ms-auto text-[30px] text-red-200/10 drop-shadow-lg shadow-red-100 font-light animate-pulse duration-[10000ms]">A Professional Website / Web App? </span>
          <span className="text-[30px] text-red-200/10 drop-shadow-lg shadow-red-100 font-light animate-pulse duration-[10000ms]">An Large Scale Android / iOS Apps?</span>
          <span className="ms-auto text-[30px] text-red-200/10 drop-shadow-lg shadow-red-100 font-light animate-pulse duration-[10000ms]">Looking for a designer? </span>
        </div>
        <TextRevealByWord className="" text="Are you looking for a solution for your problem. Don't worry! " />
        <span className="sticky left-0 bottom-[10%] text-blue-500 animate-pulse flex items-center right-[100px] top-[90%] w-auto"><span>ScrollDown</span> <MouseIcon className="text-blue-500 text-[14px]" /></span>
      </div>
      
      <Profile />
      <VelocityScroll
        text="ABIN ANTONY - WEB | APP DEVELOPER / DESIGNER"
        default_velocity={1}
        className="text-center text-[100px] font-regular tracking-[-0.04em] leading-[60px] text-white/5 font-semibold mt-10"
      />
    </main>
  );
}
