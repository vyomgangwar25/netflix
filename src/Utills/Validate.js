import React from 'react'

 export const checkValidateData=(email,password)=>{
  
    const isEmnailValid =/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValidation=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
   if(!isEmnailValid)
   {
    return "Email ID is not valid";
   }
   if(!isPasswordValidation)
   {
    return "Password is not Valid"
   }
  return null  //if email and password is valid then return null
 }