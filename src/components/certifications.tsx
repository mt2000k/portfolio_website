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
        title: "Tata - GenAI Powered Data Analytics Job Simulation",
        issuer: "Forage",
        date: "Jan 2026",
        link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_Lm3M8q5vmoG4yEW2j_1767690031282_completion_certificate.pdf",
    },
    {
        title: "Tata - Cybersecurity Analyst Job Simulation",
        issuer: "Forage",
        date: "July 2025",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_Lm3M8q5vmoG4yEW2j_1753333921541_completion_certificate.pdf",
    },
    {
        title: "Deloitte Australia - Cyber Job Simulation",
        issuer: "Forage",
        date: "July 2025",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/E9pA6qsdbeyEkp3ti_9PBTqmSxAf6zZTseP_Lm3M8q5vmoG4yEW2j_1751650429794_completion_certificate.pdf",
    },
    {
        title: "Deloitte Australia - Data Analytics Job Simulation",
        issuer: "Forage",
        date: "July 2025",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_Lm3M8q5vmoG4yEW2j_1751652521621_completion_certificate.pdf",
    },

    {
        title: "Tata - Data Visualisation: Empowering Business with Effective Insights Job Simulation",
        issuer: "Forage",
        date: "July 2025",
        link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_Lm3M8q5vmoG4yEW2j_1753331386775_completion_certificate.pdf",
    },
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
                        <motion.a
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={cert.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex items-start space-x-4 p-6 rounded-2xl bg-foreground/5 border border-foreground/10 hover:border-emerald-500/30 transition-all hover:bg-foreground/10 group cursor-pointer"
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
                                    <span className="flex items-center text-xs font-semibold text-emerald-500 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity">
                                        View Credential <ExternalLink size={14} className="ml-1" />
                                    </span>
                                </div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
