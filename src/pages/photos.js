import photoArr from "../photoArr.json";

export default function Photos() {

    //const photos = JSON.parse(photoArr);
    console.log(photoArr[0]);
    return (
        <>
            <p>fine</p>
            <img src={photoArr[0].url} alt="idk" className="photo" />
        </>

    )
}
//<img src={photos[0].url} alt="idk" />