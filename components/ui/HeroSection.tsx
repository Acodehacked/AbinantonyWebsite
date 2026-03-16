"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import MagneticButton from "./MagneticButton";
import { ArrowDown } from "lucide-react";

const storyBeats = [
    {
        id: "01",
        from: 0,
        to: 0.22,
        label: "Who I Am",
        title: "I Design With Purpose.",
        description:
            "I am Abin Antony, a developer who blends design thinking with clean code to create meaningful digital experiences.",
    },
    {
        id: "02",
        from: 0.22,
        to: 0.5,
        label: "What I Build",
        title: "Fast, Modern Web Products.",
        description:
            "I build responsive interfaces, reliable APIs, and scalable systems that perform smoothly across devices.",
    },
    {
        id: "03",
        from: 0.5,
        to: 0.78,
        label: "How I Work",
        title: "Simple Ideas. Solid Execution.",
        description:
            "I take ideas from concept to launch with clear UX, practical architecture, and attention to detail.",
    },
    {
        id: "04",
        from: 0.78,
        to: 1,
        label: "What You Get",
        title: "Products Ready For Growth.",
        description:
            "You get production-ready products that are maintainable, scalable, and built to support real business growth.",
    },
];

export default function HeroSection() {
    const frameCount = 120;
    const [isCanvasReady, setIsCanvasReady] = useState(false);
    const [progress, setProgress] = useState(0);
    const sectionRef = useRef<HTMLElement | null>(null);
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const imagesRef = useRef<(HTMLImageElement | null)[]>([]);
    const rafRef = useRef<number | null>(null);
    const targetFrameRef = useRef(0);
    const smoothFrameRef = useRef(0);

    const framePaths = useMemo(
        () =>
            Array.from({ length: frameCount }, (_, index) =>
                `/hero/frame_${String(index).padStart(3, "0")}_delay-0.066s.webp`
            ),
        []
    );

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start start", "end end"],
    });

    const drawFrame = (frameIndex: number) => {
        const canvas = canvasRef.current;
        const image = imagesRef.current[frameIndex];

        if (!canvas || !image) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const dpr = window.devicePixelRatio || 1;
        const cw = canvas.clientWidth;
        const ch = canvas.clientHeight;

        if (!cw || !ch) return;

        const targetWidth = Math.floor(cw * dpr);
        const targetHeight = Math.floor(ch * dpr);

        if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
            canvas.width = targetWidth;
            canvas.height = targetHeight;
        }

        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        ctx.clearRect(0, 0, cw, ch);

        const scale = Math.max(cw / image.width, ch / image.height);
        const dw = image.width * scale;
        const dh = image.height * scale;
        const dx = (cw - dw) * 0.5;
        const dy = (ch - dh) * 0.5;

        ctx.drawImage(image, dx, dy, dw, dh);
    };

    useEffect(() => {
        let loadedFrames = 0;

        imagesRef.current = new Array(frameCount).fill(null);

        framePaths.forEach((path, index) => {
            const image = new Image();
            image.decoding = "async";
            image.src = path;
            image.onload = () => {
                imagesRef.current[index] = image;
                loadedFrames += 1;

                if (index === 0) {
                    setIsCanvasReady(true);
                    drawFrame(0);
                }

                if (loadedFrames === frameCount) {
                    drawFrame(Math.round(smoothFrameRef.current));
                }
            };
        });

        return () => {
            imagesRef.current = [];
        };
    }, [frameCount, framePaths]);

    useEffect(() => {
        const animate = () => {
            const target = targetFrameRef.current;
            const current = smoothFrameRef.current;
            const next = current + (target - current) * 0.2;

            smoothFrameRef.current = Math.abs(target - next) < 0.01 ? target : next;
            drawFrame(Math.round(smoothFrameRef.current));

            rafRef.current = requestAnimationFrame(animate);
        };

        rafRef.current = requestAnimationFrame(animate);

        return () => {
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, []);

    useEffect(() => {
        const onResize = () => {
            drawFrame(Math.round(smoothFrameRef.current));
        };

        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        setProgress(latest);
        const nextFrame = Math.min(frameCount - 1, Math.floor(latest * (frameCount - 1)));
        targetFrameRef.current = nextFrame;
    });

    const activeBeat = useMemo(
        () =>
            storyBeats.find((beat) => progress >= beat.from && progress <= beat.to) ??
            storyBeats[storyBeats.length - 1],
        [progress]
    );

    return (
        <section ref={sectionRef} className="relative h-[360vh] bg-neutral-950">
            <div className="sticky top-0 h-screen overflow-hidden relative">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 z-0 h-full w-full"
                    aria-label="Hero portrait sequence"
                />

                {!isCanvasReady && (
                    <img
                        src={framePaths[0]}
                        alt="Hero portrait sequence"
                        className="absolute inset-0 z-0 h-full w-full object-cover object-[50%_50%]"
                        loading="eager"
                        decoding="async"
                    />
                )}

                <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/65 via-black/35 to-black/90" />
                <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_18%,rgba(0,0,0,0.45)_70%)]" />

                <div className="absolute inset-0 z-[30] grid h-full grid-cols-1 px-6 pb-10 pt-24 md:grid-cols-12 md:px-20">
                    <div className="md:col-span-5 md:pt-14">
                        <div className="md:hidden max-w-lg">
                            <p className="font-manrope text-[11px] uppercase tracking-[0.22em] text-orange-300/90">
                                {activeBeat.label}
                            </p>
                            <h2 className="mt-2 font-syne text-3xl font-bold tracking-tight text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.65)]">
                                {activeBeat.title}
                            </h2>
                            <p className="mt-2 font-manrope text-sm leading-relaxed text-white/85 drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)]">
                                {activeBeat.description}
                            </p>
                        </div>

                        <div className="hidden space-y-7 md:block">
                            {storyBeats.filter((_, index) => index % 2 === 0).map((beat) => {
                                const isActive = activeBeat.id === beat.id;
                                return (
                                    <motion.div
                                        key={beat.id}
                                        initial={false}
                                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
                                        transition={{ duration: 0.2 }}
                                        className="max-w-lg"
                                    >
                                        <p className="font-manrope text-[11px] uppercase tracking-[0.22em] text-orange-300/90">
                                            {beat.label}
                                        </p>
                                        <h2 className="mt-2 font-syne text-2xl font-bold tracking-tight text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.65)] md:text-4xl">
                                            {beat.title}
                                        </h2>
                                        <p className="mt-2 font-manrope text-sm leading-relaxed text-white/85 drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)] md:text-base">
                                            {beat.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="hidden md:col-span-7 md:flex md:justify-end md:pt-24">
                        <div className="space-y-7 text-right">
                            {storyBeats.filter((_, index) => index % 2 !== 0).map((beat) => {
                                const isActive = activeBeat.id === beat.id;
                                return (
                                    <motion.div
                                        key={beat.id}
                                        initial={false}
                                        animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
                                        transition={{ duration: 0.2 }}
                                        className="max-w-lg"
                                    >
                                        <p className="font-manrope text-[11px] uppercase tracking-[0.22em] text-blue-300/90">
                                            {beat.label}
                                        </p>
                                        <h2 className="mt-2 font-syne text-2xl font-bold tracking-tight text-white drop-shadow-[0_4px_14px_rgba(0,0,0,0.65)] md:text-4xl">
                                            {beat.title}
                                        </h2>
                                        <p className="mt-2 font-manrope text-sm leading-relaxed text-white/85 drop-shadow-[0_3px_10px_rgba(0,0,0,0.65)] md:text-base">
                                            {beat.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-6 right-6 z-[35] flex items-end justify-between md:left-20 md:right-20">
                        <p className="font-manrope text-xs uppercase tracking-[0.22em] text-white/60">
                            Scroll to drive the story
                        </p>

                        <MagneticButton>
                            <a
                                href="#projects"
                                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/35 bg-black/45 text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-black"
                                aria-label="Scroll to projects"
                            >
                                <ArrowDown className="h-5 w-5" />
                            </a>
                        </MagneticButton>
                    </div>
                </div>
            </div>
        </section>
    );
}

