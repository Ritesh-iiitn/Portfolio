"use client";

import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../animations/motionVariants";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const CodingProfiles = () => {
    const profiles = [
        {
            name: "LeetCode",
            handle: "@riteshsingh_42",
            link: "https://leetcode.com/u/riteshsingh_42/",
            img: "/assets/leetcodelogo.png",
            description:
                "Solved 370+ algorithmic problems across Data Structures, Dynamic Programming, and advanced problem-solving.",
            color: "hover:border-yellow-500/50",
            bgFrom: "from-yellow-500/10",
        },
        {
            name: "CodeChef",
            handle: "@ritesh_417",
            link: "https://www.codechef.com/users/ritesh_417",
            img: "/assets/codecheflogo.png",
            description:
                "3★ rated competitive programmer with 1690 peak rating, ranked 63rd globally in contests.",
            color: "hover:border-orange-500/50",
            bgFrom: "from-orange-500/10",
        },
        {
            name: "Codeforces",
            handle: "@Har_sh_singh",
            link: "https://codeforces.com/profile/Har_sh_singh",
            img: "/assets/codeforceslogo.png",
            description:
                "Codeforces Pupil with 1376 max rating, achieving global rank 770 through consistent contest performance.",
            color: "hover:border-blue-500/50",
            bgFrom: "from-blue-500/10",
        },
    ];

    return (
        <section id="coding-profiles" className="py-20 relative text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.3 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Coding Profiles
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Competitive programming achievements across global platforms.
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer(0.2, 0.1)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: false, amount: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {profiles.map((profile, index) => (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", 0.3)}
                            className={`bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-slate-700/50 ${profile.color} transition-all duration-300 group`}
                        >
                            <div className="flex flex-col items-center text-center">
                                <div
                                    className={`relative w-16 h-16 rounded-full overflow-hidden bg-white/10 mb-4 group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <Image
                                        src={profile.img}
                                        alt={profile.name}
                                        fill
                                        className="object-contain p-2"
                                    />
                                </div>

                                <h3 className="text-xl font-bold mb-1">{profile.name}</h3>
                                <span className="text-sm text-gray-500 font-mono mb-4">
                                    {profile.handle}
                                </span>

                                <p className="text-gray-400 mb-6 text-sm">
                                    {profile.description}
                                </p>

                                <a
                                    href={profile.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition-colors text-sm font-medium"
                                >
                                    Visit Profile <ExternalLink size={14} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default CodingProfiles;
