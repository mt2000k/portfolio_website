"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, FileText } from "lucide-react";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = React.useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                    ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-foreground/5"
                    : "bg-transparent py-4"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex-shrink-0">
                            <Link href="#home" className="text-2xl font-bold tracking-tighter">
                                Thakur<span className="text-blue-500">.</span>
                            </Link>
                        </div>

                        <nav className="hidden md:flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-sm font-medium text-foreground/80 hover:text-blue-500 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 text-sm font-semibold bg-blue-500/10 text-blue-500 hover:bg-blue-500 hover:text-white px-4 py-2 rounded-full transition-all"
                            >
                                <span>Resume</span>
                                <FileText size={16} />
                            </a>
                            <ThemeToggle />
                        </nav>

                        <div className="md:hidden flex items-center space-x-4">
                            <ThemeToggle />
                            <button
                                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                                className="p-2 text-foreground/80 hover:text-foreground"
                            >
                                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.header>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm pt-24 px-4 flex flex-col space-y-4 md:hidden"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-semibold p-4 border-b border-foreground/10 hover:text-blue-500"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMobileMenuOpen(false)}
                            className="flex items-center space-x-2 text-2xl font-semibold p-4 text-blue-500"
                        >
                            <span>View Resume</span>
                            <FileText size={24} />
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
