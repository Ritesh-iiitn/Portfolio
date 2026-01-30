"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations/motionVariants";
import { education } from "../data/education";
import { GraduationCap } from "lucide-react";

const Education = () => {
    return (
        <section id="education" className="py-20 relative text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My academic journey and qualifications.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.2, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("left", 0.3)}
                            className="relative pl-8 md:pl-0"
                        >
                            {/* Timeline line */}
                            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />

                            <div className={`md:flex items-center justify-between ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                                <div className="hidden md:block w-5/12" />

                                <div className="absolute left-0 md:left-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-purple-500 flex items-center justify-center -translate-x-1/2 z-10">
                                    <GraduationCap size={16} className="text-purple-400" />
                                </div>

                                <div className="md:w-5/12 bg-black/40 backdrop-blur-md p-6 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-colors">
                                    <span className="text-sm text-purple-400 font-mono mb-2 block">
                                        {edu.year}
                                    </span>
                                    <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                                    <h4 className="text-lg text-gray-300 mb-4">{edu.institution}</h4>
                                    <p className="text-gray-400 text-sm">
                                        {edu.description}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
