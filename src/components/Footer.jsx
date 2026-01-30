import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black border-t border-slate-800 py-12 text-white">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-bold font-mono mb-2">Portfolio.</h3>
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Ritesh Singh. All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6">
                    <Link href="https://github.com/Ritesh-iiitn" className="text-gray-400 hover:text-white transition-colors">
                        <Github size={20} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/ritesh-singh23/" className="text-gray-400 hover:text-white transition-colors">
                        <Linkedin size={20} />
                    </Link>
                    <Link href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors">
                        <Twitter size={20} />
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
