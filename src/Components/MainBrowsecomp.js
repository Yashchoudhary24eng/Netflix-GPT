
import VideoContainer from "./VideoContainer";
import TitleContainer from "./TitleContainer";

const MainBrowseCommp = ({movies}) => {

   
    return (
       <div>
         <TitleContainer movies = {movies}/>
         <VideoContainer movies = {movies}/>
       </div>
    )
}

export default MainBrowseCommp;