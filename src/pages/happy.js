import { Link } from "react-router-dom";

export default function Happy() {

    return (
        <div className="happy-contain">
            <p className="happy">Happy Mother's Day!</p>
            <p className="under-happy">
                Thank you for all that you have done for me. Good is good and "bad" is still your best. All I could ever want. Thank you for being my mom! I know it is not easy.
            </p>
            <p className="love">
                I LOVE you! 
            </p>
            <p className="heart">&#x2665;&#xfe0f;</p>
            <div className="links">
                <p>Allie drew this for you today! :)</p>
                <br></br>
                <Link to={"/allie"} className="link">See art</Link>
                <br></br>

                <p>This may be fun or not...</p>
                <br></br>
                <Link to={"/photos"} className="link">What</Link>
            </div>

        </div>
    )
    
}