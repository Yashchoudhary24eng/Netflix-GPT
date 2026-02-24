import React from 'react'
import Header from './Header'
import MainBrowseCommp from './MainBrowsecomp'
import SecondaryBrowseComp from './SecondaryBrowseComp'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Shimmer from './Shimmer'

const Browse = () => {

  const movies = useNowPlayingMovies();
   
  const useMovie = movies?.find(movie => movie.id===1368166);
  console.log(useMovie);
  return (!movies)?<Shimmer/>: (
    <div className='' >
      <Header/>
      <MainBrowseCommp movies={useMovie}/>
      <SecondaryBrowseComp/>
    </div>
  )
}

export default Browse