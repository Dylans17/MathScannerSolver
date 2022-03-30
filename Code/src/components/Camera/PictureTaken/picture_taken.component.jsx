import React from "react";
import "./picture_taken.styles.css";
import { useNavigate } from "react-router-dom";

export default function PictureTaken({ capturedImg }) {
  let navigate = useNavigate();
  return (
    <>
      <img alt="captured" src={capturedImg} />
      <div className="buttons__picture__taken__container">
        <button
          className="button__retake__picture button__picture__taken"
          onClick={() => navigate("/camera")}
        >
          Take Another Picture
        </button>
        <button className="button__next button__picture__taken" onClick={() => navigate("/result")}>          
          Next
        </button>
      </div>
    </>
  );
}
