import "./styles.css";
import evaluatex from "evaluatex";
import React, { useState } from "react";
import { addStyles, EditableMathField } from "react-mathquill";

addStyles();

export default function App() {
  const [latex, setLatex] = useState<string>("");
  const [vars, setVars] = useState<{ name: string; value: number }[]>([]);

  let fn;
  try {
    fn = evaluatex(latex || "")(
      vars.reduce(
        (obj, item) => ({
          ...obj,
          [item.name]: item.value
        }),
        {}
      )
    );
  } catch (err) {
    fn =
      err.toString() ===
      "TypeError: Cannot read properties of undefined (reading 'toString')"
        ? ""
        : err.toString();
  }

  return (
    <div className="App">
      <h3>Formula:</h3>
      <EditableMathField
        style={{
          padding: "10px 25px"
        }}
        latex={latex}
        onChange={(mathField) => {
          setLatex(mathField.latex());
        }}
      />
      <h3>Variables:</h3>
      {vars?.map((v, idx) => (
        <>
          <input
            style={{
              padding: "10px 25px"
            }}
            value={v.name}
            onKeyUp={(e) => {
              const tmp = vars;
              if (e.key !== v.name && e.key >= "a" && e.key <= "z") {
                tmp[idx] = {
                  name: e.key,
                  value: v.value
                };
                setVars(tmp);
              }
            }}
          />
          <input
            style={{
              padding: "10px 25px"
            }}
            value={v.value}
            onChange={(e) => {
              let tmp = vars;
              tmp[idx] = {
                name: v.name,
                value: parseFloat(e.target.value)
              };
            }}
          />
          <br />
        </>
      ))}
      <button
        onClick={() => setVars((prevState) => [...prevState, "new value"])}
      >
        Add new variable
      </button>
      <h3>Result</h3>
      <h2>{fn}</h2>
    </div>
  );
}