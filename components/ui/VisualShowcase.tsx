"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function VisualShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Image scales up from 0.8 to 1.2
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.2]);
    // Image opacity fades in
    const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
    // Text moves slightly for parallax
    const textY = useTransform(scrollYProgress, [0, 1], [0, 100]);
    // Text opacity fades out at the end
    const textOpacity = useTransform(scrollYProgress, [0.8, 1], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-[200vh] bg-black">
            <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">

                {/* Background Image */}
                <motion.div
                    style={{ scale, opacity }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src="/dark.webp"
                        alt="Abstract Design"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/20" />
                </motion.div>

                {/* SVG Mask Overlay */}
                <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none">
                    <defs>
                        <mask id="text-mask">
                            <rect width="100%" height="100%" fill="white" />
                            <motion.g style={{ y: textY, opacity: textOpacity }}>
                                <text
                                    x="50%"
                                    y="35%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    className="text-6xl md:text-9xl font-bold tracking-tighter uppercase"
                                    style={{ fontSize: "clamp(4rem, 10vw, 12rem)" }}
                                    fill="black"
                                >
                                    Visual
                                </text>
                                <text
                                    x="50%"
                                    y="55%"
                                    textAnchor="middle"
                                    dominantBaseline="middle"
                                    className="text-6xl md:text-9xl font-bold tracking-tighter uppercase"
                                    style={{ fontSize: "clamp(4rem, 10vw, 12rem)" }}
                                    fill="black"
                                >
                                    Excellence
                                </text>
                            </motion.g>
                        </mask>
                    </defs>
                    <rect width="100%" height="100%" fill="black" mask="url(#text-mask)" />
                </svg>

                {/* Subtitle (on top of the mask) */}
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    className="absolute bottom-20 left-0 right-0 z-20 text-center px-4"
                >
                    <p className="text-xl md:text-2xl text-white/80 max-w-lg mx-auto font-light tracking-widest uppercase">
                        Crafting digital experiences that leave a lasting impression.
                    </p>
                </motion.div>

            </div>
        </section>
    );
}
