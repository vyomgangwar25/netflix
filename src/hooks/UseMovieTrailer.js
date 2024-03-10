import { addTrailerVideo } from "../Utills/moviesSlice";
import { API_options } from "../Utills/Constants";
import {useDispatch} from "react-redux"
import { useEffect } from "react";
const UseMovieTrailer=(movieId)=>{
    const dispatch=useDispatch(); //for add trailer id to redux-store
 
 //fetch trailer video from api and update the store
 //call that hook in videoBackground component

 const getMovieVideo = async () => {
   const data = await fetch(
     "https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US",
     API_options
   );
   const json = await data.json();
   //console.log(json);
   const filterData = json.results.filter((video) => video.type === "Trailer");
   const trailer = filterData.length ? filterData[0] : json.results[0];
   //console.log(trailer);

   dispatch(addTrailerVideo(trailer))

 };
 useEffect(() => {
   getMovieVideo();
 }, []);
}
export default UseMovieTrailer;