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
       headers: {...form.getHeaders(), app_id: process.env.MATHPIX_APP_ID, app_key: process.env.MATHPIX_APP_KEY}
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
    resultList.push(dataObj.value);
  }
  return resultList;
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
