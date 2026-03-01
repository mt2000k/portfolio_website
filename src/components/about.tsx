"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, MonitorCheck, Lightbulb, FileText } from "lucide-react";
import Image from "next/image";

export function About() {
    const skills = [
        {
            icon: <Code2 className="w-8 h-8 text-blue-500" />,
            title: "Analytical Skills",
            description: "Deep dive into system architectures to optimize performance, scalability, and security.",
        },
        {
            icon: <MonitorCheck className="w-8 h-8 text-cyan-400" />,
            title: "Problem Solving",
            description: "Tackling complex backend logic and delivering robust, seamless web applications.",
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-purple-500" />,
            title: "Creative Communicator",
            description: "Bridging the gap between technical requirements and stunning, interactive user experiences.",
        },
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        About Me
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-6 text-lg text-foreground/80 leading-relaxed max-w-2xl"
                    >
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-6">
                            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-foreground/10 shadow-2xl shrink-0 group">
                                <Image
                                    src="/profile.jpg"
                                    alt="Munish Thakur"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    priority
                                />
                                <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-white/20"></div>
                            </div>
                            <div className="space-y-4 text-center sm:text-left">
                                <p>
                                    I am <strong className="text-foreground">Munish Thakur</strong>, a Software Engineer with a strong foundation in Full Stack Web Development, specializing in the MERN stack and Next.js. My passion lies in building scalable web applications and exploring modern 3D web technologies.
                                </p>
                            </div>
                        </div>

                        <p>
                            With expertise in multiple Programming Languages (C++, Java, Python, JS), I handle everything from core Data Structures and Algorithms to complex Database Management Systems and Computer Networks.
                        </p>
                        <p>
                            Beyond coding, my background encompasses Data Analytics (Tableau, Insights), and Cybersecurity (Web Security, IAM, Kali Linux), allowing me to approach software development with a holistic, data-driven, and security-first mindset.
                        </p>

                        <div className="pt-4 flex justify-center sm:justify-start">
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all group"
                            >
                                <span>View Resume</span>
                                <FileText className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                                className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:bg-foreground/10 transition-colors group text-center sm:text-left"
                            >
                                <div className="p-4 rounded-full bg-background group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(59,130,246,0.2)]">
                                    {skill.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                                    <p className="text-foreground/70 text-sm leading-relaxed">
                                        {skill.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
