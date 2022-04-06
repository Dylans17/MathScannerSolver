import React, { useState, useEffect } from "react";
import "./result.styles.css";
import axios from 'axios';
import { addStyles, StaticMathField } from "react-mathquill";
import { useLocation } from 'react-router-dom';

addStyles();

function Result() {
let location = useLocation();

  return (
    <section className="result-box">
      <div className="equation-container">
        <StaticMathField id="equation-text">{location.state.equation}</StaticMathField>
      </div>
      <div className="result-container">
      <h2>Result</h2>
        <p id="result-text">{location.state.result}</p>
      </div>
      <div className="steps-container">
      <button className="button-steps">Steps</button>
      </div>
    </section>
  );
}

export default Result;
