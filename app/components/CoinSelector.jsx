"use client";
import React from "react";
import Two from "./coins/Two";
import One from "./coins/One";
import FiftyCents from "./coins/FiftyCents";
import TwentyCents from "./coins/TwentyCents";
import FiveCents from "./coins/FiveCents";
import HandContent from "./HandContent";


const CoinSelector = () => {
  const handleCoinSelection = (event, name) => {
    if (event.target.checked) {
      console.log(`${name} coin selected`);
    }
  };

  return (
    <div className="coinSelector">
      <h2>Puedes usar una de estas monedas</h2>

      <div className="coinsContainer">
        <label htmlFor="twoEuro">
          <input
            type="radio"
            id="twoEuro"
            name="coins"
            value="twoEuro"
            hidden
            onChange={(e) => handleCoinSelection(e, "Two Euro")}
          />
          <Two />
        </label>

        <label htmlFor="oneEuro">
          <input
            type="radio"
            id="oneEuro"
            name="coins"
            value="oneEuro"
            hidden
            onChange={(e) => handleCoinSelection(e, "One Euro")}
          />
          <One />
        </label>

        <label htmlFor="fiftyCents">
          <input
            type="radio"
            id="fiftyCents"
            name="coins"
            value="fiftyCents"
            hidden
            onChange={(e) => handleCoinSelection(e, "Fifty Cents")}
          />
          <FiftyCents />
        </label>

        <label htmlFor="twentyCents">
          <input
            type="radio"
            id="twentyCents"
            name="coins"
            value="twentyCents"
            hidden
            onChange={(e) => handleCoinSelection(e, "Twenty Cents")}
          />
          <TwentyCents />
        </label>

        <label htmlFor="fiveCents">
          <input
            type="radio"
            id="fiveCents"
            name="coins"
            value="fiveCents"
            hidden
            onChange={(e) => handleCoinSelection(e, "Five Cents")}
          />
          <FiveCents />
        </label>
      </div>
    </div>
  );
};

export default CoinSelector;
