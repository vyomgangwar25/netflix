import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleGptSearchView } from '../Utills/gptSlice';



const Header = () => {

  const dispatch=useDispatch();
  const handleGptSearchClick=()=>{
    //Toogle gpt Serach
   dispatch(toggleGptSearchView());
  }
  return (
     <div className='header2'>
    <div className='absolute mx-8 mt-24 w-screen bg-gradient-to-b from-black z-10'>
    <img className='w-44'
     src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="" />
     <div className=' '>
     <button className='text-white rounded-lg text-2xl' onClick={handleGptSearchClick} >GPT Search</button> </div>
   </div>
    </div>
  )
}

export default Header
