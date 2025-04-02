import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import TextToSpeech from "./pages/TextToSpeech.jsx";
import History from "./pages/History.jsx";
import About from "./pages/About.jsx";
import "./App.css";
import { Home as HomeIcon, Mic, History as HistoryIcon, Info } from "lucide-react";
import Footer from "./pages/Footer.jsx";

function App() {
    return (
        <Router>
            <div className="min-h-screen flex flex-col">
                <nav
                    className="w-[60%] mx-auto flex justify-center bg-gradient-to-br from-indigo-100 to-purple-200 p-2 rounded-full mb-8 shadow-md">
                    <div className="flex items-center gap-4">
                        <div className="text-2xl font-bold text-purple-600 flex items-center gap-2">
                            <Mic className="w-6 h-6"/>
                            <span>TTS Studio</span>
                        </div>

                        <NavLink
                            to="/"
                            className={({isActive}) =>
                                isActive
                                    ? "bg-white text-black px-4 py-2 rounded-full font-medium shadow flex items-center gap-2"
                                    : "text-gray-700 px-4 py-2 rounded-full hover:text-purple-600 transition flex items-center gap-2"
                            }
                        >
                            <HomeIcon className="w-4 h-4"/>
                            Accueil
                        </NavLink>

                        <NavLink
                            to="/tts"
                            className={({isActive}) =>
                                isActive
                                    ? "bg-white text-black px-4 py-2 rounded-full font-medium shadow flex items-center gap-2"
                                    : "text-gray-700 px-4 py-2 rounded-full hover:text-purple-600 transition flex items-center gap-2"
                            }
                        >
                            <Mic className="w-4 h-4"/>
                            Text-to-Speech
                        </NavLink>

                        <NavLink
                            to="/history"
                            className={({isActive}) =>
                                isActive
                                    ? "bg-white text-black px-4 py-2 rounded-full font-medium shadow flex items-center gap-2"
                                    : "text-gray-700 px-4 py-2 rounded-full hover:text-purple-600 transition flex items-center gap-2"
                            }
                        >
                            <HistoryIcon className="w-4 h-4"/>
                            Historique
                        </NavLink>

                        <NavLink
                            to="/about"
                            className={({isActive}) =>
                                isActive
                                    ? "bg-white text-black px-4 py-2 rounded-full font-medium shadow flex items-center gap-2"
                                    : "text-gray-700 px-4 py-2 rounded-full hover:text-purple-600 transition flex items-center gap-2"
                            }
                        >
                            <Info className="w-4 h-4"/>
                            À propos
                        </NavLink>

                    </div>
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

export default App;
