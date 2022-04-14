"use strict";
import axiosLib from "axios";
import FormData from "form-data";
import fs from "fs/promises";
import imageHash from "./image-hash.js";
import { LocalStorage } from "node-localstorage";

let axios = axiosLib.default;
let imageStorage = new LocalStorage("./image-results");


const mathpixOptions = JSON.stringify({
  //see more options at https://docs.mathpix.com/#request-parameters
  formats: ["text", "data"],
  //IDK if we want tsv but it could be nice.
  data_options: {include_latex: true, include_tsv: true, include_asciimath: true},
  //we want math
  numbers_default_to_math: true,
  include_line_data: true,
  // simplify format
  rm_spaces: true,
  rm_fonts: true,
});


export async function makeRequest(imageBuffer, imageName, verboseLogging=true) {
  /**
  * This function primarily focuses on sending the request and storing the result
  * I do not think that we should need to use this directly but it should always be used indirectly
  * param: imageBuffer - A file buffer (or equivalent) that contains the actual image file
  * param: imageName - optional argument to indicate the name of the file to mathpix.
  *                    This doesn't seem useful so it can be excluded (undefined)
  * param: verboseLogging - optional argument that determines if the info about whether mathpix
  *                         is called or not is logged to the console. Currently, it defaults to true
                            however, this behavior is likely to change in future releases.
  * result: the data object returned from mathpix.
  */
  let hash = await imageHash(imageBuffer);
  if (imageName == undefined) {
    //maybe we could actually get the file extension from imageBuffer
    imageName = `${hash}.image`;
  }
  let form = new FormData();
  form.append("options_json", mathpixOptions);
  form.append("file", imageBuffer, imageName);

  let storedResult = imageStorage.getItem(hash);
  if (storedResult != null) {
    if (verboseLogging)
      console.log("Using stored result for new image: " + hash);
    return JSON.parse(storedResult);
  }

  if (verboseLogging)
    console.log("Fetching result for new image from mathpix: " + hash);
  let response = await axios.post("https://api.mathpix.com/v3/text",
     form, {
       // Increased max size from 10 MB to 2 GB
       maxContentLength: 2**31,
       maxBodyLength: 2**31,
       headers: {...form.getHeaders(), app_id: 'team_eight2022_gmail_com_bdf47a_0b1f42', app_key: '6a3be6f1659243ef6c873b6368c768fefae1d7e6ada86db12d11a10b48091763'}
     });
  imageStorage.setItem(hash, JSON.stringify(response.data));
  return response.data;
}

export async function getAllEquations(mathpixRepsonse) {
  /**
  * This function returns a list (js array) of equations from a given mathpix response.
  *
  */
  if (mathpixRepsonse.error) {
    throw mathpixRepsonse.error;
  }
  let resultList = [];
  let data = mathpixRepsonse.data;
  let dataLen = mathpixRepsonse.data.length;
  for (let dataObj of mathpixRepsonse.data) {
    if (dataObj.type != "latex") { //need to find tsv example to see if we can include that
      continue;
    }
    for (let value of stripEquations(dataObj.value)) {
      resultList.push(value);
    }
  }
  return resultList;
}

function stripEquations(text) {
  if (text.includes("\\left\\{")) {
    if (!text.endsWith("\\right\\}") && !text.endsWith("\\right")) {
      throw "Equation contains left { but does not end with }." +
            "Use parenthesis for math operations";
    }
    let arr = text.split("\\left\\{");
    if (arr.length != 2) {
      throw "Unsuported nested {";
    }
    arr[1] = arr[arr.length-1].replace(/\\right(\\})?$/, "");
    text = arr.join("");
  }
  if (text.includes("\\begin{array}") && text.includes("\\end{array}")) {
    let arr = text.split(/\\(?:begin|end){array}/);
    if (arr.length != 3) {
      throw "Unsuported nested arrays";
    }
    let inner = arr[1];
    if(inner.includes("\\begin{aligned}")) {
      throw "Nesting of array and aligned not supported";
    }
    let regExMatch = inner.match(/{([lrc|]+)}(.*)$/);
    let numColumns = regExMatch[1].length;
    if (numColumns > 1) {
      //note this must be changed if you ever want to support matrices
      //if this is changed, the for loop below must also change
      throw "Unsupported multiple columns in array";
    }
    inner = regExMatch[2]; //The rest of the text
    let result = [];
    for (let expr of inner.split("\\\\")) {
      // since "Unsupported multiple columns in array" we can assume no "&"
      arr[1] = expr.trim();
      result.push(arr.join(""));
    }
    return result;
  }
  else if (text.includes("\\begin{aligned}") && text.includes("\\end{aligned}")) {
    let arr = text.split(/\\(?:begin|end){aligned}/);
    if (arr.length != 3) {
      throw "Unsuported nested aligned sections";
    }
    let inner = arr[1];
    if(inner.includes("\\begin{array}")) {
      throw "Nesting of array and aligned not supported";
    }
    let result = [];
    for (let expr of inner.split("\\\\")) {
      // since "Unsupported multiple columns in aligned" we can assume no "&"
      arr[1] = expr.replaceAll("&","").trim();
      result.push(arr.join(""));
    }
    return result;
  }
  return [text];
}

export default async function requestAllEquations(imageBuffer, imageName, verboseLogging=true) {
  /**
  * This function combines makeRequest and getAllEquations.
  * param: imageBuffer - A file buffer (or equivalent) that contains the actual image file
  * param: imageName - optional argument to indicate the name of the file to mathpix.
  *                    This doesn't seem useful so it can be excluded (undefined)
  * param: verboseLogging - optional argument that determines if the info about whether mathpix
  *                         is called or not is logged to the console. Currently, it defaults to true
                            however, this behavior is likely to change in future releases.
  * result: the data object returned from mathpix.
  */
  let request = await makeRequest(imageBuffer, imageName, verboseLogging);
  return await getAllEquations(request);
}