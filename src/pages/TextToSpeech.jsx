import React, { useState } from "react";
import {API_CONFIG} from "../../config.js";

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
                            name: "fr-FR-Wavenet-E", // voix féminine naturelle
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
        <div className="p-6 max-w-xl mx-auto space-y-4">
            <h1 className="text-2xl font-bold">Text to Speech</h1>

            <textarea
                className="w-full p-2 border rounded"
                rows={5}
                placeholder="Entrez votre texte ici..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <div className="flex flex-col gap-2 md:flex-row md:gap-4">
                <select value={voice} onChange={(e) => setVoice(e.target.value)}>
                    <option value="female">Féminine</option>
                    <option value="male">Masculine</option>
                    <option value="robotic">Robotique</option>
                </select>

                <select value={speed} onChange={(e) => setSpeed(e.target.value)}>
                    <option value="slow">Lent</option>
                    <option value="normal">Normal</option>
                    <option value="fast">Rapide</option>
                </select>

                <select value={pitch} onChange={(e) => setPitch(e.target.value)}>
                    <option value="low">Grave</option>
                    <option value="medium">Moyenne</option>
                    <option value="high">Aiguë</option>
                </select>
            </div>

            <button
                onClick={handleConvert}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                disabled={loading}
            >
                {loading ? "Conversion..." : "Convertir en audio"}
            </button>

            {audioUrl && (
                <div className="mt-4">
                    <audio controls src={audioUrl} className="w-full" />
                    <a href={audioUrl} download="audio.mp3" className="text-blue-500 underline">
                        Télécharger
                    </a>
                </div>
            )}
        </div>
    );
};

export default TextToSpeech;
