(function() {
var exports = {};
exports.id = 4244;
exports.ids = [4244,2888];
exports.modules = {

/***/ 7249:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _slug_; },
  "getServerSideProps": function() { return /* binding */ getServerSideProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
;// CONCATENATED MODULE: external "react-js-pagination"
var external_react_js_pagination_namespaceObject = require("react-js-pagination");;
var external_react_js_pagination_default = /*#__PURE__*/__webpack_require__.n(external_react_js_pagination_namespaceObject);
// EXTERNAL MODULE: ./Payloads/Blog/Header.js
var Header = __webpack_require__(72);
// EXTERNAL MODULE: ./Components/HeaderBanner/HeaderBanner.js + 5 modules
var HeaderBanner = __webpack_require__(6373);
// EXTERNAL MODULE: ./Config/Api.js
var Api = __webpack_require__(845);
// EXTERNAL MODULE: ./Components/CardList/BlogCard.js
var BlogCard = __webpack_require__(8373);
// EXTERNAL MODULE: ./Components/CardList/BlogPodcast.js
var BlogPodcast = __webpack_require__(5081);
// EXTERNAL MODULE: ./Components/CardList/BlogVideo.js
var BlogVideo = __webpack_require__(3945);
// EXTERNAL MODULE: ./Components/TopNav/Utils.js
var Utils = __webpack_require__(2220);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./pages/all-resource/[slug].js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












class resourceViewAll extends external_react_.Component {
  constructor() {
    super();

    _defineProperty(this, "scrollWindow", () => {
      window.scrollTo({
        top: 200,
        left: 0,
        behavior: 'smooth'
      });
    });

    this.state = {
      activePage: 0
    };
    this.handlePageChange = this.handlePageChange.bind(this);
  }

  componentDidMount() {
    (0,Utils/* setNavColor */.Z)("transparent-bg text-white");
    this.scrollWindow();
  }

  componentWillMount() {
    this.handlePageChange(1);
    const {
      router: {
        pathname
      }
    } = this.props;
    console.log("pathname", this.props);
    Api/* default.get */.Z.get(this.props.router.query.slug + "/count").then(({
      data: totalItem
    }) => {
      this.setState(_objectSpread(_objectSpread({}, this.state), {
        totalItem
      })); // this.scrollWindow()
    });
  }

  handlePageChange(pageNumber) {
    this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
      activePage: pageNumber
    }));
    Api/* default.get */.Z.get(this.props.router.query.slug, {
      params: {
        _limit: 6,
        _start: 6 * (pageNumber - 1),
        _sort: "created_at:desc"
      }
    }).then(({
      data: dataItems
    }) => {
      this.setState(_objectSpread(_objectSpread({}, this.state), {
        resouceItem: dataItems
      }));
    });
  }

  render() {
    var checkUrl = this.props.router.query.slug;

    if (!this.state.resouceItem) {
      return /*#__PURE__*/jsx_runtime_.jsx("p", {
        children: "Loading"
      });
    }

    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(HeaderBanner/* default */.Z, {
          data: Header/* payload */.x
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "mt-5 container-inner",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
          children: ["All ", this.props.router.query.slug]
        }), checkUrl.includes('blogs') && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row mt-4",
          children: this.state.resouceItem.map(item => /*#__PURE__*/jsx_runtime_.jsx(BlogCard/* default */.Z, _objectSpread({
            blog: item
          }, this.props), item.id))
        }), checkUrl.includes('podcast') && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row mt-4",
          children: this.state.resouceItem.map(item => /*#__PURE__*/jsx_runtime_.jsx(BlogPodcast/* default */.Z, _objectSpread({
            podcast: item
          }, this.props), item.id))
        }), checkUrl.includes('video') && /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "row mt-4",
          children: this.state.resouceItem.map(item => /*#__PURE__*/jsx_runtime_.jsx(BlogVideo/* default */.Z, _objectSpread({
            video: item
          }, this.props), item.id))
        }), this.state.totalItem ? /*#__PURE__*/jsx_runtime_.jsx((external_react_js_pagination_default()), {
          itemClass: "page-item",
          linkClass: "page-link",
          activePage: this.state.activePage,
          itemsCountPerPage: 6,
          totalItemsCount: this.state.totalItem,
          pageRangeDisplayed: 5,
          onChange: this.handlePageChange.bind(this)
        }) : '']
      })]
    });
  }

}

async function getServerSideProps(context) {
  return {
    props: {}
  };
}
/* harmony default export */ var _slug_ = ((0,router_.withRouter)(resourceViewAll));

/***/ }),

/***/ 9545:
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/free-solid-svg-icons");;

/***/ }),

/***/ 799:
/***/ (function(module) {

"use strict";
module.exports = require("@fortawesome/react-fontawesome");;

/***/ }),

/***/ 2376:
/***/ (function(module) {

"use strict";
module.exports = require("axios");;

/***/ }),

/***/ 5582:
/***/ (function(module) {

"use strict";
module.exports = require("cogo-toast");;

/***/ }),

/***/ 8614:
/***/ (function(module) {

"use strict";
module.exports = require("events");;

/***/ }),

/***/ 7717:
/***/ (function(module) {

"use strict";
module.exports = require("formik");;

/***/ }),

/***/ 2603:
/***/ (function(module) {

"use strict";
module.exports = require("jsonp");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 6731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 3708:
/***/ (function(module) {

"use strict";
module.exports = require("react-cookie-consent");;

/***/ }),

/***/ 2047:
/***/ (function(module) {

"use strict";
module.exports = require("react-device-detect");;

/***/ }),

/***/ 9831:
/***/ (function(module) {

"use strict";
module.exports = require("react-ga");;

/***/ }),

/***/ 3818:
/***/ (function(module) {

"use strict";
module.exports = require("react-moment");;

/***/ }),

/***/ 3783:
/***/ (function(module) {

"use strict";
module.exports = require("react-scroll");;

/***/ }),

/***/ 8728:
/***/ (function(module) {

"use strict";
module.exports = require("react-youtube");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 6099:
/***/ (function(module) {

"use strict";
module.exports = require("reactstrap");;

/***/ }),

/***/ 9440:
/***/ (function(module) {

"use strict";
module.exports = require("yup");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [1664,5675,7975,9142,8411,7935,320], function() { return __webpack_exec__(7249); });
module.exports = __webpack_exports__;

})();