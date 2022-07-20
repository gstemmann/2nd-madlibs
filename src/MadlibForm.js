import React, { useState } from "react";


//this will  be renedered in the parent component -- Madlibs.js
const MadlibForm = ({ addWords }) => {
    const initialState = {
        noun: "",
        verb: "",
        adjective: "",
        adverb: ""
    }
    const [formData, setFormData] = useState(initialState);
    const handleChange = (e) => {

       const { name, value } = e.target;
           setFormData(formData => ({
               ...formData,
               [name]: value
           }))
       }
     
       const handleSubmit = (e) => {
              e.preventDefault();
                console.log(formData);
                addWords(formData);
                setFormData(initialState);

            }

        return (
            
                <form onSubmit={handleSubmit}>
                    <label>Noun:</label>
                    <input 
                        type="text" 
                        name="noun"
                        onChange={handleChange} 
                     />
                    <label>Verb:</label>
                    <input 
                        type="text" 
                        name="verb"
                        onChange={handleChange} 
                    />
                    <label>Adjective:</label>
                    <input 
                        type="text" 
                        name="adjective"
                        onChange={handleChange} />
                    <label>Adverb:</label>
                    <input 
                        type="text" 
                        name="adverb"
                        onChange={handleChange} />
                <button>Submit</button>
            </form>
        )

    }
    export default MadlibForm;