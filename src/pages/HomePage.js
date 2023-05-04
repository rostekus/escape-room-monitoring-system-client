import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'

const HomePage = () => {


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

    return (
        <div>
            <p>You are logged to the home page!</p>


            <ul>
                {games.map(game => (
                    <li key={game.id} >{game.name} {game.startTimestamp}</li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage