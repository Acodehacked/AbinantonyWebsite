"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Monitor, Smartphone, Palette, Cloud, Sparkles, Code2, Cpu, Layers } from "lucide-react";

const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Building blazing-fast, SEO-optimized websites and web applications with modern frameworks.",
        icon: Monitor,
        color: "from-blue-500 to-cyan-400",
        shadowColor: "shadow-blue-500/20",
        stats: ["50+ Projects", "99% Uptime", "< 1s Load"],
    },
    {
        id: 2,
        title: "Mobile Apps",
        description: "Native and cross-platform mobile experiences that users love, built with Flutter & React Native.",
        icon: Smartphone,
        color: "from-violet-500 to-purple-400",
        shadowColor: "shadow-violet-500/20",
        stats: ["iOS & Android", "Offline-First", "60 FPS"],
    },
    {
        id: 3,
        title: "UI/UX Design",
        description: "User-centered design that converts. From wireframes to pixel-perfect interfaces.",
        icon: Palette,
        color: "from-pink-500 to-rose-400",
        shadowColor: "shadow-pink-500/20",
        stats: ["Figma Expert", "Design Systems", "Prototyping"],
    },
    {
        id: 4,
        title: "Cloud & DevOps",
        description: "Scalable infrastructure, CI/CD pipelines, and cloud architecture that grows with you.",
        icon: Cloud,
        color: "from-emerald-500 to-teal-400",
        shadowColor: "shadow-emerald-500/20",
        stats: ["AWS & GCP", "Docker/K8s", "Auto-Scale"],
    },
];

export default function ServicesBento() {
    const [activeService, setActiveService] = useState<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="relative px-6 md:px-20 py-32 bg-neutral-950 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0">
                {/* Grid */}
                <div
                    className="absolute inset-0 opacity-[0.02]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                        backgroundSize: '40px 40px'
                    }}
                />

                {/* Gradient orbs */}
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-violet-500/10 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6"
                    >
                        <Sparkles className="w-4 h-4 text-violet-400" />
                        <span className="text-sm text-neutral-400">Services</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                    >
                        What I{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 via-pink-400 to-orange-400">
                            Bring
                        </span>{" "}
                        to Life
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto"
                    >
                        Transforming ideas into exceptional digital experiences through code, design, and innovation.
                    </motion.p>
                </div>

                {/* Services Grid */}
                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10"
                >
                    {[
                        { value: "50+", label: "Projects Delivered" },
                        { value: "30+", label: "Happy Clients" },
                        { value: "5+", label: "Years Experience" },
                        { value: "99%", label: "Client Satisfaction" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                            <div className="text-sm text-neutral-500">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
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

    // Mouse position for spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation
    const springConfig = { damping: 25, stiffness: 200 };
    const spotlightX = useSpring(mouseX, springConfig);
    const spotlightY = useSpring(mouseY, springConfig);

    // 3D rotation based on mouse position
    const rotateX = useTransform(mouseY, [-150, 150], [5, -5]);
    const rotateY = useTransform(mouseX, [-150, 150], [-5, 5]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        mouseX.set(e.clientX - centerX);
        mouseY.set(e.clientY - centerY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
        onLeave();
    };

    const Icon = service.icon;

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={onHover}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: isActive ? rotateX : 0,
                rotateY: isActive ? rotateY : 0,
                transformStyle: "preserve-3d",
            }}
            className="group relative"
        >
            <div className={`relative h-full p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 ${isActive ? `shadow-2xl ${service.shadowColor}` : ''}`}>

                {/* Spotlight effect */}
                <motion.div
                    className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                        background: `radial-gradient(400px circle at ${spotlightX}px ${spotlightY}px, rgba(255,255,255,0.06), transparent 40%)`,
                    }}
                />

                {/* Gradient border on hover */}
                <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r ${service.color} p-[1px]`}>
                    <div className="w-full h-full rounded-3xl bg-neutral-950" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} p-[1px] mb-8`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 400 }}
                    >
                        <div className="w-full h-full rounded-2xl bg-neutral-950 flex items-center justify-center">
                            <Icon className="w-7 h-7 text-white" />
                        </div>
                    </motion.div>

                    {/* Title & Description */}
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all duration-300">
                        {service.title}
                    </h3>
                    <p className="text-neutral-400 mb-8 leading-relaxed">
                        {service.description}
                    </p>

                    {/* Stats Pills */}
                    <div className="flex flex-wrap gap-2">
                        {service.stats.map((stat, i) => (
                            <motion.span
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="px-3 py-1.5 text-xs font-medium text-neutral-300 bg-white/5 rounded-full border border-white/10"
                            >
                                {stat}
                            </motion.span>
                        ))}
                    </div>

                    {/* Hover Arrow */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: isActive ? 1 : 0, x: isActive ? 0 : -10 }}
                        className="absolute top-8 right-8 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"
                    >
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </motion.div>
                </div>

                {/* Corner Glow */}
                <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
            </div>
        </motion.div>
    );
}
