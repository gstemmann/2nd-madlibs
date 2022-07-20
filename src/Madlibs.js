import React, { useState } from "react";
import MadlibForm from "./MadlibForm";


//parent component
const Madlibs = () => {
    const [words, setWords] = useState(
        {}
    );

    const addWords = (words) => {
        setWords(words);     
    }

    
    return (
        <div>
            <h1>Madlibs</h1>
            <p>Fill in the blanks below to create a story!</p>
            <MadlibForm addWords={addWords}/>
        </div>
    );
}

export default Madlibs;