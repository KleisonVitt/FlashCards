// Card.jsx
import React from "react";

const Card = ({ cardText }) => {
  return (
    <div className="card">
      <p className="card-text">{cardText}</p>
    </div>
  );
};

export default Card;
