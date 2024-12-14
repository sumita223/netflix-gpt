import React, { useState } from 'react'
import Header from './Header';

const Login = () => {

    const [isSignInForm, setIsSignInForm]= useState(true);

    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm);
    }

  return (
    <div>
      <Header/>
      <div className='absolute'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/IN-en-20241209-TRIFECTA-perspective_4aef76eb-7d5b-4be0-93c0-5f67320fd878_large.jpg'
      alt='logo'/>
      </div>
     
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-70'> 
      <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>

        {!isSignInForm &&<input type='text'
          placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'/>}
        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'/>
         
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'/>
        <button className='p-4 my-6 bg-red-700 w-full rounded-md'>
        {isSignInForm? "Sign In" : "Sign Up"} </button>

        <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>
        {isSignInForm? "New to Netflix? Sign Up Now" : "Already Registered? Sign In Now."}
        </p>
      </form>

      </div>
    
  )
}

export default Login;
