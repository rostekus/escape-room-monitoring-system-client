import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Header = () => {
  return (
    <div className="navbar">
      <Link to="/" className="navbar-object">
        Home
      </Link>

      {/* <span> | </span> */}
    </div>
  );
};

export default Header;
