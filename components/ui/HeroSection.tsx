"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useIntro } from "@/context/IntroContext";

const ease = [0.16, 1, 0.3, 1];

const fromLeft = (ready: boolean, delay = 0) => ({ initial: { opacity: 0, x: -48 }, animate: ready ? { opacity: 1, x: 0 } : { opacity: 0, x: -48 }, transition: { delay, duration: 0.7, ease } });
const fromRight = (ready: boolean, delay = 0) => ({ initial: { opacity: 0, x: 48 }, animate: ready ? { opacity: 1, x: 0 } : { opacity: 0, x: 48 }, transition: { delay, duration: 0.7, ease } });
const fromBelow = (ready: boolean, delay = 0) => ({ initial: { opacity: 0, y: 36 }, animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }, transition: { delay, duration: 0.7, ease } });
const fadeIn = (ready: boolean, delay = 0) => ({ initial: { opacity: 0 }, animate: ready ? { opacity: 1 } : { opacity: 0 }, transition: { delay, duration: 0.6, ease } });

export default function HeroSection() {
    const { introDone } = useIntro();
    const tickerText =
        "fullstack dev — devops — cloud engineer — ui ux designer    ";

    return (
        <section className="relative px-3 md:px-4 md:pt-2 pt-20">
            {/* ── Hero Card ── */}
            <div
                className="relative overflow-hidden md:min-h-[92vh] min-h-[82vh]"
                style={{
                    borderRadius: "2rem",
                    background:
                        "radial-gradient(ellipse 85% 75% at 50% 100%, #c84d0a 0%, #7a2e06 28%, #0b0906 68%)",
                    backgroundColor: "#fffff",
                }}
            >
                {/* ── Desktop: 3-column grid ── */}
                <div
                    className="relative bg-white z-10 hidden md:grid"
                    style={{
                        gridTemplateColumns: "1fr auto 1fr",
                        minHeight: "92vh",
                    }}
                >

                    {/* Left column */}
                    <div className="flex flex-col z-10 justify-between p-10 pt-12 pb-10">
                        <motion.h1
                            {...fromLeft(introDone, 0)}
                            className="font-syne font-bold text-orange-950 leading-none"
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
                        </motion.h1>

                        <motion.p
                            {...fromBelow(introDone, 0.55)}
                            className="font-manrope text-orange-950 leading-relaxed"
                            style={{ fontSize: "0.82rem", maxWidth: "22ch" }}
                        >
                            founder of webcodecreators, i engineer full-stack
                            systems, mobile apps, and saas platforms that reach
                            real users and drive measurable outcomes.
                        </motion.p>
                    </div>

                    {/* Center column – portrait */}
                    <motion.div
                        {...fromBelow(introDone, 0.25)}
                        className="relative flex items-end z-10 justify-center"
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
                    </motion.div>

                    {/* Right column */}
                    <div className="flex flex-col justify-between z-10 p-10 pt-12 pb-10 items-end text-right">
                        <motion.p
                            {...fadeIn(introDone, 0.1)}
                            className="font-manrope text-orange-900 leading-snug"
                            style={{ fontSize: "1rem" }}
                        >
                            full stack
                            <br />
                            developer &amp;
                            <br />
                            software
                            <br />
                            architect
                        </motion.p>

                        <motion.h1
                            {...fromRight(introDone, 0)}
                            className="font-syne font-bold text-orange-950 leading-none"
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
                        </motion.h1>

                        <motion.div {...fromBelow(introDone, 0.5)}>
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
                        </motion.div>
                    </div>

                    <div
                        className="w-full h-full absolute z-2 left-0 right-0 top-0 bottom-0"
                        style={{
                            borderRadius: "2rem",
                            background:
                                "radial-gradient(ellipse 85% 75% at 50% 100%, #c84d0a 0%, #fff 68%, #fff 68%)",
                            backgroundColor: "#fffff",
                            minHeight: "82vh",
                        }}>

                    </div>
                </div>

                {/* ── Mobile layout ── */}
                <div
                    className="relative z-10 flex flex-col md:hidden"
                    style={{ minHeight: "85vh" }}
                >
                    {/* Top row: headline left / label right */}
                    <div className="flex items-start justify-between px-6 pt-6 pb-2">
                        <motion.h1
                            {...fromLeft(introDone, 0)}
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
                        </motion.h1>
                        <motion.p
                            {...fadeIn(introDone, 0.2)}
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
                        </motion.p>
                    </div>



                    {/* Bottom row: description left / name + button right */}
                    <div className="flex items-end absolute bottom-0 left-0 right-0 z-10 justify-between px-6 pb-8 pt-4 gap-4">
                        <motion.p
                            {...fromBelow(introDone, 0.5)}
                            className="font-manrope text-white/60 leading-relaxed"
                            style={{ fontSize: "0.72rem", maxWidth: "18ch" }}
                        >
                            founder of webcodecreators, i engineer full-stack
                            systems, mobile apps, and saas platforms that reach
                            real users.
                        </motion.p>

                        <div className="flex flex-col items-end gap-4 shrink-0">
                            <motion.h2
                                {...fromRight(introDone, 0.1)}
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
                            </motion.h2>
                            <motion.div {...fromBelow(introDone, 0.55)}>
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
                            </motion.div>
                        </div>
                    </div>

                    {/* Portrait */}
                    <motion.div
                        {...fromBelow(introDone, 0.2)}
                        className="flex-1 flex scale-120 items-end justify-center overflow-hidden"
                    >
                        <Image
                            src="/abinantony-transparent.png"
                            alt="Abin Antony"
                            width={320}
                            height={420}
                            priority
                            className="object-cover overflow-visible scale-150 translate-y-[0%] w-full select-none"
                            style={{ maxHeight: "70vh", width: "auto" }}
                        />
                    </motion.div>
                </div>
            </div>

            {/* ── Orange ticker bar ── */}
            <motion.div
                {...fromBelow(introDone, 0.65)}
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
            </motion.div>
        </section>
    );
}
