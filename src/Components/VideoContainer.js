
import React, { useEffect, useState } from 'react'
import { movie_Option } from '../Utils/constant';

const VideoContainer = ({movies}) => {

   
    
    const [movie,setmovie] = useState(null);
    
    
     
    useEffect(()=>{
        Video_Data();
    },[]);

        
    
    const Video_Data = async ()=> {

        const data = await fetch("https://api.themoviedb.org/3/movie/1368166/videos?language=en-US",movie_Option);
        const json = await data.json();
        const Movies = json.results.find(movie => movie.type === "Trailer");
       setmovie(Movies);
    }

  return (
    <div className='inset-0 overflow-hidden'>
        <iframe  className=' w-screen scale-150 aspect-video'
        src={"https://www.youtube.com/embed/"+movie?.key + "?&autoplay=1&mute=1"} 
        title="YouTube video player" 
       
         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

          </iframe>

    </div>
  )
}

export default VideoContainer