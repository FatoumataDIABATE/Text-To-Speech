import React from "react";
import { Mic, Code, Users, Link as LinkIcon } from "lucide-react";

const About = () => {
    return (
        <div className="p-6 max-w-4xl mx-auto space-y-8 bg-white rounded-xl shadow-md mt-6">
            <h1 className="text-3xl font-bold text-purple-700 text-center">À propos de TTS Studio</h1>

            <section className="space-y-4 text-gray-700 text-lg">
                <p>
                    TTS Studio est une application web conçue pour aider les <strong>community managers</strong>,
                    créateurs de contenu et utilisateurs créatifs à transformer du texte en audio, facilement et rapidement.
                </p>

                <div className="flex items-center gap-3">
                    <Mic className="text-purple-500 w-6 h-6" />
                    <span>Générez une voix à partir de n’importe quel texte.</span>
                </div>
                <div className="flex items-center gap-3">
                    <Users className="text-purple-500 w-6 h-6" />
                    <span>Personnalisez la voix, la vitesse et la tonalité selon vos besoins.</span>
                </div>
                <div className="flex items-center gap-3">
                    <Code className="text-purple-500 w-6 h-6" />
                    <span>Basée sur une API de Text-to-Speech performante et simple à intégrer.</span>
                </div>
            </section>

            <section className="bg-purple-50 rounded-lg p-6">
                <h2 className="text-xl font-semibold text-purple-700 mb-3">API utilisée</h2>
                <p className="text-gray-700">
                    L'application utilise l'API <strong>Google Cloud Text-to-Speech. </strong>
                    Elle permet de générer des fichiers audio MP3 à partir de texte, avec différents paramètres de personnalisation.
                </p>
            </section>

            <section className="space-y-3">
                <h2 className="text-xl font-semibold text-purple-700">Ressources</h2>
                <div className="flex items-center gap-2 text-purple-600">
                    <LinkIcon className="w-5 h-5" />
                    <a href="https://cloud.google.com/text-to-speech/docs" target="_blank" rel="noopener noreferrer" className="underline">
                        Documentation officielle de l’API Text-to-Speech
                    </a>
                </div>
                <div className="flex items-center gap-2 text-purple-600">
                    <LinkIcon className="w-5 h-5" />
                    <a href="https://github.com/FatoumataDIABATE/Text-To-Speech" target="_blank" rel="noopener noreferrer" className="underline">
                        Code source sur GitHub
                    </a>
                </div>
            </section>
        </div>
    );
};
export default About;
