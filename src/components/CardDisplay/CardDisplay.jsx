import React from "react";
import "./CardDisplay.css";

const CardDisplay = ({ children }) => {
  return <section className="cardDisplayDiv">{children}</section>;
};

export default CardDisplay;
