import React from 'react'
import getHints from '../components/Hints'
const HomePage = () => {

let getHints = (gameId) => {
    const hints = [
        {
            "gameId": 1,
            "text": "Open the door",
            "num" :1,
        },
        {
        
            "gameId": 1,
            "text": "Open the door",
            "num" :1,
    
        },
        {
            "gameId": 2,
            "text": "Open the door",
            "num" :1,
        },
        {
        
            "gameId": 2,
            "text": "Open the door",
            "num" :1,
    
        },
    ]
    
    return hints.filter(hint => hint.gameId === gameId);
}

    let games = [
        {   "id": 0,
            "name": "Escape Room Game",
            "startTimestamp": 1649347200000,
            "endTimestamp": 1649350800000
        },
        {   
            "id": 1,
            "name": "Escape Room Game 1",
            "startTimestamp": 1649347200000,
            "endTimestamp": 1649350800000
        },
    ]
    console.log(getHints(1))
    return (
        <div>


            <ul>
                {games.map(game => (
                    <li key={game.id} >{game.name} {game.startTimestamp}</li>
                ))}
            </ul>
            <ul>
                {getHints(1).map(hint => (
                    <li key={hint.num} >{hint.text}</li>
                ))}
            </ul>
        
            
           
           
        </div>
    )
}

export default HomePage