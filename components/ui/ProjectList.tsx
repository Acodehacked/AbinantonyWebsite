"use client";

import { useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn, slugify } from "@/lib/utils";

const TEXT_PRIMARY = "#F2EDE8";
const TEXT_MUTED   = "rgba(242,237,232,0.28)";
const ORANGE       = "#E84018";
const BORDER       = "rgba(255,255,255,0.08)";

export default function ProjectList({ projects }: { projects: any[] }) {
    const [activeProject, setActiveProject] = useState<number | null>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const xSpring = useSpring(x, springConfig);
    const ySpring = useSpring(y, springConfig);

    const handleMouseMove = (e: React.MouseEvent) => {
        x.set(e.clientX);
        y.set(e.clientY);
    };

    return (
        <div
            className="relative w-full py-4"
            onMouseMove={handleMouseMove}
            onMouseLeave={() => setActiveProject(null)}
        >
            <div className="flex flex-col">
                {projects.map((project, index) => {
                    const isActive = activeProject === index;
                    return (
                        <Link
                            key={index}
                            href={`/projects/${slugify(project.title)}`}
                            className="relative flex items-center justify-between py-6 transition-all duration-300"
                            style={{
                                borderBottom: `1px solid ${isActive ? "rgba(232,88,10,0.25)" : BORDER}`,
                                paddingLeft: isActive ? "1.25rem" : "0",
                                borderLeft: `2px solid ${isActive ? ORANGE : "transparent"}`,
                            }}
                            onMouseEnter={() => setActiveProject(index)}
                        >
                            <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8">
                                <h3
                                    className="font-syne text-3xl font-bold tracking-tighter md:text-4xl transition-all duration-300"
                                    style={{
                                        color: isActive ? TEXT_PRIMARY : TEXT_MUTED,
                                        textShadow: isActive ? `0 0 40px rgba(232,88,10,0.2)` : "none",
                                    }}
                                >
                                    {project.title}
                                </h3>
                                <span
                                    className="font-manrope text-sm uppercase tracking-widest transition-colors md:text-base"
                                    style={{ color: isActive ? "rgba(242,237,232,0.55)" : "rgba(242,237,232,0.22)" }}
                                >
                                    {project.category[0]}
                                </span>
                            </div>

                            <div
                                className="hidden md:flex items-center gap-2 transition-all duration-300"
                                style={{
                                    opacity: isActive ? 1 : 0,
                                    transform: isActive ? "translateX(0)" : "translateX(-1rem)",
                                }}
                            >
                                <span
                                    className="font-manrope text-sm font-bold uppercase tracking-widest"
                                    style={{ color: ORANGE }}
                                >
                                    View Case Study
                                </span>
                                <ArrowRight className="w-4 h-4" style={{ color: ORANGE }} />
                            </div>
                        </Link>
                    );
                })}
            </div>

            {/* Floating image — follows cursor */}
            <motion.div
                style={{ x: xSpring, y: ySpring, top: 0, left: 0 }}
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
                        {/* Orange overlay tint on the floating image */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(135deg, rgba(232,88,10,0.15) 0%, transparent 60%)",
                            }}
                        />
                    </div>
                ))}
            </motion.div>
        </div>
    );
}
