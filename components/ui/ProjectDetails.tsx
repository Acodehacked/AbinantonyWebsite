"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Docker from "@/components/ui/Docker";
import LiquidMenu from "@/components/ui/LiquidMenu";
import Footer from "@/components/ui/Footer";
import MouseIndicator from "@/components/ui/MouseIndicator";
import { useRef } from "react";

interface ProjectDetailsProps {
    project: any; // Using any to match existing data structure flexibly
}

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    return (
        <main ref={containerRef} className="min-h-screen bg-white text-black selection:bg-black/10">
            <MouseIndicator />
            <LiquidMenu />
            <Docker />

            {/* Hero Section */}
            <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
                <motion.div
                    style={{ scale: heroScale, opacity: heroOpacity }}
                    className="absolute inset-0 w-full h-full"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/60 z-10" />
                    <Image
                        src={project.image.startsWith("/") ? project.image : `/${project.image}`}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                <div className="absolute inset-0 z-20 flex flex-col justify-end px-6 md:px-20 pb-20 text-white">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-8 transition-colors w-fit"
                        >
                            <ArrowLeft className="w-5 h-5" /> Back to Projects
                        </Link>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                        className="text-5xl md:text-8xl font-bold mb-4 drop-shadow-lg"
                    >
                        {project.title}
                    </motion.h1>

                    {project.subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                            className="text-xl md:text-3xl text-neutral-200 max-w-3xl drop-shadow-md"
                        >
                            {project.subtitle}
                        </motion.p>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="px-6 md:px-20 py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
                    {/* Sidebar / Meta */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={staggerContainer}
                        className="md:col-span-4 space-y-12"
                    >
                        <motion.div variants={fadeInUp}>
                            <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Categories</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.category.map((cat: string) => (
                                    <span key={cat} className="px-3 py-1 rounded-full border border-neutral-200 text-sm hover:border-neutral-400 transition-colors">
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp}>
                            <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech_stack.map((tech: string) => (
                                    <span key={tech} className="px-3 py-1 rounded-full bg-neutral-100 text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div variants={fadeInUp} className="flex gap-4">
                            {project.link && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-black text-white rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
                                >
                                    Visit Site <ExternalLink className="w-4 h-4" />
                                </Link>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Main Content */}
                    <div className="md:col-span-8 space-y-16">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeInUp}
                        >
                            <h2 className="text-3xl font-bold mb-6">Overview</h2>
                            <p className="text-lg text-neutral-700 leading-relaxed">
                                {project.description}
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                            >
                                <h3 className="text-xl font-bold mb-4 text-neutral-900">The Challenge</h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    {project.challenges}
                                </p>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                transition={{ delay: 0.2 }}
                            >
                                <h3 className="text-xl font-bold mb-4 text-neutral-900">The Goal</h3>
                                <p className="text-neutral-600 leading-relaxed">
                                    {project.project_goals}
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                        >
                            <motion.h2 variants={fadeInUp} className="text-3xl font-bold mb-8">Key Features</motion.h2>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {project.key_features.map((feature: string, i: number) => (
                                    <motion.li
                                        key={i}
                                        variants={fadeInUp}
                                        className="flex items-start gap-3 p-4 rounded-xl bg-neutral-50 border border-neutral-100"
                                    >
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-black shrink-0" />
                                        <span className="text-neutral-700">{feature}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>

                        {project.lessons_learned && (
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={fadeInUp}
                                className="p-8 rounded-2xl bg-neutral-900 text-white"
                            >
                                <h3 className="text-xl font-bold mb-4">Lessons Learned</h3>
                                <p className="text-neutral-300 italic">
                                    "{project.lessons_learned}"
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
