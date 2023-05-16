const CurrentGameTile = ({ name, numOfPlayers, Stage, endTimestamp}) => {
    return (
      <div className="game-tile">
        Name: {name}
        <br />
        Number of Players: {numOfPlayers}
        <br />
        Stage: {Stage}
        <br />
        Ends at: {endTimestamp}
        <br />
      </div>
    );
  };
  
  export default CurrentGameTile;
  