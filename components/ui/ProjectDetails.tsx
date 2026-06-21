"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import Docker from "@/components/ui/Docker";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import MouseIndicator from "@/components/ui/MouseIndicator";
import { EVENTS } from "@/lib";
import { slugify } from "@/lib/utils";

interface ProjectDetailsProps {
    project: any;
}

const divider = { borderTop: "1px solid rgba(255,255,255,0.07)" };

export default function ProjectDetails({ project }: ProjectDetailsProps) {
    const otherProjects = EVENTS.filter((p) => p.title !== project?.title).slice(0, 3);

    const fadeUp = {
        hidden:  { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    return (
        <main
            className="min-h-screen selection:bg-white selection:text-black"
            style={{ backgroundColor: "#0b0906", color: "#fff" }}
        >
            <MouseIndicator />
            <Navbar />
            <Docker />

            {/* ── Hero card (matches landing page aesthetic) ── */}
            <div className="px-3 md:px-4 pt-20 md:pt-24">
                {/* Gradient card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative overflow-hidden"
                    style={{
                        borderRadius: "2rem",
                        background:
                            "radial-gradient(ellipse 85% 75% at 50% 100%, #c84d0a 0%, #7a2e06 28%, #2a0e02 52%, #0b0906 68%)",
                        backgroundColor: "#0b0906",
                        minHeight: "82vh",
                    }}
                >
                    {/* Desktop: left text / right screenshot */}
                    <div className="hidden md:grid relative z-10 h-full" style={{ gridTemplateColumns: "1fr 1.15fr", minHeight: "82vh" }}>

                        {/* Left — text */}
                        <div className="flex flex-col justify-between p-10 pt-12 pb-10">
                            <motion.div
                                initial={{ opacity: 0, x: -16 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.1 }}
                            >
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2 font-manrope text-sm font-medium transition-colors"
                                    style={{ color: "rgba(255,255,255,0.45)" }}
                                    onMouseEnter={e => (e.currentTarget.style.color = "#fff")}
                                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                                >
                                    <ArrowLeft className="w-4 h-4" /> Back to Home
                                </Link>
                            </motion.div>

                            <div>
                                {/* Category pills */}
                                <motion.div
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="flex flex-wrap gap-2 mb-6"
                                >
                                    {project.category.map((cat: string) => (
                                        <span
                                            key={cat}
                                            className="font-manrope text-xs font-medium rounded-full"
                                            style={{
                                                padding: "0.28rem 0.8rem",
                                                backgroundColor: "rgba(255,255,255,0.08)",
                                                border: "1px solid rgba(255,255,255,0.13)",
                                                color: "rgba(255,255,255,0.60)",
                                            }}
                                        >
                                            {cat}
                                        </span>
                                    ))}
                                </motion.div>

                                {/* Title */}
                                <motion.h1
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.65, delay: 0.28, ease: "easeOut" }}
                                    className="font-syne font-bold text-white leading-none mb-5"
                                    style={{ fontSize: "clamp(2.6rem, 5.5vw, 5rem)", letterSpacing: "-0.03em" }}
                                >
                                    {project.title}
                                </motion.h1>

                                {/* Subtitle */}
                                {project.subtitle && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 16 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: 0.38, ease: "easeOut" }}
                                        className="font-manrope leading-relaxed mb-8"
                                        style={{ fontSize: "clamp(0.9rem, 1.4vw, 1.1rem)", color: "rgba(255,255,255,0.48)", maxWidth: "42ch" }}
                                    >
                                        {project.subtitle}
                                    </motion.p>
                                )}

                                {/* CTA */}
                                {project.link && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.48 }}
                                    >
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 font-manrope font-semibold text-sm text-white transition-all"
                                            style={{
                                                padding: "0.7rem 1.5rem",
                                                borderRadius: "9999px",
                                                backgroundColor: "#E8590A",
                                            }}
                                            onMouseEnter={e => ((e.currentTarget as HTMLElement).style.filter = "brightness(1.12)")}
                                            onMouseLeave={e => ((e.currentTarget as HTMLElement).style.filter = "none")}
                                        >
                                            Visit Site <ArrowUpRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </motion.div>
                                )}
                            </div>
                        </div>

                        {/* Right — floating screenshot */}
                        <div className="flex items-end justify-center pb-0 pr-8 relative">
                            {/* Soft glow behind image */}
                            <div
                                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-1/2 pointer-events-none"
                                style={{
                                    background: "radial-gradient(ellipse at center bottom, rgba(200,77,10,0.35) 0%, transparent 70%)",
                                    filter: "blur(32px)",
                                }}
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
                                className="relative z-10 w-full"
                                style={{ maxWidth: "640px" }}
                            >
                                <div
                                    className="overflow-hidden"
                                    style={{
                                        borderRadius: "1.25rem 1.25rem 0 0",
                                        border: "1px solid rgba(255,255,255,0.10)",
                                        borderBottom: "none",
                                        boxShadow: "0 -20px 80px rgba(0,0,0,0.55)",
                                    }}
                                >
                                    {/* Fake browser chrome bar */}
                                    <div
                                        className="flex items-center gap-2 px-4 py-3"
                                        style={{ backgroundColor: "rgba(20,16,12,0.95)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                                    >
                                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />
                                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />
                                        <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />
                                        <div
                                            className="flex-1 mx-3 rounded-full font-manrope text-xs flex items-center px-3"
                                            style={{
                                                height: "1.4rem",
                                                backgroundColor: "rgba(255,255,255,0.06)",
                                                color: "rgba(255,255,255,0.25)",
                                            }}
                                        >
                                            {project.link ? project.link.replace(/^https?:\/\//, "") : project.title.toLowerCase().replace(/\s+/g, "") + ".com"}
                                        </div>
                                    </div>
                                    <Image
                                        src={project.image.startsWith("/") ? project.image : `/${project.image}`}
                                        alt={project.title}
                                        width={760}
                                        height={480}
                                        priority
                                        className="w-full h-auto block"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Mobile layout */}
                    <div className="flex flex-col md:hidden relative z-10" style={{ minHeight: "85vh" }}>
                        <div className="flex items-start justify-between px-6 pt-6 pb-4">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-1.5 font-manrope text-sm"
                                style={{ color: "rgba(255,255,255,0.45)" }}
                            >
                                <ArrowLeft className="w-3.5 h-3.5" /> Home
                            </Link>
                            <div className="flex flex-wrap gap-1.5 justify-end" style={{ maxWidth: "55%" }}>
                                {project.category.slice(0, 2).map((cat: string) => (
                                    <span
                                        key={cat}
                                        className="font-manrope text-[11px] rounded-full"
                                        style={{
                                            padding: "0.2rem 0.65rem",
                                            backgroundColor: "rgba(255,255,255,0.08)",
                                            border: "1px solid rgba(255,255,255,0.10)",
                                            color: "rgba(255,255,255,0.50)",
                                        }}
                                    >
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="px-6 pb-6">
                            <h1
                                className="font-syne font-bold text-white leading-none mb-3"
                                style={{ fontSize: "clamp(2rem, 9vw, 3rem)", letterSpacing: "-0.025em" }}
                            >
                                {project.title}
                            </h1>
                            {project.subtitle && (
                                <p
                                    className="font-manrope leading-relaxed mb-5"
                                    style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.48)" }}
                                >
                                    {project.subtitle}
                                </p>
                            )}
                            {project.link && (
                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="inline-flex items-center gap-2 font-manrope font-semibold text-sm text-white"
                                    style={{ padding: "0.6rem 1.25rem", borderRadius: "9999px", backgroundColor: "#E8590A" }}
                                >
                                    Visit Site <ArrowUpRight className="w-3.5 h-3.5" />
                                </Link>
                            )}
                        </div>

                        {/* Screenshot floating up from bottom */}
                        <div className="flex-1 flex items-end justify-center px-4">
                            <div
                                className="w-full overflow-hidden"
                                style={{
                                    borderRadius: "1rem 1rem 0 0",
                                    border: "1px solid rgba(255,255,255,0.10)",
                                    borderBottom: "none",
                                    boxShadow: "0 -16px 60px rgba(0,0,0,0.5)",
                                }}
                            >
                                <div
                                    className="flex items-center gap-1.5 px-3 py-2"
                                    style={{ backgroundColor: "rgba(20,16,12,0.95)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
                                >
                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />
                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />
                                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.12)" }} />
                                </div>
                                <Image
                                    src={project.image.startsWith("/") ? project.image : `/${project.image}`}
                                    alt={project.title}
                                    width={600}
                                    height={380}
                                    priority
                                    className="w-full h-auto block"
                                />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Orange tech ticker — mirrors landing page bar */}
                <div
                    className="mt-3 overflow-hidden flex items-center"
                    style={{ borderRadius: "1rem", backgroundColor: "#E8590A", minHeight: "3rem" }}
                >
                    <div className="hero-ticker py-3">
                        {[0, 1].map((i) => (
                            <span
                                key={i}
                                className="font-manrope font-medium text-white tracking-wide whitespace-nowrap"
                                style={{ fontSize: "clamp(0.78rem, 1.3vw, 0.95rem)", paddingRight: "4rem", paddingLeft: "2rem" }}
                            >
                                {[...project.tech_stack, ...project.tech_stack, ...project.tech_stack].join("  —  ")}&nbsp;&nbsp;&nbsp;&nbsp;
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Content ── */}
            <div className="px-6 md:px-20 py-20 max-w-7xl mx-auto">

                {/* Overview + Sidebar */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20"
                    style={divider}
                >
                    {/* Sidebar */}
                    <motion.aside variants={fadeUp} className="lg:col-span-4 space-y-10">
                        {/* Categories */}
                        <div>
                            <p
                                className="font-manrope text-xs uppercase tracking-[0.2em] mb-4"
                                style={{ color: "rgba(255,255,255,0.30)" }}
                            >
                                Categories
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.category.map((cat: string) => (
                                    <span
                                        key={cat}
                                        className="font-manrope text-sm rounded-full"
                                        style={{
                                            padding: "0.3rem 0.85rem",
                                            backgroundColor: "rgba(255,255,255,0.05)",
                                            border: "1px solid rgba(255,255,255,0.08)",
                                            color: "rgba(255,255,255,0.60)",
                                        }}
                                    >
                                        {cat}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Tech Stack */}
                        <div>
                            <p
                                className="font-manrope text-xs uppercase tracking-[0.2em] mb-4"
                                style={{ color: "rgba(255,255,255,0.30)" }}
                            >
                                Tech Stack
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech_stack.map((tech: string) => (
                                    <span
                                        key={tech}
                                        className="font-manrope text-sm rounded-full"
                                        style={{
                                            padding: "0.3rem 0.85rem",
                                            backgroundColor: "rgba(232,89,10,0.10)",
                                            border: "1px solid rgba(232,89,10,0.22)",
                                            color: "#E8A070",
                                        }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* CTA */}
                        {project.link && (
                            <Link
                                href={project.link}
                                target="_blank"
                                className="inline-flex items-center gap-2 font-manrope font-semibold text-sm text-white transition-all hover:brightness-110"
                                style={{
                                    padding: "0.7rem 1.5rem",
                                    borderRadius: "9999px",
                                    backgroundColor: "#E8590A",
                                }}
                            >
                                Visit Site <ExternalLink className="w-3.5 h-3.5" />
                            </Link>
                        )}
                    </motion.aside>

                    {/* Main */}
                    <div className="lg:col-span-8 space-y-14">
                        <motion.div variants={fadeUp}>
                            <p
                                className="font-manrope text-xs uppercase tracking-[0.2em] mb-4"
                                style={{ color: "rgba(255,255,255,0.30)" }}
                            >
                                Overview
                            </p>
                            <p
                                className="font-manrope leading-relaxed"
                                style={{ fontSize: "clamp(1.05rem, 1.8vw, 1.25rem)", color: "rgba(255,255,255,0.72)" }}
                            >
                                {project.description}
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <motion.div
                                variants={fadeUp}
                                className="rounded-2xl p-6"
                                style={{ backgroundColor: "#0f0d0a", border: "1px solid rgba(255,255,255,0.07)" }}
                            >
                                <p
                                    className="font-manrope text-xs uppercase tracking-[0.2em] mb-3"
                                    style={{ color: "#E8590A" }}
                                >
                                    Challenge
                                </p>
                                <p className="font-manrope text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                                    {project.challenges}
                                </p>
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                className="rounded-2xl p-6"
                                style={{ backgroundColor: "#0f0d0a", border: "1px solid rgba(255,255,255,0.07)" }}
                            >
                                <p
                                    className="font-manrope text-xs uppercase tracking-[0.2em] mb-3"
                                    style={{ color: "#E8590A" }}
                                >
                                    Goal
                                </p>
                                <p className="font-manrope text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                                    {project.project_goals}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* Project image */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="py-20"
                    style={divider}
                >
                    <div
                        className="rounded-2xl overflow-hidden"
                        style={{ border: "1px solid rgba(255,255,255,0.07)" }}
                    >
                        <Image
                            src={project.image.startsWith("/") ? project.image : `/${project.image}`}
                            alt={project.title}
                            width={1400}
                            height={800}
                            className="w-full h-auto"
                        />
                    </div>
                </motion.div>

                {/* Key Features */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
                    className="py-20"
                    style={divider}
                >
                    <motion.p
                        variants={fadeUp}
                        className="font-manrope text-xs uppercase tracking-[0.2em] mb-3"
                        style={{ color: "rgba(255,255,255,0.30)" }}
                    >
                        Highlights
                    </motion.p>
                    <motion.h2
                        variants={fadeUp}
                        className="font-syne font-bold text-white mb-12"
                        style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
                    >
                        Key Features
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {project.key_features.map((feature: string, i: number) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                className="flex items-start gap-4 rounded-xl p-5"
                                style={{
                                    backgroundColor: "#0f0d0a",
                                    border: "1px solid rgba(255,255,255,0.07)",
                                }}
                            >
                                <span
                                    className="font-syne font-bold text-sm shrink-0 mt-0.5 w-6 text-right"
                                    style={{ color: "#E8590A" }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span className="font-manrope text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                                    {feature}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Lessons Learned */}
                {project.lessons_learned && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="py-20"
                        style={divider}
                    >
                        <div
                            className="rounded-2xl p-8 md:p-12"
                            style={{
                                backgroundColor: "#0f0d0a",
                                borderLeft: "3px solid #E8590A",
                                border: "1px solid rgba(255,255,255,0.07)",
                                borderLeftColor: "#E8590A",
                                borderLeftWidth: "3px",
                            }}
                        >
                            <p
                                className="font-manrope text-xs uppercase tracking-[0.2em] mb-6"
                                style={{ color: "#E8590A" }}
                            >
                                Key Takeaway
                            </p>
                            <blockquote
                                className="font-syne font-medium text-white leading-snug"
                                style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", letterSpacing: "-0.015em" }}
                            >
                                &ldquo;{project.lessons_learned}&rdquo;
                            </blockquote>
                        </div>
                    </motion.div>
                )}
            </div>

            {/* ── More Projects ── */}
            {otherProjects.length > 0 && (
                <section className="px-6 md:px-20 py-20" style={divider}>
                    <div className="max-w-7xl mx-auto">
                        <div className="flex items-end justify-between mb-12">
                            <h2
                                className="font-syne font-bold text-white"
                                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)", letterSpacing: "-0.02em" }}
                            >
                                More Projects
                            </h2>
                            <Link
                                href="/#projects"
                                className="font-manrope text-sm flex items-center gap-1 transition-colors hover:text-white"
                                style={{ color: "rgba(255,255,255,0.40)" }}
                            >
                                View All <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {otherProjects.map((proj, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.08, duration: 0.5 }}
                                >
                                    <Link href={`/projects/${slugify(proj.title)}`} className="group block">
                                        <div
                                            className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4"
                                            style={{ backgroundColor: "#0f0d0a" }}
                                        >
                                            <Image
                                                src={`/${proj.image}`}
                                                alt={proj.title}
                                                fill
                                                className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                                            />
                                        </div>
                                        <h3
                                            className="font-syne font-bold text-white mb-1 group-hover:text-white/70 transition-colors"
                                            style={{ fontSize: "1.05rem" }}
                                        >
                                            {proj.title}
                                        </h3>
                                        <p className="font-manrope text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
                                            {proj.category[0]}
                                        </p>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </main>
    );
}
