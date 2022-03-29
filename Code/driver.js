import fs from "fs/promises";
import parseMath from "./LatexMathParser/index.js"
import dotenv from "dotenv"
import mathpix from "./mathpix.js";
import imageHash from "./image-hash.js";

async function test(filename) {
    let a = await fs.readFile(filename);
    return mathpix.makeRequest(a, filename);
}

async function test2(filename) {
  let a = await fs.readFile(filename);
  let h = await imageHash(a);
  console.log(h);
}
