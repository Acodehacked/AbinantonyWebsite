"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import MagneticButton from "./MagneticButton";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Project", href: "/#projects" },
    { label: "About", href: "/#about" }, // Replaced Bookmark/CV with relevant links
    { label: "Services", href: "/#services" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const menuVars = {
        initial: { scaleY: 0 },
        animate: {
            scaleY: 1,
            transition: { duration: 0.5, ease: [0.12, 0, 0.39, 0] },
        },
        exit: {
            scaleY: 0,
            transition: { delay: 0.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
        },
    };

    const containerVars = {
        initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
        open: {
            transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 },
        },
    };

    const mobileLinkVars = {
        initial: { y: "30vh", transition: { duration: 0.5, ease: [0.37, 0, 0.63, 1] } },
        open: { y: 0, transition: { ease: [0, 0.55, 0.45, 1], duration: 0.7 } },
    };

    return (
        <>
            <header
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-6 flex items-center justify-between",
                    scrolled ? "bg-neutral-950/85 backdrop-blur-md py-4 border-b border-white/10" : "bg-transparent"
                )}
            >
                {/* Logo */}
                <Link href="/" className="z-[60] relative group">
                    <span className="text-xl font-bold tracking-tighter font-syne flex items-center gap-1 text-white">
                        <span className="w-2 h-2 rounded-full bg-orange-400 group-hover:bg-blue-400 transition-colors"></span>
                        Abinantony.
                    </span>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, idx) => (
                        <Link
                            key={idx}
                            href={link.href}
                            className="text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Desktop Right (CTA + Menu Trigger for consistency if wanted, or just CTA) */}
                <div className="hidden md:flex items-center gap-4">
                    <MagneticButton>
                        <Link href="/#contact" className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors flex items-center gap-2">
                            Get in Touch <ArrowRight className="w-3 h-3" />
                        </Link>
                    </MagneticButton>
                </div>

                {/* Mobile Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden z-[60] relative w-8 h-8 flex flex-col justify-center items-center gap-1.5 group"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 6, backgroundColor: "#ffffff" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
                        className="w-full h-0.5 block origin-center transition-colors"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0 } : { opacity: 1, backgroundColor: "#ffffff" }}
                        className="w-full h-0.5 block transition-colors"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -6, backgroundColor: "#ffffff" } : { rotate: 0, y: 0, backgroundColor: "#ffffff" }}
                        className="w-full h-0.5 block origin-center transition-colors"
                    />
                </button>
            </header>

            {/* Mobile Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 bg-black text-white z-50 origin-top flex flex-col justify-center px-6"
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 z-50 p-2 text-white"
                        >
                            <X className="w-8 h-8" />
                        </button>
                        <div className="flex flex-col gap-4">
                            <motion.div
                                variants={containerVars}
                                initial="initial"
                                animate="open"
                                exit="initial"
                                className="flex flex-col gap-4"
                            >
                                {navLinks.map((link, index) => (
                                    <div key={index} className="overflow-hidden">
                                        <motion.div
                                            variants={mobileLinkVars}
                                            className="text-5xl font-bold font-syne"
                                        >
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className="hover:text-neutral-500 transition-colors"
                                            >
                                                {link.label}
                                            </Link>
                                        </motion.div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 space-y-2"
                        >
                            <p className="text-neutral-500 uppercase text-xs tracking-widest">Connect</p>
                            <a href="mailto:abina5448@gmail.com" className="text-xl block">abina5448@gmail.com</a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
