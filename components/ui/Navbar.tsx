"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
        return () => { document.body.style.overflow = "unset"; };
    }, [isOpen]);

    return (
        <>
            {/* ── Pill navbar ── */}
            <header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
                {/* Desktop pill */}
                <nav
                    className="hidden md:flex items-center gap-0.5 backdrop-blur-md"
                    style={{
                        backgroundColor: "rgba(10,8,6,0.88)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        borderRadius: "9999px",
                        padding: "0.35rem 0.4rem",
                    }}
                >
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="font-manrope font-medium text-neutral-300 hover:text-white transition-colors"
                            style={{
                                fontSize: "0.875rem",
                                padding: "0.45rem 1.1rem",
                                borderRadius: "9999px",
                            }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="font-manrope font-semibold text-white transition-all duration-200 hover:brightness-110"
                        style={{
                            fontSize: "0.875rem",
                            padding: "0.45rem 1.1rem",
                            borderRadius: "9999px",
                            backgroundColor: "#E8590A",
                            marginLeft: "0.15rem",
                        }}
                    >
                        Let&apos;s Talk
                    </Link>
                </nav>

                {/* Mobile pill */}
                <div
                    className="flex md:hidden items-center justify-between w-full backdrop-blur-md"
                    style={{
                        backgroundColor: "rgba(10,8,6,0.88)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        borderRadius: "9999px",
                        padding: "0.35rem 0.5rem 0.35rem 1.2rem",
                        maxWidth: "360px",
                        margin: "0 auto",
                    }}
                >
                    <Link
                        href="/"
                        className="font-syne font-bold text-white"
                        style={{ fontSize: "0.9rem" }}
                    >
                        Abinantony.
                    </Link>

                    <div className="flex items-center gap-1.5">
                        <Link
                            href="#contact"
                            className="font-manrope font-semibold text-white"
                            style={{
                                fontSize: "0.8rem",
                                padding: "0.4rem 0.9rem",
                                borderRadius: "9999px",
                                backgroundColor: "#E8590A",
                            }}
                        >
                            Let&apos;s Talk
                        </Link>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="text-white p-2"
                            aria-label="Open menu"
                        >
                            <span className="block w-5 h-0.5 bg-white mb-1" />
                            <span className="block w-5 h-0.5 bg-white" />
                        </button>
                    </div>
                </div>
            </header>

            {/* ── Mobile full-screen menu ── */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 z-[60] flex flex-col justify-center px-8"
                        style={{ backgroundColor: "#0b0906" }}
                    >
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-6 right-6 text-white p-2"
                            aria-label="Close menu"
                        >
                            <X className="w-7 h-7" />
                        </button>

                        <nav className="flex flex-col gap-6">
                            {[...navLinks, { label: "Let's Talk", href: "#contact" }].map(
                                (link) => (
                                    <Link
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="font-syne font-bold text-white hover:text-white/60 transition-colors"
                                        style={{ fontSize: "clamp(2.5rem, 12vw, 4rem)" }}
                                    >
                                        {link.label}
                                    </Link>
                                )
                            )}
                        </nav>

                        <p
                            className="absolute bottom-10 left-8 font-manrope text-white/40"
                            style={{ fontSize: "0.8rem" }}
                        >
                            abina5448@gmail.com
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
