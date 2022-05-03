import React, { useEffect, useRef, useState, useCallback } from "react";
import "./camera.styles.css";
import Webcam from "react-webcam";
import { useNavigate } from "react-router-dom";
import switchIcon from "../../images/switch_camera.svg";

function Camera({ setCapturedImg }) {
  const [cameraFacing, setCameraFacing] = useState(true);
  const videoConstraints = {
    facingMode: cameraFacing ? "user" : {exact: "environment"}
  };

  const webcamRef = useRef(null);
  let navigate = useNavigate();

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc);
    setCapturedImg(imageSrc);
    navigate("/picture-taken");
  }, [webcamRef, navigate, setCapturedImg]);

  useEffect (()=> {
    console.log(cameraFacing);
  }, [cameraFacing])
  
  return (
    <div className="camera-section">
      <Webcam
        width={"100%"}
        height={"100%"}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
      />

      <div className="camera_icons">
      <div className="filler_camera"></div>
        <button onClick={capture} className="camera__button"></button>
        <img src={switchIcon} alt="switch camera" className="switch_camera" onClick={()=> setCameraFacing(!cameraFacing)}></img>
      </div>
    </div>
  );
}

export default Camera;
