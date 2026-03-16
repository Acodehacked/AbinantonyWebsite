"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useSpring, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn, slugify } from "@/lib/utils";

interface Project {
    title: string;
    category: string[];
    image: string;
    link?: string;
    year?: string;
}

interface ProjectListProps {
    projects: any[]; // Using any[] to match the EVENTS structure flexibly, or define strict type
}

export default function ProjectList({ projects }: ProjectListProps) {
    const [activeProject, setActiveProject] = useState<number | null>(null);

    // Mouse position for the floating image
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Smooth spring animation for the image movement
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    // Rotate the image slightly based on x velocity (optional polish)
    // For simplicity, we'll just track movement

    const handleMouseMove = (e: React.MouseEvent) => {
        // We want the image to be centered on the cursor or slightly offset
        // Getting the client coordinates relative to the viewport
        x.set(e.clientX);
        y.set(e.clientY);
    };

    return (
        <div
            className="relative w-full py-4"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setActiveProject(null)}
        >
            {/* Project Items */}
            <div className="flex flex-col">
                {projects.map((project, index) => (
                    <Link
                        key={index}
                        href={`/projects/${slugify(project.title)}`}
                        className="group relative flex items-center justify-between border-b border-white/10 py-6 transition-all duration-300 hover:px-4"
                        onMouseEnter={() => setActiveProject(index)}
                    >
                        <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                            <h3 className="font-syne text-3xl font-bold tracking-tighter text-neutral-500 transition-colors duration-300 group-hover:text-white md:text-4xl">
                                {project.title}
                            </h3>
                            <span className="font-manrope text-sm uppercase tracking-widest text-neutral-500 transition-colors group-hover:text-neutral-300 md:text-base">
                                {project.category[0]}
                            </span>
                        </div>

                        <div className="hidden md:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                            <span className="font-manrope text-sm font-bold uppercase tracking-widest text-white">View Case Study</span>
                            <ArrowRight className="w-5 h-5" />
                        </div>
                    </Link>
                ))}
            </div>

            {/* Floating Image Reveal (Desktop Only) */}
            <motion.div
                style={{
                    x: xSpring,
                    y: ySpring,
                    top: 0,
                    left: 0,
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                    opacity: activeProject !== null ? 1 : 0,
                    scale: activeProject !== null ? 1 : 0.5,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="pointer-events-none fixed z-50 hidden md:block w-[400px] h-[250px] rounded-2xl overflow-hidden shadow-2xl -translate-x-1/2 -translate-y-1/2"
            >
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={cn(
                            "absolute inset-0 w-full h-full transition-opacity duration-300",
                            activeProject === index ? "opacity-100" : "opacity-0"
                        )}
                    >
                        <Image
                            src={project.image.startsWith("/") ? project.image : `/${project.image}`}
                            alt={project.title}
                            fill
                            className="object-cover"
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
