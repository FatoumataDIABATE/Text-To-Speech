import React, { useState } from "react";
import { API_CONFIG } from "../config";

const TextToSpeech = () => {
    const [text, setText] = useState("");
    const [voice, setVoice] = useState("female");
    const [speed, setSpeed] = useState("normal");
    const [pitch, setPitch] = useState("medium");
    const [audioUrl, setAudioUrl] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleConvert = async () => {
        if (!text.trim()) return alert("Merci de saisir un texte !");
        setLoading(true);
        setAudioUrl(null);

        try {

            let voiceName = "fr-FR-Wavenet-E";
            if (voice === "male") {
                voiceName = "fr-FR-Wavenet-B";
            } else if (voice === "robotic") {
                voiceName = "fr-FR-Standard-B";
            }

            const response = await fetch(
                `${API_CONFIG.BASE_URL}${API_CONFIG.API_KEY}`,//TODO ${API_KEY} Pour var d'env
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        input: { text },
                        voice: {
                            languageCode: "fr-FR",
                            name: voiceName,
                        },
                        audioConfig: {
                            audioEncoding: "MP3",
                            speakingRate:
                                speed === "slow" ? 0.8 : speed === "fast" ? 1.2 : 1.0,
                            pitch: pitch === "high" ? 5 : pitch === "low" ? -5 : 0,
                        },
                    }),
                }
            );

            const data = await response.json();
            if (response.ok) {
                // La réponse contient un "audioContent" encodé en base64
                const blob = await fetch(`data:audio/mp3;base64,${data.audioContent}`)
                    .then((res) => res.blob());
                const url = URL.createObjectURL(blob);
                setAudioUrl(url);

                // Enregistrer l'entrée dans l'historique local
                const entry = {
                    id: Date.now(),
                    text,
                    voice,
                    speed,
                    pitch,
                    audioUrl: url,
                    date: new Date().toLocaleString()
                };

                const history = JSON.parse(localStorage.getItem("tts-history") || "[]");
                localStorage.setItem("tts-history", JSON.stringify([entry, ...history]));


            } else {
                alert("Erreur : " + (data.error?.message || "Conversion échouée"));
            }
        } catch (err) {
            alert("Erreur réseau : " + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 max-w-3xl mx-auto space-y-6 bg-white shadow-md rounded-xl mt-6">
            <h1 className="text-3xl font-bold text-purple-700 text-center">Convertisseur Text-to-Speech</h1>

            <textarea
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                rows={5}
                placeholder="Entrez votre texte ici..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="block mb-1 font-medium text-gray-700">Voix</label>
                    <select
                        value={voice}
                        onChange={(e) => setVoice(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                        <option value="female">Féminine</option>
                        <option value="male">Masculine</option>
                        <option value="robotic">Robotique</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Vitesse</label>
                    <select
                        value={speed}
                        onChange={(e) => setSpeed(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                        <option value="slow">Lent</option>
                        <option value="normal">Normal</option>
                        <option value="fast">Rapide</option>
                    </select>
                </div>

                <div>
                    <label className="block mb-1 font-medium text-gray-700">Tonalité</label>
                    <select
                        value={pitch}
                        onChange={(e) => setPitch(e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                    >
                        <option value="low">Grave</option>
                        <option value="medium">Moyenne</option>
                        <option value="high">Aiguë</option>
                    </select>
                </div>
            </div>

            <button
                onClick={handleConvert}
                className="w-full bg-purple-600 text-white px-4 py-3 rounded-lg hover:bg-purple-700 transition font-semibold"
                disabled={loading}
            >
                {loading ? "Conversion en cours..." : "Convertir en audio"}
            </button>

            {audioUrl && (
                <div className="mt-6 border-t pt-4">
                    <audio controls src={audioUrl} className="w-full mb-2" />
                    <a
                        href={audioUrl}
                        download="audio.mp3"
                        className="text-purple-600 hover:underline font-medium"
                    >
                        Télécharger l'audio
                    </a>
                </div>
            )}
        </div>
    );


};

export default TextToSpeech;
