"use client";

import Link from "next/link";

const BG           = "#0b0906";
const TEXT_PRIMARY = "#F2EDE8";
const TEXT_MUTED   = "rgba(242,237,232,0.38)";
const BORDER       = "rgba(255,255,255,0.07)";
const ORANGE       = "#E84018";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer
            className="relative px-6 md:px-20 overflow-hidden"
            style={{ backgroundColor: BG, color: TEXT_PRIMARY }}
        >
            {/* Orange gradient rule at the very top */}
            <div
                aria-hidden="true"
                style={{
                    height: "1px",
                    background: `linear-gradient(to right, transparent, ${ORANGE} 30%, ${ORANGE} 70%, transparent)`,
                    opacity: 0.55,
                }}
            />

            {/* "ABIN ANTONY" watermark — absolute so it doesn't add height */}
            <div
                aria-hidden="true"
                className="absolute bottom-0 left-0 right-0 select-none pointer-events-none font-syne font-black text-center leading-none"
                style={{
                    fontSize: "clamp(5rem, 18vw, 18rem)",
                    letterSpacing: "-0.04em",
                    background: `linear-gradient(180deg, ${ORANGE} 0%, #7a2e06 55%, transparent 100%)`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    opacity: 0.1,
                    lineHeight: 0.88,
                }}
            >
                ABIN
                <br />
                ANTONY
            </div>

            {/* Content — determines footer height */}
            <div className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pt-16 pb-12">
                    {/* Email CTA */}
                    <div className="md:col-span-7 space-y-5">
                        <div className="flex items-center gap-2">
                            <span
                                aria-hidden="true"
                                style={{
                                    display: "inline-block",
                                    width: "6px",
                                    height: "6px",
                                    borderRadius: "50%",
                                    backgroundColor: ORANGE,
                                    flexShrink: 0,
                                }}
                            />
                            <p className="text-xs uppercase tracking-widest font-manrope" style={{ color: TEXT_MUTED }}>
                                Get in touch
                            </p>
                        </div>

                        <Link
                            href="mailto:abina5448@gmail.com"
                            className="block font-syne font-bold leading-none tracking-tighter transition-opacity duration-300 hover:opacity-70"
                            style={{
                                fontSize: "clamp(1.6rem, 4.5vw, 3.8rem)",
                                background: `linear-gradient(100deg, ${ORANGE} 0%, #ff7a45 60%, #c84d0a 100%)`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                backgroundClip: "text",
                            }}
                        >
                            abina5448@gmail.com
                        </Link>
                    </div>

                    {/* Socials */}
                    <div className="md:col-span-2 md:col-start-9 space-y-4">
                        <h3 className="text-xs uppercase tracking-widest font-manrope" style={{ color: TEXT_MUTED }}>
                            Socials
                        </h3>
                        <div className="flex flex-col gap-3 font-manrope">
                            {[
                                { label: "LinkedIn",  href: "https://www.linkedin.com/in/abinkattady/" },
                                { label: "Twitter",   href: "https://www.x.com/in/abinkattady/" },
                                { label: "GitHub",    href: "https://github.com/Acodehacked" },
                                { label: "Instagram", href: "https://www.instagram.com/abin_antny/" },
                            ].map(({ label, href }) => (
                                <Link key={label} href={href} className="text-base transition-opacity duration-200 hover:opacity-50" style={{ color: TEXT_PRIMARY }}>
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Sitemap */}
                    <div className="md:col-span-2 space-y-4">
                        <h3 className="text-xs uppercase tracking-widest font-manrope" style={{ color: TEXT_MUTED }}>
                            Sitemap
                        </h3>
                        <div className="flex flex-col gap-3 font-manrope">
                            {[
                                { label: "Home",     href: "/" },
                                { label: "About",    href: "/#about" },
                                { label: "Projects", href: "/#projects" },
                                { label: "Contact",  href: "/#contact" },
                            ].map(({ label, href }) => (
                                <Link key={label} href={href} className="text-base transition-opacity duration-200 hover:opacity-50" style={{ color: TEXT_PRIMARY }}>
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div
                    className="flex flex-col md:flex-row items-center justify-between py-6 text-xs font-manrope"
                    style={{ borderTop: `1px solid ${BORDER}`, color: TEXT_MUTED }}
                >
                    <p>© {currentYear} Abin Antony. All rights reserved.</p>
                    <p>Just Connect with me bro..</p>
                </div>
            </div>
        </footer>
    );
}
