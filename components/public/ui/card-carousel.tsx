"use client";
import React, {
    useEffect,
    useRef,
    useState,
    createContext,
    useContext,
} from "react";
import {
    IconArrowNarrowLeft,
    IconArrowNarrowRight,
    IconX,
} from "@tabler/icons-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Link from "next/link";
import { EVENTS } from "@/constants";

interface CarouselProps {
    title?: string;
    initialScroll?: number;
}

type Card = {
    src: string;
    category: string;
    content: React.ReactNode;
};

export const CarouselContext = createContext<{
    onCardClose: (index: number) => void;
    currentIndex: number;
}>({
    onCardClose: () => { },
    currentIndex: 0,
});

export const Carousel = ({ initialScroll = 0,title }: CarouselProps) => {
    const carouselRef = React.useRef<HTMLDivElement>(null);
    const [canScrollLeft, setCanScrollLeft] = React.useState(false);
    const [canScrollRight, setCanScrollRight] = React.useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [modelvisible, setmodelvisible] = useState(-1)
    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollLeft = initialScroll;
            checkScrollability();
        }
    }, [initialScroll]);

    const checkScrollability = () => {
        if (carouselRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
            setCanScrollLeft(scrollLeft > 0);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
        }
    };

    const scrollLeft = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
        }
    };

    const scrollRight = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
        }
    };

    const handleCardClose = (index: number) => {
        if (carouselRef.current) {
            const cardWidth = isMobile() ? 360 : 670; // (md:w-96)
            const gap = isMobile() ? 4 : 8;
            const scrollPosition = (cardWidth + gap) * (index + 1);
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: "smooth",
            });
            setCurrentIndex(index);
        }
    };

    const isMobile = () => {
        return window && window.innerWidth < 768;
    };


    return (
        <CarouselContext.Provider
            value={{ onCardClose: handleCardClose, currentIndex }}
        >
            <div className="relative  w-full mb-10">
                <div
                    className="w-full  overflow-x-scroll  overscroll-x-auto py-10 md:pt-5 scroll-smooth [scrollbar-width:none]"
                    ref={carouselRef}
                    onScroll={checkScrollability}
                >
                    <div
                        className={cn(
                            "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l from-slate-900"
                        )}
                    ></div>

                    <div
                        className={cn(
                            "flex flex-row justify-start gap-4 ps-10 pe-10",
                            "max-w-7xl mx-auto" // remove max-w-4xl if you want the carousel to span the full width of its container
                        )}
                    >
                        {EVENTS.filter((item)=>item.title != title).map((item, index) => (
                            <Link href={`/projects/${item.title.replaceAll(" ", "-")}`}
                            key={"card" + index}
                            >
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        y: 20,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 0.5,
                                            delay: 0.2 * index,
                                            ease: "easeOut",
                                            once: true,
                                        },
                                    }}
                                    className="last:pr-[5%]  md:min-w-[600px] min-w-[360px]  rounded-3xl"
                                >
                                    <Image src={`/${item.image}`} className="w-full md:min-w-[600px] min-w-[360px] rounded-xl" alt="alt" width={600} height={300} />
                                    <div className="p-2">
                                        <h1 className="normal-case font-p text-2xl">⚡{item.title}</h1>
                                        <p className="normal-case font-p font-light">{item.subtitle}</p>
                                        <div className="flex gap-2 mt-2 flex-wrap">
                                            {item.category.map((i, index) => <div className="text-sm tracking-wide text-white/40 px-2 py-1 rounded-full border border-white/40" key={index}>
                                                {i}
                                            </div>)}
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="flex justify-end gap-2 mr-10">
                    <button
                        className="relative z-40 h-10 w-10 rounded-full border border-gray-100 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollLeft}
                        disabled={!canScrollLeft}
                    >
                        <ChevronLeft className="h-6 w-6 text-gray-200" />
                    </button>
                    <button
                        className="relative z-40 h-10 w-10 rounded-full border border-gray-100 flex items-center justify-center disabled:opacity-50"
                        onClick={scrollRight}
                        disabled={!canScrollRight}
                    >
                        <ChevronRight className="h-6 w-6 text-gray-200" />
                    </button>
                </div>
            </div>

        </CarouselContext.Provider>
    );
};

