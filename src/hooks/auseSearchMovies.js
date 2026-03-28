import { movie_Option } from "../Utils/constant";

const auseSearchMoives =  ()=> {

    const FetchTmdbMovies =async (movie) =>{
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query="+movie+"&include_adult=false&language=en-US&page=1",movie_Option);
    const json = await data.json();
    return json.results;
    }
    return FetchTmdbMovies;
    
}

export default auseSearchMoives;