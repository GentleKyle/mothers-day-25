import { Link } from "react-router-dom";

export default function home() {
    return (
        <>
            <p className="welcome">Happy Mother's Day!</p>
            <Link to={"/photos"}>Photos</Link>
        </>
        
        
    )
}