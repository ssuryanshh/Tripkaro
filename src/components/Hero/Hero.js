import React from "react";
import "./Hero.css";
function Hero({ setSearch }) {
  return (
    <div className="tripkaro">
      <div className="content">
        <h2>Welcome to TripKaro</h2>
        <br />
        <p>Explore the world with fantastic places to venture around.</p>
        <br />
        <input
          type="text"
          placeholder="Search a City"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        ></input>
      </div>
    </div>
  );
}

export default Hero;
