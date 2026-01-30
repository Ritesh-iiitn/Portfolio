import { Github, Linkedin, Twitter, Mail } from "lucide-react";
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
