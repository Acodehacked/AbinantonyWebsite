"use client";

import Link from "next/link";
import { ArrowUpRight, Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-black text-white px-6 md:px-20 py-20 rounded-t-[3rem]">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
                <div className="md:col-span-5 space-y-8">
                    <Link
                        href="mailto:abina5448@gmail.com"
                        className="inline-flex items-center gap-3 text-2xl hover:text-neutral-400 transition-colors"
                    >
                        abina5448@gmail.com <ArrowUpRight className="w-6 h-6" />
                    </Link>
                </div>

                <div className="md:col-span-3 md:col-start-8 space-y-8">
                    <div>
                        <h3 className="text-sm text-neutral-500 mb-4 uppercase tracking-widest">Socials</h3>
                        <div className="flex flex-col gap-3">
                            <Link href="https://www.linkedin.com/in/abinkattady/" className="hover:text-neutral-400 transition-colors">LinkedIn</Link>
                            <Link href="https://www.x.com/in/abinkattady/" className="hover:text-neutral-400 transition-colors">Twitter</Link>
                            <Link href="https://github.com/Acodehacked" className="hover:text-neutral-400 transition-colors">GitHub</Link>
                            <Link href="https://www.instagram.com/abin_antny/" className="hover:text-neutral-400 transition-colors">Instagram</Link>
                        </div>
                    </div>
                </div>

                <div className="md:col-span-2 space-y-8">
                    <div>
                        <h3 className="text-sm text-neutral-500 mb-4 uppercase tracking-widest">Sitemap</h3>
                        <div className="flex flex-col gap-3">
                            <Link href="/" className="hover:text-neutral-400 transition-colors">Home</Link>
                            <Link href="/#about" className="hover:text-neutral-400 transition-colors">About</Link>
                            <Link href="/#projects" className="hover:text-neutral-400 transition-colors">Projects</Link>
                            <Link href="/#contact" className="hover:text-neutral-400 transition-colors">Contact</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-neutral-500 text-sm">
                <p>© {currentYear} Abin Antony. All rights reserved.</p>
                <p>Designed & Developed with ❤️</p>
            </div>
        </footer>
    );
}
