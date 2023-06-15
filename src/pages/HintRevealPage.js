import React, { useState, useEffect } from "react";
import {getHintsForGameID} from "../api/Mock";
import {mapCodes} from "../api/Mock";
import {useHistory} from "react-router-dom";
import {Howl} from "howler";
import Popup from "../components/Popup";

let hintCounter = 1;
let counter = 1;

const HintRevealPage = () => {
    const [buttonPopup, setButtonPopup] = useState(false);
    const [message, setMessage] = useState("");
    const [audioLink, setaudioLink] = useState("");
    const history = useHistory();
    const [isPlaying, setIsPlaying] = useState(false);
    const [loading, setLoading] = useState(true);





    function soundPlay(src) {
    if (isPlaying && !loading) {
        return; // Exit the function if sound is already playing
    }

  const sound = new Howl({
    src,
    html5: true,
    onplay: () => {
      setIsPlaying(true); // Update the state when the sound starts playing
    },
    onend: () => {
      setIsPlaying(false); // Update the state when the sound finishes playing
    }
  });

  sound.play();
}
    async function playHint() {
      
        soundPlay(audioLink);
        
    }

    useEffect(() => {
        getData(counter, hintCounter).then((res) => {
          // Perform any initial data processing or state updates here
          // For example, you can set the initial message state based on the fetched data
          setMessage(res.text);
          setaudioLink(res.audioUrl);
        });
      }, []); // Empty dependency array to ensure the effect runs only once on mount

      
    function pushToPlayerPage() {
        history.push('/player/hints');
    }

    async function getData(counter, hintCounter) {
        console.log("API call made");
        let response = await fetch(`https://escape-room-ai-backend-3en65w4ona-uc.a.run.app/api/v1/hint/${counter}/${hintCounter}`, {
        method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        let data = await response.json()
        return data;
    }
    async function hintText() {
        getHint();
     
    }



    async function getHint() {
        //let counter = 1;
        setLoading(true); // Set loading to true while waiting for data
      
        for (let i = 0; i < getHintsForGameID(0).length; i++) {
          if (mapCodes[counter.toString()]) {
            counter++;
          }
          if (!mapCodes[counter.toString()]) {
            break;
          }
        }
      
        if (hintCounter < 3) {
          hintCounter++;
        } else {
          hintCounter = 1;
        }
      
        getData(counter, hintCounter)
          .then((res) => {
            setMessage(res.text);
            setaudioLink(res.audioUrl);
          })
          .finally(() => {
            setLoading(false); // Set loading to false when data fetching is complete
          });
      }
      
    return (
             
        <div className={"button-container"}>
            
            <button className="button" onClick={() => {
                setButtonPopup(true);
                // hintText();
            }
            }
            >Show Hint</button>
            <button  className="button" onClick={() => playHint()} >Play hint</button>
            <button className="button" onClick={() => getHint() } >Next Hint  <br/> {hintCounter} of 3. 
         </button>
            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <h5>{message}</h5>
            </Popup>
            <button  className="button" onClick={() => pushToPlayerPage()} >Return</button>
            
        </div>
    )
}

export default HintRevealPage;