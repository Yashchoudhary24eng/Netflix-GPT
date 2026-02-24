
import React, { useRef, useState } from 'react'
import Header from './Header'
import { validationCheck } from '../Utils/validationCheck';
import { auth } from '../Utils/firebase';
import {createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile} from "firebase/auth";
import { addUser } from '../Utils/UserSlice';
import { useDispatch } from 'react-redux';



const Login = () => {

    const[isSignup,setIsSignUp] = useState(true);
    const[errorMsg,setErrorMsg] = useState(null);
    
    const dispatch = useDispatch();
   
    const name = useRef();
    const email = useRef();
    const password = useRef();

    const handleSignIn = () => {
        setIsSignUp(!isSignup);
    }


    const handleButtonClick = ()=> {
   
       const msg = validationCheck(email.current.value ,password.current.value);
      setErrorMsg(msg);

        if(msg!==null) return;
       
      if(!isSignup){
        createUserWithEmailAndPassword(auth,email.current.value ,password.current.value)
 .then((userCredential) => {
    // Signed up 
   const user = userCredential.user;

   updateProfile(user, {
  displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
}).then(() => {
  // Profile updated!
  // ...
  const {uid,email,displayName} = user;
             dispatch(addUser({uid:uid,email: email,displayName:displayName}));
 
}).catch((error) => {
  // An error occurred
  // ...
});


   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMsg(errorCode+" "+errorMessage);
    // ..
  });
      }else{
        //sign in logic
        signInWithEmailAndPassword(auth,email.current.value ,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
  
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    
    setErrorMsg(errorCode+ " "+ errorMessage);
  });

      }
    }


  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_small.jpg' alt='photo_of_logo'/>
        </div>

        <form onSubmit={(e) =>e.preventDefault() } className='w-3/12  absolute bg-opacity-80 bg-black px-10 py-16 my-52 mx-auto left-0 right-0 text-white'>
            <h1 className='font-semibold text-3xl mb-4'>{isSignup?"Sing In":"Sign Up"}</h1>
            {!isSignup && <input ref={name} type='text' placeholder='Full Name' className='px-3 py-1 my-2 w-full bg-gray-700' /> }
            <input ref={email} type='text' placeholder='Email Address' className='px-3 py-1 my-2 w-full bg-gray-700' />
            <input ref={password} type='text' placeholder='Password' className='px-3 py-1 my-2 w-full bg-gray-700'/>
            <p className='text-red-700 py-2'>{errorMsg}</p>
            <button onClick={handleButtonClick} className='rounded-md p-2 my-4 w-full bg-red-800'>{isSignup?"Sing In":"Sign Up"}</button>
             <p className='w-full cursor-pointer' onClick={handleSignIn}>{isSignup?"New To Netflix?Sign Up":"Already Registred..?Sign In Now"}</p>
        </form>
    </div>
  )
}

export default Login