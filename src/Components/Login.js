
import React, { useState } from 'react'
import Header from './Header'

const Login = () => {

    const[isSignup,setIsSignUp] = useState(true);

    const handleSignIn = () => {
        setIsSignUp(!isSignup);
    }


  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_small.jpg' alt='photo_of_logo'/>
        </div>

        <form className='w-3/12  absolute bg-opacity-80 bg-black p-10 my-60 mx-auto left-0 right-0 text-white'>
            <h1 className='font-semibold text-3xl my-2'>{isSignup?"Sing In":"Sign Up"}</h1>
            {!isSignup && <input type='text' placeholder='Phone Number' className='px-3 py-1 my-2 w-full bg-gray-700' /> }
            <input type='text' placeholder='Email Address' className='px-3 py-1 my-2 w-full bg-gray-700' />
            <input type='text' placeholder='Password' className='px-3 py-1 my-2 w-full bg-gray-700'/>
            <button className='rounded-md p-2 my-4 w-full bg-red-800'>{isSignup?"Sing In":"Sign Up"}</button>
             <p className='w-full' onClick={handleSignIn}>{isSignup?"New To Netflix?Sign Up":"Already Registred..?Sign In"} Now</p>
        </form>
    </div>
  )
}

export default Login