 import { Img_Url } from "../Utils/constant"
 const MovieCard =  ({poster_path}) =>{

   

    return (
        <div className="w-40 ">
            <img src={Img_Url + poster_path} alt="pta nhi"/>
        </div>
    )

 }

export default MovieCard