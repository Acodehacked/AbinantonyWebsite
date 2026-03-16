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
    const headerY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);
    const y0 = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
    const y1 = useTransform(scrollYProgress, [0, 1], ["-4%", "8%"]);
    const y2 = useTransform(scrollYProgress, [0, 1], ["8%", "-4%"]);
    const y3 = useTransform(scrollYProgress, [0, 1], ["-6%", "10%"]);
    const y4 = useTransform(scrollYProgress, [0, 1], ["5%", "-7%"]);
    const yOffsets = [y0, y1, y2, y3, y4];
    const ix0 = useTransform(scrollYProgress, [0, 1], ["-6%", "8%"]);
    const ix1 = useTransform(scrollYProgress, [0, 1], ["7%", "-6%"]);
    const ix2 = useTransform(scrollYProgress, [0, 1], ["-8%", "6%"]);
    const ix3 = useTransform(scrollYProgress, [0, 1], ["6%", "-7%"]);
    const ix4 = useTransform(scrollYProgress, [0, 1], ["-7%", "5%"]);
    const imageXOffsets = [ix0, ix1, ix2, ix3, ix4];

    return (
        <section ref={containerRef} className="relative h-[400vh] bg-neutral-950 text-white">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">

                <motion.div style={{ y: headerY }} className="absolute top-10 left-6 md:left-20 z-10">
                    <h2 className="text-4xl md:text-7xl font-bold font-syne mb-4 tracking-tighter">
                        Selected Visual Work
                    </h2>
                    <p className="font-manrope text-lg text-neutral-400">
                        Design-focused builds that reflect my style, process, and product thinking.
                    </p>
                </motion.div>

                <div className="relative w-full h-[60vh] mt-20">
                    <motion.div style={{ x }} className="flex gap-4 md:gap-10 pl-6 md:pl-20 items-center h-full absolute left-0">
                        {showcaseItems.map((item, index) => (
                            <motion.div key={index} style={{ y: yOffsets[index] }} className="relative w-[300px] md:w-[600px] h-full flex-shrink-0 group">
                                <div className="relative h-full w-full overflow-hidden rounded-none border border-white/10">
                                    <motion.div style={{ x: imageXOffsets[index] }} className="absolute inset-0 scale-110">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100"
                                        />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-black/25 group-hover:bg-black/0 transition-colors duration-300" />
                                </div>
                                <div className="mt-4 flex justify-between items-start">
                                    <div>
                                        <h3 className="text-2xl font-bold font-syne">{item.title}</h3>
                                        <p className="mt-1 font-manrope text-sm text-neutral-400">{item.desc}</p>
                                    </div>
                                    <span className="font-manrope text-sm text-neutral-500">0{index + 1}</span>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-6 md:left-20 right-6 md:right-20 flex justify-between items-end">
                    <div className="hidden items-center gap-2 font-manrope text-sm font-medium text-neutral-400 md:flex">
                        <ArrowRight className="w-4 h-4" />
                        Scroll to explore
                    </div>
                </div>

            </div>
        </section>
    );
}
