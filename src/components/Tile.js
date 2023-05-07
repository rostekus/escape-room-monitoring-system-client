import React from "react";
import "../style.css"

const Tile = ({ name, onClick}) => {
  return (
    <div
    className="tile" onClick={onClick}

    >
      {name}
    </div>
  );
};

export default Tile;
