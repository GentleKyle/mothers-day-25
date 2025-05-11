import { Link } from "react-router-dom";

export default function Q2() {
    return (
        <div className="landing">
            <p className="question">
                Is this your dog?
            </p>
            <img src="https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/463925906_8990103627669191_367488906514216193_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Ae6mOv2EDTUQ7kNvwFLdk9W&_nc_oc=Adm9IOFiEOkoME6tyS11ierfVhZg9uMqNovh-vJHWXYTqR397MF9DA-_JGKWSaIwEt4&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=jWyzUBk7zEfFBr7w5A5CAQ&oh=00_AfIIpgvDqVeLx9p-BIl2ymABLcAFDe1fW7JiKXk9XEpdYA&oe=68260E2B"
                className="photo" 
                alt="cat" 
            />
            <Link to={"/q3"} className="link">Yes</Link>
            <Link to={"/reject"} className="link">No</Link>
        </div>

    )
}