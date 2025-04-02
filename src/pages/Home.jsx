import React from "react";
import { Link } from "react-router-dom";
import { Volume2, Settings, Download } from "lucide-react"; // Icônes modernes
import Footer from "./Footer";

function Home() {
    return (
        <>
            {/* Partie avec le fond dégradé */}
            <div className="bg-gradient-to-br from-indigo-100 to-purple-200 text-gray-800">
                {/* Hero Section */}
                <main className="flex flex-col items-center justify-center text-center py-20 px-4">
                    <h1 className="text-5xl font-extrabold mb-4 text-purple-700">
                        Transformez vos mots en voix
                    </h1>
                    <p className="text-lg max-w-2xl text-gray-700 mb-6">
                        Notre application vous permet de convertir rapidement vos textes en audio pour vos reels, vidéos ou présentations.
                        Choisissez une voix, ajustez le rythme, téléchargez le résultat !
                    </p>
                    <Link to="/tts">
                        <button className="bg-purple-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition">
                            Essayez maintenant
                        </button>
                    </Link>
                </main>
            </div>

            {/* Section blanche : fonctionnalités */}
            <section className="py-16 px-6 bg-white">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Fonctionnalités clés</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center max-w-5xl mx-auto">
                    <div>
                        <Volume2 className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                        <h3 className="text-xl font-semibold">Conversion instantanée</h3>
                        <p className="text-gray-600">Saisissez un texte et obtenez l’audio en un clic.</p>
                    </div>
                    <div>
                        <Settings className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                        <h3 className="text-xl font-semibold">Personnalisation avancée</h3>
                        <p className="text-gray-600">Choisissez la voix, la vitesse et la tonalité selon vos besoins.</p>
                    </div>
                    <div>
                        <Download className="w-12 h-12 mx-auto text-purple-500 mb-4" />
                        <h3 className="text-xl font-semibold">Téléchargement facile</h3>
                        <p className="text-gray-600">Téléchargez vos fichiers audio pour les utiliser partout.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
