import React, { useState } from "react";

function TextToSpeech() {
    const [text, setText] = useState("");
    const [voice, setVoice] = useState("male");
    const [speed, setSpeed] = useState("normal");
    const [tone, setTone] = useState("medium");

    const handleConvert = () => {
        console.log("Texte converti :", text, voice, speed, tone);
    };

    return (
        <div>
            <h1>Text-to-Speech</h1>
            <textarea
                placeholder="Saisissez votre texte ici..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <button onClick={handleConvert}>Convertir en audio</button>
        </div>
    );
}

export default TextToSpeech;
