"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "./components/Header";
import CoinSelector from "./components/CoinSelector";
import HandContent from "./components/HandContent";
import Footer from "./components/Footer";
import RingFit from "./components/RingFit";


const HomePage = () => {
  // Set default values for selectedCoin and selectedFit
  const [selectedCoin, setSelectedCoin] = useState("2"); // "2" for the 2 Euro coin
  const [selectedFit, setSelectedFit] = useState("fitted");

  const handleCoinSelection = (event, value, name) => {
    if (event.target.checked) {
      console.log(`${name} coin selected`);
      setSelectedCoin(value);
    }
  };

  const handleFitSelection = (fit) => {
    setSelectedFit(fit);
  };

  const handleNextPage = () => {
    // Store selectedCoin and selectedFit in local storage
    localStorage.setItem("selectedCoin", selectedCoin);
    localStorage.setItem("selectedFit", selectedFit);
  };

  return (
    <div className="page">
      <Header />
      <div className="content">
        <div className="coinsAndHand">
          <CoinSelector
            selectedCoin={selectedCoin}
            handleCoinSelection={handleCoinSelection}
          />
          <HandContent />
          <RingFit
            selectedFit={selectedFit}
            handleFitSelection={handleFitSelection}
          />
        </div>
        <div className="modalActions">
          <div className="buttonContainer">
            <Link href={"/"} className="volver">
              Volver
            </Link>
            <Link
              href={"/Camera"}
              className="siguiente"
              onClick={handleNextPage}
            >
              Siguiente
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
