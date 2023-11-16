// "use client";
// import React from "react";
// import Two from "./coins/Two";
// import One from "./coins/One";
// import FiftyCents from "./coins/FiftyCents";
// import TwentyCents from "./coins/TwentyCents";
// import FiveCents from "./coins/FiveCents";



// const CoinSelector = () => {
//   const handleCoinSelection = (event, name) => {
//     if (event.target.checked) {
//       console.log(`${name} coin selected`);
//     }
//   };

//   return (
//     <div className="coinSelector">
//       <h2>Puedes usar una de estas monedas</h2>

//       <div className="coinsContainer">
//         <label htmlFor="twoEuro">
//           <input
//             type="radio"
//             id="twoEuro"
//             name="coins"
//             value="2"
//             hidden
//             onChange={(e) => handleCoinSelection(e, "Two Euro")}
//           />
//           <Two />
//         </label>

//         <label htmlFor="oneEuro">
//           <input
//             type="radio"
//             id="oneEuro"
//             name="coins"
//             value="1"
//             hidden
//             onChange={(e) => handleCoinSelection(e, "One Euro")}
//           />
//           <One />
//         </label>

//         <label htmlFor="fiftyCents">
//           <input
//             type="radio"
//             id="fiftyCents"
//             name="coins"
//             value="0.5"
//             hidden
//             onChange={(e) => handleCoinSelection(e, "Fifty Cents")}
//           />
//           <FiftyCents />
//         </label>

//         <label htmlFor="twentyCents">
//           <input
//             type="radio"
//             id="twentyCents"
//             name="coins"
//             value="0.20"
//             hidden
//             onChange={(e) => handleCoinSelection(e, "Twenty Cents")}
//           />
//           <TwentyCents />
//         </label>

//         <label htmlFor="fiveCents">
//           <input
//             type="radio"
//             id="fiveCents"
//             name="coins"
//             value="0.05"
//             hidden
//             onChange={(e) => handleCoinSelection(e, "Five Cents")}
//           />
//           <FiveCents />
//         </label>
//       </div>
//     </div>
//   );
// };

// export default CoinSelector;

// CoinSelector.js
import React from "react";
import Two from "./coins/Two";
import One from "./coins/One";
import FiftyCents from "./coins/FiftyCents";
import TwentyCents from "./coins/TwentyCents";
import FiveCents from "./coins/FiveCents";

const CoinSelector = ({ selectedCoin, handleCoinSelection }) => {
  return (
    <div className="coinSelector">
      <h2>Puedes usar una de estas monedas</h2>
      <div className="coinsContainer">
        <label htmlFor="twoEuro">
          <input
            type="radio"
            id="twoEuro"
            name="coins"
            value="2"
            hidden
            onChange={(e) => handleCoinSelection(e, e.target.value, e.target.id)}
            defaultChecked={selectedCoin === "2"} // Set defaultChecked for 2 Euro coin
          />
          <Two />
        </label>

        <label htmlFor="oneEuro">
          <input
            type="radio"
            id="oneEuro"
            name="coins"
            value="1"
            hidden
            onChange={(e) => handleCoinSelection(e, e.target.value, e.target.id)}
          />
          <One />
        </label>

        <label htmlFor="fiftyCents">
          <input
            type="radio"
            id="fiftyCents"
            name="coins"
            value="0.5"
            hidden
            onChange={(e) => handleCoinSelection(e, e.target.value, e.target.id)}
          />
          <FiftyCents />
        </label>

        <label htmlFor="twentyCents">
          <input
            type="radio"
            id="twentyCents"
            name="coins"
            value="0.20"
            hidden
            onChange={(e) => handleCoinSelection(e, e.target.value, e.target.id)}
          />
          <TwentyCents />
        </label>

        <label htmlFor="fiveCents">
          <input
            type="radio"
            id="fiveCents"
            name="coins"
            value="0.05"
            hidden
            onChange={(e) => handleCoinSelection(e, e.target.value, e.target.id)}
          />
          <FiveCents />
        </label>
      </div>
    </div>
  );
};

export default CoinSelector;

