import React, { useState } from "react";
import Checked from "./Checked";

const RingFit = () => {
  const [selectedFit, setSelectedFit] = useState(""); // State to track the selected radio button

  // Function to handle radio button selection
  const handleFitChange = (event) => {
    setSelectedFit(event.target.value);
  };

  return (
    <div className="ringFit">
      <p>¿Cómo te gusta llevar el anillo?</p>
      <form className="ringFitForm">
        <label className={selectedFit === "Ajustado" ? "selected" : ""}>
          Ajustado
          <input
            type="radio"
            name="ringFit"
            value="fitted"
            onChange={handleFitChange}
            style={{ display: "none" }}
          />
          {selectedFit === "fitted" ? <Checked /> : <input type="radio" />}
        </label>
        <label className={selectedFit === "Suelto" ? "selected" : ""}>
          Suelto
          <input
            type="radio"
            name="ringFit"
            value="loose"
            onChange={handleFitChange}
            style={{ display: "none" }}
          />
          {selectedFit === "loose" ? <Checked /> : <input type="radio" />}
        </label>
      </form>
    </div>
  );
};

export default RingFit;

