
import Header from './Header'
import MainBrowseCommp from './MainBrowsecomp'
import SecondaryBrowseComp from './SecondaryBrowseComp'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Shimmer from './Shimmer'
import GptPage from './GptPage'
import { useDispatch, useSelector } from 'react-redux'
import { addSearchData } from '../Utils/GptSearchStore'

const Browse = () => {

   const gptpage = useSelector((store)=> store.gpt.gptinitialvalue);

   const dispatch = useDispatch();

   if(gptpage) dispatch(addSearchData(null));


  const movies = useNowPlayingMovies();
   
  const useMovie = movies?.find(movie => movie.id===1368166);
  
  return (!movies)?<Shimmer/>: (
    <div className='' >
      <Header/>
      {gptpage?<GptPage/>:<>
        <MainBrowseCommp movies={useMovie}/>
      <SecondaryBrowseComp/>
      </>}
      
    
    </div>
  )
}

export default Browse;