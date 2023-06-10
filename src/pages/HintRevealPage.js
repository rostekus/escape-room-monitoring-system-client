import React, {useState} from "react";
import {getHintsForGameID} from "../api/Mock";
import {mapCodes} from "../api/Mock";
import {useHistory} from "react-router-dom";
import {Howl} from "howler";
import Popup from "../components/Popup";

let hintCounter = 0;

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
        const url = getHint().then((res) => {
                soundPlay(res.audioURL);
            }
        );
    }


    function pushToPlayerPage() {
        history.push('/player/hints');
    }

    async function getData(counter, hintCounter) {
        // let response = await fetch('http://127.0.0.1:8080/api/v1/games/hints/$(counter)/$(hintCounter)', {
        //     method: 'GET',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })
        // let data = await response.json()
        let data = {
            audioURL: "https://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg",
            text: "Run for your life"
        }
        return data;
    }
    async function hintText() {
        getHint().then((res) => {
            //console.log(res.text);
            setMessage(res.text);
        })
    }

    const hintURL = () => {
        getHint().then((res) => {
            return res.audioURL;
        });
    };
    async function getHint() {
        let counter = 1;
        for (let i = 0; i < getHintsForGameID(0).length; i++) {
            if (mapCodes[counter.toString()]) {
                counter++;
            }
            if (!mapCodes[counter.toString()]) {
                break;
            }
        }
        let data = await getData(counter, hintCounter);
        if (hintCounter < 2) {
            hintCounter++;
        } else {
            hintCounter = 0;
        }
        return data;
    }
    return (
        <div className={"button-container"}>
            <button className="button" onClick={() => {
                setButtonPopup(true);
                hintText();
            }
            }
            >Show Hint</button>
            <button  className="button" onClick={() => pushToPlayerPage()} >Return</button>
            <button  className="button" onClick={() => playHint()} >Play hint</button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h3>{message}</h3>
            </Popup>
        </div>
    )
}

export default HintRevealPage;