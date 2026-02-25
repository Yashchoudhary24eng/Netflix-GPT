import { useSelector } from "react-redux";
import language from "../Utils/LanguageConstant";

const Gptsearch = () =>{

    const lan = useSelector(store => store.lan.language);

    const handleEvent = (e) => {
        e.preventDefault();
    }

    return (
        <div className="pt-[10%] flex justify-center">
           
            <form className=" w-1/2  bg-black  grid grid-cols-12">
            <input className="border-solid border p-4 m-2 col-span-9" type="text" placeholder={language[lan].PlaceHolder}/>
            <button onClick={handleEvent} className="px-4 py-4 col-span-3 m-2 rounded-lg bg-red-600 text-white"> {language[lan].Search}</button>
        
            </form>
         </div>
        
    )
};
export default Gptsearch;