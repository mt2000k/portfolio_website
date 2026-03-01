"use client";

import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";

// Dynamically import the 3D model with SSR disabled
const Model = dynamic(() => import("./canvas-model").then((mod) => mod.CanvasModel), {
    ssr: false,
    loading: () => (
        <div className="absolute inset-0 -z-10 h-full w-full flex items-center justify-center bg-background/50 backdrop-blur-sm">
            <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
    ),
});

export function Hero() {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* 3D Background */}
            <Model />

            {/* Content */}
            <div className="z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8 p-3 rounded-full bg-background/30 backdrop-blur-md border border-foreground/10 shadow-xl"
                >
                    <span className="text-sm font-medium tracking-wide flex items-center gap-2 px-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        Available for new opportunities
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6"
                >
                    High-Performance <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500">Software Engineer</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10"
                >
                    Building robust backend architectures, interactive 3D web experiences, and seamless full-stack applications with modern technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto"
                >
                    <a
                        href="#projects"
                        className="flex items-center justify-center px-8 py-4 rounded-full bg-foreground text-background font-semibold hover:scale-105 transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] group w-full sm:w-auto"
                    >
                        View Projects
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center justify-center px-8 py-4 rounded-full bg-background/50 backdrop-blur-md border border-foreground/20 font-semibold hover:bg-foreground/5 transition-all w-full sm:w-auto"
                    >
                        Get In Touch
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
            >
                <span className="text-[10px] sm:text-xs tracking-widest uppercase mb-2 text-foreground/50 font-bold">Scroll Down</span>
                <div className="w-[1px] h-12 sm:h-16 bg-gradient-to-b from-foreground/50 to-transparent" />
            </motion.div>
        </section>
    );
}
