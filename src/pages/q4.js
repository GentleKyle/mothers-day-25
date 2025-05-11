import { Link } from "react-router-dom";

export default function Q4() {
    return (
        <div className="landing">
            <p className="question">
                Do you like this man?
            </p>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/TrumpPortrait.jpg/1200px-TrumpPortrait.jpg"
                className="photo" 
                alt="trash man" 
            />
            <Link to={"/reject"} className="link">Yes</Link>
            <Link to={"/home"} className="link">No</Link>
        </div>

    )
}