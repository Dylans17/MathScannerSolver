import React, { useEffect, useRef, useState, useCallback } from "react";
import "./camera.styles.css";
import Webcam from "react-webcam";
import { useNavigate } from 'react-router-dom'

function Camera({setCapturedImg}) {
    const videoConstraints = {};

  const webcamRef = useRef(null);
  let navigate = useNavigate();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setCapturedImg(imageSrc);
    navigate("/picture-taken")
  }, [webcamRef, navigate, setCapturedImg]);
  
  return (
    <div className="camera-section">
      <Webcam width={"100%"} height={"100%"} ref={webcamRef} screenshotFormat="image/jpeg" videoConstraints={videoConstraints}/>
      <button onClick={capture} className="camera__button"></button>
    </div>
  );
}

export default Camera;
