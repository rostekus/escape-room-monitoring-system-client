import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const HomePage = () => {
  const [selectedGameID, setSelectedGameID] = useState(null);
  const history = useHistory();

  function pushToHintsPage(gameId) {
    console.log(gameId)
    history.push(`/games/${gameId}`);
  }

  function pushToSettingsPage() {
    history.push(`/player/settings`);
  }

  function pushToPlayerPage() {
    history.push('/player/hints');
  }

  return (
    <div
    className="button-container"
    >
      <button  className="button" onClick={() => pushToPlayerPage()} >Start Game</button>
      <button className={"button"} onClick={() => pushToSettingsPage()}>Settings</button>
    </div>
  );
};
export default HomePage;
