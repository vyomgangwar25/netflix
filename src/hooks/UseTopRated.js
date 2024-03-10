import { useDispatch } from "react-redux";
import { API_options } from '../Utills/Constants'
import {addTopRatedMovies} from '../Utills/moviesSlice';
import { useEffect } from "react";

const UseTopRated=()=>{

    //fetch data from tmdb api and update the store with that data
  const dispatch=useDispatch();

  const getTopRatedMovies=async()=>{

    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_options);
    const json =await data.json();
    console.log(json.results)
    dispatch(addTopRatedMovies(json.results))
  };
  useEffect(()=>{
    getTopRatedMovies();
  },[])
}
export default UseTopRated;