import { Link } from "react-router-dom";

export default function Q3() {
    return (
        <div className="landing">
            <p className="question">
                Is this your cat AND dog?
            </p>
            <img src="https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/461720728_8826275997385289_2452760662743071337_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=w-cvWAlc5-IQ7kNvwHiDfjR&_nc_oc=AdkmUJLk3e3eInSnMnZbykdWa2ePyiYyxXQy9gfE3J39dl8Hc7ZFeUVuQVG2syXmqC4&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=5bCbxJTOpTh1oKnhygK1Bg&oh=00_AfKOFdnyulup4MZezLUuJmdBzBosVnIAcOvciqqdnBKunA&oe=682613BD"
                className="photo" 
                alt="cat" 
            />
            <Link to={"/q4"} className="link">Yes</Link>
            <Link to={"/reject"} className="link">No</Link>
        </div>

    )
}