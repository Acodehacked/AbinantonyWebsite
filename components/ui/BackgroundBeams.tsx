"use client";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
    return (
        <div className="absolute inset-0 overflow-hidden bg-deep-purple flex flex-row justify-center items-center">
            {/* Main Gradient Orb in Center/Top */}
            <div className="absolute top-[-20%] left-[50%] -translate-x-1/2 w-[60vw] h-[60vw] bg-neon-violet/20 blur-[120px] rounded-full pointer-events-none" />

            {/* Vertical Beams */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute h-[200%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent left-[20%] top-[-50%] animate-pulse" />
                <div className="absolute h-[200%] w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent left-[50%] top-[-50%]" />
                <div className="absolute h-[200%] w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent left-[80%] top-[-50%] animate-pulse delay-700" />
            </div>

            {/* Moving "Glows" */}
            <motion.div
                animate={{
                    y: [-20, 20, -20],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/30 blur-[80px] rounded-full pointer-events-none"
            />
            <motion.div
                animate={{
                    y: [20, -20, 20],
                    opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/20 blur-[100px] rounded-full pointer-events-none"
            />

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" style={{ backgroundSize: '40px 40px', opacity: 0.1 }}></div>

        </div>
    );
};
