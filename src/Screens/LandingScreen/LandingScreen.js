import React from "react";
import { useState } from "react";
import CardContainer from "../../components/CardContainer/CardContainer";
import Hero from "../../components/Hero/Hero";
import "./LandingScreen.css";
function LandingScreen() {
  const [search, setSearch] = useState("");
  return (
    <div className="container">
      <Hero setSearch={setSearch} />
      <CardContainer search={search} />
    </div>
  );
}

export default LandingScreen;
