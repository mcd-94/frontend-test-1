"use client";

import React, { useState } from "react";
import Checked from "./Checked";

const RingFit = ({ selectedFit, handleFitSelection }) => {
  return (
    <div className="ringFit">
      <p>¿Cómo te gusta llevar el anillo?</p>
      <form className="ringFitForm">
        <label className={selectedFit === "fitted" ? "selected" : ""}>
          Ajustado
          <input
            type="radio"
            name="ringFit"
            value="fitted"
            onChange={(e) => handleFitSelection(e.target.value)}
            defaultChecked={selectedFit === "fitted"} // Set defaultChecked for Ajustado option
            style={{ display: "none" }}
          />
          {selectedFit === "fitted" ? <Checked /> : <input type="radio" />}
        </label>

        <label className={selectedFit === "loose" ? "selected" : ""}>
          Suelto
          <input
            type="radio"
            name="ringFit"
            value="loose"
            onChange={(e) => handleFitSelection(e.target.value)}
            defaultChecked={selectedFit === "loose"} // Set defaultChecked for Suelto option
            style={{ display: "none" }}
          />
          {selectedFit === "loose" ? <Checked /> : <input type="radio" />}
        </label>
      </form>
    </div>
  );
};

export default RingFit;
