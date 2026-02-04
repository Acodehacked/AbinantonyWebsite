import { EVENTS } from "@/lib";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";
import { GoArrowUpRight } from "react-icons/go";
import MouseIndicator from "@/components/ui/MouseIndicator";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import ContactForm from "@/components/ui/ContactForm";
import TechStack from "@/components/ui/TechStack";
import ServicesBento from "@/components/ui/ServicesBento";
import ProjectList from "@/components/ui/ProjectList";
import VisualShowcase from "@/components/ui/VisualShowcase";
import HeroSection from "@/components/ui/HeroSection";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function Home() {
    const caseStudies = EVENTS.slice(0, 5);

    return (
        <main className="relative min-h-screen bg-white text-black selection:bg-black selection:text-white">
            <MouseIndicator />
            <Navbar />

            {/* Hero Section */}
            <HeroSection />

            {/* Marquee Section */}
            <div className="py-10 border-y border-black/5 overflow-hidden bg-white">
                <VelocityScroll
                    text="Creative Developer • UI/UX Designer • Full Stack Engineer • "
                    default_velocity={3}
                    className="font-syne text-center text-4xl font-bold tracking-tighter text-black md:text-7xl md:leading-[5rem]"
                />
            </div>

            {/* About Section */}
            <SectionWrapper id="about" className="px-6 md:px-20 py-24 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="md:col-span-4">
                        <h2 className="text-4xl font-bold mb-8 font-syne text-black">About me.</h2>
                    </div>
                    <div className="md:col-span-8">
                        <p className="text-xl md:text-3xl font-manrope text-neutral-800 leading-relaxed mb-8">
                            I'm a Full Stack Developer specializing in end-to-end product development, combining strong backend engineering with modern frontend frameworks. I work across the entire stack—from scalable APIs and databases to intuitive user interfaces.
                        </p>
                        <p className="text-lg font-manrope text-neutral-500 leading-relaxed max-w-2xl">
                            Currently focusing on building scalable web applications and exploring the intersection of AI and UI/UX design. Now I am working at <a href="https://webcodecreators.in/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-black border-b border-black hover:text-neutral-500 transition-colors duration-300">WebcodeCreators <GoArrowUpRight className="ml-0.5" /></a> as Full Stack Developer.
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
            <SectionWrapper id="projects" className="px-6 md:px-20 py-24 bg-neutral-50/50">
                <div className="flex items-end justify-between mb-16">
                    <h2 className="text-4xl md:text-8xl font-bold font-syne tracking-tighter">Projects</h2>
                    <p className="hidden md:block font-manrope text-neutral-500 uppercase tracking-widest text-sm">Selected Works (2023-2026)</p>
                </div>

                <ProjectList projects={caseStudies} />
            </SectionWrapper>

            {/* Visual Showcase Section */}
            <SectionWrapper>
                <VisualShowcase />
            </SectionWrapper>

            <SectionWrapper>
                <ContactForm />
            </SectionWrapper>

            <Footer />
        </main>
    );
}
