

export const getGifs =async (category)=>{
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&api_key=PK5OhhNxA3GgTlKxFjc2YAsyeouCAw5M&limit=10`;
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
    return gifs;
};   