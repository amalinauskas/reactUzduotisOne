import React from "react";
import "./Hero.css";

const Hero = ({ title, subtitle }) => {
  return (
    <header>
      <div className="headerDiv">
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </header>
  );
};

export default Hero;
