"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink } from "lucide-react";

interface Certification {
    title: string;
    issuer: string;
    date: string;
    link: string;
}

const certifications: Certification[] = [
    {
        title: "AWS Certified Developer - Associate",
        issuer: "Amazon Web Services",
        date: "2024",
        link: "#",
    },
    {
        title: "Full Stack Web Development",
        issuer: "Coursera / Meta",
        date: "2023",
        link: "#",
    },
    {
        title: "Cybersecurity Basics & IAM",
        issuer: "IBM",
        date: "2023",
        link: "#",
    },
    {
        title: "Data Analytics and Modeling",
        issuer: "Google",
        date: "2022",
        link: "#",
    }
];

export function Certifications() {
    return (
        <section className="py-24 relative overflow-hidden bg-background/50 border-t border-foreground/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Certifications
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-24 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start space-x-4 p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-emerald-500/30 transition-all hover:bg-foreground/10 group"
                        >
                            <div className="p-3 bg-emerald-500/10 text-emerald-500 rounded-xl group-hover:scale-110 transition-transform">
                                <Award size={28} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-1 group-hover:text-emerald-500 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-foreground/60 font-medium mb-3">{cert.issuer}</p>
                                <div className="flex items-center justify-between">
                                    <span className="flex items-center text-xs text-foreground/50">
                                        <Calendar size={14} className="mr-1" />
                                        {cert.date}
                                    </span>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center text-xs font-semibold text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity"
                                    >
                                        View Credential <ExternalLink size={14} className="ml-1" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
