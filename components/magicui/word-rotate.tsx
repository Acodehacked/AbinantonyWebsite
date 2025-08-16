"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  className?: string;
}

export function WordRotate({
  words,
  duration = 2500,
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
  const textRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use a scoped GSAP context so animations are cleaned up automatically
    let intervalId: number | undefined;
    const ctx = gsap.context(() => {
      const el = textRef.current;
      if (!el) return;

      // Ensure a performant initial state (use transforms + opacity)
      gsap.set(el, { opacity: 1, y: 0, scale: 1, willChange: 'transform, opacity' });

      const rotate = () => {
        if (!el) return;

        const tl = gsap.timeline();

        // Animate out using transforms (GPU friendly)
        tl.to(el, {
          opacity: 0,
          y: -20,
          scale: 0.98,
          duration: 0.35,
          ease: 'power1.inOut',
          onComplete: () => {
            setIndex((prev) => (prev + 1) % words.length);
          },
        });

        // Slight delay then animate in
        tl.fromTo(
          el,
          { opacity: 0, y: 20, scale: 1.02 },
          { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: 'power1.out' },
          '+=0.06'
        );
      };

      // Run once immediately so the first cycle is visible without waiting
      rotate();
      intervalId = window.setInterval(rotate, duration);
    }, containerRef);

    return () => {
      if (intervalId) clearInterval(intervalId);
      ctx.revert();
    };
  }, [words, duration]);

  return (
    <div ref={containerRef} className="relative flex items-center justify-center py-6 h-[280px]">
      <h1
        ref={textRef}
        className={cn(
          'text-5xl font-extrabold relative text-center text-white',
          // 'glow-text',
          className
        )}
      >
        {words[index]}
      </h1>

      <style jsx>{`
        .glow-text::before {
          content: '';
          position: absolute;
          height: 40%;
          width: 40%;
          inset: 10%;
          z-index: -1;
          /* static, subtle radial glow (no color animation) */
          background: radial-gradient(circle, rgba(95,0,255,0.16), rgba(0,198,255,0.06));
          filter: blur(40px);
          border-radius: 50%;
          animation: rotateGlow 30s linear infinite;
          opacity: 0.22;
        }

        @keyframes rotateGlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
