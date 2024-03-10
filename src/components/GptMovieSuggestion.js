import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from "./MovieList"
const GptMovieSuggestion = () => {
  const gpt=useSelector(store => store.gpt);
  const { movieResult, movieNames}=gpt;
  if(!movieNames) return null;

  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>{movieNames}
      <div>
      {movieNames.map((movieName , index)=>(
        <MovieList key={movieName} title={movieName} movies={movieResult[index]}/>
      ))}
        
      </div>
    </div>
  )
}

export default GptMovieSuggestion
