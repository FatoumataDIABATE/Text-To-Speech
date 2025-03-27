import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import TextToSpeech from "./pages/TextToSpeech.jsx";
import History from "./pages/History.jsx";
import About from "./pages/About.jsx";

function App() {
    return (
        <Router>
            <div className="app-container p-5">
                <nav className="flex gap-4 pb-4 border-b">
                    <Link to="/">Accueil</Link>
                    <Link to="/tts">Text-to-Speech</Link>
                    <Link to="/history">Historique</Link>
                    <Link to="/about">À propos</Link>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/tts" element={<TextToSpeech />} />
                    <Route path="/history" element={<History />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
