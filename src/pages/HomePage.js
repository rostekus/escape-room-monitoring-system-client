import React from "react";
import { useState } from "react";
import { getGamesForUserID, getHintsForGameID, addHint } from "../api/Mock.js";
import Tile from "../components/Tile.js";
const HomePage = () => {
  const [selectedGameID, setSelectedGameID] = useState(null);

  function getGamesForUserID(userID) {
    // modify this function to return an array of objects that include both the game ID and the game name
    return [
      { id: 1, name: "Game 1" },
      { id: 2, name: "Game 2" },
      { id: 3, name: "Game 3" },
      { id: 4, name: "Game 4" },
      { id: 5, name: "Game 5" },
      { id: 6, name: "Game 6" },
    ];
  }

  function getHintsForGameID(gameID) {
    // modify this function to filter the hints based on the selected game ID
    return [
      { num: 1, text: "Hint 1 for Game 1" },
      { num: 2, text: "Hint 2 for Game 1" },
      { num: 3, text: "Hint 3 for Game 1" },
      { num: 1, text: "Hint 1 for Game 2" },
      { num: 2, text: "Hint 2 for Game 2" },
      { num: 1, text: "Hint 1 for Game 3" },
    ].filter((hint) => hint.gameID === gameID);
  }

  // add hint to game with ID 1,the number of hint is 1
  //    addHint(1,"Open the door 3", 3);

  //   return (
  // <div>
  //   {/* get games for userID=="User"*/}
  //   <ul>
  //             {getGamesForUserID("User").map(game => (
  //                 <li key={game.id} >{game.name} {game.startTimestamp}</li>

  //             ))}
  //         </ul>
  //   {/* get hints for gameID==1*/}
  //   <ul>
  //     {getHintsForGameID(1).map((hint) => (
  //       <li key={hint.num}>{hint.text}</li>
  //     ))}
  //   </ul>
  // </div>

  //     <div
  //       style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
  //     >
  //       {tiles.map((tile) => (
  //         <div
  //           key={tile.id}
  //           style={{
  //             flexBasis: "25%",
  //             margin: "10px",
  //             boxSizing: "border-box",
  //           }}
  //         >
  //           <Tile title={tile.title} />
  //         </div>
  //       ))}
  //       {/* get games for userID=="User"*/}
  //       <ul>
  //         {getGamesForUserID("User").map((game) => (
  //           <li key={game.id}>
  //             {game.name}
  //             {/* {game.startTimestamp} */}
  //           </li>
  //         ))}
  //       </ul>
  //       {/* get hints for gameID==1*/}
  //       <ul>
  //         {getHintsForGameID(1).map((hint) => (
  //           <li key={hint.num}>{hint.text}</li>
  //         ))}
  //       </ul>
  //     </div>
  //   );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {/* render clickable tiles for each game */}
        {getGamesForUserID("User").map((game) => (
          <Tile
            key={game.id}
            name={game.name}
            onClick={() => setSelectedGameID(game.id)}
          />
        ))}
      </div>
      {/* render hints for the selected game */}
      <ul>
        {getHintsForGameID(selectedGameID).map((hint) => (
          <li key={hint.num}>{hint.text}</li>
        ))}
      </ul>
    </div>
  );
};
export default HomePage;
