"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useRef } from "react";
import { cn } from "@/lib/utils";

export interface TextRevealProps {
  children: string;
  className?: string;
}

export const TextReveal: FC<TextRevealProps> = ({ children, className }) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.8", "end 0.5"],
  });

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string");
  }

  const words = children.split(" ");

  return (
    <div className="relative z-0 h-[100vh]"> {/* Ensure Enough Height */}
      <div ref={targetRef} className={cn("sticky top-20 mx-auto flex max-w-[1700px] pt-[100px] items-center px-[1rem] py-[5rem]")}>
        <span className="flex font-p font-regular mt-10 flex-wrap p-5 normal-case text-3xl  text-black/20 dark:text-white/20 md:text-3xl lg:text-4xl xl:text-5xl leading-10 tracking-tight">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = start + 1 / words.length;
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]}>
                {word}
              </Word>
            );
          })}
        </span>
      </div>
    </div>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const translateY = useTransform(progress, range, [20, 0]);

  return (
    <span className="relative mx-2 lg:mx-3 overflow-hidden">
      <motion.span style={{ opacity, y: translateY }} className="text-white">
        {children}
      </motion.span>
    </span>
  );
};
