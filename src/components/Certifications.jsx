"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../animations/motionVariants";
import { Award, ExternalLink } from "lucide-react";

const Certifications = () => {
    return (
        <section id="certifications" className="py-20 relative text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Professional certifications and achievements.
                    </p>
                </motion.div>

                <motion.div
                    variants={fadeIn("up", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-3xl mx-auto"
                >
                    <div className="bg-black/40 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400 mt-1">
                                <Award size={32} />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl font-bold mb-2">Deloitte Professional Experience Program</h3>
                                <p className="text-gray-400 mb-4 leading-relaxed">
                                    Completed a Deloitte professional experience program gaining hands-on exposure to real-world consulting workflows and analytical problem-solving.
                                </p>
                                <a
                                    href="https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/udmxiyHeqYQLkTPvf_9PBTqmSxAf6zZTseP_694f91acbeda68c473aace32_1766827217292_completion_certificate.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-medium"
                                >
                                    <ExternalLink size={16} /> View Certificate
                                </a>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
