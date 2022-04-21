"use strict";
import dotenv from 'dotenv';
import express from 'express';
import formidable from "express-formidable";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import {approxEvaluate} from "./solver.js";
import parseMath from "./LatexMathParser/index.js";
import mathpix from './mathpix.js';
import fs from "fs/promises";
import cors from "cors";

const app = express();
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


//check to see if the user has configured their .env file
//TODO: change to warning only
const envTokens = ["MATHPIX_APP_ID", "MATHPIX_APP_KEY"];
//let envCorrect = true;
for (let token of envTokens) {
  if (!(token in process.env)) {
    console.log(`Warning: Token ${token} missing from .env`);
    //envCorrect = false;
  }
  else if (process.env[token].includes("INSERT")) {
    console.log(`Warning: Token ${token} not yet defined in .env`);
    //envCorrect = false;
  }
}
//if (!envCorrect) {process.exit(1);}

//static files use build directory first
app.use(express.static(__dirname + "/build"));

app.use(express.json());

app.use(cors());

app.post("/equations", (req, res, next) => {
  const data = req.body.equations;
  let dataRes = {equations: [], results: []};
  try {
    for (let i = 0; i < data.length; i++) {
      let node = parseMath(data[i]);
      let result = approxEvaluate(node);
      dataRes.equations.push(data[i]);
      dataRes.results.push(result)
    }
    res.send(dataRes);
  } catch (e) {
    console.log("oops");
    let err = new Error(e);
    err.statusCode = 500;
    next(err);
  }
});

//add req.files and req.fields for forms
app.use(formidable());

app.post('/input-picture', async (req,res) => {
  //just a temporary setup. I'd be happy to send the output however the frontend needs like.
  //It's going to change no matter what for solving multiple equations.
  let response = {equations: [], results: []};
  for (let upload in req.files) {
    let file = await fs.readFile(req.files[upload].path);
    let equations = await mathpix(file);
    response.equations.push(...equations);
    for (let equation of equations) {
      let result;
      try {
        let root = parseMath(equation);
        result = approxEvaluate(root);
      } catch (e) {
        result = e;
      } finally {
        response.results.push(result);
      }
    }
  }
  res.json(response);
})

//other generic requests like /type, /result, ect. go to index.html
app.get("/*", (req, res) => {
  console.log("requested" + req.url);
  res.sendFile(__dirname + "/build/index.html");
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
  res.status(err.statusCode).json(err.message);
});

app.listen(9000);
console.log("App listening on port 9000.");
