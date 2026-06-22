"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useIntro } from "@/context/IntroContext";

/* ── Indian languages only, English as the final hold ── */
const NAMES = [
  { text: "Abin Antony",       rtl: false }, // English — final hold
    { text: "अबिन एंटोनी",      rtl: false }, // Hindi
    { text: "আবিন অ্যান্টনি",   rtl: false }, // Bengali
    { text: "அபின் அன்டோனி",    rtl: false }, // Tamil
    { text: "అబిన్ అంటోని",     rtl: false }, // Telugu
    { text: "ಅಬಿನ್ ಅಂಟೋನಿ",    rtl: false }, // Kannada
    { text: "അബിൻ ആന്റണി",     rtl: false }, // Malayalam
    { text: "અબીન એન્ટોની",     rtl: false }, // Gujarati
    { text: "ਅਬਿਨ ਐਂਟੋਨੀ",     rtl: false }, // Punjabi
    { text: "ଅବିନ ଆଣ୍ଟୋନୀ",    rtl: false }, // Odia
    { text: "অবিন এণ্টনি",      rtl: false }, // Assamese
    // { text: "ابین انتونی",       rtl: true  }, // Urdu
    { text: "अबिन ॲन्टोनी",     rtl: false }, // Marathi
    { text: "Abin Antony",       rtl: false }, // English — final hold
];

const COLS     = 8;    // number of staircase strips
const CUT_MS   = 80;   // ms per language cut
const HOLD_MS  = 380;  // ms pause on final English name

/* staircase exit config */
const STAGGER  = 0.06; // seconds between each column
const DURATION = 0.52; // seconds each column takes

export default function Template({ children }: { children: React.ReactNode }) {
    const containerRef  = useRef<HTMLDivElement>(null);
    const nameRef       = useRef<HTMLSpanElement>(null);
    const dotRef        = useRef<HTMLDivElement>(null);
    const pathname      = usePathname();
    const { setIntroDone } = useIntro();

    useEffect(() => {
        const container = containerRef.current;
        const nameEl    = nameRef.current;
        const dotEl     = dotRef.current;
        if (!container || !nameEl || !dotEl) return;

        const tops = container.querySelectorAll<HTMLElement>(".col-top");
        const bots = container.querySelectorAll<HTMLElement>(".col-bot");

        /* ── kill any previous tweens & reset ── */
        gsap.killTweensOf([tops, bots, nameEl, dotEl, container]);
        gsap.set(container, { display: "flex" });
        gsap.set(tops,   { yPercent: 0, autoAlpha: 1 });
        gsap.set(bots,   { yPercent: 0, autoAlpha: 1 });
        gsap.set(nameEl, { autoAlpha: 1 });
        gsap.set(dotEl,  { autoAlpha: 1, scale: 1 });

        /* ── seed first name ── */
        let idx = 0;
        nameEl.textContent     = NAMES[0].text;
        nameEl.style.direction = "ltr";
        nameEl.style.textAlign = "center";

        /* ── fast-cut language cycling ── */
        const interval = setInterval(() => {
            idx += 1;

            if (idx >= NAMES.length) {
                clearInterval(interval);
                setTimeout(triggerExit, HOLD_MS);
                return;
            }

            nameEl.textContent     = NAMES[idx].text;
            nameEl.style.direction = NAMES[idx].rtl ? "rtl" : "ltr";
        }, CUT_MS);

        /* ── staircase exit: columns split top-up / bottom-down with delay ── */
        function triggerExit() {
            const tl = gsap.timeline({
                onComplete: () => { gsap.set(container, { display: "none" }); setIntroDone(); },
            });

            /* fade name & dot before panels move */
            tl.to([nameEl, dotEl], { autoAlpha: 0, duration: 0.1, ease: "none" }, 0);

            /* staircase: each column starts slightly after the previous */
            tl.to(tops, {
                yPercent: -100,
                duration: DURATION,
                ease: "power2.in",
                stagger: STAGGER,
            }, 0.08);

            tl.to(bots, {
                yPercent: 100,
                duration: DURATION,
                ease: "power2.in",
                stagger: STAGGER,
            }, 0.08);
        }

        return () => clearInterval(interval);
    }, [pathname]);

    return (
        <div className="relative min-h-screen">
            {/* ─── Page content ─── */}
            <div className="min-h-screen">{children}</div>

            {/* ─── Staircase columns overlay ─── */}
            <div
                ref={containerRef}
                className="fixed inset-0 z-[9999] flex"
                aria-hidden="true"
            >
                {Array.from({ length: COLS }, (_, i) => (
                    <div
                        key={i}
                        className="flex flex-col"
                        style={{ width: `${100 / COLS}%`, height: "100%" }}
                    >
                        {/* top half of this strip */}
                        <div
                            className="col-top"
                            style={{ height: "50%", backgroundColor: "#ffffff" }}
                        />
                        {/* bottom half of this strip */}
                        <div
                            className="col-bot"
                            style={{ height: "50%", backgroundColor: "#ffffff" }}
                        />
                    </div>
                ))}
            </div>

            {/* ─── Name — centred at the seam, above columns ─── */}
            <div
                className="fixed inset-x-0 z-[10000] flex items-center justify-center pointer-events-none"
                style={{ top: "50vh", transform: "translateY(-50%)" }}
            >
                <span
                    ref={nameRef}
                    className="font-manrope font-bold select-none"
                    style={{
                        fontSize: "clamp(1.5rem, 6vw, 2.5rem)",
                        letterSpacing: "-0.025em",
                        lineHeight: 1,
                        whiteSpace: "nowrap",
                        color: "#0b0906",
                    }}
                >
                    {NAMES[0].text}
                </span>
            </div>

            {/* ─── Orange dot below the name ─── */}
            <div
                ref={dotRef}
                className="fixed hidden opacity-0 z-[10000] pointer-events-none"
                style={{
                    top: "50vh",
                    left: "50%",
                    transform: "translate(-50%, 1.8rem)",
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "#E8590A",
                }}
            />
        </div>
    );
}
