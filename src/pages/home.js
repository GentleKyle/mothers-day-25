import { Link } from "react-router-dom";

export default function home() {
    return (
        <div className="landing">
            <p className="welcome">
                You must be my favorite mother!
                
            </p>

            <Link to={"/happy"} className="link">
                Okay...
            </Link>
            <p className="ps">P.S. Sorry you had to see that, but needed to be sure. Have a nice drink.</p>
        </div>



        
        
    )
}