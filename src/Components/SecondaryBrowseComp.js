
import React from 'react'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MOvieList from './MovieList';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpComingMovies from '../hooks/useUpComingMovies';

const SecondaryBrowseComp = () => {

    const movies = useNowPlayingMovies();
    const popular = usePopularMovies();
    const toprated = useTopRatedMovies();
    const upcoming = useUpComingMovies();
    

  return (
    <div className='bg-black'>
       <div className='-mt-56  relative'>
         <MOvieList title={"TOP MOVIES"} movies={movies}/>
         <MOvieList title={"Top Rated"} movies={toprated}/>
        <MOvieList title={"Popular"} movies={popular}/>
        <MOvieList title={"Upcoming"} movies={upcoming}/>
       </div>



    </div>
  )
}

export default SecondaryBrowseComp