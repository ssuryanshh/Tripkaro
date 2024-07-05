import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import "./CardContainer.css";

const CardContainer = ({ search }) => {
  const [cards, setCards] = useState([]);
  const [filteredCity, setFilteredCity] = useState([]);

  useEffect(() => {
    const API_ENDPOINT = "https://makemytrip-backend-w2d2.onrender.com/cities"
    fetch(API_ENDPOINT)
      .then((res) => res.json())
      .then((jsonData) => {
        setCards(jsonData);
      });
  }, []);

  useEffect(() => {
    if (search === "") {
      setFilteredCity(cards);
    } else {
      const filteredData = cards.filter((cityInfo) => {
        return cityInfo.city.toLowerCase().includes(search.toLowerCase());
      });
      setFilteredCity(filteredData);
    }
  }, [search, cards]);

  return (
    <div className="card-container">
      {filteredCity.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default CardContainer;
