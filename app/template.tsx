"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

export default function Template({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const progressRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const counterRef = useRef<HTMLSpanElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const overlay = overlayRef.current;
    const progress = progressRef.current;
    const text = textRef.current;
    const counter = counterRef.current;

    if (!overlay || !progress || !text || !counter) return;

    // Reset initial state
    gsap.set(overlay, { autoAlpha: 1 });
    gsap.set(progress, { scaleX: 0, transformOrigin: "left" });
    gsap.set(text, { opacity: 0, y: 30 });
    counter.innerText = "0%";

    const tl = gsap.timeline();

    // Text Reveal
    tl.to(text, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    // Progress Animation
    tl.to(progress, {
      scaleX: 1,
      duration: 1.5,
      ease: "expo.inOut",
      onUpdate: function () {
        const progressVal = Math.round(this.progress() * 100);
        counter.innerText = `${progressVal}%`;
      }
    }, "-=0.6");

    // Exit Animation
    tl.to(overlay, {
      yPercent: -100,
      duration: 0.8,
      ease: "power4.inOut",
      delay: 0.1
    });

  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Page content */}
      <div className="min-h-screen">{children}</div>

      {/* Transition overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 flex flex-col items-center justify-center bg-[#0b0b0c] z-[9999] text-white"
      >
        {/* Centered Text */}
        <div ref={textRef} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Abinantony.</h1>
        </div>

        {/* Bottom Right Counter */}
        <div className="absolute bottom-10 right-10 md:bottom-20 md:right-20 overflow-hidden">
          <span
            ref={counterRef}
            className="block text-6xl md:text-9xl font-bold tracking-tighter text-neutral-800"
          >
            0%
          </span>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5">
          <div ref={progressRef} className="h-full w-full bg-white" />
        </div>
      </div>
    </div>
  );
}
