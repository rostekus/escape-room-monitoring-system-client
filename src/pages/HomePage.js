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

  function pushToPlayerPage() {
    history.push('/player/hints');
  }

  return (
    <div
    className="button-container"
    >
      <button  className="button" onClick={() => pushToPlayerPage()} >Start Game</button>
    </div>
  );
};
export default HomePage;
