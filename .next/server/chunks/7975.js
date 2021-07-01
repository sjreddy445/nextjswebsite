exports.id = 7975;
exports.ids = [7975];
exports.modules = {

/***/ 845:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const Api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: "https://api.getedge.ai/",
  timeout: 30000 // headers: {
  //   'Access-Control-Allow-Origin': '*',
  // }

}); // interceptor for all the requests

Api.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
}); // interceptor for all the responses

Api.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  if (401 === error.response.status || undefined) {
    console.log("its a 401!"); //return
    // localStorage.clear();
    // return <Redirect to='/auth/login' />;
  } else {
    console.log("Sorry, something went wrong");
    return Promise.reject(error);
  }
});
/* harmony default export */ __webpack_exports__["Z"] = (Api);

/***/ }),

/***/ 5005:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": function() { return /* binding */ event; },
/* harmony export */   "rR": function() { return /* binding */ YouTubeGetID; },
/* harmony export */   "JU": function() { return /* binding */ DashToUpper; },
/* harmony export */   "VY": function() { return /* binding */ AddCmsImgBaseUrl; }
/* harmony export */ });
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8614);
/* harmony import */ var events__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(events__WEBPACK_IMPORTED_MODULE_0__);

const event = new (events__WEBPACK_IMPORTED_MODULE_0___default())();
const YouTubeGetID = url => {
  url = url.split(/(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/); //eslint-disable-next-line

  return undefined !== url[2] ? url[2].split(/[^0-9a-z_\-]/i)[0] : url[0];
};
const DashToUpper = str => {
  let words = str.match(/([^-]+)/g) || [];
  words.forEach(function (word, i) {
    words[i] = word[0].toUpperCase() + word.slice(1);
  });
  return words.join(' ');
};
const AddCmsImgBaseUrl = img => {
  // const baseUrl  = "https://api.getedge.ai"
  const baseUrl = "https://api.getedge.ai";
  return baseUrl + img;
};

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;