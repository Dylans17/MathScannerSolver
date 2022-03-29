"use strict";
import dotenv from 'dotenv'
dotenv.config()

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

console.log("The app would now be running! (If anything were actually done)");
