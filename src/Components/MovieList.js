import MovieCard from "./MovieCard";

const MOvieList = ({movies,title})=>{

    return (
        <div className="px-8 " >
             <h1 className="text-2xl  py-3 text-white">{title}</h1>
            <div className="flex overflow-x-scroll ">
                <div className="flex gap-2">
                    {movies.map((movie)=>( <MovieCard poster_path={movie?.poster_path}/>))}

                </div>

            </div>
           
        </div>
    );
};

export default MOvieList;