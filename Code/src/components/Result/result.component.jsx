import React from "react";
import "./result.styles.css";

function Result() {
  
  return (
    <section className="result-box">
      <div className="equation-container">
        <p id="equation-text">2x+6x+8x+10=0</p>
      </div>
      <div className="result-container">
      <h2>Result</h2>
        <p id="result-text">x=-0.625</p>
      </div>
      <div className="steps-container">
      <button className="button-steps">Steps</button>
      </div>
    </section>
  );
}

export default Result;
