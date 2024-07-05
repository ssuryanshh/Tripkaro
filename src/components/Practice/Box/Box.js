import React from "react";
import "./Box.css";

function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function Box({ num }) {
  const handleClick = () => {
    const Color = isPrime(num) ? "blue" : (num % 2 === 0 ? "red" : "yellow");
    document.getElementById(`box-${num}`).style.backgroundColor = Color;
  };

  return (
    <div id={`box-${num}`} className="box" onClick={handleClick}>
      <h1>{num}</h1>
    </div>
  );
}

export default Box;


//for comditional rendering use  
// -condition && component
// -condition ? component : null