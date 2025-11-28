import { EVENTS } from "@/constants";
import Docker from "@/components/ui/Docker";
import LiquidMenu from "@/components/ui/LiquidMenu";
import Footer from "@/components/ui/Footer";
import { GoArrowUpRight } from "react-icons/go";
import MouseIndicator from "@/components/ui/MouseIndicator";
import ProjectCard from "@/components/ui/ProjectCard";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import Link from "next/link";
import { ArrowRight, Code, Layout, Smartphone, Cloud, ArrowUp } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";
import TechStack from "@/components/ui/TechStack";
import ServicesBento from "@/components/ui/ServicesBento";
import ProjectList from "@/components/ui/ProjectList";
import VisualShowcase from "@/components/ui/VisualShowcase";

export default function Home() {
    const caseStudies = EVENTS.slice(0, 5);

    return (
        <main className="relative min-h-screen bg-white text-black selection:bg-black/10">
            <MouseIndicator />
            <LiquidMenu />
            <Docker />

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 pt-20">
                <div className="max-w-5xl">
                    <p className="text-sm md:text-base text-neutral-500 mb-6 tracking-widest uppercase">
                        Hi, I'm Abin Antony kattady
                    </p>
                    <h1 className="text-5xl md:text-8xl font-bold leading-[1.1] tracking-tight mb-8">
                        Engineering Digital Products with a <span className="text-neutral-400">Visual Edge</span>
                    </h1>
                    <p className="max-w-2xl text-lg md:text-xl text-neutral-600 leading-relaxed mb-8">
                        I build accessible, pixel-perfect, secure, and performant web applications with a focus on user experience and modern design.
                    </p>
                    <Link
                        href="#contact"
                        className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-bold text-lg hover:scale-105 transition-transform"
                    >
                        Let's talk <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </section>

            {/* Marquee Section */}
            <section className="py-10 border-y border-neutral-100 overflow-hidden">
                <VelocityScroll
                    text="Creative Developer • UI/UX Designer • Full Stack Engineer • "
                    default_velocity={3}
                    className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
                />
            </section>

            {/* About Section */}
            <section id="about" className="px-6 md:px-20 py-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-4xl font-bold mb-8">About me.</h2>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-xl md:text-2xl text-neutral-800 leading-relaxed mb-8">
                            I’m a Full Stack Developer specializing in end-to-end product development, combining strong backend engineering with modern frontend frameworks. I work across the entire stack—from scalable APIs and databases to intuitive user interfaces—leveraging technologies such as Next.js, React, TypeScript, Java, Kotlin, Rust, Python, Node.js, Springboot and cloud platforms to build reliable, real-world solutions.
                        </p>
                        <p className="text-lg text-neutral-600 leading-relaxed">
                            Currently focusing on building scalable web applications and exploring the intersection of AI and UI/UX design. Now I am working at <a href="https://webcodecreators.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold hover:text-black transition-colors duration-500 group bg-gray-200 px-1 rounded mx-1">WebcodeCreators <GoArrowUpRight className="ml-0.5" /></a> as Full Stack Developer.
                        </p>
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <TechStack />

            {/* Services Section */}
            <ServicesBento />


            {/* Projects Section */}
            <section id="projects" className="px-6 md:px-20 py-24 bg-neutral-50">
                <div className="flex items-end justify-between mb-16">
                    <h2 className="text-4xl md:text-6xl font-bold">Projects</h2>
                    <p className="hidden md:block text-neutral-500">Selected Works (2023-2024)</p>
                </div>

                <ProjectList projects={caseStudies} />
            </section>

            {/* Visual Showcase Section */}
            <VisualShowcase />

            <ContactForm />
            <Footer />
        </main>
    );
}
