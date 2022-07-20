import React from 'react';

const MadlibStory = ({ words }) => {
    return (
        <div>
        <h1>Madlibs</h1>
        <p>
            {words.noun} {words.verb} {words.adjective} and {words.noun} {words.verb} {words.adverb} {words.adjective}... it's crazy!!
        </p>
        </div>
    );
    }
    export default MadlibStory;