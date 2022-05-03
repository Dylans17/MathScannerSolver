import React, { useState, useEffect } from "react";
import "./result.styles.css";
import axios from "axios";
import { addStyles, StaticMathField, EditableMathField } from "react-mathquill";
import { useLocation } from "react-router-dom";
import editIcon from "../../images/edit-icon.svg";

addStyles();

function Result2() {
  let location = useLocation();

  const resultEquations = location.state.data.equations;
  const resultResults = location.state.data.results;

  const [editableList, setEditableList] = useState({});
  const [newEquation, setNewEquation] = useState("");

  const makeEditable = (index, editable) => {
    const newEditableList = { ...editableList };
    newEditableList[index] = editable;
    setEditableList(newEditableList);
  };

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

  function handleSetClick (index, isEditable) {
    makeEditable(index, isEditable);
  }

  return (
    <section className="result-box">
      {createResultsArray().map((data, i) => {
        return (
          <div className="result__wrapper" key={i}>
            <div className="equation__wrapper">
              {editableList[i] ? (
                <>
                  <EditableMathField
                    className="editor"
                    style={{
                      padding: "10px 25px",
                      borderRadius: "5px",
                    }}
                    latex={data.equation}
                  />
                  <button className="button__set__equation" onClick={() => makeEditable(i, false)}>Set</button>
                </>
              ) : (
                <>
                  <StaticMathField id="equation-text">
                    {data.equation}
                  </StaticMathField>
                  <img
                    alt="edit"
                    src={editIcon}
                    onClick={() => makeEditable(i, true)}
                  />
                </>
              )}
            </div>
            <h2>Result: </h2>
            <p id="result-text">{data.result}</p>
          </div>
        );
      })}
    </section>
  );
}

export default Result2;
