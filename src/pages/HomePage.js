import React from "react";
import { useState } from "react";
import { getGamesForUserID, getHintsForGameID, addHint } from "../api/Mock.js";
import { useHistory } from "react-router-dom";


import Tile from "../components/Tile.js";
const HomePage = () => {
  const [selectedGameID, setSelectedGameID] = useState(null);
  const history = useHistory();

  function pushToHintsPage(gameId) {
    console.log(gameId)
    history.push(`/games/${gameId}`);
  }

  return (
    <div
    className="container"
      
    >
      <div
      className="tiles"
      >
        {/* render clickable tiles for each game */}
        {getGamesForUserID("User").map((game) => (
          <Tile
            key={game.id}
            name={game.name}
            onClick={() => pushToHintsPage(game.id)} 
          />
        ))}
      </div>
    </div>
  );
};
export default HomePage;
