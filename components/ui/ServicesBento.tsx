"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Layout, Smartphone, Cloud, Monitor, Palette, Server } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { FaReact, FaNodeJs, FaAws, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiFlutter } from "react-icons/si";

export default function ServicesBento() {
    return (
        <section className="px-6 md:px-20 py-24 bg-white">
            <div className="mb-16">
                <h2 className="text-4xl md:text-6xl font-bold mb-6">What I do?</h2>
                <p className="text-xl text-neutral-600 max-w-2xl">
                    Discover our awesome services to make your business shine!
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">

                {/* Web Development - Wide Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="md:col-span-3 relative overflow-hidden rounded-3xl bg-neutral-50 border border-neutral-100 group hover:shadow-xl transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 p-10 h-full flex flex-col justify-between">
                        <div className="max-w-md">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                                <Monitor className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Web Development</h3>
                            <p className="text-neutral-600 mb-6">
                                Creating responsive and scalable websites tailored to your needs. From landing pages to complex web applications.
                            </p>
                            <button className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                                Get started <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Visual: Mock Browser/Dashboard */}
                        <div className="absolute right-0 top-10 w-[60%] h-full bg-white rounded-tl-2xl shadow-2xl border border-neutral-100 p-4 translate-x-10 group-hover:translate-x-5 transition-transform duration-500">
                            <div className="flex items-center gap-2 mb-4 border-b border-neutral-100 pb-4">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-400" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                    <div className="w-3 h-3 rounded-full bg-green-400" />
                                </div>
                                <div className="h-4 w-40 bg-neutral-100 rounded-full ml-4" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-32 bg-blue-50 rounded-xl p-4">
                                    <div className="w-8 h-8 bg-blue-200 rounded-lg mb-2" />
                                    <div className="h-2 w-16 bg-blue-200 rounded mb-1" />
                                    <div className="h-2 w-10 bg-blue-100 rounded" />
                                </div>
                                <div className="h-32 bg-purple-50 rounded-xl p-4">
                                    <div className="w-8 h-8 bg-purple-200 rounded-lg mb-2" />
                                    <div className="h-2 w-16 bg-purple-200 rounded mb-1" />
                                    <div className="h-2 w-10 bg-purple-100 rounded" />
                                </div>
                                <div className="col-span-2 h-24 bg-neutral-50 rounded-xl p-4 flex items-center gap-4">
                                    <div className="flex-1 space-y-2">
                                        <div className="h-2 w-full bg-neutral-200 rounded" />
                                        <div className="h-2 w-[80%] bg-neutral-200 rounded" />
                                    </div>
                                    <div className="w-16 h-16 bg-neutral-200 rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Mobile App - Tall Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="md:row-span-2 relative overflow-hidden rounded-3xl bg-neutral-50 border border-neutral-100 group hover:shadow-xl transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-neutral-50 to-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 p-10 h-full flex flex-col">
                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                            <Smartphone className="w-6 h-6 text-black" />
                        </div>
                        <h3 className="text-3xl font-bold mb-4">Mobile App Development</h3>
                        <p className="text-neutral-600 mb-8">
                            Designing intuitive and robust mobile applications for iOS and Android.
                        </p>
                        <button className="flex items-center gap-2 text-black font-semibold group-hover:gap-3 transition-all mb-auto">
                            Get started <ArrowRight className="w-4 h-4" />
                        </button>

                        {/* Visual: Phone Mockup */}
                        <div className="relative w-full h-80 mt-8 flex justify-center">
                            <div className="w-48 h-full bg-black rounded-t-[3rem] border-8 border-black overflow-hidden relative shadow-2xl translate-y-10 group-hover:translate-y-4 transition-transform duration-500">
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl z-20" />
                                <div className="w-full h-full bg-white p-4 pt-12 space-y-4">
                                    <div className="flex justify-between items-center">
                                        <div className="w-8 h-8 bg-neutral-100 rounded-full" />
                                        <div className="w-4 h-4 bg-neutral-100 rounded-full" />
                                    </div>
                                    <div className="h-32 bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl" />
                                    <div className="grid grid-cols-4 gap-2">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="aspect-square bg-neutral-100 rounded-xl" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* UI/UX Design */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="md:col-span-2 relative overflow-hidden rounded-3xl bg-neutral-50 border border-neutral-100 group hover:shadow-xl transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-pink-50/50 to-orange-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 p-10 h-full flex flex-col md:flex-row items-center gap-8">
                        <div className="flex-1">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                                <Palette className="w-6 h-6 text-pink-500" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">UI/UX Design</h3>
                            <p className="text-neutral-600 mb-6">
                                Crafting user-centric interfaces for an optimal digital experience.
                            </p>
                            <button className="flex items-center gap-2 text-pink-600 font-semibold group-hover:gap-3 transition-all">
                                Get started <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Visual: Floating UI Elements */}
                        <div className="flex-1 relative h-full w-full min-h-[200px]">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-xs">
                                <div className="bg-white p-4 rounded-xl shadow-lg border border-neutral-100 transform -rotate-6 group-hover:rotate-0 transition-transform duration-500 z-10 relative">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-xs font-bold text-pink-600">UI</div>
                                        <div className="h-2 w-20 bg-neutral-100 rounded" />
                                    </div>
                                    <div className="h-2 w-full bg-neutral-50 rounded mb-2" />
                                    <div className="h-2 w-3/4 bg-neutral-50 rounded" />
                                </div>
                                <div className="absolute top-4 left-4 bg-white p-4 rounded-xl shadow-lg border border-neutral-100 transform rotate-6 group-hover:rotate-0 transition-transform duration-500 z-0 opacity-80">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-100" />
                                        <div className="h-2 w-20 bg-neutral-100 rounded" />
                                    </div>
                                    <div className="h-2 w-full bg-neutral-50 rounded" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Cloud Solutions */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="md:col-span-2 relative overflow-hidden rounded-3xl bg-neutral-50 border border-neutral-100 group hover:shadow-xl transition-all duration-300"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-green-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative z-10 p-10 h-full flex flex-col md:flex-row-reverse items-center gap-8">
                        <div className="flex-1">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6">
                                <Cloud className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-3xl font-bold mb-4">Cloud Solutions</h3>
                            <p className="text-neutral-600 mb-6">
                                Architecting scalable and secure cloud infrastructure.
                            </p>
                            <button className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all">
                                Get started <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>

                        {/* Visual: Server/Network */}
                        <div className="flex-1 relative h-full w-full min-h-[200px] flex items-center justify-center">
                            <div className="grid grid-cols-2 gap-4 transform group-hover:scale-105 transition-transform duration-500">
                                <div className="bg-white p-4 rounded-2xl shadow-md border border-neutral-100 flex flex-col items-center gap-2">
                                    <FaAws className="w-8 h-8 text-orange-500" />
                                    <span className="text-xs font-bold text-neutral-500">AWS</span>
                                </div>
                                <div className="bg-white p-4 rounded-2xl shadow-md border border-neutral-100 flex flex-col items-center gap-2 mt-8">
                                    <FaNodeJs className="w-8 h-8 text-green-600" />
                                    <span className="text-xs font-bold text-neutral-500">Node</span>
                                </div>
                                <div className="bg-white p-4 rounded-2xl shadow-md border border-neutral-100 flex flex-col items-center gap-2 -mt-8">
                                    <FaReact className="w-8 h-8 text-blue-400" />
                                    <span className="text-xs font-bold text-neutral-500">React</span>
                                </div>
                                <div className="bg-white p-4 rounded-2xl shadow-md border border-neutral-100 flex flex-col items-center gap-2">
                                    <Server className="w-8 h-8 text-neutral-600" />
                                    <span className="text-xs font-bold text-neutral-500">Server</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
