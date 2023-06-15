import React, {useState} from "react";
import {getHintsForGameID} from "../api/Mock";
import {mapCodes} from "../api/Mock";
import {useHistory} from "react-router-dom";
import {Howl} from "howler";
import Popup from "../components/Popup";

let hintCounter = 0;
let counter = 1;

const HintRevealPage = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [message, setMessage] = useState("");
    const history = useHistory();

    const audioClips = [
        {sound: "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg"}
    ]

    function soundPlay(src) {
        const sound = new Howl({
            src,
            html5: true
        })
        sound.play();
    }

    async function playHint() {
        const url = getData(counter, hintCounter).then((res) => {
                soundPlay(res.audioUrl);
            }
        );
    }


    function pushToPlayerPage() {
        history.push('/player/hints');
    }

    async function getData(counter, hintCounter) {
        let response = await fetch(`https://escape-room-ai-backend-3en65w4ona-uc.a.run.app/api/v1/hint/${counter}/${hintCounter}`, {
        method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await response.json()
        // let data = {
        //     audioUrl: "https://storage.googleapis.com/test_audio_ml_pipeline/2d50d9a3-880b-4e11-8eea-a93996c8b59f.wav",
        //     text: "Run for your life"
        // }
        return data;
    }
    async function hintText() {
        getHint();
        getData(counter, hintCounter).then((res) => {
            //console.log(res.text);
            setMessage(res.text);
        })
    }

    const hintURL = () => {
        getHint().then((res) => {
            return res.audioURL;
        });
    };
    function getHint() {
        //let counter = 1;
        for (let i = 0; i < getHintsForGameID(0).length; i++) {
            if (mapCodes[counter.toString()]) {
                counter++;
            }
            if (!mapCodes[counter.toString()]) {
                break;
            }
        }
        //let data = await getData(counter, hintCounter);
        if (hintCounter < 3) {
            hintCounter++;
        } else {
            hintCounter = 1;
        }
        //return data;
    }
    return (
        <div className={"button-container"}>

            <button className="button" onClick={() => {
                setButtonPopup(true);
                hintText();
            }
            }
            >Show Hint</button>
            <button  className="button" onClick={() => playHint()} >Play hint</button>
            <button  className="button" onClick={() => pushToPlayerPage()} >Return</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h4>You requested hint {hintCounter} of 3.</h4>
                <h5>{message}</h5>
            </Popup>

        </div>
    )
}

export default HintRevealPage;