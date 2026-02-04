"use client";

import { cn } from "@/lib/utils";
import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";

interface TextRevealProps {
    text: string;
    className?: string;
    tag?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
    delay?: number;
    duration?: number;
}

export default function TextReveal({
    text,
    className,
    tag: Tag = "div" as any,
    delay = 0,
    duration = 0.5,
}: TextRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-10%" });

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: delay,
            },
        },
    };

    const child: Variants = {
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: 90,
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                type: "spring",
                damping: 12,
                stiffness: 100,
                duration: duration,
            },
        },
    };

    const words = text.split(" ");

    return (
        <Tag
            ref={ref}
            className={cn("perspective-[1000px]", className)} // Add perspective for 3D effect
        >
            <motion.span
                variants={container}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="inline-block"
            >
                {words.map((word, index) => (
                    <motion.span
                        key={index}
                        variants={child}
                        className="inline-block mr-[0.2em] transform-style-3d origin-bottom"
                    >
                        {word}
                    </motion.span>
                ))}
            </motion.span>
        </Tag>
    );
}
