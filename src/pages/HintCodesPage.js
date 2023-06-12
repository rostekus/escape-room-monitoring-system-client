import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {mapCodes} from "../api/Mock";
import Popup from "../components/Popup";

const HintCodesPage = () => {
    const [message, setMessage] = useState("Hint");
    const history = useHistory();
    const [val, setVal] = useState("Type Code Here");
    const [buttonPopup, setButtonPopup] = useState(false);
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
            setMessage("Hint successfully inputted");
        }
        else {
            setMessage("Hint not found or inputted again");
        }
    }
    const code1 = 101;
    const code2 = 102;
    const code3 = 103;
    const code4 = 104;
    const code5 = 105;
    const code6 = 106;
    const code7 = 107;
    const code8 = 108;


    function checkCode(code) {
        if(code == code1) {
            if(mapCodes["1"]) {
                return false;
            }
            else {
                mapCodes["1"] = true;
                return true;
            }
        }
        if(code == code2) {
            if(mapCodes["2"]) {
                return false;
            }
            else {
                mapCodes["2"] = true;
                return true;
            }
        }
        if(code == code3) {
            if(mapCodes["3"]) {
                return false;
            }
            else {
                mapCodes["3"] = true;
                return true;
            }
        }
        if(code == code4) {
            if(mapCodes["4"]) {
                return false;
            }
            else {
                mapCodes["4"] = true;
                return true;
            }
        }
        if(code == code5) {
            if(mapCodes["5"]) {
                return false;
            }
            else {
                mapCodes["5"] = true;
                return true;
            }
        }
        if(code == code6) {
            if(mapCodes["6"]) {
                return false;
            }
            else {
                mapCodes["6"] = true;
                return true;
            }
        }
        if(code == code7) {
            if(mapCodes["7"]) {
                return false;
            }
            else {
                mapCodes["7"] = true;
                return true;
            }
        }
        if(code == code8) {
            if(mapCodes["8"]) {
                return false;
            }
            else {
                mapCodes["8"] = true;
                return true;
            }
        }
        else {
            return false;
        }
    }

    return (
        <div className={"button-container"}>
            <input className={"input"} onChange={change} value={val} onClick={clearInput}/>
            <button className={"button"}
                    onClick={() =>
                    {
                        setButtonPopup(true);
                        click();
                    }
            }
            >Register Code</button>
            <button  className="button" onClick={() => pushToPlayerPage()} >Return</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>{message}</h3>
            </Popup>
        </div>
    )

}

export default HintCodesPage;