import React, { useState, useCallback, useEffect } from "react";
import "./drop-zone.styles.css";
import Dropzone, { useDropzone } from "react-dropzone";
import cloud from "../../images/cloud.svg";
import uploaded from "../../images/uploaded.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormData from "form-data";
import Loading from "../Loading/loading.component.jsx";
import { resolvesToJustOneViableAlt } from "antlr4/src/antlr4/atn/PredictionMode";

function UploadPicture() {
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);  

  function onDrop(acceptedFiles) {
    setLoading(true);
    console.log("Accepted files: ", acceptedFiles);
    const formData = new FormData();
    const files = acceptedFiles;
    files.forEach((file, i) => {
      formData.append(i, file);
    });    
    
    console.log("File:", files);
    console.log("form data: ", formData);
    axios
      .post("/input-picture", formData)
      .then((response) => {
        console.log("Response inside fileupload: ", response.data);
        setLoading(false);
        navigate("/uploaded-pictures", { state: { data: response.data, image: acceptedFiles} });
      })
      .catch((e) => {
        setLoading(false);
        console.log(e.response.data);
      });
  }

  return (
    <div className="dropzone-section">
      <Dropzone
        minSize={1}
        maxSize={5000000}
        noKeyboard={true}
        accept="image/png, image/jpeg, image/pdf, image/tiff, image/webp"
        //onDrop={onDrop}
        onDropAccepted={onDrop}
      >
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <section>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              <div className="box-input-image">
                {!isDragActive && <img alt="cloud" src={cloud} />}
                {isDragActive && !isDragReject && (
                  <img alt="uploaded" src={uploaded} />
                )}
                <p>Drag 'n' drop here, or click to select a file</p>
              </div>
            </div>
          </section>
        )}
      </Dropzone>
      {loading ? <Loading /> : ""}
    </div>
  );
}

export default UploadPicture;
