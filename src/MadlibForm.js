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
                    <label htmlFor="noun">Noun:</label>
                    <input 
                        id="noun"
                        type="text" 
                        name="noun"
                        onChange={handleChange} 
                        required
                    />
                    <label htmlFor="verb">Verb:</label>
                    <input                         
                        id="verb"
                        type="text" 
                        name="verb"
                        onChange={handleChange}
                        required 
                    />
                    <label htmlFor="adjective">Adjective:</label>
                    <input 
                        id="adjective"
                        type="text" 
                        name="adjective"
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="adverb">Adverb:</label>
                    <input
                        id="adverb" 
                        type="text" 
                        name="adverb"
                        onChange={handleChange}
                        required
                    />
                <button>Submit</button>
            </form>
        )

    }
    export default MadlibForm;