(function() {
var exports = {};
exports.id = 9696;
exports.ids = [9696];
exports.modules = {

/***/ 5238:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const EXTERNAL_DATA_URL = 'https://api.getedge.ai/blogs';

const createSitemap = posts => `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${posts.map(({
  id
}) => {
  return `
                    <url>
                        <loc>${`${EXTERNAL_DATA_URL}/${id}`}</loc>
                    </url>
                `;
}).join('')}
    </urlset>
    `;

class Sitemap extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {
  static async getInitialProps({
    res
  }) {
    const request = await fetch(EXTERNAL_DATA_URL);
    const posts = await request.json();
    res.setHeader('Content-Type', 'text/xml');
    res.write(createSitemap(posts));
    res.end();
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Sitemap);

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(5238));
module.exports = __webpack_exports__;

})();