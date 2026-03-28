import React from 'react'
import { useSelector } from 'react-redux'
import MOvieList from './MovieList';

const GptSearchContent = () => {
    const gptData = useSelector(store => store?.gptSearchStore?.MoviesData);
    const gptName = useSelector(store => store?.gptSearchStore?.MoviesName);
    
  return (
    <div className='bg-black/80  text-white mt-6 '>
        <div> 
       {gptName?.map((data,index) =>(<MOvieList key={data} title={data} movies={gptData[index]} />))}
    </div>
    </div>
  )
}

export default GptSearchContent