"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cloud, Monitor, Palette, Smartphone } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Web Development",
        description:
            "Building blazing-fast, SEO-optimized websites and web applications with modern frameworks.",
        icon: Monitor,
        stats: ["50+ Projects", "99% Uptime", "< 1s Load"],
    },
    {
        id: 2,
        title: "Mobile Apps",
        description:
            "Native and cross-platform mobile experiences that users love, built with Flutter & React Native.",
        icon: Smartphone,
        stats: ["iOS & Android", "Offline-First", "60 FPS"],
    },
    {
        id: 3,
        title: "UI/UX Design",
        description:
            "User-centered design that converts. From wireframes to pixel-perfect interfaces.",
        icon: Palette,
        stats: ["Figma Expert", "Design Systems", "Prototyping"],
    },
    {
        id: 4,
        title: "Cloud & DevOps",
        description:
            "Scalable infrastructure, CI/CD pipelines, and cloud architecture that grows with you.",
        icon: Cloud,
        stats: ["AWS & GCP", "Docker/K8s", "Auto-Scale"],
    },
];

export default function ServicesBento() {
    const [activeService, setActiveService] = useState<number | null>(null);

    return (
        <section
            id="services"
            className="relative bg-neutral-950 px-6 py-24 md:px-20"
        >
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-16 grid grid-cols-1 gap-6 border-b pb-12 md:grid-cols-12 md:gap-8"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                >
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-syne text-4xl font-bold tracking-tighter text-white md:col-span-6 md:text-8xl"
                    >
                        Services
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl font-manrope text-lg leading-relaxed md:col-span-6 md:place-self-end md:text-xl"
                        style={{ color: "rgba(255,255,255,0.40)" }}
                    >
                        I help teams ship products that feel premium and perform
                        reliably, from UX direction to deployment.
                    </motion.p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 gap-px md:grid-cols-2"
                    style={{ background: "rgba(255,255,255,0.06)", borderRadius: "1.25rem", overflow: "hidden" }}
                >
                    {services.map((service, index) => (
                        <ServiceCard
                            key={service.id}
                            service={service}
                            index={index}
                            isActive={activeService === service.id}
                            onHover={() => setActiveService(service.id)}
                            onLeave={() => setActiveService(null)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ServiceCard({
    service,
    index,
    isActive,
    onHover,
    onLeave,
}: {
    service: (typeof services)[0];
    index: number;
    isActive: boolean;
    onHover: () => void;
    onLeave: () => void;
}) {
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="group relative p-8 md:p-10 transition-colors duration-300"
            style={{
                backgroundColor: isActive ? "#0f0e0c" : "#090807",
            }}
        >
            {/* Orange glow on hover */}
            {isActive && (
                <div
                    className="pointer-events-none absolute inset-0 opacity-20"
                    style={{
                        background:
                            "radial-gradient(ellipse 60% 50% at 30% 0%, #E8590A 0%, transparent 70%)",
                    }}
                />
            )}

            <div className="relative z-10">
                {/* Icon row */}
                <div className="mb-8 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                        <span
                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl transition-colors duration-300"
                            style={{
                                backgroundColor: isActive
                                    ? "rgba(232,89,10,0.15)"
                                    : "rgba(255,255,255,0.05)",
                                border: `1px solid ${isActive ? "rgba(232,89,10,0.35)" : "rgba(255,255,255,0.08)"}`,
                            }}
                        >
                            <Icon
                                className="h-4 w-4 transition-colors duration-300"
                                style={{ color: isActive ? "#E8590A" : "rgba(255,255,255,0.55)" }}
                            />
                        </span>
                        <span
                            className="font-manrope text-xs uppercase tracking-[0.2em]"
                            style={{ color: "rgba(255,255,255,0.30)" }}
                        >
                            0{index + 1}
                        </span>
                    </div>
                    <ArrowUpRight
                        className="h-4 w-4 transition-all duration-300"
                        style={{
                            color: isActive ? "#E8590A" : "rgba(255,255,255,0.20)",
                            transform: isActive ? "translate(2px,-2px)" : "none",
                        }}
                    />
                </div>

                {/* Title */}
                <h3
                    className="mb-3 font-syne text-2xl font-bold text-white md:text-3xl"
                >
                    {service.title}
                </h3>

                {/* Description */}
                <p
                    className="mb-7 font-manrope text-base leading-relaxed md:text-lg"
                    style={{ color: "rgba(255,255,255,0.40)" }}
                >
                    {service.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2">
                    {service.stats.map((stat, i) => (
                        <span
                            key={i}
                            className="rounded-full font-manrope text-xs font-medium transition-colors duration-300"
                            style={{
                                padding: "0.3rem 0.85rem",
                                backgroundColor: isActive
                                    ? "rgba(232,89,10,0.12)"
                                    : "rgba(255,255,255,0.05)",
                                border: `1px solid ${isActive ? "rgba(232,89,10,0.30)" : "rgba(255,255,255,0.08)"}`,
                                color: isActive ? "#E8A070" : "rgba(255,255,255,0.45)",
                            }}
                        >
                            {stat}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
