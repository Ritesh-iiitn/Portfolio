"use client";

import { motion } from "framer-motion";

const Background = () => {
    return (
        <div className="fixed inset-0 -z-10 h-full w-full bg-slate-950 overflow-hidden">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

            {/* Animated Glowing Gradient Orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 20, 0],
                    y: [0, -20, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[100px]"
            />

            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, -30, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                }}
                className="absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/20 blur-[120px]"
            />

            {/* Floating Particles or accents */}
            <div className="absolute top-[20%] right-[20%] w-72 h-72 bg-indigo-500/10 rounded-full blur-[80px]" />
        </div>
    );
};

export default Background;
