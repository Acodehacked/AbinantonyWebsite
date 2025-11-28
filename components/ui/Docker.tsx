"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Home, Folder, User, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Folder, label: "Projects", href: "/#projects" },
    { icon: User, label: "About", href: "/#about" },
    { icon: Mail, label: "Contact", href: "/#contact" },
];

export default function Docker() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show docker only after scrolling past 100vh
            if (window.scrollY > window.innerHeight) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, x: "-50%", opacity: 0 }}
                    animate={{ y: 0, x: "-50%", opacity: 1 }}
                    exit={{ y: 100, x: "-50%", opacity: 0 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="fixed bottom-6 left-1/2 z-50"
                >
                    <div className="flex items-center gap-2 px-4 py-3 rounded-2xl bg-white/80 backdrop-blur-xl border border-black/5 shadow-2xl shadow-black/10">
                        {items.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={cn(
                                    "p-3 rounded-xl transition-all duration-300 hover:bg-black/5 group relative"
                                )}
                            >
                                <item.icon className="w-5 h-5 text-black/70 group-hover:text-black transition-colors" />
                                <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                    {item.label}
                                </span>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
