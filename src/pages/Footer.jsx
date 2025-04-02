import React from "react";
import { Link } from "react-router-dom";
import { Github, Info, Heart } from "lucide-react";

const Footer = () => {
    return (
        <footer className="mt-12 bg-purple-50 text-purple-800 py-6 rounded-xl shadow-inner">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 px-4">
                <p className="text-sm text-center md:text-left flex items-center gap-1">
                    © 2025 <strong>TTS Studio</strong> – Créé avec
                    <Heart className="w-4 h-4 text-red-500"/>
                    pour les Community Managers
                </p>
                <div className="flex items-center gap-4 text-sm">
                    <Link to="/about"
                          className="flex items-center gap-1 hover:underline hover:text-purple-600 transition">
                        <Info className="w-4 h-4"/>
                        À propos
                    </Link>

                    <a
                        href="https://github.com/FatoumataDIABATE/Text-To-Speech"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:underline hover:text-purple-600 transition"
                    >
                        <Github className="w-4 h-4"/>
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
