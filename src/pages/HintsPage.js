import React from "react";
import { getHintsForGameID } from "../api/Mock.js";
import { useParams } from "react-router-dom";

const HintsPage = () => {
  const { gameId } = useParams();
  console.log(gameId);
  return (
    <div>
      <h1 className="title-hits-page">Game ID: {gameId}</h1>
      <section className="section-hints-page">
        <h1 className="subtitle-hints-page">Hints</h1>
        <ul>
          {getHintsForGameID(parseInt(gameId)).map((hint) => (
            <li key={hint.num}>{hint.text}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};
export default HintsPage;
