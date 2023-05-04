import React, {useState, useEffect, useContext} from 'react'
import AuthContext from '../context/AuthContext'

const HomePage = () => {


    let games = [
        {id:1, name:'Game 1'},
        {id:2, name:'Game 2'},
    ]

    return (
        <div>
            <p>You are logged to the home page!</p>


            <ul>
                {games.map(game => (
                    <li key={game.id} >{game.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default HomePage