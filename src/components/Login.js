import React, { useRef, useState } from 'react'
import Header from './Header';
import { checkValidData } from '../utils/validate';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { USER_AVATAR } from '../utils/constants';


const Login = () => {

    const [isSignInForm, setIsSignInForm]= useState(true);
    const [errorMessage, setErrorMessage]= useState(null);
 
    const dispatch = useDispatch();

    const email=useRef(null);
    const password=useRef(null);
    const name =useRef(null);

    const handleButtonClick = ()=>{
  
      const message= checkValidData(email.current.value, password.current.value);
      setErrorMessage(message);
      if(message) return;

      if(!isSignInForm){
        //Sign UP
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // User successfully signed up
        
        const user = userCredential.user;
        console.log("User signed up successfully:", user);

        // Update the user's profile
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: USER_AVATAR,
        })
        .then(() => {
          const {uid, email,displayName , photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL:photoURL})); 
          
          console.log("User profile updated successfully.");
        })
        .catch((error) => {
          console.error("Error updating profile:", error);
          setErrorMessage(`Profile Update Error: ${error.message}`);
        });
      })
      .catch((error) => {
        // Handle sign-up errors
        console.error("Sign-up Error:", error);
        setErrorMessage(`Sign-up Error: ${error.message}`);
      });

      }
      else{
        //sign in
        signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log("User signed in successfully:", user);
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage("Sign-in Error:",errorCode +'-'+ errorMessage);
        });

      }
    }

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    };

  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg'
      alt='logo'/>
      </div>
     
      <form onSubmit={(e)=>e.preventDefault()}className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'> 
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm &&<input ref={name}
         type='text'
          placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}

        <input ref={email} 
        type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
         
        <input ref={password}
        type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>

        <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
        <button className='p-4 my-6 bg-red-700 w-full rounded-md'
        onClick={handleButtonClick}>
        {isSignInForm? "Sign In" : "Sign Up"} </button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now."}
        </p>
      </form>

      </div>
    
  )
}

export default Login;
