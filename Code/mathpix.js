"use strict";
const axios = require('axios').default;

exports.makeRequest = function(imageURI) {
  let options = simpleOptions(imageURI);
  
  axios.post('https://api.mathpix.com/v3/text', options, { headers: {app_id: process.env.MATHPIX_APP_ID, app_key: process.env.MATHPIX_APP_KEY} })
}

function simpleOptions(imageURI) {
  let result = {
    //see more options at https://docs.mathpix.com/#request-parameters
    src: imageURI,
    formats: ["text", "data"],
    //IDK if we want tsv but it could be nice.
    data_options: {include_latex: true, include_tsv: true},
    //we want math
    numbers_default_to_math: true,
    //simplify format
    rm_spaces: true,
    rm_fonts: true,
    //Disable other alphabets
    alphabets_allowed: {
    hi: false,
    zh: false,
    ja: false,
    ko: false,
    ru: false,
    th: false,
    ta: false,
    te: false,
    gu: false,
    bn: false,
    vi: false}
  }
}
