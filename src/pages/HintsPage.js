import React  from "react";
import { getHintsForGameID } from "../api/Mock.js"
import { useParams } from "react-router-dom";

const HintsPage = () => {
    const { gameId } = useParams();
    console.log(gameId)
  return (
    <div>
    <h1>Game ID: {gameId}</h1>
    <h1>Hints</h1>
    <ul>
      {getHintsForGameID(parseInt(gameId)).map((hint) => (
        <li key={hint.num}>{hint.text}</li>
      ))}
    </ul>
    </div>
  );
};
export default HintsPage;
