"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, Code2 } from "lucide-react";

interface ExperienceItem {
    title: string;
    organization: string;
    date: string;
    description: string;
    type: "work" | "training" | "project";
}

const experiences: ExperienceItem[] = [
    {
        title: "Web Developer",
        organization: "Ain1Rentz",
        date: "Jan 2026 - Present",
        description: "Independently developing a scalable and responsive web application using Next.js and Node.js, ensuring smooth integration with the mobile app and implementing well-structured, scalable, and documented APIs.",
        type: "work",
    },
    {
        title: "Next.js Training ",
        organization: "Tutedude",
        date: "Dec 2025 - Jan 2026",
        description: "Developed modern web applications using Next.js and React. Collaborated with the design team to implement responsive UI components. Optimized backend RESTful APIs using Node.js.",
        type: "training",
    },
    {
        title: "Open Source Contributor",
        organization: "Various Projects",
        date: "Feb 2025 - May 2025",
        description: "Contributed to multiple React and Node.js open-source libraries. Improved automated test coverage and resolved complex architectural bugs.",
        type: "project",
    },
    {
        title: "Full Stack Web Development Training",
        organization: "TCIL-IT Services Ltd.",
        date: "Jan 2025 - March 2025",
        description: "Completed intensive training in full-stack development covering HTML, CSS, JavaScript, React, Node.js, and MongoDB. Built several capstone projects demonstrating proficiency.",
        type: "training",
    },
    {
        title: "FrontEnd Development Training",
        organization: "Future Finders ",
        date: "Nov 2023 - Dec 2023",
        description: "Trained in modern Frontend Development with hands-on experience in UI design using Figma and development using React (Vite), JavaScript, and Bootstrap 5 to build scalable and user-friendly web interfaces.",
        type: "training",
    }
];

function ExperienceCard({ item, index }: { item: ExperienceItem; index: number }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const iconRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: iconRef,
        offset: ["start 50%", "center 50%"],
    });


    const glowOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
    const iconColor = useTransform(scrollYProgress, [0.5, 1], ["var(--foreground)", "var(--blue-600)"]);

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative flex items-start md:items-center justify-between md:justify-normal md:odd:flex-row-reverse group md:py-8"
        >
            <div ref={iconRef} className="relative flex items-center justify-center w-10 h-10 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">

                <motion.div
                    className="absolute inset-0 rounded-full bg-blue-500/50 dark:bg-cyan-400/50 blur-md transition-colors duration-300"
                    style={{ opacity: glowOpacity, scale: glowScale }}
                />


                <motion.div
                    className="relative flex items-center justify-center w-full h-full rounded-full border-2 border-background dark:border-background/50 bg-foreground/5 dark:bg-foreground/10 shadow-sm transition-colors duration-300 overflow-hidden"
                >

                    <motion.div
                        className="absolute inset-0 bg-blue-600 dark:bg-cyan-400 transition-colors duration-300"
                        style={{ opacity: glowOpacity }}
                    />
                    <div className="relative z-10 text-foreground dark:text-foreground transition-colors duration-300">

                        <motion.div style={{ color: glowOpacity as any ? "white" : "inherit" }} className="w-full h-full flex items-center justify-center mix-blend-difference dark:mix-blend-normal">
                            {item.type === "work" ? <Briefcase size={18} /> : item.type === "project" ? <Code2 size={18} /> : <GraduationCap size={18} />}
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <div className="w-[calc(100%-3.5rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-3xl bg-foreground/5 border border-foreground/10 hover:border-blue-600/30 dark:hover:border-cyan-400/40 transition-all duration-300 shadow-md">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2 gap-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors duration-300">
                        {item.title}
                    </h3>
                    <div className="flex items-center text-xs font-medium text-foreground/60 dark:text-foreground/80 w-fit px-2 py-1 rounded-full bg-foreground/10 dark:bg-foreground/20 transition-colors duration-300">
                        <Calendar size={12} className="mr-1" />
                        {item.date}
                    </div>
                </div>
                <h4 className="text-md font-semibold text-foreground/80 dark:text-foreground/90 mb-3 transition-colors duration-300">
                    {item.organization}
                </h4>
                <p className="text-foreground/70 dark:text-foreground/80 leading-relaxed text-sm transition-colors duration-300">
                    {item.description}
                </p>
            </div>
        </motion.div>
    );
}

export function Experience() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    return (
        <section id="experience" className="py-24 relative overflow-hidden bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-foreground transition-colors duration-300"
                    >
                        Work Experience & Trainings
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-24 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-purple-500 mx-auto rounded-full"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="mt-6 text-foreground/70 dark:text-foreground/80 text-lg max-w-2xl mx-auto transition-colors duration-300"
                    >
                        A timeline of my professional journey, including work experience, independent projects, and targeted training programs.
                    </motion.p>
                </div>

                <div
                    ref={containerRef}
                    className="max-w-4xl mx-auto relative space-y-12 md:space-y-0"
                >

                    <div className="absolute top-0 bottom-0 left-[1.25rem] md:left-1/2 -translate-x-px w-0.5 bg-foreground/10 dark:bg-foreground/20 transition-colors duration-300" />


                    <motion.div
                        className="absolute top-0 bottom-0 left-[1.25rem] md:left-1/2 -translate-x-px w-0.5 bg-blue-600 dark:bg-cyan-400 origin-top hidden md:block transition-colors duration-300 z-0"
                        style={{ scaleY: scrollYProgress }}
                    />


                    <motion.div
                        className="absolute top-0 bottom-0 left-[1.25rem] -translate-x-px w-0.5 bg-blue-600 dark:bg-cyan-400 origin-top md:hidden transition-colors duration-300 z-0"
                        style={{ scaleY: scrollYProgress }}
                    />

                    {experiences.map((item, index) => (
                        <ExperienceCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
