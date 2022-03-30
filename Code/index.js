"use strict";
import dotenv from 'dotenv'
import express from 'express';
import { fileURLToPath } from 'url'
import { dirname } from 'path'

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

app.use(express.static(__dirname + "/build"));

app.get('/*', function (req, res) {
  res.sendFile(__dirname + "/build/index.html");
});

app.listen(8080);
console.log("App listening on port 8080.");
