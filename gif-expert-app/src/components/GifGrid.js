import React, { useEffect, useState } from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
    
    const [images, setimages] = useState([]);

    useEffect(()=>{
        getGifs();
    },[])

    const getGifs =async ()=>{
        const url = "https://api.giphy.com/v1/gifs/search?q=halo&api_key=PK5OhhNxA3GgTlKxFjc2YAsyeouCAw5M&limit=10";
        const respuesta = await fetch(url);
        const {data}= await respuesta.json();
        const gifs = data.map( img =>{
            return {
                id:img.id,
                title:img.title,
                url:img.images?.downsized_medium.url
            }
        })
        console.log(gifs);
        setimages(gifs);
    };   

    return (
        <>
        <h3>{category}</h3>
        <div className="card-grid">
            
                {
                    images.map((img)=>{
                      return <GifGridItem 
                       key={img.id}
                      {...img}/>
                    })
                }
           
        </div>
        </>
    )
}
