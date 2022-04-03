import React, { useState, useEffect } from "react";
import "./type.styles.css";
import { useNavigate } from "react-router-dom";
import { addStyles, EditableMathField, StaticMathField } from "react-mathquill";
import axios from "axios";

addStyles();

function TypeEquation(props) {
  let navigate = useNavigate();
  const [latex, setLatex] = useState("");

  useEffect(()=> {
    console.log(latex)
  }, [latex])

  return (
    <div className="type-section">
      <section className="first-block-type-equation">
        <h3 className="type-title"> Type your equation below </h3>
        <EditableMathField className="editor"
        style={{
          padding: "10px 25px",
          borderRadius: "5px"
        }}
        latex={latex}
        onChange={(mathField) => {
          setLatex(mathField.latex()); //what does this do? Does it set the text below? How does it work?
        }}
      />
      {latex}
        <button
          className="submit-type-equation button"
          onClick={(e) => {
            //I have no clue how to read the values from React so I'm just prompting for now.
            axios.get("./equation",{params: {equation: prompt("Enter an equation:\nThis is really bad UI haha")}})
              .then(e=>{console.log(e)});
            return navigate("/result");
          }}
        >
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
