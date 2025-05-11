import { Link } from "react-router-dom";

export default function Q1() {
    return (
        <div className="landing">
            <p className="question">
                Is this your cat?
            </p>
            <img src="https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/465468064_9087998444546375_4726730045376370101_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=zW9GN0LJhMMQ7kNvwE5mlAX&_nc_oc=Adm5h_HhsfDVu7IGBAX-O6uQ41m2_WoeMzQu1y8U6GUxuEiHnBTxCRA4YWKvgqkSBN8&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=7lYLyttp6uBjFNWfaZU6eQ&oh=00_AfJKJnVrkCJcCVObozFT2zJMu7B_ih85CSgXvjU8OWQ34g&oe=68261974" 
                className="photo" 
                alt="cat" 
            />
            <Link to={"/q2"} className="link">Yes</Link>
            <Link to={"/reject"} className="link">No</Link>
        </div>

    )
}