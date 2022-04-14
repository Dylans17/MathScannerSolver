import React, { useState, useCallback } from "react";
import "./drop-zone.styles.css";
import Dropzone, {useDropzone} from "react-dropzone";
import cloud from "../../images/cloud.svg";
import uploaded from "../../images/uploaded.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormData from "form-data";

function UploadPicture() {
 
  function onDrop (acceptedFiles){
    console.log(acceptedFiles);
    const formData = new FormData();
    const [file] = [...acceptedFiles];
    console.log("File:" , file)
    formData.append("file", file);
    axios
    .post('/input-picture', formData)
    .then((response) => {
      console.log("Response inside fileupload: ", JSON.stringify(response.data))
    })
    .catch((e) => {
      console.log(e.response.data);
    })           
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
    </div>
  );
}

export default UploadPicture;
