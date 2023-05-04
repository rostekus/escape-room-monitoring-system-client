import React from 'react'
const HomePage = () => {

let getGamesForUserID = (userId) => {
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
    return games;
}



let getHintsForGameID = (gameId) => {
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

   
   
    return (
        <div>

            {/* get games for userID=="User"*/}
            <ul>
                {getGamesForUserID("User").map(game => (
                    <li key={game.id} >{game.name} {game.startTimestamp}</li>
                ))}
            </ul>

            {/* get hints for gameID==1*/}
            <ul>
                {getHintsForGameID(1).map(hint => (
                    <li key={hint.num} >{hint.text}</li>
                ))}
            </ul>
        
            
           
           
        </div>
    )
}

export default HomePage