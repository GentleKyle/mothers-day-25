import { Link } from "react-router-dom";
import photoArr from "../photoArr.json";

export default function Photos() {

    //const photos = JSON.parse(photoArr);
    console.log(photoArr[0]);

    //const []

    return (
        <>
            <p className="wait">
                Check back later for a surprise! Ya boy was sick and lost a day. :(
            </p>
            <div className="links">
                <Link to={"/happy"} className="link">Go Back</Link>
            </div> 
            
        </>

    )
}
//<img src={photos[0].url} alt="idk" />
//            <p>fine</p>
//<img src={photoArr[0].url} alt="idk" className="photo" />

/* <p className="wait">
Check back later! Ya boy was sick and lost a day. :(
</p>
<div className="links">
<Link to={"/happy"} className="link">Go Back</Link>
</div> */