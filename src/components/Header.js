import React from "react";
import { Link } from "react-router-dom";

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
