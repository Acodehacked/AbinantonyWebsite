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

  useEffect(() => {
    const rotateWord = () => {
      if (!textRef.current) return;

      const tl = gsap.timeline();

      // Animate out
      tl.to(textRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.4,
        ease: "power1.inOut",
        onComplete: () => {
          setIndex((prev) => (prev + 1) % words.length);
        },
      });

      // Wait for next repaint
      tl.add(() => {
        if (textRef.current) {
          gsap.fromTo(
            textRef.current,
            { opacity: 0, y: 10 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              ease: "power1.out",
            }
          );
        }
      }, "+=0.05");
    };

    const interval = setInterval(rotateWord, duration);
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="relative flex items-center justify-center py-6 h-[280px]">
      <h1
        key={index} // ⬅️ important: forces re-render for new word
        ref={textRef}
        className={cn(
          "text-5xl font-extrabold relative text-center animate-text-gradient",
          "bg-[linear-gradient(270deg,_#00c6ff,_#5f00ff,_#ff4ecd,_#ffc300,_#00c6ff)]",
          "bg-[length:400%_400%] bg-clip-text text-transparent",
          "glow-text",
          className
        )}
      >
        {words[index]}
      </h1>

      <style jsx>{`
        .glow-text::before {
          content: '';
          position: absolute;
          height: 30%;
          width: 30%;
          inset: 5%;
          z-index: -1;
          background: conic-gradient(
            from 0deg,
            #00c6ff,
            #5f00ff,
            #ff4ecd,
            #ffc300,
            #00c6ff
          );
          filter: blur(60px);
          border-radius: 50%;
          animation: rotateGlow 20s linear infinite;
          opacity: 0.25;
        }

        @keyframes rotateGlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-text-gradient {
          animation: gradientShift 10s ease infinite;
        }

        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </div>
  );
}
