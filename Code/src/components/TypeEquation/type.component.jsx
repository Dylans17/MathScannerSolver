import React, { useState, useEffect } from "react";
import "./type.styles.css";
import { useNavigate } from "react-router-dom";
import { addStyles, EditableMathField } from "react-mathquill";
import axios from "axios";
addStyles();

function TypeEquation(props) {
  let navigate = useNavigate();
  const [latex, setLatex] = useState("");
  let result = 0;
  const [errorMessage, setErrorMessage] = useState("")

 function post() {
    axios
      .post("/equation", { equation: latex })
      .then((response) => {
        result= response.data.result;
        navigate("/result", {state: {result: result, equation: latex}})
      })
      .catch((e) => {
        setErrorMessage(e.response.data);
      })
  }

  useEffect(() => {
  }, [errorMessage]);

  return (
    <div className="type-section">
      <section className="first-block-type-equation">
        <h3 className="type-title"> Type your equation below </h3>
        <EditableMathField
          className="editor"
          style={{
            padding: "10px 25px",
            borderRadius: "5px",
          }}
          latex={latex}
          onChange={(mathField) => {
            setLatex(mathField.latex());
          }}
        />
        <p className="error__message">{errorMessage}</p>
        <button className="submit-type-equation button" onClick={(e) => post()}>
          Submit
        </button>
      </section>
      <section className="examples-type-section">
        <p className="title-examples">Examples:</p>
      </section>
    </div>
  );
}

export default TypeEquation;
