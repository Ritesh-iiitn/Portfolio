"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations/motionVariants";
import { projects } from "../data/projects";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";

const Projects = () => {
    return (
        <section id="projects" className="py-20 relative text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Highlights of some of the work I&apos;ve done.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.2, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.3)}
                            className="bg-black/50 backdrop-blur-md rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group"
                        >
                            <div className="relative h-48 bg-slate-800 overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-purple-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4 line-clamp-3">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech, idx) => (
                                        <span
                                            key={idx}
                                            className="text-xs px-2 py-1 bg-slate-800 rounded text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        <Github size={16} /> Code
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
                                    >
                                        {/* <ExternalLink size={16} /> Live Demo */}
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
