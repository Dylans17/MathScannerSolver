import React from "react";
import "./drop-zone.styles.css";
import Dropzone from "react-dropzone";
import cloud from '../../images/cloud.svg';
import uploaded from '../../images/uploaded.svg';
import { useNavigate  } from "react-router-dom";
import axios from 'axios';

function UploadPicture() {
  let navigate = useNavigate();
  let result = 0;
  let equation = 0;
  
  async function onAcceptedDrop(acceptedFile) {
    console.log(acceptedFile[0]);
    axios
      .post("/input-picture", { picture: acceptedFile[0] })
      .then((response) => {
        console.log(response);
        result= response.data.result;
        equation= response.data.equation;     
        navigate("/result", {state: {result: result, equation: equation}}) 
      })
      .catch(console.log("error posting"));
  }
  return (
    <div className="dropzone-section">
      <Dropzone
        minSize={1}
        maxSize={5000000}
        noKeyboard={true}
        accept="image/png, image/jpeg, image/pdf, image/tiff, image/webp"
        onDrop={(file) => {
          console.log(file);
        }}
        onDropAccepted={onAcceptedDrop}
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
