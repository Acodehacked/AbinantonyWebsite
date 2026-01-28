"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
    FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaJava, FaDocker, FaGitAlt, FaAws, FaGoogle, FaFigma, FaLinux
} from "react-icons/fa";
import {
    SiNextdotjs, SiFlutter, SiTailwindcss, SiBootstrap, SiChakraui, SiThreedotjs,
    SiExpress, SiDjango, SiFastapi, SiLaravel, SiSpring, SiGraphql, SiTrpc, SiMongodb, SiPostgresql,
    SiMysql, SiFirebase, SiSupabase, SiDigitalocean, SiCloudflare, SiVercel, SiGithubactions, SiGitlab,
    SiJavascript, SiTypescript, SiCplusplus, SiPhp, SiDart, SiKotlin, SiGodotengine,
    SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiAdobeaftereffects, SiBlender, SiCanva, SiMui,
    SiTensorflow, SiPytorch, SiOpenai, SiHuggingface, SiLangchain,
    SiKubernetes, SiTerraform, SiAnsible, SiJenkins, SiPrometheus, SiGrafana, SiNginx, SiApache, SiApachekafka, SiRabbitmq, SiRedis,
    SiAutodesk,
    SiFramer
} from "react-icons/si";
import { TbBrandCSharp, TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";
import { cn } from "@/lib/utils";

const categories = [
    {
        id: "frontend",
        label: "Frontend Development.",
        items: [
            { name: "React", icon: FaReact, color: "text-blue-400" },
            { name: "Next.js", icon: SiNextdotjs, color: "text-neutral-800" },
            { name: "Vue.js", icon: FaVuejs, color: "text-green-500" },
            { name: "Angular", icon: FaAngular, color: "text-red-600" },
            { name: "Flutter", icon: SiFlutter, color: "text-blue-400" },
            { name: "React Native", icon: TbBrandReactNative, color: "text-blue-500" },
            { name: "TailwindCSS", icon: SiTailwindcss, color: "text-cyan-400" },
            { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-600" },
            { name: "MUI", icon: SiMui, color: "text-blue-600" },
            { name: "Chakra UI", icon: SiChakraui, color: "text-teal-500" },
            { name: "ShadCN", icon: SiNextdotjs, color: "text-neutral-800" },
            { name: "Three.js", icon: SiThreedotjs, color: "text-neutral-800" },
            { name: "Framer Motion", icon: TbBrandFramerMotion, color: "text-purple-500" },
        ]
    },
    {
        id: "backend",
        label: "Backend & Databases.",
        items: [
            { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
            { name: "Express.js", icon: SiExpress, color: "text-neutral-800" },
            { name: "Django", icon: SiDjango, color: "text-green-800" },
            { name: "FastAPI", icon: SiFastapi, color: "text-teal-600" },
            { name: "Laravel", icon: SiLaravel, color: "text-red-600" },
            { name: "Spring", icon: SiSpring, color: "text-green-500" },
            { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
            { name: "tRPC", icon: SiTrpc, color: "text-blue-500" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
            { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
            { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
            { name: "Firebase", icon: SiFirebase, color: "text-yellow-500" },
            { name: "Supabase", icon: SiSupabase, color: "text-green-400" },
            { name: "Redis", icon: SiRedis, color: "text-red-500" },
        ]
    },
    {
        id: "uiux",
        label: "UI UX Designing.",
        items: [
            { name: "Figma", icon: FaFigma, color: "text-purple-500" },
            { name: "Adobe XD", icon: SiAdobexd, color: "text-pink-600" },
            { name: "Photoshop", icon: SiAdobephotoshop, color: "text-blue-600" },
            { name: "Illustrator", icon: SiAdobeillustrator, color: "text-orange-600" },
            { name: "After Effects", icon: SiAdobeaftereffects, color: "text-purple-900" },
            { name: "Blender", icon: SiBlender, color: "text-orange-500" },
            { name: "Canva", icon: SiCanva, color: "text-blue-400" },
            { name: "Autodesk Sketchbook", icon: SiAutodesk, color: "text-orange-800" },
            { name: "Framer", icon: SiFramer, color: "text-blue-500" },
        ]
    },
    {
        id: "cloud",
        label: "Cloud & DevOps.",
        items: [
            { name: "AWS", icon: FaAws, color: "text-orange-500" },
            { name: "Google Cloud", icon: FaGoogle, color: "text-blue-500" },
            { name: "DigitalOcean", icon: SiDigitalocean, color: "text-blue-600" },
            { name: "Cloudflare", icon: SiCloudflare, color: "text-orange-400" },
            { name: "Vercel", icon: SiVercel, color: "text-neutral-800" },
            { name: "Docker", icon: FaDocker, color: "text-blue-500" },
            { name: "Git", icon: FaGitAlt, color: "text-red-500" },
            { name: "GitHub Actions", icon: SiGithubactions, color: "text-blue-600" },
            { name: "GitLab CI", icon: SiGitlab, color: "text-orange-600" },
            { name: "Linux", icon: FaLinux, color: "text-neutral-800" },
        ]
    },
    {
        id: "architecture",
        label: "Cloud Architecture.",
        items: [
            { name: "Kubernetes", icon: SiKubernetes, color: "text-blue-600" },
            { name: "Terraform", icon: SiTerraform, color: "text-purple-600" },
            { name: "Ansible", icon: SiAnsible, color: "text-neutral-800" },
            { name: "Jenkins", icon: SiJenkins, color: "text-red-600" },
            { name: "Prometheus", icon: SiPrometheus, color: "text-orange-600" },
            { name: "Grafana", icon: SiGrafana, color: "text-orange-500" },
            { name: "Nginx", icon: SiNginx, color: "text-green-600" },
            { name: "Apache", icon: SiApache, color: "text-red-500" },
            { name: "Kafka", icon: SiApachekafka, color: "text-neutral-800" },
            { name: "RabbitMQ", icon: SiRabbitmq, color: "text-orange-600" },
        ]
    },
    {
        id: "languages",
        label: "Languages.",
        items: [
            { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
            { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
            { name: "Python", icon: FaPython, color: "text-blue-400" },
            { name: "Java", icon: FaJava, color: "text-red-500" },
            { name: "C++", icon: SiCplusplus, color: "text-blue-600" },
            { name: "C#", icon: TbBrandCSharp, color: "text-purple-600" },
            { name: "PHP", icon: SiPhp, color: "text-purple-400" },
            { name: "Dart", icon: SiDart, color: "text-blue-500" },
            { name: "Kotlin", icon: SiKotlin, color: "text-purple-500" },
            { name: "GDScript", icon: SiGodotengine, color: "text-blue-400" },
        ]
    },
    {
        id: "ai",
        label: "AI & Machine Learning.",
        items: [
            { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-500" },
            { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
            { name: "OpenAI", icon: SiOpenai, color: "text-neutral-800" },
            { name: "Hugging Face", icon: SiHuggingface, color: "text-yellow-500" },
            { name: "LangChain", icon: SiLangchain, color: "text-green-600" },
        ]
    },
];

export default function TechStack() {
    const [activeCategory, setActiveCategory] = useState(categories[0].id);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (containerRef.current) {
            gsap.fromTo(
                containerRef.current.children,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.3, stagger: 0.02, ease: "power2.out" }
            );
        }
    }, [activeCategory]);

    return (
        <section className="px-6 md:px-20 py-24 bg-neutral-50">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Left Column: Categories */}
                <div className="md:col-span-5 space-y-8">
                    <h2 className="text-4xl md:text-6xl font-bold text-neutral-300 mb-12">Technologies</h2>
                    <div className="flex flex-col gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onMouseEnter={() => setActiveCategory(category.id)}
                                className={cn(
                                    "text-left text-2xl md:text-4xl font-bold transition-all duration-300",
                                    activeCategory === category.id
                                        ? "text-black translate-x-4"
                                        : "text-neutral-300 hover:text-neutral-400"
                                )}
                            >
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column: Tech Chips */}
                <div className="md:col-span-7 flex items-center">
                    <div ref={containerRef} className="flex flex-wrap gap-4 content-start">
                        {categories
                            .find((c) => c.id === activeCategory)
                            ?.items.map((item) => (
                                <div
                                    key={item.name}
                                    className="group relative flex items-center gap-2 px-6 py-3 bg-white border border-neutral-200 rounded-full hover:border-black transition-all duration-200 hover:scale-105 shadow-sm hover:shadow-md cursor-default"
                                >
                                    <item.icon className={cn("w-6 h-6 transition-colors", item.color)} />
                                    <span className="text-lg font-medium text-neutral-600 group-hover:text-black transition-colors">
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
