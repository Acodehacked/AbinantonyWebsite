"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // motion used by mobile menu
import { X, Code2, Paintbrush } from "lucide-react";
import { usePathname } from "next/navigation";
import { useMode } from "@/context/ModeContext";

const navLinks = [
    { label: "Home",     href: "/" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact",  href: "/#contact" },
];

const ORANGE     = "#E84018";
const TEXT_MUTED = "rgba(242,237,232,0.55)";
const TEXT_ON    = "#F2EDE8";

function ModeSwitch() {
    const { mode, setMode } = useMode();

    return (
        <div
            className="flex items-center"
            style={{
                backgroundColor: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
                borderRadius: "9999px",
                padding: "3px",
                gap: "2px",
                marginLeft: "0.5rem",
            }}
        >
            {(["dev", "art"] as const).map((m) => {
                const active = mode === m;
                return (
                    <button
                        key={m}
                        onClick={() => setMode(m)}
                        aria-label={m === "dev" ? "Developer mode" : "Art mode"}
                        title={m === "dev" ? "Dev" : "Art"}
                        style={{
                            borderRadius: "9999px",
                            padding: "5px 9px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: active ? ORANGE : "transparent",
                            color: active ? "#fff" : TEXT_MUTED,
                            border: "none",
                            cursor: "pointer",
                            transition: "background-color 0.2s, color 0.2s",
                        }}
                    >
                        {m === "dev"
                            ? <Code2 size={13} strokeWidth={2.2} />
                            : <Paintbrush size={13} strokeWidth={2.2} />
                        }
                    </button>
                );
            })}
        </div>
    );
}

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname.startsWith(href.replace("/#", "/"));

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
                    {navLinks.map((link) => {
                        const active = isActive(link.href);
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="font-manrope font-medium transition-all duration-200"
                                style={{
                                    fontSize: "0.875rem",
                                    padding: "0.45rem 1.1rem",
                                    borderRadius: "9999px",
                                    color: active ? "#fff" : TEXT_MUTED,
                                    backgroundColor: active ? ORANGE : "transparent",
                                }}
                            >
                                {link.label}
                            </Link>
                        );
                    })}
                    <Link
                        href="#contact"
                        className="font-manrope font-semibold transition-all duration-200 hover:brightness-110"
                        style={{
                            fontSize: "0.875rem",
                            padding: "0.45rem 1.1rem",
                            borderRadius: "9999px",
                            backgroundColor: ORANGE,
                            color: "#fff",
                            marginLeft: "0.15rem",
                        }}
                    >
                        Let&apos;s Talk
                    </Link>
                    <ModeSwitch />
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
                        className="font-syne font-bold"
                        style={{ fontSize: "0.9rem", color: TEXT_ON }}
                    >
                        Abinantony.
                    </Link>

                    <div className="flex items-center gap-1.5">
                        <ModeSwitch />
                        <Link
                            href="#contact"
                            className="font-manrope font-semibold"
                            style={{
                                fontSize: "0.8rem",
                                padding: "0.4rem 0.9rem",
                                borderRadius: "9999px",
                                backgroundColor: ORANGE,
                                color: "#fff",
                            }}
                        >
                            Let&apos;s Talk
                        </Link>
                        <button
                            onClick={() => setIsOpen(true)}
                            className="p-2"
                            aria-label="Open menu"
                            style={{ color: TEXT_ON }}
                        >
                            <span
                                className="block w-5 mb-1"
                                style={{ height: "2px", backgroundColor: TEXT_ON }}
                            />
                            <span
                                className="block w-5"
                                style={{ height: "2px", backgroundColor: TEXT_ON }}
                            />
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
                            className="absolute top-6 right-6 p-2"
                            aria-label="Close menu"
                            style={{ color: TEXT_ON }}
                        >
                            <X className="w-7 h-7" />
                        </button>

                        <nav className="flex flex-col gap-6">
                            {[...navLinks, { label: "Let's Talk", href: "#contact" }].map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="font-syne font-bold transition-opacity hover:opacity-60"
                                    style={{ fontSize: "clamp(2.5rem, 12vw, 4rem)", color: TEXT_ON }}
                                >
                                    {link.label}
                                </Link>
                            ))}
                        </nav>

                        <p
                            className="absolute bottom-10 left-8 font-manrope"
                            style={{ fontSize: "0.8rem", color: "rgba(242,237,232,0.35)" }}
                        >
                            abina5448@gmail.com
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
