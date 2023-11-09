import React from "react";
import Hand from "./Hand";

const HandContent = () => {
  return (
    <div className="handForm">
      <p>Coloca la moneda en el centro de la palma de tu mano</p>
      <div className="handContainer">
        <Hand />
      </div>
    </div>
  );
};

export default HandContent;
