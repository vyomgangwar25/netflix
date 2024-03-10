import React, { useRef } from 'react'
import { useState } from 'react';
 
import { checkValidateData } from '../Utills/Validate';
import {auth } from "../Utills/firebase";
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {  signInWithEmailAndPassword } from "firebase/auth";
import {useNavigate}  from 'react-router-dom'
import HeaderLogin from './HeaderLogin';
const Login = () => {

    const [isSignInForm, setIsSigninForm] = useState(true); //for manage the toggle feature
   const[errormsz,setErrorMsz]=useState(null);  //set error message
   const navigate=useNavigate();

   //take reference of email and password using useRef hook
    const email=useRef(null);
    const password=useRef(null);


    const handleButtonClick=()=>{
        //form validation
       const message= checkValidateData(email.current.value,password.current.value)
      setErrorMsz(message);
      if(message)
      return;
         
      //sign in ,signup logic
      if(!isSignInForm)
      {
        //signup logic
    createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsz(errorCode+" "+errorMessage);
    // ..
  });
      }
      
      else{
        //sign in logic
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   console.log(user);
   navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsz(errorCode+" "+errorMessage);
  });
      }
    }

    const toggleSignInForm = () => {
       setIsSigninForm(!isSignInForm);
      };


  return (
      <div>
    <HeaderLogin/>
    <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/1d86e0ac-428c-4dfa-9810-5251dbf446f8/IN-en-20231002-popsignuptwoweeks-perspective_alpha_website_small.jpg"
          alt="Logo"
        
        />
      </div>
      <form onSubmit={(e)=>{
        e.preventDefault()
      }} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">

      <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

      {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />}
        
      <input
        ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
        />
        
         <input
         ref={password}
          type="password"
          placeholder="password"
          className="p-4 my-4 w-full bg-gray-700"
        />
        <p className='text-red-500 font-bold text-lg py-2'>{errormsz}</p>

         <button className="p-4 my-4 bg-red-700 w-full rounded-lg" onClick={handleButtonClick} >
            {isSignInForm ? "Sign In" : "Sign Up"}
           </button>

        <p className="py-4 cursor-pointer"  onClick={toggleSignInForm}  >
        {isSignInForm ? "New to Netflix? Sign Up Now" : "Already registerd? Sign In Now"} 
        </p>
    
      </form>
      </div>
     
  )
}

export default Login
