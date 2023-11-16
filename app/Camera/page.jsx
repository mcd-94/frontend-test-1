"use client";

// import React, { useEffect, useRef, useState } from "react";

// const CameraPage = () => {
//   const videoRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [isVideoVisible, setIsVideoVisible] = useState(true);

//   useEffect(() => {
//     const startCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//         });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (error) {
//         console.error("Error accessing the camera:", error);
//       }
//     };

//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//       startCamera();
//     } else {
//       console.error("getUserMedia is not supported in this browser.");
//     }

//     return () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         const tracks = videoRef.current.srcObject.getTracks();
//         tracks.forEach((track) => track.stop());
//       }
//     };
//   }, []);

//   const handleCapture = () => {
//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");

//     // Set the canvas dimensions to match the video stream
//     canvas.width = videoRef.current.videoWidth;
//     canvas.height = videoRef.current.videoHeight;

//     // Draw the current video frame onto the canvas
//     context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//     // Convert the canvas content to a data URL (base64-encoded string)
//     const imageDataUrl = canvas.toDataURL("image/png");

//     // Save the data URL in local storage
//     localStorage.setItem("capturedImage", imageDataUrl);

//     // Set the captured image in the component state
//     setCapturedImage(imageDataUrl);

//     // Hide the video by setting isVideoVisible to false
//     setIsVideoVisible(false);
//   };

//   const handleConfirm = () => {
//     // Save the captured image string to local storage or send it to the API
//     // ...

//     // For demonstration, clearing local storage here
//     localStorage.removeItem("capturedImage");
//   };

//   const handleTryAgain = async () => {
//     // Clear the captured image and show the video again
//     setCapturedImage(null);
//     setIsVideoVisible(true);

//     // Restart the camera stream
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//     if (videoRef.current) {
//       videoRef.current.srcObject = stream;
//     }
//   };

//   return (
//     <div className="cameraPage">

//         {isVideoVisible && (
//           <div>
//             <div>
//               <video ref={videoRef} autoPlay playsInline className="capturedImage"/>
//             </div>
//             <div className="cameraButtons">
//               <button onClick={handleCapture} className="shooterButton cameraButtons">
//                 Tomar foto
//               </button>
//             </div>
//           </div>
//         )}

//       {capturedImage && (
//         <div>
//           <div>
//             <img src={capturedImage} alt="Captured" className="capturedImage" />
//           </div>
//           <div className="cameraButtons">
//             <button onClick={handleConfirm}>Confirmar</button>
//             <button onClick={handleTryAgain}>Nueva foto</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CameraPage;
// import React, { useEffect, useRef, useState } from "react";

// // Function to generate a random string of a specified length
// const generateRandomApiKey = (length) => {
//   const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let apiKey = "";
//   for (let i = 0; i < length; i++) {
//     apiKey += characters.charAt(Math.floor(Math.random() * characters.length));
//   }
//   return apiKey;
// };

// const CameraPage = () => {
//   const videoRef = useRef(null);
//   const [capturedImage, setCapturedImage] = useState(null);
//   const [isVideoVisible, setIsVideoVisible] = useState(true);
//   const [apiResponse, setApiResponse] = useState(null);

//   useEffect(() => {
//     const startCamera = async () => {
//       try {
//         const stream = await navigator.mediaDevices.getUserMedia({
//           video: true,
//         });
//         if (videoRef.current) {
//           videoRef.current.srcObject = stream;
//         }
//       } catch (error) {
//         console.error("Error accessing the camera:", error);
//       }
//     };

//     if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//       startCamera();
//     } else {
//       console.error("getUserMedia is not supported in this browser.");
//     }

//     return () => {
//       if (videoRef.current && videoRef.current.srcObject) {
//         const tracks = videoRef.current.srcObject.getTracks();
//         tracks.forEach((track) => track.stop());
//       }
//     };
//   }, []);

//   const handleCapture = () => {
//     const canvas = document.createElement("canvas");
//     const context = canvas.getContext("2d");

//     // Set the canvas dimensions to match the video stream
//     canvas.width = videoRef.current.videoWidth;
//     canvas.height = videoRef.current.videoHeight;

//     // Draw the current video frame onto the canvas
//     context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

//     // Convert the canvas content to a data URL (base64-encoded string)
//     const imageDataUrl = canvas.toDataURL("image/png");

//     // Save the data URL in local storage
//     localStorage.setItem("capturedImage", imageDataUrl);

//     // Set the captured image in the component state
//     setCapturedImage(imageDataUrl);

//     // Hide the video by setting isVideoVisible to false
//     setIsVideoVisible(false);
//   };

//   const handleConfirm = async () => {
//     // Get the data from local storage
//     const selectedCoin = localStorage.getItem("selectedCoin");
//     const selectedFit = localStorage.getItem("selectedFit");
//     const capturedImage = localStorage.getItem("capturedImage");

//     // Check if the required data is available
//     if (selectedCoin && selectedFit && capturedImage) {
//       try {
//         // Generate a random API key
//         const randomApiKey = generateRandomApiKey(10);

//         // Make a POST request to the API
//         const response = await fetch(
//           `https://test.aitaca.io/Aitaca/1.0.0/calculator?coin=${selectedCoin}&fitting=${selectedFit}`,
//           {
//             method: "POST",
//             headers: {
//               "accept": "application/json",
//               "x-api-key": randomApiKey,
//               "Content-Type": "application/json",
//             },
//             body: JSON.stringify({
//               hand: capturedImage,
//             }),
//           }
//         );

