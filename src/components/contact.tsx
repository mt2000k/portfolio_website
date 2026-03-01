"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
    const [status, setStatus] = useState<"IDLE" | "LOADING" | "SUCCESS" | "ERROR">("IDLE");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("LOADING");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus("SUCCESS");
                setFormData({ name: "", email: "", subject: "", message: "" });
                setTimeout(() => setStatus("IDLE"), 5000);
            } else {
                setStatus("ERROR");
            }
        } catch (error) {
            console.error(error);
            setStatus("ERROR");
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
                    >
                        Get In Touch
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="lg:col-span-2 space-y-8"
                    >
                        <div>
                            <h3 className="text-2xl font-semibold mb-4">Let&apos;s connect!</h3>
                            <p className="text-foreground/70 leading-relaxed mb-8">
                                Whether you have a question, a project proposal, or just want to say hi, my inbox is always open. I&apos;ll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center space-x-4 text-foreground/80 hover:text-blue-500 transition-colors">
                                <Mail className="w-6 h-6 text-blue-500" />
                                <span>thakurmunish253@gmail.com</span>
                            </div>
                            <div className="flex items-center space-x-4 text-foreground/80 hover:text-cyan-400 transition-colors">
                                <Phone className="w-6 h-6 text-cyan-400" />
                                <span>+91 98163 95125</span>
                            </div>
                            <div className="flex items-center space-x-4 text-foreground/80">
                                <MapPin className="w-6 h-6 text-cyan-400" />
                                <span>Available Worldwide (Remote)</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        onSubmit={handleSubmit}
                        className="lg:col-span-3 space-y-6 bg-foreground/5 p-8 rounded-3xl border border-foreground/10 shadow-lg"
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-foreground/80">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all font-medium"
                                    placeholder="your@gmail.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-foreground/80">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all font-medium"
                                placeholder="Purpose"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-foreground/80">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full bg-background border border-foreground/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none font-medium"
                                placeholder="Hey there, I'd like to discuss a project..."
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={status === "LOADING"}
                            className="w-full flex items-center justify-center space-x-2 py-4 rounded-xl bg-foreground text-background font-semibold hover:bg-foreground/90 transition-all disabled:opacity-70 disabled:cursor-not-allowed group"
                        >
                            {status === "LOADING" ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    <span>Sending...</span>
                                </>
                            ) : status === "SUCCESS" ? (
                                <span>Message Sent!</span>
                            ) : status === "ERROR" ? (
                                <span>Failed. Try Again.</span>
                            ) : (
                                <>
                                    <span>Send Message</span>
                                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </>
                            )}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
