import { Link } from "react-router-dom";

export default function Landing() {
    return (
        <>
            <p className="text-6xl text-fuchsia-500">
                Are you my mother?
            </p>
            <Link to={"/home"}>Yes</Link>
        </>

    )
}