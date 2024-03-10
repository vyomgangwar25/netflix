import { useDispatch } from "react-redux";
import { API_options } from '../Utills/Constants'
import {addPopularMovies} from '../Utills/moviesSlice';
import { useEffect } from "react";

const UsePopularMovies=()=>{

    //fetch data from tmdb api and update the store with that data
  const dispatch=useDispatch();

  const getPopularMovies=async()=>{

    const data=await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_options);
    const json =await data.json();
    console.log(json.results)
    dispatch(addPopularMovies(json.results))
  };
  useEffect(()=>{
    getPopularMovies();
  },[])
}
export default UsePopularMovies;