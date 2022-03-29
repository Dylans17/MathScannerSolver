import fs from "fs/promises";
import parseMath from "./LatexMathParser/index.js"
import dotenv from "dotenv"
import mathpix from "./mathpix.js";
import imageHash from "./image-hash.js";
dotenv.config()


async function test(filename) {
    let a = await fs.readFile(filename);
    return mathpix(a, filename);
}

test("./test-cases/2.png").then((response)=> {
  console.log(response);
});

async function test2(filename) {
  let a = await fs.readFile(filename);
  let h = await imageHash(a);
  console.log(h);
}
