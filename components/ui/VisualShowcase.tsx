"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const showcaseItems = [
    { image: "/d1.png", title: "Brand Identity", desc: "Crafting visual stories" },
    { image: "/d2.png", title: "Web Design", desc: "Immersive digital experiences" },
    { image: "/d3.png", title: "Mobile Apps", desc: "Intuitive interfaces" },
    { image: "/d5.png", title: "Dashboards", desc: "Data visualization" },
    { image: "/d0.jpg", title: "UI Systems", desc: "Scalable design patterns" },
];

export default function VisualShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-white text-black">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

                <div className="absolute top-10 left-6 md:left-20 z-10">
                    <h2 className="text-4xl md:text-7xl font-bold font-syne mb-4 tracking-tighter">
                        Visual Playground
                    </h2>
                    <p className="text-lg text-neutral-500 font-manrope">
                        A collection of latest design explorations and visual experiments.
                    </p>
                </div>

                <div className="relative w-full h-[60vh] mt-20">
                    <motion.div style={{ x }} className="flex gap-4 md:gap-10 pl-6 md:pl-20 items-center h-full absolute left-0">
                        {showcaseItems.map((item, index) => (
                            <div key={index} className="relative w-[300px] md:w-[600px] h-full flex-shrink-0 group">
                                <div className="relative w-full h-full overflow-hidden rounded-none border border-black/10">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100"
                                    />
                                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                                </div>
                                <div className="mt-4 flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold font-syne">{item.title}</h3>
                                        <p className="text-sm text-neutral-500 font-manrope mt-1">{item.desc}</p>
                                    </div>
                                    <span className="text-sm font-manrope text-neutral-400">0{index + 1}</span>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-6 md:left-20 right-6 md:right-20 flex justify-between items-end">
                    <div className="hidden md:flex items-center gap-2 text-sm font-medium font-manrope text-neutral-400">
                        <ArrowRight className="w-4 h-4" />
                        Scroll to explore
                    </div>
                </div>

            </div>
        </section>
    );
}
