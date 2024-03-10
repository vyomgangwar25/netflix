import { createSlice } from "@reduxjs/toolkit"
 

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        movieNames:null,
        movieResult:null

    },
    reducers:{
        toggleGptSearchView:(state)=>{
        state.showGptSearch=!state.showGptSearch //toggle
        },
        addGptMovieResult:(state,action) =>{
            const{movieNames,movieResult}=action.payload
            state.movieNames=movieNames;
            state.movieResult=movieResult
        }
    }

})
export const{toggleGptSearchView,addGptMovieResult}=gptSlice.actions
export default gptSlice.reducer;