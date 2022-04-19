import React, { useState, useEffect } from "react";
import "./result.styles.css";
import axios from "axios";
import { addStyles, StaticMathField, EditableMathField } from "react-mathquill";
import { useLocation } from "react-router-dom";
import editIcon from "../../images/edit-icon.svg";

addStyles();

function Result() {
  let location = useLocation();

  const resultEquations = location.state.data.equations;
  const resultResults = location.state.data.results;

  function createResultsArray() {
    const resultArray = [];
    for (let i = 0; i < resultEquations.length; i++) {
      resultArray.push({
        equation: resultEquations[i],
        result: resultResults[i],
      });
    }
    return resultArray;
  }

  return (
    <section className="result-box">
      {createResultsArray().map((data, i) => {
        return (
          <div className="result__wrapper" key={i}>
            <div className="equation__wrapper">
              <StaticMathField id="equation-text">
                {data.equation}
              </StaticMathField>
            </div>
            <h2>Result: </h2>
            <p id="result-text">{data.result}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Result;
