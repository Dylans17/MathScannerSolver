"use strict";
import dotenv from 'dotenv';
import express from 'express';
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import {approxEvaluate} from "./solver.js";
import cors from 'cors';
import parseMath from "./LatexMathParser/index.js"
import mathpix from './mathpix.js';

const app = express();
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);



// TODO: I'm probably going to at least change the location of these, if not the implementation
function getBase64(file, cb) {
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function() {
        cb(reader.result);
    }
    reader.onerror = function(error){
        console.log("error:", error)
    }
}

function fileUpload(file){
    try {
        getBase64(file, (base64string) => {
            console.log(base64string)
        })
    } catch(e) {
        console.log(e.message)
    }
}


//check to see if the user has configured their .env file
//TODO: change to warning only
const envTokens = ["MATHPIX_APP_ID", "MATHPIX_APP_KEY"];
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

app.use(express.json());

app.use(cors());

app.post("/equation", (req,res, next) => {
    let newData;
    try {
        let node = parseMath(req.body.equation);
        let result = approxEvaluate(node);
        newData =  {
            equation: req.body.equation,
            result: result
        }
        res.json(newData);
    } catch (e) {
        console.log("oops");
        let err = new Error(e);
        err.statusCode = 500;
        next(err);
    }

})

app.use(function(err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).json(err.message);
 });

// app.post('/input-picture', (req,res) => {

//     let imageBuffer = fileUpload(req.body.picture);
//     let equationFromMathPix = makeRequest(imageBuffer, "whatever")
//     let node = parseMath(equationFromMathPix);
//     let result = approxEvaluate(node);

//     const newData = {
//         equation: equationFromMathPix,
//         result: result
//     }

//     console.log(equationFromMathPix);
//     res.json(newData)
// })

app.listen(9000);
console.log("App listening on port 9000.");
