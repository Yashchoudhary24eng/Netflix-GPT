import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from 'react'
import { auth } from '../Utils/firebase';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/UserSlice";
import { gpttoggle } from "../Utils/GptToggleSlice";
import { lan_select_option } from "../Utils/LanguageConstant";
import { languageUpdate } from "../Utils/LanguageSlice";

const Header = () => {

 
  const gptpage = useSelector(store => store.gpt.gptinitialvalue);
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


  const gpttogglehandle = ()=>{
    dispatch(gpttoggle());
  }

  const updateLanguage = (e)=>{
    dispatch(languageUpdate(e.target.value));
  }



  return (
    <div className='  w-screen absolute bg-gradient-to-b from-black/100 z-20 flex justify-between'>
        <img className='w-48 pt-2 ml-24' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-01-09/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='photo_of_logo'/>
      
        <div className="flex justify-between">
         {gptpage &&  
         <select className="m-6 px-2 bg-slate-200" onChange={updateLanguage}>
          <option value="">Language</option>
          {lan_select_option.map(data =>(<option value={data.identifier}>{data.name}</option>))}
        </select> 
         }
       
       {user && <button onClick={gpttogglehandle} className="text-white border-black border-solid border px-4 m-6  bg-purple-800 rounded-lg"> {gptpage?"Home Page":"GPT Search"}</button>}
        {user && <button onClick={handleLogOut} className='bg-slate-700 text-white m-6 rounded-lg px-6'>Sign Out - {user.displayName===null?"unknown":user.displayName}</button>}
    </div>
    </div>
  )
}

export default Header;

