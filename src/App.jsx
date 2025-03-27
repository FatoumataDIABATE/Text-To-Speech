import React from "react";
import { helloworld, greetings, counter } from "./pages/hello.jsx";

function App() {
    return (
        <div>
            { helloworld() }
            {greetings({name : "Habib"})}
            {counter()}
        </div>
    )
}

export default App;
