"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiJavascript,
    SiHtml5, SiCss3, SiBootstrap, SiPhp, SiMysql, SiGit, SiCplusplus,
    SiPython, SiKalilinux, SiTableau, SiC, SiTypescript, SiSharp, SiDotnet,
    SiPostman, SiRedux, SiNpm, SiAxios, SiJest
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Database, Shield, BrainCircuit, BarChart, Server, Code2, FileSpreadsheet } from "lucide-react";

const skillCategories = [
    {
        title: "Full Stack Development",
        icon: <Server className="w-6 h-6" />,
        skills: [
            { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
            { name: "React", icon: <SiReact className="w-8 h-8 text-blue-400" /> },
            { name: "Node.js", icon: <SiNodedotjs className="w-8 h-8 text-green-500" /> },
            { name: "Express.js", icon: <SiExpress className="w-8 h-8" /> },
            { name: "MongoDB", icon: <SiMongodb className="w-8 h-8 text-green-600" /> },
            { name: "JavaScript", icon: <SiJavascript className="w-8 h-8 text-yellow-400" /> },
            { name: "TypeScript", icon: <SiTypescript className="w-8 h-8 text-blue-600" /> },
            { name: "HTML5", icon: <SiHtml5 className="w-8 h-8 text-orange-500" /> },
            { name: "CSS3", icon: <SiCss3 className="w-8 h-8 text-blue-500" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8 text-cyan-400" /> },
            { name: "Bootstrap", icon: <SiBootstrap className="w-8 h-8 text-purple-600" /> },
            { name: "PHP", icon: <SiPhp className="w-8 h-8 text-indigo-400" /> },
            { name: "MySQL", icon: <SiMysql className="w-8 h-8 text-blue-600" /> },
            { name: "Git", icon: <SiGit className="w-8 h-8 text-orange-600" /> },
            { name: "API Testing", icon: <SiPostman className="w-8 h-8 text-orange-500" /> },
            { name: "Unit Testing", icon: <SiJest className="w-8 h-8 text-red-600" /> },
            //  { name: "State Management", icon: <SiRedux className="w-8 h-8 text-purple-500" /> },
            //  { name: "Package Management", icon: <SiNpm className="w-8 h-8 text-red-500" /> },
            // { name: "HTTP Client Libraries", icon: <SiAxios className="w-8 h-8 text-blue-500" /> },
        ]
    },
    {
        title: "Programming Languages",
        icon: <Code2 className="w-6 h-6" />,
        skills: [
            { name: "C", icon: <SiC className="w-8 h-8 text-blue-500" /> },
            // { name: "C++", icon: <SiCplusplus className="w-8 h-8 text-blue-600" /> },
            // { name: "C# Programming", icon: <SiSharp className="w-8 h-8 text-green-500" /> },
            { name: "Java", icon: <FaJava className="w-8 h-8 text-red-500" /> },
            { name: "Python", icon: <SiPython className="w-8 h-8 text-yellow-500" /> },
            { name: ".NET Development", icon: <SiDotnet className="w-8 h-8 text-purple-600" /> },
        ]
    },
    {
        title: "Core CS & Database",
        icon: <Database className="w-6 h-6" />,
        skills: [
            { name: "Data Structures", icon: <BrainCircuit className="w-8 h-8 text-blue-400" /> },
            { name: "Algorithms", icon: <BrainCircuit className="w-8 h-8 text-cyan-500" /> },
            { name: "DBMS", icon: <Database className="w-8 h-8 text-green-500" /> },
            { name: "Computer Networks", icon: <Server className="w-8 h-8 text-purple-400" /> },
            { name: "NoSQL Databases", icon: <Database className="w-8 h-8 text-green-400" /> },
        ]
    },
    {
        title: "Data Analytics",
        icon: <BarChart className="w-6 h-6" />,
        skills: [
            { name: "Tableau", icon: <SiTableau className="w-8 h-8 text-blue-600" /> },
            { name: "Excel", icon: <FileSpreadsheet className="w-8 h-8 text-green-600" /> },
            { name: "Cybersecurity", icon: <Shield className="w-8 h-8 text-red-500" /> },
            //    { name: "Kali Linux", icon: <SiKalilinux className="w-8 h-8 text-blue-300" /> },
        ]
    }
];

export function Skills() {
    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-background/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Technical Arsenal
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-purple-500 mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, catIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                            className="p-6 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-blue-500/30 transition-colors shadow-lg"
                        >
                            <div className="flex items-center space-x-3 mb-6 border-b border-foreground/10 pb-4">
                                <div className="p-2 rounded-xl bg-blue-500/10 text-blue-500">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-semibold">{category.title}</h3>
                            </div>

                            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                                {category.skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        whileHover={{ scale: 1.1, y: -5 }}
                                        className="flex flex-col items-center text-center group cursor-pointer"
                                    >
                                        <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center shadow-md mb-3 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] transition-all border border-foreground/5">
                                            {skill.icon}
                                        </div>
                                        <span className="text-xs font-medium text-foreground/70 group-hover:text-foreground transition-colors">
                                            {skill.name}
                                        </span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
