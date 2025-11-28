"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

// Sample data using available public images
const artworks = [
    { id: 1, title: "Jesus Drawing", category: "Digital Art", image: "/p0.png", size: "large" },
    { id: 2, title: "Classy Art", category: "Digital painting", image: "/p1.png", size: "normal" },
    { id: 3, title: "Cannopy wedding", category: "UI Design", image: "/d0.jpg", size: "normal" },
    { id: 4, title: "Bibliya App design", category: "Web Design", image: "/m11.png", size: "wide" },
    { id: 5, title: "Freelix", category: "UI Design", image: "/d1.png", size: "normal" },
    { id: 6, title: "Arcade Showdown", category: "App design", image: "/d3.png", size: "normal" },
    { id: 7, title: "Dailytaste Website", category: "Ecommerce website design", image: "/m13.png", size: "large" },
];

export default function ArtworksGallery() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="px-6 md:px-20 py-32 bg-white text-black min-h-screen">
            {/* Header */}
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-neutral-200 pb-8">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-8xl font-bold tracking-tighter uppercase"
                    >
                        Artworks <br /> & Designs
                    </motion.h1>
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-neutral-500 max-w-md text-lg md:text-xl leading-relaxed"
                >
                    A collection of digital experiments, UI explorations, and visual concepts.
                </motion.p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {artworks.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className={`group relative flex flex-col gap-4 ${item.size === 'large' ? 'md:row-span-2' : ''} ${item.size === 'wide' ? 'md:col-span-2' : ''}`}
                        onMouseEnter={() => setHoveredId(item.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        <div className="relative overflow-hidden rounded-sm bg-neutral-100 w-full h-full min-h-[400px]">
                            <motion.div
                                className="w-full h-full"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                />
                            </motion.div>

                            {/* Hover Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredId === item.id ? 1 : 0 }}
                                className="absolute inset-0 bg-black/20 transition-opacity duration-300"
                            />
                        </div>

                        <div className="flex justify-between items-start border-t border-black pt-3">
                            <div>
                                <h3 className="text-xl font-bold uppercase tracking-tight">{item.title}</h3>
                                <p className="text-sm text-neutral-500 uppercase tracking-widest mt-1">{item.category}</p>
                            </div>
                            <span className="text-xs font-mono text-neutral-400">0{index + 1}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
