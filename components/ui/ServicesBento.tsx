"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Monitor, Smartphone, Palette, Cloud, Sparkles } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Building blazing-fast, SEO-optimized websites and web applications with modern frameworks.",
        icon: Monitor,
        stats: ["50+ Projects", "99% Uptime", "< 1s Load"],
    },
    {
        id: 2,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile experiences that users love, built with Flutter & React Native.",
        icon: Smartphone,
        stats: ["iOS & Android", "Offline-First", "60 FPS"],
    },
    {
        id: 3,
        title: "UI/UX Design",
        description: "User-centered design that converts. From wireframes to pixel-perfect interfaces.",
        icon: Palette,
        stats: ["Figma Expert", "Design Systems", "Prototyping"],
    },
    {
        id: 4,
        title: "Cloud & DevOps",
        description: "Scalable infrastructure, CI/CD pipelines, and cloud architecture that grows with you.",
        icon: Cloud,
        stats: ["AWS & GCP", "Docker/K8s", "Auto-Scale"],
    },
];

export default function ServicesBento() {
    const [activeService, setActiveService] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="relative px-6 md:px-20 py-32 bg-white overflow-hidden">

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-left mb-20 border-b border-black/10 pb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-8xl font-bold font-syne text-black mb-6 tracking-tighter"
                    >
                        Services
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-2xl font-manrope text-neutral-600 max-w-2xl"
                    >
                        Transforming ideas into exceptional digital experiences through code, design, and innovation.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
    service: typeof services[0];
    index: number;
    isActive: boolean;
    onHover: () => void;
    onLeave: () => void;
}) {
    const cardRef = useRef<HTMLDivElement>(null);

    const Icon = service.icon;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="group relative border border-black/10 p-8 md:p-12 hover:bg-neutral-50 transition-colors duration-500"
        >
            <div className="relative z-10">
                <div className="flex items-start justify-between mb-8">
                    <Icon className="w-10 h-10 text-black stroke-1" />
                    <span className="text-sm font-manrope text-neutral-400">0{index + 1}</span>
                </div>

                <h3 className="text-2xl md:text-4xl font-bold font-syne text-black mb-4">
                    {service.title}
                </h3>
                <p className="font-manrope text-neutral-500 mb-8 leading-relaxed text-lg">
                    {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {service.stats.map((stat, i) => (
                        <span
                            key={i}
                            className="px-3 py-1.5 text-xs font-bold font-manrope text-neutral-600 bg-neutral-100 rounded-full border border-neutral-200"
                        >
                            {stat}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
