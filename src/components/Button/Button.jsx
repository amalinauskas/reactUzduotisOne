import React from "react";
import "./Button.css";

const Button = ({ children, type, color, handleClick }) => {
  const bold = {
    background: "#000",
    color: "#fff",
  };

  const slime = {
    background: "#fff",
    color: "#000",
  };

  return (
    <button
      style={color === "bold" ? bold : slime}
      type={type}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
