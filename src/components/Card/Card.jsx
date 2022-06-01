import React from "react";
import "./Card.css";

const Card = ({ image, text }) => {
  return (
    <div className="cardContainer">
      <div className="mainCard">
        <div className="cardImg">
          <img src={image} alt="altImage" />
          <div className="cardText">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
