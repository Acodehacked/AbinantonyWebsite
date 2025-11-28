"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
    project: {
        title: string;
        subtitle?: string;
        category: string[];
        image: string;
        link?: string;
    };
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-neutral-100"
        >
            <Link href={`/projects/${project.title.replaceAll(" ", "-")}`} className="block w-full h-full">
                <div className="absolute inset-0 z-10 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

                <Image
                    src={project.image.startsWith("/") ? project.image : `/${project.image}`}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-start justify-between">
                        <div>
                            <p className="text-sm font-medium text-white/90 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 drop-shadow-md">
                                {project.category.slice(0, 2).join(" • ")}
                            </p>
                            <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-lg">{project.title}</h3>
                            {project.subtitle && (
                                <p className="text-white/90 text-sm line-clamp-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 drop-shadow-md">
                                    {project.subtitle}
                                </p>
                            )}
                        </div>
                        <div className="bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 hover:scale-110 shadow-lg">
                            <ArrowUpRight className="w-5 h-5" />
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
}
