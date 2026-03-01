"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Code2,
    Layers,
    Layout,
    ShieldCheck,
    LineChart,
    Lock,
    ArrowUpRight
} from "lucide-react";

const services = [
    {
        title: "Web Development",
        description: "Building responsive, high-performance web applications using modern frameworks like Next.js, React, and the MERN stack.",
        icon: <Code2 className="w-8 h-8 text-blue-500" />,
    },
    {
        title: "API Development",
        description: "Designing and implementing scalable, secure, and efficient backend architectures and RESTful API systems.",
        icon: <Layers className="w-8 h-8 text-cyan-500" />,
    },
    {
        title: "UI/UX Design",
        description: "Creating intuitive, interactive, and visually stunning user interfaces with a focus on modern aesthetics and user experience.",
        icon: <Layout className="w-8 h-8 text-purple-500" />,
    },
    {
        title: "Software Testing",
        description: "Ensuring application reliability and quality through rigorous unit, integration, and robust logical verification.",
        icon: <ShieldCheck className="w-8 h-8 text-green-500" />,
    },
    {
        title: "Data Analytics",
        description: "Transforming complex data into actionable insights and visual stories using Tableau and advanced analytical methodologies.",
        icon: <LineChart className="w-8 h-8 text-blue-600" />,
    },
    {
        title: "Cybersecurity",
        description: "Protecting digital assets through web security best practices, IAM implementation, and vulnerability assessment.",
        icon: <Lock className="w-8 h-8 text-red-500" />,
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Professional Services
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mx-auto rounded-full"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-6 text-foreground/70 text-lg max-w-2xl mx-auto"
                    >
                        Leveraging full-stack expertise and a security-first mindset to deliver high-quality digital solutions.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-blue-500/30 transition-all duration-300 shadow-lg group relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-20 transition-opacity">
                                <ArrowUpRight className="w-8 h-8" />
                            </div>

                            <div className="mb-6 p-4 rounded-2xl bg-background w-fit shadow-md group-hover:scale-110 transition-transform duration-300 border border-foreground/5">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-bold mb-4 group-hover:text-blue-500 transition-colors">
                                {service.title}
                            </h3>

                            <p className="text-foreground/70 leading-relaxed">
                                {service.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
