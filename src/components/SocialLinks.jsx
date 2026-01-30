import { Github, Linkedin, Twitter, Mail, Code2, Terminal, Cpu } from "lucide-react";
import Link from "next/link";

const SocialLinks = () => {
    const links = [
        {
            name: "GitHub",
            href: "https://github.com/Ritesh-iiitn",
            icon: <Github size={24} />,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/ritesh-singh23/",
            icon: <Linkedin size={24} />,
        },
        {
            name: "Twitter",
            href: "https://twitter.com",
            icon: <Twitter size={24} />,
        },
        {
            name: "Email",
            href: "mailto:riteshsingh3589@gmail.com",
            icon: <Mail size={24} />,
        },
        {
            name: "LeetCode",
            href: "https://leetcode.com/u/riteshsingh_42/",
            icon: <Code2 size={24} />,
        },
        {
            name: "CodeChef",
            href: "https://www.codechef.com/users/ritesh_417",
            icon: <Terminal size={24} />,
        },
        {
            name: "Codeforces",
            href: "https://codeforces.com/profile/Har_sh_singh",
            icon: <Cpu size={24} />,
        },
    ];

    return (
        <div className="flex gap-4">
            {links.map((link, index) => (
                <Link
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                    aria-label={link.name}
                >
                    {link.icon}
                </Link>
            ))}
        </div>
    );
};

export default SocialLinks;
