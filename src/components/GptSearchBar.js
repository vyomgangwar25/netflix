import React, { useRef } from "react";
import lang from "../Utills/languageConstants";
import openai from "../Utills/openAi";
import { API_options } from "../Utills/Constants";
import { useDispatch } from "react-redux";
import { addGptMovieResult } from "../Utills/gptSlice";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch=useDispatch();

  //search movie in TMDB

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_options
    );

    const json = await data.json();
    //console.log(json);
    return json.results;
  };
  const handleGptSearchClick = async () => {
    //console.log(searchText.current.value)

    //make a call to open api and get movie result

    const gptQuery =
      "Act as a Movie Recommendation System and suggest some movies for the query :" +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated like the exmaole result given ahed.Examole Result: Gadar, Sholay , Don ,Golmal , Koi mil gya";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResult.choices) {
      document.writeln("ERROR");
    }
   // console.log(gptResult.choices?.[0]?.message?.content);
    const gptMovies = gptResult.choices?.[0]?.message?.content.split(","); //this will give array of movies
    //console.log(gptMovies);
    const promiseArray=gptMovies.map((movie) => searchMovieTMDB(movie))
 
      const tmdbResults = await Promise.all(promiseArray);
   //  console.log(tmdbResults)
   dispatch(addGptMovieResult({movieNames:gptMovies, movieResult:tmdbResults}));
  };
  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          ref={searchText}
          type="text "
          className="p-4 m-4 col-span-9"
          placeholder={lang.en.gptSearchPlaceholder}
        ></input>
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang.en.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
