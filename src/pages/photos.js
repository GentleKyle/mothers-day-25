
import photoArr from "../photoArr.json";
import { useState } from "react";

export default function Photos() {
    
    const [index, setIndex] = useState(0);
    const [stack, setStack] = useState([Math.floor(Math.random() * photoArr.length)]);

    const arrow = "->";


    function newRandom() {

        let rand = Math.floor(Math.random() * photoArr.length);
        let numExists = stack.includes(rand);

        //do not want the same random num twice in a row
        while (numExists) {
            rand = Math.floor(Math.random() * photoArr.length);
            numExists = stack.includes(rand);
        }

        return rand;
    }

    const onNext = () => {
        //not on last item in stack
        if (index < stack.length - 1) {
            setIndex(index + 1);
        }
        else { //add new num to stack for next
            setStack(stack.concat(newRandom()));
            setIndex(index + 1);
        }
    }

    const onPrev = () => {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    return (
        <div className="photo-page">
            <div className="bg">
                <div className="photo-contain">
                    <img className="photos" alt="" src={photoArr[stack[index]].url} />
                </div>
            </div>

            <div className="nav">
                {index === 0 
                    ? <button className="no-prev" onClick={onPrev}></button> 
                    : <button className="button left" onClick={onPrev}>{arrow}</button>
                }
                <button className="button" onClick={onNext}>{arrow}</button>
            </div>
            
            {photoArr[stack[index]].caption === "" ? null : <p className="caption">{photoArr[stack[index]].caption}</p>}
            
        </div>

    )
}

//cup of joe
//https://scontent-den2-1.xx.fbcdn.net/v/t39.30808-6/463841081_8983893291623558_960271507258171513_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=aa7094&_nc_ohc=x6wwaEv2ojMQ7kNvwFXbL-V&_nc_oc=Adm8P-u2CLW-LdmjHliPGwevvJoOIlDM1MzSMbJApFgitg06NciCxDmnOuZ6fyV8Bso&_nc_zt=23&_nc_ht=scontent-den2-1.xx&_nc_gid=MZayDJpThtNCtCL9NF4DDQ&oh=00_AfIj2rtUMFsiAcut7WnMLPr21hYWSShv-2mpjmD0fD-1Dg&oe=68234503