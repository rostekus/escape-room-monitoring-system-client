import React from "react";
import {getHintsForGameID} from "../api/Mock";
import {mapCodes} from "../api/Mock";
import {useHistory} from "react-router-dom";
import {Howl} from "howler";

const HintRevealPage = () => {
    const history = useHistory();
    const audioClips = [
    { sound: "http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg" }
    ]

    function soundPlay(src) {
        const sound = new Howl ({
            src,
            html5: true
        })
        sound.play();
    }

    function soundOnButtonClick() {
        audioClips.map((soundObj) => {
          soundPlay(soundObj.sound);
        })
    }
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
            <button className="button" onClick={() => soundOnButtonClick()}>Play Hint</button>
        </div>
    )
}

export default HintRevealPage;