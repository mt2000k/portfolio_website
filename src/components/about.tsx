"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, MonitorCheck, Lightbulb, FileText, ArrowUpRight } from "lucide-react";
import Image from "next/image";

function TiltCard({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
    const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = ref.current?.getBoundingClientRect();
        if (rect) {
            const width = rect.width;
            const height = rect.height;
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            const xPct = mouseX / width - 0.5;
            const yPct = mouseY / height - 0.5;
            x.set(xPct);
            y.set(yPct);
        }
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div style={{ perspective: 1000 }} className="h-full w-full">
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative w-full h-full rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-blue-500/30 transition-colors duration-300 shadow-lg p-6 md:p-8 flex flex-col group overflow-hidden"
            >
                <div
                    style={{ transform: "translateZ(30px)" }}
                    className="h-full w-full flex flex-col relative z-20"
                >
                    {children}
                </div>
            </motion.div>
        </div>
    );
}

export function About() {
    return (
        <section id="about" className="py-24 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"
                    />
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight text-foreground"
                    >
                        About Me.
                    </motion.h2>
                </div>

                {/* Bento Box Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(280px,auto)]">

                    {/* Main Profile Bento - Spans 2 cols, 2 rows on lg */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 lg:row-span-2 h-full"
                    >
                        <TiltCard>
                            <div className="flex flex-col lg:flex-row h-full gap-8 items-center lg:items-start justify-between relative z-10">
                                <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
                                    <h3 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">
                                        Munish Thakur
                                    </h3>
                                    <p className="text-foreground/80 text-lg md:text-xl leading-relaxed max-w-lg mx-auto lg:mx-0">
                                        A Full Stack Engineer blending MERN stack mastery with modern 3D web technologies to build scalable, striking applications.
                                    </p>
                                    <div className="mt-8 flex gap-3 flex-wrap justify-center lg:justify-start">
                                        <span className="px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-medium text-sm backdrop-blur-md border border-blue-500/20 border-white/20">C++ / Java / JS</span>
                                        <span className="px-4 py-2 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-medium text-sm backdrop-blur-md border border-cyan-500/20">Next.js</span>
                                        <span className="px-4 py-2 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 font-medium text-sm backdrop-blur-md border border-purple-500/20">Cybersecurity</span>
                                    </div>
                                    <div className="mt-8 flex justify-center lg:justify-start pb-4">
                                        <a
                                            href="/resume.pdf"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center justify-center space-x-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] group z-20 pointer-events-auto"
                                        >
                                            <span>View Resume</span>
                                            <FileText className="w-5 h-5 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                                        </a>
                                    </div>
                                </div>
                                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/60 dark:border-white/10 shrink-0 shadow-2xl order-1 lg:order-2">
                                    <Image src="/profile.jpg" alt="Munish" priority fill className="object-cover" />
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Skill 1 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="h-full"
                    >
                        <TiltCard>
                            <div className="flex flex-col h-full justify-between">
                                <Code2 className="w-12 h-12 text-blue-500 mb-6" />
                                <div>
                                    <h4 className="font-bold text-2xl mb-3">System Architecture</h4>
                                    <p className="text-sm text-foreground/70 leading-relaxed">Optimization, scalability, and security from database to deployment.</p>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Skill 2 */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="h-full"
                    >
                        <TiltCard>
                            <div className="flex flex-col h-full justify-between">
                                <MonitorCheck className="w-12 h-12 text-cyan-500 mb-6" />
                                <div>
                                    <h4 className="font-bold text-2xl mb-3">Problem Solving</h4>
                                    <p className="text-sm text-foreground/70 leading-relaxed">Tackling complex backend logic and delivering robust solutions.</p>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>

                    {/* Skill 3 - spans 2 cols on md/lg */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="md:col-span-2 h-full"
                    >
                        <TiltCard>
                            <div className="flex flex-col sm:flex-row h-full items-center gap-8 justify-center">
                                <div className="p-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 shrink-0">
                                    <Lightbulb className="w-12 h-12 text-purple-600 dark:text-purple-400" />
                                </div>
                                <div className="text-center sm:text-left">
                                    <h4 className="font-bold text-2xl mb-3">Data-Driven Mindset</h4>
                                    <p className="text-foreground/70 leading-relaxed">
                                        Leveraging background in Data Analytics (Tableau) and Security to build holistic, user-focused experiences.
                                    </p>
                                </div>
                            </div>
                        </TiltCard>
                    </motion.div>


                </div>
            </div>
        </section>
    );
}
