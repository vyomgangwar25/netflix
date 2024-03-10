import React from 'react'
import { IMG_CDN_URL } from '../Utills/Constants'

const MovieCard = ({posterPath}) => {  //from movieList pass poster Path as a props
    if(!posterPath) return null
  return (
    <div className='w-48 pr-4'>
      <img  alt="Movie Card" src={IMG_CDN_URL+posterPath}
       />
    </div>
  )
}

export default MovieCard
