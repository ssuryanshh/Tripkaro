// src/Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ id, city, description, image }) => {

  return (
    <Link to = {`/adventure/${id}`}>
    <div className="city_card">
      <img className="city_img" src={image} alt={`${id}_city`} />
      <div className="content">
        <h3 className="city_name">{city}</h3>
        <p className="city_no_of_places">{description}</p>
      </div>
    </div>
    </Link>
  );
};

export default Card;
