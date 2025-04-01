import React, { useEffect, useState } from "react";

const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("tts-history") || "[]");
        setHistory(saved);
    }, []);

    return (
        <div className="p-6 max-w-3xl mx-auto space-y-4">
            <h1 className="text-2xl font-bold">Historique des conversions</h1>

            {history.length === 0 ? (
                <p>Aucune conversion enregistrée.</p>
            ) : (
                history.map((item) => (
                    <div key={item.id} className="border rounded p-4 shadow-sm space-y-2">
                        <p className="text-sm text-gray-500">{item.date}</p>
                        <p><strong>Texte :</strong> {item.text}</p>
                        <p><strong>Voix :</strong> {item.voice}, <strong>Vitesse :</strong> {item.speed}, <strong>Tonalité
                            :</strong> {item.pitch}</p>
                        <audio controls src={item.audioUrl} className="w-full"/>
                        <a
                            href={item.audioUrl}
                            download={`tts-${item.id}.mp3`}
                            className="text-blue-600 underline"
                        >
                            Télécharger
                        </a>
                    </div>
                ))
            )}
            <button
                onClick={() => {
                    localStorage.removeItem("tts-history");
                    setHistory([]);
                }}
                className="bg-red-500 text-white px-4 py-2 rounded"
            >
                Vider l’historique
            </button>

        </div>

    );
};

export default History;
