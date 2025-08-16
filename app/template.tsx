"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";

const word = "Abinantony.";

export default function Template({ children }: { children: React.ReactNode }) {
  const textRef = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const overlay = overlayRef.current;
    const textEl = textRef.current;
    if (!overlay || !textEl) return;

    gsap.set(overlay, { autoAlpha: 1 });

    const letters = Array.from(
      textEl.querySelectorAll(".letter")
    ) as HTMLElement[];

    letters.forEach((el, i) => {
      const finalChar = el.dataset.char || "";
      const allChars =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.".split(
          ""
        );

      // strip container
      const strip = document.createElement("div");
      strip.style.display = "block";
      strip.style.willChange = "transform";
      strip.style.lineHeight = "1em";

      // fill with random chars
      for (let j = 0; j < 15; j++) {
        const rand = allChars[Math.floor(Math.random() * allChars.length)];
        const span = document.createElement("div");
        span.textContent = rand;
        strip.appendChild(span);
      }

      // final char
      const finalSpan = document.createElement("div");
      finalSpan.textContent = finalChar;
      strip.appendChild(finalSpan);

      el.innerHTML = "";
      el.appendChild(strip);

      const charHeight = el.offsetHeight; // height of one character
      const totalHeight = strip.children.length * charHeight;

      // slot machine animation
      gsap.fromTo(
        strip,
        { y: 0 },
        {
          y: -totalHeight + charHeight,
          duration: 1.4 + i * 0.12,
          ease: "power4.out",
        }
      );
    });

    // fade out after animation
    gsap.to(overlay, {
      autoAlpha: 0,
      duration: 0.7,
      delay: 2.0,
      ease: "power2.out",
    });
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Page content */}
      <div className="min-h-screen">{children}</div>

      {/* Transition overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 flex items-center justify-center bg-[#0b0b0c] z-[9999]"
      >
        <div
          ref={textRef}
          className="text-white text-5xl md:text-7xl font-bold tracking-tight select-none flex space-x-1"
        >
          {word.split("").map((ch, i) => (
            <span
              key={i}
              className="letter inline-block overflow-hidden h-[1em] w-[1.2ch] text-center"
              data-char={ch}
            >
              {ch}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
