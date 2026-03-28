import { bg_img } from '../Utils/constant'
import GptSearch from './GptSearch'
import React from 'react'
import GptSearchContent from './GptSearchContent'

const GptPage = () => {
  return (
    <div>
      <div className='fixed -z-20'>
            <img src={bg_img} alt='photo_of_logo'/>
        </div>
        <GptSearch/>
        <GptSearchContent/>
    </div>
  )
}

export default GptPage