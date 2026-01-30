"use client";

import { motion } from "framer-motion";
import { fadeIn } from "../animations/motionVariants";

const About = () => {
    return (
        <section id="about" className="py-20 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-6">
                        I am a dedicated software engineer with a strong background in web development.
                        I love building scalable applications and solving complex problems.
                        My journey in tech has been driven by curiosity and a desire to create impactful solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
