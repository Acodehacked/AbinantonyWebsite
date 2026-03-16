"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Cloud, Monitor, Palette, Smartphone } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Building blazing-fast, SEO-optimized websites and web applications with modern frameworks.",
        icon: Monitor,
        stats: ["50+ Projects", "99% Uptime", "< 1s Load"],
        accent: "from-cyan-400/70 to-blue-500/70",
    },
    {
        id: 2,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile experiences that users love, built with Flutter & React Native.",
        icon: Smartphone,
        stats: ["iOS & Android", "Offline-First", "60 FPS"],
        accent: "from-violet-400/70 to-fuchsia-500/70",
    },
    {
        id: 3,
        title: "UI/UX Design",
        description: "User-centered design that converts. From wireframes to pixel-perfect interfaces.",
        icon: Palette,
        stats: ["Figma Expert", "Design Systems", "Prototyping"],
        accent: "from-amber-400/70 to-orange-500/70",
    },
    {
        id: 4,
        title: "Cloud & DevOps",
        description: "Scalable infrastructure, CI/CD pipelines, and cloud architecture that grows with you.",
        icon: Cloud,
        stats: ["AWS & GCP", "Docker/K8s", "Auto-Scale"],
        accent: "from-emerald-400/70 to-teal-500/70",
    },
];

export default function ServicesBento() {
    const [activeService, setActiveService] = useState<number | null>(null);

    return (
        <section id="services" className="relative overflow-hidden bg-neutral-950 px-6 py-32 md:px-20">
            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="mb-16 grid grid-cols-1 gap-10 border-b border-white/10 pb-12 md:grid-cols-12 md:gap-8">
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
                        className="max-w-2xl font-manrope text-lg leading-relaxed text-neutral-400 md:col-span-6 md:place-self-end md:text-xl"
                    >
                        I help teams ship products that feel premium and perform reliably, from UX direction to deployment.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
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
    const Icon = service.icon;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-neutral-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-neutral-900 md:p-10"
        >
            <div className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${service.accent}`} />
            <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-white/5 blur-3xl transition-opacity duration-300 group-hover:opacity-90" />

            <div className="relative z-10">
                <div className="mb-8 flex items-start justify-between">
                    <div className="inline-flex items-center gap-3">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                            <Icon className="h-5 w-5 text-white" />
                        </span>
                        <span className="font-manrope text-xs uppercase tracking-[0.2em] text-neutral-400">
                            Service 0{index + 1}
                        </span>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-neutral-500 transition-colors group-hover:text-white" />
                </div>

                <h3 className="mb-3 font-syne text-2xl font-bold text-white md:text-3xl">
                    {service.title}
                </h3>
                <p className="mb-7 font-manrope text-base leading-relaxed text-neutral-400 md:text-lg">
                    {service.description}
                </p>

                <div className="flex flex-wrap gap-2">
                    {service.stats.map((stat, i) => (
                        <span
                            key={i}
                            className={`rounded-full border px-3 py-1.5 font-manrope text-xs font-semibold ${
                                isActive
                                    ? "border-white/35 bg-white/10 text-white"
                                    : "border-neutral-700 bg-neutral-800 text-neutral-300"
                            }`}
                        >
                            {stat}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
