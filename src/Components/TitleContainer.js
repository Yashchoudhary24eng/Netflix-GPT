
import React from 'react'

const TitleContainer = ({movies}) => {
    
    if(!movies) return;
   
  const {overview,title} = movies;
  return (
    <div className='pt-64 pl-8 absolute z-10 text-white  '>
        <h1 className='font-extrabold text-3xl'>{title}</h1>
        <p className='font-semibold w-1/3 pt-2'>{overview}</p>
        <div className='flex gap-2 pt-4'>
            <button className='border-solid bg-white hover:bg-opacity-80 text-black  rounded-md font-semibold py-2 px-5'>🔽 Play</button>
            <button  className='border-solid bg-gray-500 hover:bg-opacity-80 text-black rounded-md font-semibold py-2 px-3'> ⏺️ More Info</button>
        </div>
    </div>
  )
}

export default TitleContainer;