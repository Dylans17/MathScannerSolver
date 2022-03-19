"use strict";
let sharp = require("sharp");

const DIM = 16


/**
 input is any valid input from https://sharp.pixelplumbing.com/api-constructor
 output is a string of ~49 alphanumeric characters
*/
module.exports = async function(input) { //accepts any sharp input
  let pixelPromise = sharp(input).grayscale().resize(DIM, DIM).raw().toBuffer()

  let lastPixel = 255;
  let dHash = 0n;
  let pixels = await pixelPromise;
  for (let pixel of pixels) {
    dHash <<= 1n;
    dHash |= lastPixel < pixel ? 1n : 0n;
    lastPixel = pixel
  }

  return dHash.toString(36);
}
