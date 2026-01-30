"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations/motionVariants";
import { skills } from "../data/skills";

const Skills = () => {
    return (
        <section id="skills" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">My Skills</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A comprehensive list of the technologies and tools I utilize to bring ideas to life.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.1, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
                >
                    {skills.map((category, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.2)}
                            className="bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-colors duration-300"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-blue-400">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {category.items.map((item, idx) => (
                                    <span
                                        key={idx}
                                        className="px-3 py-1 bg-slate-800 rounded-full text-sm text-gray-300 hover:bg-blue-500/20 hover:text-blue-300 transition-colors cursor-default"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
