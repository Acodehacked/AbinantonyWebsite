"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Coffee } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/#projects" },
    { label: "Case Studies", href: "/#projects" }, // Assuming same section for now
    { label: "Artworks", href: "/artworks" }, // Assuming same section for now
    { label: "Contact", href: "/#contact" },
];

const socialLinks = [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/abinkattady/" },
    { label: "GitHub", href: "https://github.com/Acodehacked" },
    { label: "Twitter", href: "https://twitter.com/acodehacked" },
    { label: "Instagram", href: "https://www.instagram.com/abin_antny/" },
];

export default function LiquidMenu() {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.5,
                ease: [0.12, 0, 0.39, 0],
            },
        },
        exit: {
            scaleY: 0,
            transition: {
                delay: 0.5,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1],
            },
        },
    };

    const containerVars = {
        initial: {
            transition: {
                staggerChildren: 0.09,
                staggerDirection: -1,
            },
        },
        open: {
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.09,
                staggerDirection: 1,
            },
        },
    };

    const mobileLinkVars = {
        initial: {
            y: "30vh",
            transition: {
                duration: 0.5,
                ease: [0.37, 0, 0.63, 1],
            },
        },
        open: {
            y: 0,
            transition: {
                ease: [0, 0.55, 0.45, 1],
                duration: 0.7,
            },
        },
    };

    return (
        <>
            {/* Logo */}
            <div className="fixed top-6 left-6 md:left-20 z-[60] mix-blend-difference text-white flex items-center gap-2">
                <img src="/logo-white.png" alt="Logo" className="w-10 h-10" />
                <Link href="/" className="text-xl font-bold tracking-tight">
                    Abinantony.
                </Link>
            </div>

            {/* Toggle Button */}
            <div className="fixed top-6 right-6 md:right-20 z-[60] mix-blend-difference text-white">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center gap-2 px-4 py-2 bg-transparent border border-white/30 rounded-full hover:bg-white hover:text-black transition-all duration-300 group"
                >
                    <span className="text-sm font-medium hidden md:block group-hover:text-black text-white">
                        {isOpen ? "Close" : "Menu"}
                    </span>
                    <div className="relative w-6 h-6">
                        <Menu
                            className={cn(
                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 transition-all duration-300 group-hover:text-black text-white",
                                isOpen ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100"
                            )}
                        />
                        <X
                            className={cn(
                                "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 transition-all duration-300 group-hover:text-black text-white",
                                isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-0"
                            )}
                        />
                    </div>
                </button>
            </div>

            {/* Full Screen Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVars}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 bg-black text-white z-50 origin-top flex flex-col justify-center items-center md:items-start px-6 md:px-20"
                    >
                        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 h-full py-24">

                            {/* Left: Navigation Links */}
                            <div className="flex flex-col justify-center">
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
                                                className="text-5xl md:text-7xl font-bold uppercase tracking-tighter"
                                            >
                                                <Link
                                                    href={link.href}
                                                    onClick={() => setIsOpen(false)}
                                                    className="hover:text-neutral-400 transition-colors"
                                                >
                                                    {link.label}
                                                </Link>
                                            </motion.div>
                                        </div>
                                    ))}
                                </motion.div>
                            </div>

                            {/* Right: Additional Info & Socials */}
                            <div className="md:flex selection:text-yellow-500 flex-col justify-center nd:space-y-12 space-y-5">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-neutral-500 uppercase tracking-widest text-sm">Contact</h3>
                                    <Link href="mailto:abina5448@gmail.com" className="text-md md:text-2xl hover:underline underline-offset-4">
                                        abina5448@gmail.com
                                    </Link>
                                    <p className="text-md md:text-xl text-neutral-400">+91 90 48 7419 10</p>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                    className="space-y-4"
                                >
                                    <h3 className="text-neutral-500 uppercase tracking-widest text-sm">Socials</h3>
                                    <div className="flex flex-wrap md:gap-4 gap-3">
                                        {socialLinks.map((social, idx) => (
                                            <Link
                                                key={idx}
                                                href={social.href}
                                                className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full hover:bg-white hover:text-black transition-all"
                                            >
                                                {social.label} <ArrowUpRight className="w-4 h-4" />
                                            </Link>
                                        ))}
                                        <Link
                                            href="https://buymeacoffee.com/abin_antny"
                                            className="flex items-center w-auto bg-yellow-300  text-black  gap-2 px-4 py-2 border border-black rounded-full hover:bg-white/30 hover:text-white transition-all"
                                        >
                                            <Coffee /> Buy me a coffee <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </div>

                                </motion.div>
                            </div>

                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
