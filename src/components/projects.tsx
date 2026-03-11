"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

interface ProjectDetails {
    title: string;
    description: string;
    techStack: string[];
    gradient: string;
    imageUrl?: string;
    githubUrl: string;
    liveUrl: string;
}

const projects: ProjectDetails[] = [
    {
        title: "E-Commerce Platform",
        description: "A full-featured Next.js e-commerce store with Stripe integration, product filtering, and a custom admin dashboard.",
        techStack: ["Next.js", "React", "Tailwind CSS", "MongoDB"],
        gradient: "from-blue-500 to-cyan-400",
        imageUrl: "/e_commerce_dashboard.png",
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        title: "Real-Time Chat App",
        description: "A scalable real-time messaging application using Socket.io and Redis for instant communication.",
        techStack: ["Node.js", "Express", "Socket.io", "React"],
        gradient: "from-purple-500 to-pink-500",
        imageUrl: "/chat_app_interface.png",
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        title: "Cybersecurity Dashboard",
        description: "An analytics dashboard visualizing real-time log analysis and threat detection metrics.",
        techStack: ["Python", "Tableau", "Next.js", "Tailwind"],
        gradient: "from-red-500 to-orange-500",
        imageUrl: "/e_commerce_dashboard.png", // reusing due to gen failure
        githubUrl: "#",
        liveUrl: "#",
    },
    {
        title: "3D Portfolio Matrix",
        description: "An interactive, WebGL-powered portfolio showcasing projects with realistic physics and materials.",
        techStack: ["Three.js", "React Three Fiber", "Framer Motion"],
        gradient: "from-green-400 to-teal-500",
        imageUrl: "/portfolio_matrixx.png",
        githubUrl: "https://github.com/mt2000k/portfolio_website",
        liveUrl: "https://munishthakur.vercel.app/",
    }
];

function ProjectCard({ project, index }: { project: ProjectDetails, index: number }) {
    const ref = useRef<HTMLDivElement>(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ perspective: 1000 }}
            className="h-full"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="relative h-full w-full rounded-2xl bg-foreground/5 border border-foreground/10 flex flex-col overflow-hidden group hover:border-foreground/20 transition-colors"
            >
                {/* Project "Image" Header */}
                <div style={{ transform: "translateZ(50px)" }} className={`w-full h-48 relative overflow-hidden ${!project.imageUrl ? `bg-gradient-to-br ${project.gradient}` : ""}`}>
                    {project.imageUrl ? (
                        <>
                            <Image
                                src={project.imageUrl}
                                alt={project.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110 z-0"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
                        </>
                    ) : (
                        <>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                            <div className="absolute inset-0 bg-background/10 backdrop-blur-[2px] z-10" />
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150 rotate-12 group-hover:scale-100 group-hover:rotate-0 z-20">
                                <span className="text-white text-6xl font-black opacity-30 select-none">{project.title.substring(0, 2).toUpperCase()}</span>
                            </div>
                        </>
                    )}
                </div>

                {/* Project Content */}
                <div style={{ transform: "translateZ(30px)" }} className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-foreground/70 text-sm mb-6 flex-grow">
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.map((tech) => (
                            <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-background border border-foreground/10 text-foreground/80">
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Links */}
                    <div style={{ transform: "translateZ(40px)" }} className="flex items-center space-x-4">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-sm font-medium hover:text-blue-500 transition-colors"
                        >
                            <Github size={18} />
                            <span>Code</span>
                        </a>
                        <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 text-sm font-medium hover:text-cyan-500 transition-colors"
                        >
                            <ExternalLink size={18} />
                            <span>Live Demo</span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Featured Work
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
