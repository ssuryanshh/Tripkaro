import React from 'react';
import './AdventureCard.css';
import { Link } from 'react-router-dom';

function AdventureCard({ adventure }) {
  const {id,name, costPerHead, currency, image, duration, category } = adventure;
  return (
    <div className='adventure-cards'>
      <Link to={`/details/${id}`}>
      <div className='cards'>
        <img src={image} alt={name} />
        <div className='tag'>{category}</div>
        <div className='rate'>
          <b>{name}</b>
          <b>{currency} {costPerHead}</b>
        </div>
        <div className='time'>
          <b>Duration:</b>
          <b>{duration} Hours</b>
        </div>
      </div>
    </Link></div>
  );
}

export default AdventureCard;
