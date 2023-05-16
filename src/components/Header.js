import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-object">
        Home
      </Link>
      <Link to="/current" className="navbar-object">
        Current Games
      </Link>
      <Link to="/player/hints" className="navbar-object">
        Players Page
      </Link>

      {/* <span> | </span> */}
    </div>
  );
};

export default Header;
