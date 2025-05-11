import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <div className="landing">
            <p className="question">
                Are you my mother?
            </p>
            <Link to={"/home"} className="link">Yes</Link>
            <Link to={"/reject"} className="link">No</Link>
        </div>

    )
}