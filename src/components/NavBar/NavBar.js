import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
function NavBar() {
  return (
    <div className="navbar-container">
      <div>
        <span>
          <Link to="/">TRIP KARO</Link>
        </span>
      </div>
      <div>
        <span>
          <Link to="/reservation">RESERVATION</Link>
        </span>
      </div>
    </div>
  );
}

export default NavBar;
