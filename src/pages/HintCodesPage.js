import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {mapCodes} from "../api/Mock";

const HintCodesPage = () => {
    const history = useHistory();
    const [val, setVal] = useState("Type Code Here");
    function clearInput(){
        setVal("");
    }
    function pushToPlayerPage() {
        history.push('/player/hints');
    }
    const change = event => {
        setVal(event.target.value);
    }
    const click = () => {
        if(checkCode(val)){
            alert("Success");
        }
        else if(!checkCode(val)) {
            alert("No such code exists")
        }
    }
    const code1 = 101;
    const code2 = 102;
    const code3 = 103;
    const code4 = 104;
    const code5 = 105;

    function checkCode(code) {
        if(code == code1) {
            if(mapCodes["1"]) {
                alert("Already used");
                return false;
            }
            mapCodes["1"] = true;
            return true;
        }
        if(code == code2) {
            mapCodes["2"] = true;
            return true;
        }
        if(code == code3) {
            mapCodes["3"] = true;
            return true;
        }
        if(code == code4) {
            mapCodes["4"] = true;
            return true;
        }
        if(code == code5) {
            mapCodes["5"] = true;
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <div className={"button-container"}>
            <input className={"input"} onChange={change} value={val} onClick={clearInput}/>
            <button className={"button"} onClick={click}>Register Code</button>
            <button  className="button" onClick={() => pushToPlayerPage()} >Return</button>
        </div>
    )

}

export default HintCodesPage;