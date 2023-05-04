import React from 'react'
import { getGamesForUserID, getHintsForGameID, addHint } from '../api/Mock.js'
const HomePage = () => {

    // add hint to game with ID 1,the number of hint is 1
    //    addHint(1,"Open the door 3", 3);
   
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