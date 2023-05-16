import React from "react";
import { gamesCurrent } from "../api/Mock.js";


import CurrentGameTile from "../components/CurrentGameTile.js";
const CurrentGamesPage = () => {
  return (
    <div
    className="container"
      
    >
      <div
      className="tiles"
      >
        {gamesCurrent.map((game) => (
          <CurrentGameTile
            key={game.id}
            name={game.name}
            numOfPlayers={game.numOfPlayers}    
            Stage={game.Stage}
            endTimestamp = {new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(game.endTimestamp)}
          />
        ))}
      </div>
    </div>
  );
};
export default CurrentGamesPage;
