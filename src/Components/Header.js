import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from 'react'
import { auth } from '../Utils/firebase';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";

const Header = () => {

  const navigate =useNavigate();
  const user = useSelector((store)=>store.user);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  if (user) {
    const {uid,email,displayName} = user;
           dispatch(addUser({uid:uid,email: email,displayName:displayName}));
           navigate("/browse");
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    
    // ...
  } else {
    // User is signed out
    dispatch(removeUser());
    navigate("/");
  }
});

  },[]);


 // const{displayName}=user;
  const handleLogOut = ()=>{
    signOut(auth).then(() => {
  // Sign-out successful.
      navigate("/");
}).catch((error) => {
  // An error happened.
});
  }

  return (
    <div className='  w-screen absolute bg-gradient-to-b from-black/100 z-10 flex justify-between'>
        <img className='w-48 pt-2 ml-24' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='photo_of_logo'/>
        {user && <button onClick={handleLogOut} className='bg-slate-700 text-white m-6 rounded-lg px-6'>Sign Out - {user.displayName===null?"unknown":user.displayName}</button>}
    </div>
  )
}

export default Header;

