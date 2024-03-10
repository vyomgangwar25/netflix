import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../Utills/userSlice";
import movieReducer from "../Utills/moviesSlice";
import gptReducer from "../Utills/gptSlice"
const appStore=configureStore (
    {
     reducer:{
        user:userReducer,
        movies:movieReducer,
        gpt:gptReducer
     }
    }
)
export default appStore;  

//steps for redux
// step 1 : configure store (appStore.js)
// step 2: create a Slice(userSlice.js)
   //at initial level slice contains 3 things name,initail state,reducer
   //and then we export action and reducers from a slice

// step 3: import that reducer in appstore and provide to the reducer in app store i.e added that slice to app store
//step 4: provide that store to app