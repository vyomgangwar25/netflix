import { useDispatch } from "react-redux";
import { API_options } from '../Utills/Constants'
import {addUpCommingMovies} from '../Utills/moviesSlice';
import { useEffect } from "react";

const UseUpComming=()=>{

    //fetch data from tmdb api and update the store with that data
  const dispatch=useDispatch();

  const getUpcommingMovies=async()=>{

    const data=await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_options);
    const json =await data.json();
    console.log(json.results)
    dispatch(addUpCommingMovies(json.results))
  };
  useEffect(()=>{
    getUpcommingMovies();
  },[])
}
export default UseUpComming;