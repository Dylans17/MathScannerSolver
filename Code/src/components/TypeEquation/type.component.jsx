import React, { useState, useEffect } from "react";
import "./type.styles.css";
import { useNavigate } from "react-router-dom";
import { addStyles, EditableMathField } from "react-mathquill";
import axios from "axios";
addStyles();


let equationId = 1;
function TypeEquation() {
  let navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const initialEquationState = [
    {equation: "", id: 0}
  ];
  const [equations, setEquations] = useState(initialEquationState);
  function post() {
    axios
      .post("/equations", { equations: equations.map(data => data.equation) })
      .then((response) => {
        console.log("Response: ",  response.data)
        navigate("/result", { state: { data: response.data } });
      })
      .catch((e) => {
        setErrorMessage(e.response.data);
      });
  }
  useEffect(() => {}, [errorMessage]);

  const handleAddInput = () => {
    setEquations([...equations, {equation: "", id: equationId++}]);
  };

  const handleChange = (index, mathField) => {
    const value = mathField.latex();
    const list = [...equations];
    list[index].equation = value;
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
            <div className="inputs__wrapper" key={data.id}>
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
                  onClick={() => handleRemoveInput(i)}
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
