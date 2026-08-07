import { EVENTS } from "@/lib";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { GoArrowUpRight } from "react-icons/go";
import MouseIndicator from "@/components/ui/MouseIndicator";
import ContactForm from "@/components/ui/ContactForm";
import TechStack from "@/components/ui/TechStack";
import ServicesBento from "@/components/ui/ServicesBento";
import ProjectList from "@/components/ui/ProjectList";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Skiper54 } from "@/components/home/scroller";
import ModeGate from "@/components/ui/ModeGate";

export default function Home() {
    const caseStudies = EVENTS;

    return (
        <main className="relative min-h-screen bg-neutral-950 text-neutral-100 selection:bg-white selection:text-black">
            <MouseIndicator />
            <Navbar />
            <ModeGate>

            {/* Hero Section */}
            <HeroSection />

            {/* About Section */}
            <SectionWrapper id="about" className="bg-neutral-950 px-6 py-24 md:px-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="mb-8 font-syne text-4xl font-bold text-white">About me.</h2>
                    </div>
                    <div className="md:col-span-8">
                        <p className="mb-8 font-manrope text-xl leading-relaxed text-neutral-200 md:text-3xl">
                            I'm a Full Stack Developer specializing in end-to-end product development, combining strong backend engineering with modern frontend frameworks. I work across the entire stack—from scalable APIs and databases to intuitive user interfaces.
                        </p>
                        <p className="max-w-2xl font-manrope text-lg leading-relaxed text-neutral-400">
                            Currently focusing on building scalable web applications and exploring the intersection of AI and UI/UX design. Now I am working at <a href="https://webcodecreators.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center border-b border-white/30 font-bold text-white transition-colors duration-300 hover:text-orange-300">WebcodeCreators <GoArrowUpRight className="ml-0.5" /></a> as Full Stack Developer. and CTO @ <a href="https://daxiontech.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center border-b border-white/30 font-bold text-white transition-colors duration-300 hover:text-orange-300">Daxiontech <GoArrowUpRight className="ml-0.5" /></a>
                        </p>
                    </div>
                </div>
            </SectionWrapper>

            {/* Technologies Section */}
            <SectionWrapper>
                <TechStack />
            </SectionWrapper>

            {/* Services Section */}
            <SectionWrapper>
                <ServicesBento />
            </SectionWrapper>


            {/* Projects Section */}
            <SectionWrapper id="projects" className="bg-neutral-900/30 px-6 py-24 md:px-20">
                <div className="flex items-end justify-between mb-16">
                    <h2 className="text-4xl md:text-8xl font-bold font-syne tracking-tighter">Projects</h2>
                    <p className="hidden font-manrope text-sm uppercase tracking-widest text-neutral-400 md:block">Selected Works (2023-2026)</p>
                </div>

                <ProjectList projects={caseStudies} />
            </SectionWrapper>

            {/* Visual Showcase Section */}
            <SectionWrapper>
                <Skiper54 />
            </SectionWrapper>

            <SectionWrapper>
                <ContactForm />
            </SectionWrapper>

            <Footer />
            </ModeGate>
        </main>
    );
}
