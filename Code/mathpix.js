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


export default async function makeRequest(imageBuffer, imageName) {
  let form = new FormData();
  form.append("options_json", mathpixOptions);
  form.append("file", imageBuffer, imageName);

  let hash = await imageHash(imageBuffer);
  let storedResult = imageStorage.getItem(hash);
  if (storedResult != null) {
    if (1 /*put condition for verbose logging?*/)
      console.log("Using stored result for new image: " + hash);
    return JSON.parse(storedResult);
  }

  if (1 /*put condition for verbose logging?*/)
    console.log("Fetching result for new image from mathpix: " + hash);
  let response = await axios.post("https://api.mathpix.com/v3/text",
     form, {headers: {...form.getHeaders(), app_id: process.env.MATHPIX_APP_ID, app_key: process.env.MATHPIX_APP_KEY} });
  imageStorage.setItem(hash, JSON.stringify(response.data));
  return response.data;
}
