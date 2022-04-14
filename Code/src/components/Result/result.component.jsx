import React, { useState, useEffect } from "react";
import "./result.styles.css";
import axios from "axios";
import { addStyles, StaticMathField } from "react-mathquill";
import { useLocation } from "react-router-dom";

addStyles();

function Result() {
  let location = useLocation();

  const resultEquations = location.state.data.equations;
  const resultResults = location.state.data.results;
  

  function createResultsArray()  {    
    const resultArray = [];
    for(let i=0; i<resultEquations.length; i++) {
      resultArray.push({equation: resultEquations[i], result: resultResults[i]});
    }
    return resultArray;
  }

  return (
    <section className="result-box">
      {createResultsArray().map((data, i) => {
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
