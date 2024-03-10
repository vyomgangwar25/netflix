import {createSlice} from "@reduxjs/toolkit";
const moviesSLice=createSlice({
    name:"movies",
    initialState:{
        NowPlayingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.NowPlayingMovies=action.payload;  //update the state
        },
        addTrailerVideo:(state,action)=>{
        state.trailerVideo=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.NowPopularMovies=action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.NowTopRatedMovies=action.payload;
        },
        addUpCommingMovies:(state,action)=>{
            state.NowUpCommingMovies=action.payload
        }
    }
})
export const{addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTopRatedMovies,addUpCommingMovies}=moviesSLice.actions;
export default moviesSLice.reducer;