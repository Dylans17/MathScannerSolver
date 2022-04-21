import React, { useEffect, useState } from "react";
import "./picture_taken.styles.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function PictureTaken({ capturedImg }) {
  let navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");

  async function urltoFile(url, filename, mimeType) {
    return fetch(url)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], filename, { type: mimeType });
      });
  }  

  function post(image) {
    const formData = new FormData();
    formData.append('file', image);
    axios
      .post("/input-picture", formData)
      .then((response) => {
        console.log("Response inside fileupload: ", response.data);
        navigate("/result", { state: { data: response.data } });
      })
      .catch((e) => {
        setErrorMessage(e.response.data);
        console.log(e.response.data);
      });
  }

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
        <button
          className="button__next button__picture__taken"
          onClick={() => {
            urltoFile(capturedImg, "hello.jpeg", "image/jpeg")
            .then(function (file) {
              post(file);
            });            
          }}
        >
          Next
        </button>
        <p className="error__message">{errorMessage}</p>
      </div>
    </>
  );
}
