import React from 'react'
import MovieList from './MovieList'
 
import { useSelector } from 'react-redux'
const SecondaryContainer = () => {
  const movie=useSelector(store=>store.movies)
   
  return (
    <div  className=' bg-black -mt-70'>
     <MovieList title={"Now Playing"} movies={movie.NowPlayingMovies}/>
     <div className='-mt-70  relative z-20'>
     <MovieList title={"Top Rated"} movies={movie.NowTopRatedMovies}/>
     <MovieList title={"Popular"} movies={movie.NowPopularMovies}/>
     <MovieList title={"Upcomming Movies"} movies={movie.NowUpCommingMovies}/>
     <MovieList title={"Horror"} movies={movie.NowPlayingMovies}/>
     </div>
    </div>
  )
}

export default SecondaryContainer
