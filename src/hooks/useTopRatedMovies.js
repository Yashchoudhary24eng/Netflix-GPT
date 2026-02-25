import { useEffect, useState } from "react";
import { movie_Option } from "../Utils/constant";

const useTopRatedMovies =() => {

    const[Movies,setMovies] = useState([]);
    useEffect(()=>{
        fetchMovie();

    },[]);

    const fetchMovie = async()=>{

         const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?page=1",movie_Option);
         const json = await data.json();
         setMovies(json.results);

    }
    
return Movies;
}

export default useTopRatedMovies;