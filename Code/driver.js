"use strict";
import fs from "fs/promises";
import parseMath from "./LatexMathParser/index.js"
import dotenv from "dotenv"
import mathpix, {makeRequest} from "./mathpix.js";
import imageHash from "./image-hash.js";
import readline from "readline";
import solver from "./solver.js";

//setup
dotenv.config()
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const driverFunctions = {
  "equation-parse": function (line) {
    let result = parseMath(line);
    console.log(result);
  },
  "equation-solve": function (line) {
    let node = parseMath(line);
    let [result] = solver(node);
    console.log(result);
  },
  "mathpix-plain-result": async function (line) {
    let img = await fs.readFile(line);
    let result = await makeRequest(img);
    console.log(result);
  },
  "mathpix-extract-equations": async function (line) {
    let img = await fs.readFile(line);
    let result = await mathpix(img, line);
    console.log(result);
  },
  "solve-image": async function (line) {
    let img = await fs.readFile(line);
    let equationList = await mathpix(img);
    let nodes = equationList.map(parseMath);
    let results = solver(...equationList);
    for (let i=0; i<results.length; i++) {
      console.log(equationList[i]);
      console.log(results[i]);
    }
  },
  "image-hash": async function (line) {
    let img = await fs.readFile(line);
    let hash = await imageHash(img);
    console.log(hash);
  }
}

const driverTypes = Object.keys(driverFunctions);
let driverId = process.argv[2];
driverId = parseInt(driverId)
if (isNaN(driverId))
  driverId = driverTypes.indexOf(driverId);
let isSelecting = false;

if (driverId == -1) {
  console.log("driverId not selected!");
  console.log("You can specify a driverId by passing an argument to driver.js");
  handleInput("");
}

rl.on("line", handleInput);

//this code for ui isn't good but it doesn't need to be
async function handleInput(line) {
  if (line.startsWith("switch") || isSelecting) {
    isSelecting = false;
    line = line.replace("switch", "").trim();
    driverId = parseInt(line)
    if (isNaN(driverId))
      driverId = driverTypes.indexOf(line);
    if (driverId == -1 || driverId >= driverTypes.length) {handleInput("")}
  }
  else if (driverId < driverTypes.length && driverId != -1) {
    try {
      await driverFunctions[driverTypes[driverId]](line);
    }
    catch (e) {
      console.log(`Error: ${e}`);
    }
  }
  else {
    console.log("tip: You can change after selecting one by using \"switch #\"");
    console.log("Select one of the following:");
    for (let i = 0; i<driverTypes.length; i++) {
      console.log(`[${i}] ${driverTypes[i]}`);
    }
    process.stdout.write("Selection: ");
    isSelecting = true;
  }
}
