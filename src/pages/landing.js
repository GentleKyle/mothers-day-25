import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <>
            <p>
                Are you my mother?
            </p>
            <Link to={"/home"}>Yes</Link>
        </>

    )
}