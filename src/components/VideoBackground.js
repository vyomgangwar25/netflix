import React from "react";
import {useSelector} from "react-redux"
import UseMovieTrailer from "../hooks/UseMovieTrailer";


const VideoBackground = ({ movieId }) => { //pass movieId as a props from MainContainer
    const trailerVideo=useSelector(store=>store.movies?.trailerVideo)
   
   UseMovieTrailer(movieId);
 
  return (
    <div className="w-screen ">
      <iframe className="w-screen aspect-video -mt-24  "
        
      
        src={"https://www.youtube.com/embed/"+trailerVideo?.key +"?autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
     
      ></iframe>
    </div>
  );
};

export default VideoBackground;
