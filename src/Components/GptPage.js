import { bg_img } from '../Utils/constant'
import GptSearch from './GptSearch'
import React from 'react'

const GptPage = () => {
  return (
    <div>
      <div className='absolute -z-10'>
            <img src={bg_img} alt='photo_of_logo'/>
        </div>
        <GptSearch/>
    </div>
  )
}

export default GptPage