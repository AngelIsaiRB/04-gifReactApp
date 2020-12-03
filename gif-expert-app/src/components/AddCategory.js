import React, { useState } from 'react'

export const AddCategory = () => {
    
    const [inputValue, setInputValue] = useState("hola mundo")
    const handleInputchange = (e)=>{
        setInputValue(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("submi echoo")
    }


    return (
      
           <form onSubmit={handleSubmit}>
           <input
                type="text"
                value={inputValue}
                onChange={handleInputchange} 
           ></input>
           </form>

       
    )
}
