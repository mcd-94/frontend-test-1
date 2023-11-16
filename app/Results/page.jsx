"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Results = () => {
  const [apiResults, setApiResults] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchApiResults = async () => {
      // Retrieve the stored API response from local storage
      const storedApiResponse = localStorage.getItem("apiResponse");

      // Parse the stored API response as JSON
      const parsedApiResponse = storedApiResponse
        ? JSON.parse(storedApiResponse)
        : null;

      // Set the API results in the component state
      setApiResults(parsedApiResponse);

      // Set loading state to false
      setIsLoading(false);
    };

    // Call the async function
    fetchApiResults();
  }, []);

  // Function to format the finger size to have a max of two digits
  const formatFingerSize = (size) => parseFloat(size).toFixed(1);

  return (
    <div className="resultsPage">
      <header className="resultsHeader">
        <h2>Esta es la talla recomendada:</h2>
        <p>¡Te deseamos una feliz compra!</p>
      </header>
      {isLoading ? (
        <p>Loading...</p>
      ) : apiResults ? (
        <ul>
          <li>
            <span>{formatFingerSize(apiResults.thumb)}</span>
            <p>Dedo Pulgar</p>
          </li>
          <li>
            <span>{formatFingerSize(apiResults.index)}</span>
            <p>Dedo Índice</p>
          </li>
          <li>
            <span>{formatFingerSize(apiResults.middle)}</span>
            <p>Dedo Corazón</p>
          </li>
          <li>
            <span>{formatFingerSize(apiResults.ring)}</span>
            <p>Dedo Anular</p>
          </li>
          <li>
            <span>{formatFingerSize(apiResults.pinky)}</span>
            <p>Dedo Meñique</p>
          </li>
        </ul>
      ) : (
        <p>No API results available</p>
      )}
      <div className="repetirMedicion">
        <Link href={"/"}>
          <button >Repetir medición</button>
        </Link>
      </div>
    </div>
  );
};

export default Results;
