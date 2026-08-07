'use client'

import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import React, { useRef, useState } from 'react'
import { ArrowLeft, ArrowUpRight, ChevronDown, ExternalLink, Layers, Target, Lightbulb, Wrench, Quote } from "lucide-react"
import { EVENTS } from "@/lib"
import { slugify } from "@/lib/utils"

interface ProjectProps {
    project: {
        title: string;
        subtitle: string;
        category: string[];
        image: string;
        description: string;
        aim: string;
        challenges: string;
        project_goals: string;
        tech_stack: string[];
        key_features: string[];
        link?: string;
        extraimage?: string;
        lessons_learned: string;
    } | null
}

const Projects = ({ project }: ProjectProps) => {
    const [headerScrolled, setHeaderScrolled] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        setHeaderScrolled(latest > 50);
    });

    const otherProjects = EVENTS.filter(p => p.title !== project?.title).slice(0, 3);

    return (
        <div ref={containerRef} className="bg-[#fafafa] min-h-screen">
            {/* Header */}
            <motion.header
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    headerScrolled
                        ? 'bg-white/80 backdrop-blur-xl shadow-sm'
                        : 'bg-transparent'
                }`}
            >
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <Link
                            href="/"
                            className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                                headerScrolled ? 'text-neutral-600 hover:text-neutral-900' : 'text-white/80 hover:text-white'
                            }`}
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Home
                        </Link>

                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: headerScrolled ? 1 : 0 }}
                            className="hidden md:block text-sm font-medium text-neutral-900 max-w-[300px] truncate"
                        >
                            {project?.title}
                        </motion.span>

                        {project?.link ? (
                            <Link
                                href={project.link}
                                target="_blank"
                                className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full transition-all ${
                                    headerScrolled
                                        ? 'bg-neutral-900 text-white hover:bg-neutral-800'
                                        : 'bg-white text-neutral-900 hover:bg-neutral-100'
                                }`}
                            >
                                Visit Site
                                <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                        ) : (
                            <span className={`text-sm ${headerScrolled ? 'text-neutral-400' : 'text-white/50'}`}>
                                Demo Unavailable
                            </span>
                        )}
                    </div>
                </div>
            </motion.header>

            {/* Hero */}
            <section className="relative min-h-[90vh] bg-neutral-900 overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                    <Image
                        src={`/${project?.image ?? ''}`}
                        alt={project?.title ?? ''}
                        fill
                        className="object-cover opacity-30"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/50 via-neutral-900/80 to-neutral-900" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 pt-32 pb-20 min-h-[90vh] flex flex-col justify-end">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project?.category.map((cat, i) => (
                                <span
                                    key={i}
                                    className="px-3 py-1 text-xs font-medium text-white/70 bg-white/10 rounded-full"
                                >
                                    {cat}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 tracking-tight leading-[1.1]">
                            {project?.title}
                        </h1>

                        {/* Subtitle */}
                        <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-8">
                            {project?.subtitle}
                        </p>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-6 text-sm text-white/50">
                            <div className="flex items-center gap-2">
                                <Layers className="w-4 h-4" />
                                <span>{project?.tech_stack[0]}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span>{project?.key_features.length} Features</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                    >
                        <motion.div
                            animate={{ y: [0, 6, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        >
                            <ChevronDown className="w-6 h-6 text-white/30" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <main className="max-w-6xl mx-auto px-6">

                {/* Project Image */}
                <motion.section
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="py-16 -mt-20 relative z-10"
                >
                    <div className="rounded-2xl overflow-hidden shadow-2xl shadow-neutral-900/10 border border-neutral-200">
                        <Image
                            src={`/${project?.extraimage ?? project?.image ?? ''}`}
                            alt={project?.title ?? ''}
                            width={1400}
                            height={800}
                            className="w-full h-auto"
                        />
                    </div>
                </motion.section>

                {/* Description */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="py-16 border-b border-neutral-200"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                                About
                            </h2>
                            <p className="text-2xl font-semibold text-neutral-900">
                                Project Overview
                            </p>
                        </div>
                        <div className="lg:col-span-8">
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                {project?.description}
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Info Cards */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="py-16 border-b border-neutral-200"
                >
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Aim */}
                        <div className="p-6 bg-white rounded-2xl border border-neutral-200">
                            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                                <Target className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                                The Aim
                            </h3>
                            <p className="text-neutral-700 leading-relaxed">
                                {project?.aim}
                            </p>
                        </div>

                        {/* Goals */}
                        <div className="p-6 bg-white rounded-2xl border border-neutral-200">
                            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center mb-4">
                                <Lightbulb className="w-5 h-5 text-green-600" />
                            </div>
                            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                                Goals
                            </h3>
                            <p className="text-neutral-700 leading-relaxed">
                                {project?.project_goals}
                            </p>
                        </div>

                        {/* Challenges */}
                        <div className="p-6 bg-white rounded-2xl border border-neutral-200">
                            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center mb-4">
                                <Wrench className="w-5 h-5 text-orange-600" />
                            </div>
                            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                                Challenges
                            </h3>
                            <p className="text-neutral-700 leading-relaxed">
                                {project?.challenges}
                            </p>
                        </div>
                    </div>
                </motion.section>

                {/* Tech Stack */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="py-16 border-b border-neutral-200"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                                Built With
                            </h2>
                            <p className="text-2xl font-semibold text-neutral-900">
                                Tech Stack
                            </p>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="flex flex-wrap gap-3">
                                {project?.tech_stack.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-2 bg-white text-neutral-700 font-medium rounded-full border border-neutral-200 hover:border-neutral-300 hover:shadow-sm transition-all cursor-default"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Key Features */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="py-16 border-b border-neutral-200"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                        <div className="lg:col-span-4">
                            <h2 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">
                                Highlights
                            </h2>
                            <p className="text-2xl font-semibold text-neutral-900">
                                Key Features
                            </p>
                        </div>
                        <div className="lg:col-span-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {project?.key_features.map((feature, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-3 p-4 bg-white rounded-xl border border-neutral-200"
                                    >
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-neutral-900 text-white text-xs font-bold flex items-center justify-center">
                                            {i + 1}
                                        </span>
                                        <span className="text-neutral-700">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.section>

                {/* Lessons Learned */}
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="py-20"
                >
                    <div className="bg-neutral-900 rounded-3xl p-8 md:p-12 text-center">
                        <Quote className="w-10 h-10 text-neutral-700 mx-auto mb-6" />
                        <blockquote className="text-xl md:text-2xl lg:text-3xl text-white font-medium leading-relaxed max-w-3xl mx-auto mb-6">
                            "{project?.lessons_learned}"
                        </blockquote>
                        <p className="text-neutral-500 text-sm uppercase tracking-wider">
                            Key Takeaway
                        </p>
                    </div>
                </motion.section>
            </main>

            {/* More Projects */}
            <section className="bg-white py-20 border-t border-neutral-200">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">
                            More Projects
                        </h2>
                        <Link
                            href="/#projects"
                            className="text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
                        >
                            View All
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {otherProjects.map((proj, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    href={`/projects/${slugify(proj.title)}`}
                                    className="group block"
                                >
                                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-neutral-100 mb-4">
                                        <Image
                                            src={`/${proj.image}`}
                                            alt={proj.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <h3 className="font-semibold text-neutral-900 group-hover:text-neutral-600 transition-colors mb-1">
                                        {proj.title}
                                    </h3>
                                    <p className="text-sm text-neutral-500">
                                        {proj.category[0]}
                                    </p>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-neutral-900 py-16">
                <div className="max-w-6xl mx-auto px-6 text-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Interested in working together?
                    </h2>
                    <p className="text-neutral-400 mb-8 max-w-md mx-auto">
                        I'm always open to discussing new projects and creative ideas.
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        <Link
                            href="/#contact"
                            className="px-6 py-3 bg-white text-neutral-900 font-semibold rounded-full hover:bg-neutral-100 transition-colors"
                        >
                            Get in Touch
                        </Link>
                        <Link
                            href="/"
                            className="px-6 py-3 text-white font-semibold rounded-full border border-neutral-700 hover:border-neutral-500 transition-colors"
                        >
                            Back to Home
                        </Link>
                    </div>
                    <div className="mt-12 pt-8 border-t border-neutral-800 text-neutral-500 text-sm">
                        <p>© {new Date().getFullYear()} Abin Antony. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Projects
