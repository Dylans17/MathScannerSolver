import React, { useEffect, useState } from "react";
import "./pics_uploaded.styles.css";
import { useNavigate, useLocation } from "react-router-dom";
import { addStyles, StaticMathField, EditableMathField } from "react-mathquill";
import editIcon from "../../../images/edit-icon.svg";
import axios from 'axios';

addStyles();

function PicsUploaded() {
  let navigate = useNavigate();
  let location = useLocation();
  const [files, setFiles] = useState([]);
  const [equations, setEquations] = useState(location.state.data.equations);
  const [errorMessage, setErrorMessage] = useState("");
  const [editableList, setEditableList] = useState({});

  const makeEditable = (index, editable) => {
    const newEditableList = { ...editableList };
    newEditableList[index] = editable;
    setEditableList(newEditableList);
  };

  useEffect(() => {
    setFiles(
      location.state.image.map((file) =>
        Object.assign(file, {
          preview: URL.createObjectURL(file),
        })
      )
    );
  }, [location.state.image]);

  function isEquationEmpty(equations) {
    if(equations === "" || equations.length === 0) {
      return ["file"];
    }
    else {
      return equations;
    }
  }


  function post() {    
    axios
      .post("/equations", { equations: isEquationEmpty(equations) })
      .then((response) => {        
        console.log("Response: ",  response.data)
        navigate("/result", { state: { data: response.data } });
      })
      .catch((e) => {
        setErrorMessage(e.response.data);
      });
  }

  const createDataArray = () => {
    const dataArray = [];
    for (let i = 0; i < files.length; i++) {
      dataArray.push({
        image: files[i],
        equation: equations[i],
      });
    }
    return dataArray;
  };

  const handleChange = (index, mathField) => {
    const value = mathField.latex();
    const list = [...equations];
    list[index] = value;
    setEquations(list);
    console.log("Equations: ", equations)
  };

  function isEmptyOrFile(data){
    if(data === "" || data === "file" || data === " ") {
      return 'Content Not Found'
    } else {
      return data
    }
  }

  return (
    <div className="uploaded-pictures__container">
      {createDataArray().map((data, i) => {
        return (
          <>
            <div className="equation__pic__uploaded">
              {editableList[i] ? (
                <>
                  <EditableMathField
                    className="editor"
                    style={{
                      padding: "10px 25px",
                      borderRadius: "5px",
                    }}
                    latex={data.equation}
                    onChange={(mathField) => 
                      handleChange(i, mathField)
                    }
                  />
                  <button
                    className="button__set__equation"
                    onClick={() => makeEditable(i, false)}
                  >
                    Set
                  </button>
                </>
              ) : (
                <>
                  <StaticMathField
                    id="equation-text"                    
                  >
                    {isEmptyOrFile(data.equation)}
                  </StaticMathField>
                  <img
                    src={editIcon}
                    alt="edit"
                    className="edit__icon"
                    onClick={() => makeEditable(i, true)}
                  />
                </>
              )}
            </div>

            <div className="thumb__container">
              <div key={data.image.name} className="thumb__wrapper">
                <img
                  src={data.image.preview}
                  alt="thumb"
                  className="thumb__img"
                />
              </div>
            </div>
          </>
        );
      })}
      <button className="submit__uploaded_pictures button" onClick={() => post()}>Submit</button>
    </div>
  );
}

export default PicsUploaded;
