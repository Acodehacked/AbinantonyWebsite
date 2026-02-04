"use client";

import React from "react";
import { motion } from "framer-motion";
import TextReveal from "./TextReveal";
import MagneticButton from "./MagneticButton";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20 pt-20 overflow-hidden bg-white text-black">

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-100 rounded-full blur-[120px] -z-10" />

            <div className="z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-6 flex items-center gap-2 border border-black/5 bg-neutral-50/50 px-4 py-1.5 rounded-full backdrop-blur-sm"
                >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-medium tracking-wide uppercase text-neutral-500">Available for freelance</span>
                </motion.div>

                <h1 className="text-[12vw] leading-[0.85] font-syne font-bold tracking-tighter mb-4 text-black mix-blend-multiply">
                    <TextReveal text="CREATIVE" delay={0.1} />
                    {/* <br /> */}
                    <TextReveal text="DEVELOPER" delay={0.2} />
                </h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mt-12 gap-8 md:gap-0"
                >
                    <div className="text-left max-w-sm">
                        <p className="font-manrope text-lg text-neutral-600 leading-relaxed">
                            Bringing bold ideas to life with precision. A digital product designer & developer crafting intuitive, engaging, and seamless digital experiences.
                        </p>
                    </div>

                    <div className="flex items-center gap-4">
                        <MagneticButton>
                            <a href="#projects" className="h-16 w-16 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300">
                                <ArrowDown className="w-6 h-6 animate-bounce" />
                            </a>
                        </MagneticButton>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

