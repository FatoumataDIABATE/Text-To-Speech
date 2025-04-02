import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react";
import { Clock, Download, Ban, GaugeCircle, Mic, Sliders, Text as TextIcon } from "lucide-react";

const History = () => {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("tts-history") || "[]");
        setHistory(saved);
    }, []);

    const clearHistory = () => {
        localStorage.removeItem("tts-history");
        setHistory([]);
    };

    return (
        <div className="p-6 max-w-4xl mx-auto space-y-6">
            <h1 className="text-3xl font-bold text-purple-700 text-center">
                Historique des conversions
            </h1>

            {history.length === 0 ? (
                <div className="text-center mt-10 p-8 bg-purple-50 border border-purple-100 rounded-xl shadow-sm max-w-xl mx-auto">
                    <div className="flex flex-col items-center gap-4 text-purple-600">
                        <Ban className="w-12 h-12" />
                        <p className="text-lg font-medium">Aucune conversion enregistrée pour le moment.</p>
                        <p className="text-sm text-gray-500">Vos conversions apparaîtront ici après génération.</p>
                    </div>
                </div>
            ) : (
                <div className="space-y-4">
                    {history.map((item) => (
                        <div
                            key={item.id}
                            className="relative border border-purple-200 rounded-2xl p-6 shadow-md bg-gradient-to-br from-white to-purple-50 hover:shadow-lg transition duration-300"
                        >
                            <p className="absolute top-2 right-4 text-xs text-gray-400 italic flex items-center gap-1">
                                <Clock className="w-3 h-3"/> {item.date}
                            </p>
                            <p className="mb-2 text-gray-800 flex items-start gap-2">
                                <TextIcon className="w-5 h-5 text-purple-500 mt-1"/>
                                <span><span className="font-semibold text-purple-600">Texte :</span> {item.text}</span>
                            </p>

                            {/* Paramètres avec icônes */}
                            <div className="text-sm text-gray-700 mb-4 flex flex-wrap gap-2">
                                <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                                  <Mic className="w-4 h-4"/> {item.voice}
                                </span>
                                <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                                  <GaugeCircle className="w-4 h-4"/> {item.speed}
                                </span>
                                <span className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                                  <Sliders className="w-4 h-4"/> {item.pitch}
                                </span>
                            </div>
                            <audio controls src={item.audioUrl} className="w-full rounded mb-3"/>
                            <a
                                href={item.audioUrl}
                                download={`tts-${item.id}.mp3`}
                                className="inline-flex items-center gap-2 text-purple-600 hover:underline font-medium"
                            >
                                <Download className="w-4 h-4"/>
                                Télécharger l’audio
                            </a>
                        </div>

                    ))}
                </div>
            )}

            {history.length > 0 && (
                <div className="text-center">
                    <button
                        onClick={clearHistory}
                        className="flex items-center gap-2 bg-red-500 text-white px-5 py-2 rounded-full hover:bg-red-600 transition mx-auto"
                    >
                        <Trash2 className="w-5 h-5"/>
                        Vider l’historique
                    </button>
                </div>
            )}
        </div>
    );
};

export default History;
