"use strict";
import dotenv from 'dotenv';
import express from 'express';
import formidable from "express-formidable";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import solver from "./solver.js";
import parseMath from "./LatexMathParser/index.js";
import mathpix from './mathpix.js';
import fs from "fs/promises";
import cors from "cors";

const app = express();
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


//check to see if the user has configured their .env file
const envTokens = ["MATHPIX_APP_ID", "MATHPIX_APP_KEY"];
for (let token of envTokens) {
  if (!(token in process.env)) {
    console.log(`Warning: Token ${token} missing from .env`);
  }
  else if (process.env[token].includes("INSERT")) {
    console.log(`Warning: Token ${token} not yet defined in .env`);
  }
}

//static files use build directory first
app.use(express.static(__dirname + "/build"));

app.use(express.json());

app.use(cors());


function handleEquationResponse(equations, req, res) {
    let equationRoots = equations.map(str => {
      try {
        if (str instanceof Error) {return str;}
        return parseMath(str);
      }
      catch (e) {
        console.log(`String parsing error on ${str}:`);
        console.log(e);
        return new Error(e);
      }
    });
    //currently returning {equations: [], results: []} as used in frontend
    let result = {equations, results: solver(...equationRoots)};
    res.json(result);
  }

app.post("/equations", (req, res) => {
  handleEquationResponse(req.body.equations, req, res);
});

//add req.files and req.fields for forms
app.use(formidable());

app.post('/input-picture', async (req,res) => {
  let inputs = [];
  for (let filename in req.files) {
    let upload = req.files[filename];
    try {
      let file = await fs.readFile(upload.path);
      inputs.push(...await mathpix(file));
    }
    catch (e) {
      console.log(`Image Reading error:`);
      console.log(e);
      inputs.push(new Error(e));
    }
  }
  handleEquationResponse(inputs, req, res);
});

//other generic requests like /type, /result, ect. go to index.html
app.get("/*", (req, res) => {
  console.log("requested" + req.url);
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(9000);
console.log("App listening on port 9000.");
