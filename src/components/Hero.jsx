"use client";

import { motion } from "framer-motion";
import SocialLinks from "./SocialLinks";
import { fadeIn } from "../animations/motionVariants";
import Image from "next/image";

const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
        >
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    variants={fadeIn("right", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center md:text-left"
                >
                    <h2 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-4">
                        Hello, I&apos;m
                    </h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Ritesh Singh<span className="text-blue-500">.</span>
                    </h1>
                    <p className="text-gray-400 text-lg md:text-xl max-w-lg mx-auto md:mx-0 mb-8">
                        Software Developer focused on Full Stack Web Development — crafting seamless web experiences and transforming ideas into impactful products.
                    </p>

                    <div className="flex flex-col md:flex-row items-center gap-6 justify-center md:justify-start">
                        <a
                            href="#projects"
                            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition-colors"
                        >
                            View Work
                        </a>
                        <SocialLinks />
                    </div>
                </motion.div>

                <motion.div
                    variants={fadeIn("left", 0.4)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
                        <Image
                            src="/profile.jpg"
                            alt="Profile"
                            fill
                            className="object-cover rounded-full"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
