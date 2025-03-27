import React, {useState} from "react";

function helloworld() {
    return (
        <div>
            <h1 className="hello">hello world</h1>
        </div>
    )
}

function greetings(prop){
    return (
        <div> salut, <strong>{prop.name}</strong></div>
    )
}

function counter(){
    const [count, setCount] = useState(0)
    return(
        <div>
            <p>compte courrant : {count}</p>
            <button onClick={() => setCount(count+1)}>Inrementer</button>
        </div>
            )
}
export {helloworld, greetings, counter};