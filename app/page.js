"use client";
import React from "react";
import Header from "./components/Header";
import CoinSelector from "./components/CoinSelector";
import HandContent from "./components/HandContent";
import Footer from "./components/Footer";
import RingFit from "./components/RingFit";
import ModalActions from "./components/ModalActions";

const HomePage = () => {
  const handleCoinSelection = (event, name) => {
    if (event.target.checked) {
      console.log(`${name} coin selected`);
    }
  };

  return (
    <div className="page">
      <Header />
      <div className="content">
        <div className="coinsAndHand">
          <CoinSelector />
          <HandContent />
          <RingFit />
        </div>
      </div>
      <ModalActions />
      <Footer />
    </div>
  );
};

export default HomePage;
