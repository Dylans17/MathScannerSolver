let fs = require("fs/promises");
let mathpix = require("./mathpix.js");
require('dotenv').config()
async function test(filename) {
    let a = await fs.readFile(filename);
    return mathpix.makeRequest(a, filename);
}
