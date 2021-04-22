const apiKey ='2kRfA0curk77CIsqOKsvM6iBM9FQkKIS'

export default function getGifs({keyword = 'morty'} = {}){
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`


    return fetch(apiUrl)
    .then(res => res.json())
    .then(response => {
      const {data =[]} = response
      const gifs = data.map( image => {
          const{title, id} = image
          const{url} = image.images.downsized_medium
          return {title, id, url}
      })
      return gifs
    })
}