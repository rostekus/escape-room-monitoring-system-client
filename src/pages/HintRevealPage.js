import React from "react";
import {getHintsForGameID} from "../api/Mock";
import {mapCodes} from "../api/Mock";
import {useHistory} from "react-router-dom";

const HintRevealPage = () => {
    const history = useHistory();
    function pushToPlayerPage() {
        history.push('/player/hints');
    }
    function getHint(){
        let counter = 1;
        for(let i = 0; i < getHintsForGameID(0).length; i++) {
            if (mapCodes[counter.toString()]) {
                counter++;
            }
            if(!mapCodes[counter.toString()]) {
                break;
            }
        }
        return getHintsForGameID(0).at(counter-1).text;
    }
    return (
        <div className={"button-container"}>
            <textarea style={{textAlign: "center", justifyContent: "center"}} className="text_field" defaultValue={getHint()}>
            </textarea>
            <button  className="button" onClick={() => pushToPlayerPage()} >Return</button>
        </div>
    )
}

export default HintRevealPage;