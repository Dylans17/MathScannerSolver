"use strict";
import dotenv from 'dotenv'
import express from 'express';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import parseMath from "./LatexMathParser/index.js"
import {approxEvaluate} from "./solver.js";

const app = express();
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

//check to see if the user has configured their .env file
const envTokens = ["DESMOS_KEY", "MATHPIX_APP_ID", "MATHPIX_APP_KEY"];
let envCorrect = true;
for (let token of envTokens) {
  if (!(token in process.env)) {
    console.error(`Token ${token} missing from .env`);
    envCorrect = false;
  }
  else if (process.env[token].includes("INSERT")) {
    console.error(`Token ${token} not yet defined in .env`);
    envCorrect = false;
  }
}
if (!envCorrect) {process.exit(1);}

//static files use build directory first
app.use(express.static(__dirname + "/build"));

//the user can request us to parse and solve an equation /equation
app.get("/equation", (req, res) => {
  console.log(req.query);
  let response = {};
  try {
    let equation = req.query.equation;
    let node = parseMath(equation);
    let result = approxEvaluate(node);
    response = {result: result};
  } catch (e) {
    console.log("We got an error!");
    console.log(e);
    response = {error: e};
  }
  res.json(response);
})

//other generic requests like /type, /result, ect. go to index.html
app.get("/*", (req, res) => {
  console.log("requested" + req.url);
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(8080);
console.log("App listening on port 8080.");
