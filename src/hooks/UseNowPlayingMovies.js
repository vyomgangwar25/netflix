import { useDispatch } from "react-redux";
import { API_options } from '../Utills/Constants'
import {addNowPlayingMovies} from '../Utills/moviesSlice';
import { useEffect } from "react";

const UseNowPlayingMovies=()=>{

    //fetch data from tmdb api and update the store with that data
  const dispatch=useDispatch();

  const getNowPlayingMovies=async()=>{

    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_options);
    const json =await data.json();
    //console.log(json.results)
    dispatch(addNowPlayingMovies(json.results))
  };
  useEffect(()=>{
    getNowPlayingMovies();
  },[])
}
export default UseNowPlayingMovies;