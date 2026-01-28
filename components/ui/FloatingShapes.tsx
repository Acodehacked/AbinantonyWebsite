"use client";

import React from "react";
import { motion } from "framer-motion";

const shapes = [
    {
        id: 1,
        type: "circle",
        size: 80,
        initialX: "10%",
        initialY: "20%",
        duration: 20,
        delay: 0,
        color: "bg-blue-300/20",
    },
    {
        id: 2,
        type: "square",
        size: 120,
        initialX: "80%",
        initialY: "15%",
        duration: 25,
        delay: 2,
        color: "bg-purple-300/20",
    },
    {
        id: 3,
        type: "circle",
        size: 60,
        initialX: "20%",
        initialY: "80%",
        duration: 18,
        delay: 1,
        color: "bg-pink-300/20",
    },
    {
        id: 4,
        type: "square",
        size: 100,
        initialX: "70%",
        initialY: "70%",
        duration: 22,
        delay: 3,
        color: "bg-cyan-300/20",
    },
    {
        id: 5,
        type: "circle",
        size: 150,
        initialX: "50%",
        initialY: "50%",
        duration: 30,
        delay: 0,
        color: "bg-yellow-300/10",
    },
];

export default function FloatingShapes() {
    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {shapes.map((shape) => (
                <motion.div
                    key={shape.id}
                    className={`absolute ${shape.color} backdrop-blur-3xl rounded-full`}
                    style={{
                        width: shape.size,
                        height: shape.size,
                        left: shape.initialX,
                        top: shape.initialY,
                        borderRadius: shape.type === "circle" ? "50%" : "20%",
                    }}
                    animate={{
                        y: ["0%", "-30%", "0%"],
                        x: ["0%", "20%", "0%"],
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: shape.duration,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                        delay: shape.delay,
                    }}
                />
            ))}
        </div>
    );
}
