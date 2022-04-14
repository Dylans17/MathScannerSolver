import React, { useState, useEffect } from "react";
import "./type.styles.css";
import { useNavigate } from "react-router-dom";
import { addStyles, EditableMathField } from "react-mathquill";
import axios from "axios";
addStyles();

function TypeEquation(props) {
  let navigate = useNavigate();
  //const [latex, setLatex] = useState("");
  let result = 0;
  const [errorMessage, setErrorMessage] = useState("");
  const initialEquation = [
    {
      equation: "",
    },
  ];

  const [equations, setEquations] = useState(initialEquation);

  function post() {
    axios
      .post("/equations", { equations: equations })
      .then((response) => {
        navigate("/result", { state: { equations: response.data } });
      })
      .catch((e) => {
        setErrorMessage(e.response.data);
      });
  }
  useEffect(() => {}, [errorMessage]);

  const handleAddInput = () => {
    setEquations([...equations, { equation: "" }]);
  };

  const handleChange = (index, mathField) => {
    const value = mathField.latex();
    const list = [...equations];
    list[index] = value;
    setEquations(list);
  };

  const handleRemoveInput = (index) => {
    const rows = [...equations];
    rows.splice(index, 1);
    setEquations(rows);
  };

  return (
    <div className="type-section">
      <section className="first-block-type-equation">
        <h3 className="type-title"> Type your equation below </h3>
        {equations.map((data, i) => {
          return (
            <div className="inputs__wrapper" key={i}>
              <EditableMathField
                className="editor"
                style={{
                  padding: "10px 25px",
                  borderRadius: "5px",
                }}
                latex={""}
                onChange={(mathField) => handleChange(i, mathField)}
              />
              {equations.length !== 1 ? (
                <button
                  className="button__remove__input"
                  onClick={handleRemoveInput}
                >
                  {" "}
                  x{" "}
                </button>
              ) : (
                ""
              )}
            </div>
          );
        })}
        {/*<EditableMathField
          className="editor"
          style={{
            padding: "10px 25px",
            borderRadius: "5px",
          }}
          latex={latex}
          onChange={(mathField) => {
            setLatex(mathField.latex());
          }}
        />*/}
        <p className="error__message">{errorMessage}</p>
        <div className="buttons__type__wrapper">
          <button className="add-another-equation button"onClick={handleAddInput}>Add Another Equation</button>
          <button
            className="submit-type-equation button"
            onClick={(e) => post()}
          >
            Submit
          </button>
        </div>
      </section>
    </div>
  );
}

export default TypeEquation;
