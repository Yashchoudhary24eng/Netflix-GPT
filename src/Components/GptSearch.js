import { useDispatch, useSelector } from "react-redux";
import language from "../Utils/LanguageConstant";
import { useRef, useState } from "react";
import {ai} from "../Utils/OpenAi";
import auseSearchMoives from "../hooks/auseSearchMovies";
import { addSearchData } from "../Utils/GptSearchStore";

const Gptsearch = () =>{

    const [inputval,setinputval] = useState("");
    const dispatch = useDispatch();
    const inputdata = useRef();
    const lan = useSelector(store => store.lan.language);

    const searchMovies = auseSearchMoives();

    const HandleEvent = async() => {

        const msg = "plz provide some data to search";

       if(!inputdata.current.value.trim()) {
        setinputval(msg);
        return;
       }

      setinputval("");

        const gptQuery = "Act as an movies recommendation system and suggest some movies for the query :"+inputdata.current.value+".only give me name of five movies,comma seperated like the example result given ahead. Examle results: Gadar,Solay,Gollmal,Don,Koi Mil Gaya.";
        //fetch gpt api
    const Gpt_Connection =  await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: gptQuery,
  });
  

    const gptResult = Gpt_Connection.text.split(",");

    const PromiseArray =  gptResult?.map(movie =>searchMovies(movie)); 

    const tmdb_Movies = await Promise.all(PromiseArray);

    dispatch(addSearchData({MoviesData:tmdb_Movies,MoviesName:gptResult}));
   
    }

    return (

        <div className="">
        <div className="pt-[10%] flex justify-center">
           
            <form className=" w-1/2  bg-black  grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
            <input ref={inputdata} className="border-solid border p-4 m-2 col-span-9" type="text" placeholder={language[lan]?.PlaceHolder}/>
            <button onClick={HandleEvent} className="px-4 py-4 col-span-3 m-2 rounded-lg bg-red-600 text-white"> {language[lan]?.Search}</button>
            </form>
           
         </div>
          <p className="text-red-700">{inputval}</p>
         </div>
        
    )
};
export default Gptsearch;