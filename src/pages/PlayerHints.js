import React from "react";
import {useHistory} from "react-router-dom";

const PlayerHints = () => {
  const history = useHistory();

  function pushToTaskCodePage() {
    history.push('/player/hints/codes');
  }

  function pushToHintRevealPage() {
    history.push('/player/hints/reveal');
  }

  const  gameId = 0;
  console.log(gameId);
  return (
    <div className="button-container">
    <button  className="button" onClick={() => pushToTaskCodePage()} >Register Task Code</button>
    <button  className="button" onClick={() => pushToHintRevealPage()} >Request Hint</button>
    </div>
  );
};
export default PlayerHints;
