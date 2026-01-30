"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../animations/motionVariants";
import { FileText, Download } from "lucide-react";

const Resume = () => {
    return (
        <section id="resume" className="py-20 relative text-white">
            <div className="container mx-auto px-6 text-center">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">Resume</h2>
                    <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                        Check out my resume to see a detailed overview of my experience and education.
                    </p>

                    <div className="flex justify-center gap-6">
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition-colors font-semibold"
                        >
                            <FileText size={20} />
                            View Resume
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2 px-8 py-3 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-semibold"
                        >
                            <Download size={20} />
                            Download
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Resume;
