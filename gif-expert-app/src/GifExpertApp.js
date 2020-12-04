// rafc
import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

const GifExpertApp =()=>{
    
    
    const [categories, setCategories] = useState(["one pucnh", "samurai", "drangon ball"]);

    // const handleAdd=(value)=>{
    //     setCategories([...categories,value]);
    //     // setCategories(cats => [...cats,value]);
    // }
    return  <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} />
        <hr/>
       
        <ol>
            {
                categories.map((category, i)=>{
                    return <li key={category}>{category} </li>
                })
            }
        </ol>
    </>

}

export default GifExpertApp;