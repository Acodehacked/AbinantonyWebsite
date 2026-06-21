"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
    const tickerText =
        "fullstack dev — devops — cloud engineer — ui ux designer    ";

    return (
        <section className="relative px-3 md:px-4 pt-20 md:pt-24">
            {/* ── Hero Card ── */}
            <div
                className="relative overflow-hidden"
                style={{
                    borderRadius: "2rem",
                    background:
                        "radial-gradient(ellipse 85% 75% at 50% 100%, #c84d0a 0%, #7a2e06 28%, #2a0e02 52%, #0b0906 68%)",
                    backgroundColor: "#0b0906",
                    minHeight: "82vh",
                }}
            >
                {/* ── Desktop: 3-column grid ── */}
                <div
                    className="relative z-10 hidden md:grid"
                    style={{
                        gridTemplateColumns: "1fr auto 1fr",
                        minHeight: "82vh",
                    }}
                >
                    {/* Left column */}
                    <div className="flex flex-col justify-between p-10 pt-12 pb-10">
                        <h1
                            className="font-syne font-bold text-white leading-none"
                            style={{
                                fontSize: "clamp(2.6rem, 5.2vw, 4.8rem)",
                                letterSpacing: "-0.025em",
                            }}
                        >
                            building
                            <br />
                            digital
                            <br />
                            products
                        </h1>

                        <p
                            className="font-manrope text-white/60 leading-relaxed"
                            style={{ fontSize: "0.82rem", maxWidth: "22ch" }}
                        >
                            founder of webcodecreators, i engineer full-stack
                            systems, mobile apps, and saas platforms that reach
                            real users and drive measurable outcomes.
                        </p>
                    </div>

                    {/* Center column – portrait */}
                    <div
                        className="relative flex items-end justify-center"
                        style={{ width: "clamp(220px, 30vw, 400px)" }}
                    >
                        <Image
                            src="/abinantony-transparent.png"
                            alt="Abin Antony"
                            width={400}
                            height={560}
                            priority
                            className="w-full object-cover object-bottom overflow-visible h-full select-none"
                            style={{ maxHeight: "90vh" }}
                        />
                    </div>

                    {/* Right column */}
                    <div className="flex flex-col justify-between p-10 pt-12 pb-10 items-end text-right">
                        <p
                            className="font-manrope text-white/60 leading-snug"
                            style={{ fontSize: "0.78rem" }}
                        >
                            full stack
                            <br />
                            developer &amp;
                            <br />
                            software
                            <br />
                            architect
                        </p>

                        <h1
                            className="font-syne font-bold text-white leading-none"
                            style={{
                                fontSize: "clamp(2.6rem, 5.2vw, 4.8rem)",
                                letterSpacing: "-0.025em",
                            }}
                        >
                            i'm
                            <br />
                            abin
                            <br />
                            antony
                        </h1>

                        <Link
                            href="#contact"
                            className="inline-flex items-center font-manrope font-medium text-white transition-all duration-200 hover:bg-white/10"
                            style={{
                                fontSize: "0.875rem",
                                padding: "0.75rem 1.75rem",
                                borderRadius: "9999px",
                                backgroundColor: "rgba(8,6,4,0.85)",
                                border: "1px solid rgba(255,255,255,0.13)",
                            }}
                        >
                            let's work together
                        </Link>
                    </div>
                </div>

                {/* ── Mobile layout ── */}
                <div
                    className="relative z-10 flex flex-col md:hidden"
                    style={{ minHeight: "85vh" }}
                >
                    {/* Top row: headline left / label right */}
                    <div className="flex items-start justify-between px-6 pt-6 pb-2">
                        <h1
                            className="font-syne font-bold text-white leading-none"
                            style={{
                                fontSize: "clamp(2rem, 9vw, 3rem)",
                                letterSpacing: "-0.025em",
                            }}
                        >
                            building
                            <br />
                            digital
                            <br />
                            products
                        </h1>
                        <p
                            className="font-manrope text-white/60 leading-snug text-right"
                            style={{ fontSize: "0.72rem", marginTop: "0.2rem" }}
                        >
                            full stack
                            <br />
                            developer &amp;
                            <br />
                            software
                            <br />
                            architect
                        </p>
                    </div>



                    {/* Bottom row: description left / name + button right */}
                    <div className="flex items-end absolute bottom-0 left-0 right-0 z-10 justify-between px-6 pb-8 pt-4 gap-4">
                        <p
                            className="font-manrope text-white/60 leading-relaxed"
                            style={{ fontSize: "0.72rem", maxWidth: "18ch" }}
                        >
                            founder of webcodecreators, i engineer full-stack
                            systems, mobile apps, and saas platforms that reach
                            real users.
                        </p>

                        <div className="flex flex-col items-end gap-4 shrink-0">
                            <h2
                                className="font-syne font-bold text-white leading-none text-right"
                                style={{
                                    fontSize: "clamp(2rem, 9vw, 3rem)",
                                    letterSpacing: "-0.025em",
                                }}
                            >
                                i'm
                                <br />
                                abin
                                <br />
                                antony
                            </h2>
                            <Link
                                href="#contact"
                                className="inline-flex items-center font-manrope font-medium text-white text-sm whitespace-nowrap transition-all duration-200 hover:bg-white/10"
                                style={{
                                    padding: "0.6rem 1.25rem",
                                    borderRadius: "9999px",
                                    backgroundColor: "rgba(8,6,4,0.85)",
                                    border: "1px solid rgba(255,255,255,0.13)",
                                }}
                            >
                                let's work together
                            </Link>
                        </div>
                    </div>

                    {/* Portrait */}
                    <div className="flex-1 flex scale-120 items-end justify-center overflow-hidden">
                        <Image
                            src="/abinantony-transparent.png"
                            alt="Abin Antony"
                            width={320}
                            height={420}
                            priority
                            className="object-cover overflow-visible scale-150 translate-y-[-25%] w-full select-none"
                            style={{ maxHeight: "70vh", width: "auto" }}
                        />
                    </div>
                </div>
            </div>

            {/* ── Orange ticker bar ── */}
            <div
                className="mt-3 overflow-hidden flex items-center"
                style={{
                    borderRadius: "1rem",
                    backgroundColor: "#E8590A",
                    minHeight: "3rem",
                }}
            >
                <div className="hero-ticker py-3">
                    {[0, 1].map((i) => (
                        <span
                            key={i}
                            className="font-syne font-bold text-white tracking-wide whitespace-nowrap"
                            style={{
                                fontSize: "clamp(2rem, 3vw, 8rem)",
                                paddingRight: "4rem",
                                paddingLeft: "2rem",
                            }}
                        >
                            {tickerText.repeat(4)}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
