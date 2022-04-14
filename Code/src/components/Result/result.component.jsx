import React, { useState, useEffect } from "react";
import "./result.styles.css";
import axios from "axios";
import { addStyles, StaticMathField } from "react-mathquill";
import { useLocation } from "react-router-dom";

addStyles();

function Result() {
  let location = useLocation();

  const resultArray = location.state.equations;

  return (
    <section className="result-box">
      {resultArray.map((data, i) => {
        return (
          <div className="result__wrapper" key={i}>
              <StaticMathField id="equation-text">
                {data.equation}
              </StaticMathField>
              <h2>Result: </h2>
              <p id="result-text">{data.result}</p>
          </div>
        );
      })}

      <div className="steps-container">
        <button className="button-steps">Steps</button>
      </div>
    </section>
  );
}

export default Result;
