import React, {useState} from "react";
import {useHistory} from "react-router-dom";


const HintCodesPage = () => {
    const history = useHistory();
    const [val, setVal] = useState("Type Code Here");
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
        else {
            alert("No such code exists")
        }
    }
    const gameId = 0;
    const code1 = 101;
    const code2 = 102;
    const code3 = 103;
    const code4 = 104;
    const code5 = 105;

    function checkCode(code) {
        if(code == code1) {
            map["1"] = true;
            return true;
        }
        if(code == code2) {
            map["2"] = true;
            return true;
        }
        if(code == code3) {
            map["3"] = true;
            return true;
        }
        if(code == code4) {
            map["4"] = true;
            return true;
        }
        if(code == code5) {
            map["5"] = true;
            return true;
        }
        else {
            return false;
        }
    }

    let map;
    map =
        {
            "1" : false,
            "2" : false,
            "3" : false,
            "4" : false,
            "5" : false,
        }

    return (
        <div className={"button-container"}>
            <input textAlign={'center'} className={"input"} onChange={change} value={val}/>
            <button className={"button"} onClick={click}>Register Code</button>
            <button  className="button" onClick={() => pushToPlayerPage()} >Return</button>
        </div>
    )

}

export default HintCodesPage;