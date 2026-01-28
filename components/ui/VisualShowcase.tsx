"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const showcaseItems = [
    { image: "/d1.png", title: "Brand Identity" },
    { image: "/d2.png", title: "Web Design" },
    { image: "/d3.png", title: "Mobile Apps" },
    { image: "/d5.png", title: "Dashboards" },
    { image: "/d0.jpg", title: "UI Systems" },
];

export default function VisualShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Horizontal scroll based on vertical scroll
    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-60%"]);

    // Progress bar width
    const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    // Title animations
    const titleY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
    const titleOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

    return (
        <section ref={containerRef} className="relative h-[300vh] bg-neutral-950">
            <div className="sticky top-0 h-screen overflow-hidden">

                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950" />

                {/* Animated grid pattern */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                        backgroundSize: '60px 60px'
                    }}
                />

                {/* Header */}
                <div className="absolute top-0 left-0 right-0 z-20 px-6 md:px-20 py-10">
                    <div className="flex items-center justify-between">
                        <motion.div
                            style={{ y: titleY, opacity: titleOpacity }}
                        >
                            <p className="text-neutral-500 text-sm uppercase tracking-[0.3em] mb-2">Featured Work</p>
                            <h2 className="text-4xl md:text-6xl font-bold text-white">
                                Design <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-pink-400">Gallery</span>
                            </h2>
                        </motion.div>

                        {/* Progress indicator */}
                        <div className="hidden md:flex items-center gap-4">
                            <span className="text-neutral-500 text-sm">Scroll</span>
                            <div className="w-32 h-1 bg-neutral-800 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"
                                    style={{ width: progressWidth }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Horizontal Scrolling Gallery */}
                <div className="absolute inset-0 flex items-center">
                    <motion.div
                        style={{ x }}
                        className="flex gap-8 pl-6 md:pl-20"
                    >
                        {showcaseItems.map((item, index) => (
                            <GalleryCard
                                key={index}
                                item={item}
                                index={index}
                                scrollProgress={scrollYProgress}
                            />
                        ))}

                        {/* End card */}
                        <div className="flex-shrink-0 w-[300px] md:w-[400px] h-[400px] md:h-[500px] rounded-3xl bg-gradient-to-br from-violet-600/20 to-pink-600/20 border border-white/10 flex items-center justify-center">
                            <div className="text-center p-8">
                                <p className="text-white/60 text-lg mb-4">Want to see more?</p>
                                <a
                                    href="#projects"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform"
                                >
                                    View All Projects
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Bottom gradient fade */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-neutral-950 to-transparent z-10 pointer-events-none" />

                {/* Floating elements */}
                <motion.div
                    className="absolute top-20 right-20 w-64 h-64 rounded-full bg-violet-500/10 blur-[100px] pointer-events-none"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                    className="absolute bottom-20 left-20 w-96 h-96 rounded-full bg-pink-500/10 blur-[120px] pointer-events-none"
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                />
            </div>
        </section>
    );
}

function GalleryCard({
    item,
    index,
    scrollProgress
}: {
    item: { image: string; title: string };
    index: number;
    scrollProgress: any;
}) {
    // Each card has slightly different animation timing
    const cardRotate = useTransform(
        scrollProgress,
        [0, 0.5, 1],
        [5 - index, 0, -5 + index]
    );

    const cardScale = useTransform(
        scrollProgress,
        [0.1 * index, 0.1 * index + 0.3, 0.1 * index + 0.6],
        [0.9, 1, 0.95]
    );

    return (
        <motion.div
            style={{
                rotate: cardRotate,
                scale: cardScale
            }}
            className="flex-shrink-0 group"
        >
            <div className="relative w-[300px] md:w-[400px] h-[400px] md:h-[500px] rounded-3xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl shadow-black/50">
                {/* Image */}
                <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white/60 text-sm uppercase tracking-widest mb-2">0{index + 1}</p>
                        <h3 className="text-white text-2xl md:text-3xl font-bold">{item.title}</h3>
                    </div>

                    {/* Hover indicator */}
                    <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="w-8 h-[2px] bg-white/60" />
                        <span className="text-white/60 text-sm">Explore</span>
                    </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-white/20 group-hover:bg-violet-400 transition-colors duration-500" />
            </div>
        </motion.div>
    );
}
