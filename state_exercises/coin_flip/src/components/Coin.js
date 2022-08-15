import React from "react";
import "./Coin.css";

const Coin = ({ binary, fade }) => {
  return (
    <div className="coin">
      {" "}
      <i className={`fa-solid fa-${binary} ${fade}`}></i>
    </div>
  );
};

export default Coin;
