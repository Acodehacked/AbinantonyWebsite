"use client";

import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";
import { Code2 } from "lucide-react";

const BG           = "#0b0906";
const TEXT_PRIMARY = "#F2EDE8";
const TEXT_MUTED   = "rgba(242,237,232,0.35)";
const ORANGE       = "#E84018";

export default function ArtModePlaceholder() {
    const { setMode } = useMode();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col items-center justify-center overflow-hidden"
            style={{ minHeight: "100svh", backgroundColor: BG }}
        >
            {/* Faint orange glow orb */}
            <div
                aria-hidden="true"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "70vw",
                    height: "70vw",
                    maxWidth: "700px",
                    maxHeight: "700px",
                    background: `radial-gradient(circle, rgba(200,77,10,0.10) 0%, transparent 65%)`,
                    pointerEvents: "none",
                }}
            />

            {/* Status badge — top left */}
            <div
                className="absolute top-24 left-6 md:left-20 flex items-center gap-2"
            >
                <span
                    style={{
                        display: "inline-block",
                        width: "7px",
                        height: "7px",
                        borderRadius: "50%",
                        backgroundColor: ORANGE,
                        boxShadow: `0 0 8px ${ORANGE}`,
                        animation: "pulse 2s infinite",
                    }}
                />
                <span
                    className="font-manrope uppercase tracking-widest text-xs"
                    style={{ color: TEXT_MUTED }}
                >
                    Art Mode — In Development
                </span>
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-6">
                <motion.h1
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="font-syne font-black leading-none tracking-tight"
                    style={{
                        fontSize: "clamp(6rem, 22vw, 20rem)",
                        letterSpacing: "-0.04em",
                        background: `linear-gradient(160deg, ${ORANGE} 0%, #ff7a45 40%, #7a2e06 80%, transparent 100%)`,
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        lineHeight: 0.9,
                    }}
                >
                    art.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.6 }}
                    className="font-syne font-bold mt-8 mb-3"
                    style={{ fontSize: "clamp(1rem, 2.5vw, 1.5rem)", color: TEXT_PRIMARY }}
                >
                    this chapter is being written.
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="font-manrope max-w-sm mx-auto leading-relaxed"
                    style={{ fontSize: "0.9rem", color: TEXT_MUTED }}
                >
                    the creative portfolio is currently in development.
                    <br />
                    check back soon.
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.55, duration: 0.5 }}
                    onClick={() => setMode("dev")}
                    className="inline-flex items-center gap-2 font-manrope font-semibold mt-10 transition-opacity duration-200 hover:opacity-70"
                    style={{
                        fontSize: "0.85rem",
                        padding: "0.65rem 1.5rem",
                        borderRadius: "9999px",
                        backgroundColor: "rgba(255,255,255,0.06)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        color: TEXT_PRIMARY,
                    }}
                >
                    <Code2 size={14} />
                    back to dev
                </motion.button>
            </div>

            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.3; }
                }
            `}</style>
        </motion.div>
    );
}
