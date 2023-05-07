import React from "react";

const Tile = ({ name }) => {
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        height: "200px",
        borderRadius: "30px",
        padding: "20px",
        paddingLeft: "85px",
        paddingTop: "80px",
        fontFamily: "Helvetica",
        display: "flex",
        gap: "40px",
        margin: "10px 90px",
        flexBasis: "15%",
        boxSizing: "border-box",
      }}
    >
      {name}
    </div>
  );
};

export default Tile;