//         // Check if the request was successful (status code 2xx)
//         if (response.ok) {
//           const responseData = await response.json();
//           console.log("Data successfully sent to the API", responseData);

//           // Set the API response in the component state
//           setApiResponse(responseData);

//           // For demonstration, clearing local storage here
//           localStorage.removeItem("selectedCoin");
//           localStorage.removeItem("selectedFit");
//           localStorage.removeItem("capturedImage");
//         } else {
//           console.error("Failed to send data to the API");
//         }
//       } catch (error) {
//         console.error("Error sending data to the API:", error);
//       }
//     } else {
//       console.warn("Some data is missing in local storage");
//     }
//   };

//   const handleTryAgain = async () => {
//     // Clear the captured image and show the video again
//     setCapturedImage(null);
//     setIsVideoVisible(true);

//     // Restart the camera stream
//     const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//     if (videoRef.current) {
//       videoRef.current.srcObject = stream;
//     }
//   };

//   return (
//     <div className="cameraPage">
//       {isVideoVisible && (
//         <div>
//           <div>
//             <video ref={videoRef} autoPlay playsInline className="capturedImage" />
//           </div>
//           <div className="cameraButtons">
//             <button onClick={handleCapture} className="shooterButton cameraButtons">
//               Tomar foto
//             </button>
//           </div>
//         </div>
//       )}

//       {capturedImage && (
//         <div>
//           <div>
//             <img src={capturedImage} alt="Captured" className="capturedImage" />
//           </div>
//           <div className="cameraButtons">
//             <button onClick={handleConfirm}>Confirmar</button>
//             <button onClick={handleTryAgain}>Nueva foto</button>
//           </div>
//         </div>
//       )}

//       {apiResponse && (
//         <div>
//           <h3>API Response:</h3>
//           <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CameraPage;

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Function to generate a random string of a specified length
const generateRandomApiKey = (length) => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let apiKey = "";
  for (let i = 0; i < length; i++) {
    apiKey += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return apiKey;
};

const CameraPage = () => {
  const videoRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [isVideoVisible, setIsVideoVisible] = useState(true);
  const [apiResponse, setApiResponse] = useState(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (error) {
        console.error("Error accessing the camera:", error);
      }
    };

    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      startCamera();
    } else {
      console.error("getUserMedia is not supported in this browser.");
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  const handleCapture = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    // Set the canvas dimensions to match the video stream
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;

    // Draw the current video frame onto the canvas
    context.drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);

    // Convert the canvas content to a data URL (base64-encoded string)
    const imageDataUrl = canvas.toDataURL("image/png");

    // Save the data URL in local storage
    localStorage.setItem("capturedImage", imageDataUrl);

    // Set the captured image in the component state
    setCapturedImage(imageDataUrl);

    // Hide the video by setting isVideoVisible to false
    setIsVideoVisible(false);
  };

  const handleConfirm = async () => {
    // Get the data from local storage
    const selectedCoin = localStorage.getItem("selectedCoin");
    const selectedFit = localStorage.getItem("selectedFit");
    const capturedImage = localStorage.getItem("capturedImage");

    // Check if the required data is available
    if (selectedCoin && selectedFit && capturedImage) {
      try {
        // Generate a random API key
        const randomApiKey = generateRandomApiKey(10);

        // Make a POST request to the API
        const response = await fetch(
          `https://test.aitaca.io/Aitaca/1.0.0/calculator?coin=${selectedCoin}&fitting=${selectedFit}`,
          {
            method: "POST",
            headers: {
              accept: "application/json",
              "x-api-key": randomApiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              hand: capturedImage,
            }),
          }
        );

        // Check if the request was successful (status code 2xx)
        if (response.ok) {
          const responseData = await response.json();
          console.log("Data successfully sent to the API", responseData);

          // Set the API response in the component state
          setApiResponse(responseData);

          // Save the API response in local storage
          localStorage.setItem("apiResponse", JSON.stringify(responseData));

          // For demonstration, clearing local storage here
          localStorage.removeItem("selectedCoin");
          localStorage.removeItem("selectedFit");
          localStorage.removeItem("capturedImage");
        } else {
          console.error("Failed to send data to the API");
        }
      } catch (error) {
        console.error("Error sending data to the API:", error);
      }
    } else {
      console.warn("Some data is missing in local storage");
    }
  };

  const handleTryAgain = async () => {
    // Clear the captured image and show the video again
    setCapturedImage(null);
    setIsVideoVisible(true);

    // Restart the camera stream
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  };

  return (
    <div className="cameraPage">
      {isVideoVisible && (
        <div>
          <div>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="capturedImage"
            />
          </div>
          <div className="cameraButtons">
            <button
              onClick={handleCapture}
              className="shooterButton cameraButtons"
            >
              Tomar foto
            </button>
          </div>
        </div>
      )}

      {capturedImage && (
        <div>
          <div>
            <img src={capturedImage} alt="Captured" className="capturedImage" />
          </div>
          <div className="cameraButtons">
            <Link href={'/Results'}>
              <button onClick={handleConfirm}>Confirmar</button>
            </Link>
            <button onClick={handleTryAgain}>Nueva foto</button>
          </div>
        </div>
      )}

      {apiResponse && (
        <div>
          <h3>API Response:</h3>
          <pre>{JSON.stringify(apiResponse, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default CameraPage;
