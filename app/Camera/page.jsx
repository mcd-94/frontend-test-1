"use client";

import React, { useEffect, useRef } from "react";

const CameraPage = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Function to access the user's camera and stream the video
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
      startCamera(); // Call the function to start the camera when the component mounts
    } else {
      console.error("getUserMedia is not supported in this browser.");
    }

    // Function to stop the camera when the component unmounts
    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const tracks = videoRef.current.srcObject.getTracks();
        tracks.forEach((track) => track.stop());
      }
    };
  }, []);

  return (
    <div>
      <h1>Camera View</h1>
      <video ref={videoRef} autoPlay playsInline />
    </div>
  );
};

export default CameraPage;
