"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundBeams } from "./BackgroundBeams";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 md:px-20 overflow-hidden bg-deep-purple text-white">
            {/* Background */}
            <BackgroundBeams />

            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
                {/* Top Pill Label */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                >
                    <span className="w-2 h-2 rounded-full bg-neon-violet animate-pulse" />
                    <span className="text-sm font-medium text-neutral-300">Available for projects</span>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
                >
                    Accelerate Your <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Digital Presence</span>
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="max-w-2xl text-lg md:text-xl text-neutral-400 leading-relaxed mb-10"
                >
                    Highly personalized web experiences, expertly curated to meet your objectives and drive your business forward with modern tech.
                </motion.p>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center gap-4"
                >
                    <Link
                        href="#contact"
                        className="group relative inline-flex items-center gap-2 px-8 py-4 bg-neon-violet text-white rounded-full font-bold text-lg hover:bg-violet-600 transition-all shadow-[0_0_20px_rgba(124,58,237,0.5)] hover:shadow-[0_0_40px_rgba(124,58,237,0.7)]"
                    >
                        Get Started <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link
                        href="#projects"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-sm"
                    >
                        View Work
                    </Link>
                </motion.div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-deep-purple to-transparent z-10" />
        </section>
    );
}
