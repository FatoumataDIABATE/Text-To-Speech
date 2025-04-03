import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import TextToSpeech from "./pages/TextToSpeech.jsx";
import History from "./pages/History.jsx";
import About from "./pages/About.jsx";
import "./App.css";
import { Menu, X, Home as HomeIcon, Mic, History as HistoryIcon, Info } from "lucide-react";
import Footer from "./pages/Footer.jsx";

function App() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <nav className="w-full bg-gradient-to-br from-indigo-100 to-purple-200 p-3 shadow-md">
                    <div className="max-w-6xl mx-auto flex justify-between items-center">

                        <div className="text-2xl font-bold text-purple-600 flex items-center gap-2">
                            <Mic className="w-6 h-6"/>
                            <span>TTS Studio</span>
                        </div>

                        {/* Bouton hamburger (visible sur mobile seulement) */}
                        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-purple-700">
                            {isOpen ? <X className="w-6 h-6"/> : <Menu className="w-6 h-6"/>}
                        </button>

                        {/* Liens desktop */}
                        <div className="hidden md:flex gap-3 items-center">
                            {navLinks()}
                        </div>
                    </div>

                    {/* Liens mobile */}
                    {isOpen && (
                        <div className="flex flex-col gap-2 mt-4 md:hidden text-center">
                            {navLinks(() => setIsOpen(false))}
                        </div>
                    )}
                </nav>
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/tts" element={<TextToSpeech/>}/>
                        <Route path="/history" element={<History/>}/>
                        <Route path="/about" element={<About/>}/>
                    </Routes>
                </main>
            </div>
            <Footer/>
        </Router>
    );
}
const baseLink = "text-gray-700 px-4 py-2 rounded-full hover:text-purple-600 transition flex items-center gap-2";
const activeLink = "bg-white text-black px-4 py-2 rounded-full font-medium shadow flex items-center gap-2";

const navLinks = (onClick = () => {}) => (
    <>
        <NavLink to="/" onClick={onClick} className={({ isActive }) => (isActive ? activeLink : baseLink)}>
            <HomeIcon className="w-4 h-4" />
            Accueil
        </NavLink>
        <NavLink to="/tts" onClick={onClick} className={({ isActive }) => (isActive ? activeLink : baseLink)}>
            <Mic className="w-4 h-4" />
            Text-to-Speech
        </NavLink>
        <NavLink to="/history" onClick={onClick} className={({ isActive }) => (isActive ? activeLink : baseLink)}>
            <HistoryIcon className="w-4 h-4" />
            Historique
        </NavLink>
        <NavLink to="/about" onClick={onClick} className={({ isActive }) => (isActive ? activeLink : baseLink)}>
            <Info className="w-4 h-4" />
            À propos
        </NavLink>
    </>
);

export default App;
