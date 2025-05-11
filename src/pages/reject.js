import { Link } from "react-router-dom";

export default function Reject() {
    return (
        <div className="reject-contain">
            <p className="reject-main">
                You are not my mother. Be gone!
            </p>
            <p className="reject">
                But happy Mother's Day to you too if you are a mom. I guess.
            </p>
            <Link to={"/"} className="link">Try again</Link>
        </div>
    )
}

//You are not my mother. Go away! But happy mother's day to you too if you are a mom. I guess.