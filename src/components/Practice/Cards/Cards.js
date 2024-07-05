import React, { useState } from "react";
import "./Cards.css";

function Cards(props) {
    const {name, price} = props;
//   let quantity = 1;
    const [qty,setQty] =useState(1)
  const increment = () => {
   setQty(qty+1)
  };

  const decrement = () => {
    if (qty > 1) {
      setQty(qty-1)
    }
  };

  return (
    <div className="Cards-container">
      <div className="Card">
        <div className="P-detail">
          <h3>{name}</h3>
          <p> $ {price}</p>
        </div>
        <div className="P-qty">
          <h4>QTY</h4>
          <div className="qty">
            <p id="dec" onClick={decrement}>
              -
            </p>
            <p id="q">{qty}</p>
            <p id="inc" onClick={increment}>
              +
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Cards;
