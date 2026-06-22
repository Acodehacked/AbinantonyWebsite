"use client";

import { useState, useRef, useEffect } from "react";
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
    SiAutodesk, SiFramer
} from "react-icons/si";
import { TbBrandCSharp, TbBrandFramerMotion, TbBrandReactNative } from "react-icons/tb";

const BG             = "#0b0906";
const TEXT_PRIMARY   = "#F2EDE8";
const TEXT_MUTED     = "rgba(242,237,232,0.35)";
const TEXT_DIM       = "rgba(242,237,232,0.15)";
const CHIP_BG        = "rgba(255,255,255,0.04)";
const CHIP_BORDER    = "rgba(255,255,255,0.08)";
const CHIP_TEXT      = "rgba(242,237,232,0.65)";
const ORANGE         = "#E84018";
const ORANGE_GLOW    = "rgba(200,77,10,0.30)";

const categories = [
    {
        id: "frontend",
        label: "Frontend Development.",
        items: [
            { name: "React", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Vue.js", icon: FaVuejs },
            { name: "Angular", icon: FaAngular },
            { name: "Flutter", icon: SiFlutter },
            { name: "React Native", icon: TbBrandReactNative },
            { name: "TailwindCSS", icon: SiTailwindcss },
            { name: "Bootstrap", icon: SiBootstrap },
            { name: "MUI", icon: SiMui },
            { name: "Chakra UI", icon: SiChakraui },
            { name: "ShadCN", icon: SiNextdotjs },
            { name: "Three.js", icon: SiThreedotjs },
            { name: "Framer Motion", icon: TbBrandFramerMotion },
        ]
    },
    {
        id: "backend",
        label: "Backend & Databases.",
        items: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express.js", icon: SiExpress },
            { name: "Django", icon: SiDjango },
            { name: "FastAPI", icon: SiFastapi },
            { name: "Laravel", icon: SiLaravel },
            { name: "Spring", icon: SiSpring },
            { name: "GraphQL", icon: SiGraphql },
            { name: "tRPC", icon: SiTrpc },
            { name: "MongoDB", icon: SiMongodb },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MySQL", icon: SiMysql },
            { name: "Firebase", icon: SiFirebase },
            { name: "Supabase", icon: SiSupabase },
            { name: "Redis", icon: SiRedis },
        ]
    },
    {
        id: "uiux",
        label: "UI UX Designing.",
        items: [
            { name: "Figma", icon: FaFigma },
            { name: "Adobe XD", icon: SiAdobexd },
            { name: "Photoshop", icon: SiAdobephotoshop },
            { name: "Illustrator", icon: SiAdobeillustrator },
            { name: "After Effects", icon: SiAdobeaftereffects },
            { name: "Blender", icon: SiBlender },
            { name: "Canva", icon: SiCanva },
            { name: "Autodesk Sketchbook", icon: SiAutodesk },
            { name: "Framer", icon: SiFramer },
        ]
    },
    {
        id: "cloud",
        label: "Cloud & DevOps.",
        items: [
            { name: "AWS", icon: FaAws },
            { name: "Google Cloud", icon: FaGoogle },
            { name: "DigitalOcean", icon: SiDigitalocean },
            { name: "Cloudflare", icon: SiCloudflare },
            { name: "Vercel", icon: SiVercel },
            { name: "Docker", icon: FaDocker },
            { name: "Git", icon: FaGitAlt },
            { name: "GitHub Actions", icon: SiGithubactions },
            { name: "GitLab CI", icon: SiGitlab },
            { name: "Linux", icon: FaLinux },
        ]
    },
    {
        id: "architecture",
        label: "Cloud Architecture.",
        items: [
            { name: "Kubernetes", icon: SiKubernetes },
            { name: "Terraform", icon: SiTerraform },
            { name: "Ansible", icon: SiAnsible },
            { name: "Jenkins", icon: SiJenkins },
            { name: "Prometheus", icon: SiPrometheus },
            { name: "Grafana", icon: SiGrafana },
            { name: "Nginx", icon: SiNginx },
            { name: "Apache", icon: SiApache },
            { name: "Kafka", icon: SiApachekafka },
            { name: "RabbitMQ", icon: SiRabbitmq },
        ]
    },
    {
        id: "languages",
        label: "Languages.",
        items: [
            { name: "JavaScript", icon: SiJavascript },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Python", icon: FaPython },
            { name: "Java", icon: FaJava },
            { name: "C++", icon: SiCplusplus },
            { name: "C#", icon: TbBrandCSharp },
            { name: "PHP", icon: SiPhp },
            { name: "Dart", icon: SiDart },
            { name: "Kotlin", icon: SiKotlin },
            { name: "GDScript", icon: SiGodotengine },
        ]
    },
    {
        id: "ai",
        label: "AI & Machine Learning.",
        items: [
            { name: "TensorFlow", icon: SiTensorflow },
            { name: "PyTorch", icon: SiPytorch },
            { name: "OpenAI", icon: SiOpenai },
            { name: "Hugging Face", icon: SiHuggingface },
            { name: "LangChain", icon: SiLangchain },
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
        <section
            className="relative px-6 py-24 md:px-20 overflow-hidden"
            style={{ backgroundColor: BG }}
        >
            {/* Orange ambient glow orb — sits behind the chips panel */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    right: "-5%",
                    top: "50%",
                    transform: "translateY(-50%)",
                    width: "55vw",
                    height: "55vw",
                    maxWidth: "700px",
                    maxHeight: "700px",
                    background: "radial-gradient(circle, rgba(200,77,10,0.13) 0%, transparent 65%)",
                    pointerEvents: "none",
                }}
            />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12">
                {/* Left Column */}
                <div className="md:col-span-5 flex flex-col justify-between">
                    <div>
                        <p
                            className="font-manrope uppercase tracking-widest text-xs mb-10"
                            style={{ color: TEXT_DIM }}
                        >
                            Stack
                        </p>
                        <h2
                            className="mb-12 font-syne font-bold leading-none"
                            style={{
                                fontSize: "clamp(3rem, 6vw, 5rem)",
                                color: TEXT_DIM,
                                letterSpacing: "-0.03em",
                            }}
                        >
                            Tech&shy;nolo&shy;gies
                        </h2>
                    </div>

                    <div className="flex flex-col gap-1">
                        {categories.map((category) => {
                            const isActive = activeCategory === category.id;
                            return (
                                <button
                                    key={category.id}
                                    onMouseEnter={() => setActiveCategory(category.id)}
                                    className="text-left font-syne font-bold transition-all duration-300"
                                    style={{
                                        fontSize: "clamp(1.1rem, 2.2vw, 1.75rem)",
                                        color: isActive ? TEXT_PRIMARY : TEXT_MUTED,
                                        paddingLeft: isActive ? "1rem" : "0",
                                        borderLeft: `2px solid ${isActive ? ORANGE : "transparent"}`,
                                        textShadow: isActive ? `0 0 40px ${ORANGE_GLOW}` : "none",
                                        lineHeight: 1.7,
                                    }}
                                >
                                    {category.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Vertical divider — desktop only */}
                <div
                    className="hidden md:block md:col-span-1"
                    style={{ display: "flex", alignItems: "stretch", justifyContent: "center" }}
                >
                    <div
                        style={{
                            width: "1px",
                            background: `linear-gradient(to bottom, transparent, ${ORANGE} 40%, ${ORANGE} 60%, transparent)`,
                            opacity: 0.35,
                            margin: "0 auto",
                        }}
                    />
                </div>

                {/* Right Column */}
                <div className="md:col-span-6 flex items-center">
                    <div ref={containerRef} className="flex flex-wrap gap-3 content-start">
                        {categories
                            .find((c) => c.id === activeCategory)
                            ?.items.map((item) => (
                                <div
                                    key={item.name}
                                    className="group flex items-center gap-2 rounded-full px-5 py-2.5 transition-all duration-200 hover:scale-105 cursor-default"
                                    style={{
                                        backgroundColor: CHIP_BG,
                                        border: `1px solid ${CHIP_BORDER}`,
                                    }}
                                >
                                    <item.icon className="w-4 h-4" style={{ color: TEXT_MUTED }} />
                                    <span
                                        className="text-sm font-medium font-manrope"
                                        style={{ color: CHIP_TEXT }}
                                    >
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
