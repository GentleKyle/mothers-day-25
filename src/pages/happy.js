import { Link } from "react-router-dom";

export default function Happy() {

    return (
        <>
            <p className="happy">Happy Mother's Day!</p>
            <p className="under-happy">
                Thank you for all that you have done for me. fsdkaljfklasjf
            </p>
            <div className="links">
                <p>Allie drew this for you today! :)</p>
                <Link to={"/allie"} className="link">See art</Link>
                
                <p>This may be fun or not...</p>
                <Link to={"/photos"} className="link">What</Link>
            </div>

        </>
    )
    
}