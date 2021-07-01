exports.id = 1469;
exports.ids = [1469];
exports.modules = {

/***/ 4344:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ BrandList_BrandList; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
;// CONCATENATED MODULE: ./Components/BrandList/TextSect.js




class TextSect extends external_react_.Component {
  render() {
    let {
      data
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "text-sm mb-4 mt-2 font-weight-bold",
        children: data.mainTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-xl font-weight-bold",
        children: data.subTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-sm mt-4 text-brand"
      })]
    });
  }

}

/* harmony default export */ var BrandList_TextSect = (TextSect);
// EXTERNAL MODULE: ./Components/BrandList/BrandList.module.scss
var BrandList_module = __webpack_require__(1040);
var BrandList_module_default = /*#__PURE__*/__webpack_require__.n(BrandList_module);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./Components/BrandList/ImageSect.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const StyledSlider = external_styled_components_default()((external_react_slick_default()))`
  .slick-list {
    padding: 0px 100px !important;
  }
`;

class ImageSect extends external_react_.Component {
  render() {
    let brands = this.props.data.brands;
    var settings = {
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      centerMode: true,
      responsive: [{
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          speed: 150,
          // centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (BrandList_module_default()).brandlist,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (BrandList_module_default()).desktopview + " d-flex flex-row-wrap desktop-view justify-content-sm-between",
        children: brands.map((brand, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mr-3 mt-3 brand-img-holder",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: brand.imgUrl,
            alt: brand.alt,
            className: (BrandList_module_default()).brandImg + " img-round sm-list-img"
          })
        }, i))
      }), /*#__PURE__*/jsx_runtime_.jsx(StyledSlider, _objectSpread(_objectSpread({
        className: (BrandList_module_default()).mobileview
      }, settings), {}, {
        children: brands.map((brand, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "ml-0 mr-0 brand-img-holder",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: brand.imgUrl,
            alt: brand.alt,
            className: (BrandList_module_default()).brandImg + " img-round sm-list-img"
          })
        }, i))
      }))]
    });
  }

}

/* harmony default export */ var BrandList_ImageSect = (ImageSect);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./Components/BrandList/BrandList.js



function BrandList_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function BrandList_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { BrandList_ownKeys(Object(source), true).forEach(function (key) { BrandList_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { BrandList_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function BrandList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class BrandList extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container-inner d-flex flex-mobile-wrap",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
        lg: 4,
        md: 12,
        className: "mt-3 p-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(BrandList_TextSect, BrandList_objectSpread({}, this.props))
      }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
        lg: 8,
        md: 12,
        className: "p-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(BrandList_ImageSect, BrandList_objectSpread({}, this.props))
      })]
    });
  }

}

/* harmony default export */ var BrandList_BrandList = (BrandList);

/***/ }),

/***/ 6364:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": function() { return /* binding */ payload; }
/* harmony export */ });
const payload = {
  mainTitle: "Brands we work with.",
  subTitle: "Enterprises in IT Services, BFSI",
  brands: [{
    imgUrl: __webpack_require__(1654)/* .default.src */ .Z.src,
    alt: "Wipro"
  }, {
    imgUrl: __webpack_require__(5677)/* .default.src */ .Z.src,
    alt: "Daimler"
  }, {
    imgUrl: __webpack_require__(3572)/* .default.src */ .Z.src,
    alt: "NTT Data"
  }, {
    imgUrl: __webpack_require__(7790)/* .default.src */ .Z.src,
    alt: "HDFC"
  }, {
    imgUrl: __webpack_require__(887)/* .default.src */ .Z.src,
    alt: "HCL"
  }, {
    imgUrl: __webpack_require__(5931)/* .default.src */ .Z.src,
    alt: "UST Global"
  }, {
    imgUrl: __webpack_require__(5262)/* .default.src */ .Z.src,
    alt: "Virtusa"
  }]
};

/***/ }),

/***/ 5677:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/Assets/images/brands/Daimler.7c07443548a0829ab48d660adcce8854.png","height":800,"width":720,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAbUlEQVR42oWOywmAMBBE3Qo8eBBsQQQFQW1cjTEfP2CS3ZiWjBVk4N1mHpMlY6wD8i8gEjhEQPKQXp3XXT3G9rHdWOeGaKmRaPIh5Nm8sjIycCE7xvkopGql1pNUukirF7aBUBr4LkAd50/60AdcLjlcb/OAkwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 887:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/Assets/images/brands/HCL.21db5d70a924cbf49996ea3a59b33665.png","height":800,"width":720,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAY0lEQVR4nH2OsQ2AMAwEk9BQIGq2YA4aJmE+2IAtGIGeCrhDUEXkpZNjv/1KDAXFMC2Jqly8XiLNqck7lxeaA7WFGg7YoeNy1hxpKmiAqLCR21NXTWa5vlirYvn5jCSGpvzrBhX3FCS3ZSAZAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 7790:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/Assets/images/brands/HDFC.59a99bd29e92bdb75fe9a4058ba366fb.png","height":800,"width":720,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAhElEQVR42mPAC54cOs68acEWlh17zjIvWryLZcmyvcw7dp5i6exZzYxf56uNmztXdC9ZMXXujkUdnasWd/asWTRz9tYVRaXzOoGSW9pX9ixZNnn29gXNLcsX9k1cv2DOvO3LisvmdxBw0MFjYAdtATpi1pxtLCtXH2DZufsMS2c3AQcBADoNQA9Br8KNAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 3572:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/Assets/images/brands/NTT_Data.4ba0f1f4303cd07d329e74f3a6edd2b6.png","height":800,"width":720,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAZElEQVR4nH2MsQ2AMBAD8x0SEmICGjrWYhX2YhYKBgB6zDmQklgc789FiVRJzMvqC0bv8I+aQpaUEs5zBGzIiTlwcLA29A5u2IrskTtypLdwwmXJdAR+1jjKz36bsEE3GD6X3zyK3RxQbzpBSAAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 5931:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/Assets/images/brands/UST.15ae63dfce1b2628c12de00ed340c5f4.png","height":800,"width":720,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAZElEQVR42mOgDGj55jMpe+Zw6gcWssLEbGMqGRlEnNKZxZ0zrIA4QMI5wwlIu8m6ZbmqeuWKMPA7pNkLOqZHCTmmywoCsbBjupSYU4YYu20qGwNQgEPCOZORAR8A6mCEYaIcCgAkmhR4LhD52gAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 5262:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/Assets/images/brands/virtusa.6c1d2a96f83e821f97846eb3746eedba.png","height":800,"width":720,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAZElEQVR4nH2OMQqAMAxFk1EQFydXV1ev4iJ4OsHFawlOeoX4vtJFSj99TcgrbX2ZJ8tl3XaTdPp/NAtJaj6SPbWDGpQLGrglR5oBTmihAtVD0jz0xJfwYOdKZkkm+xoOOKv8oQds0hnpzVNv6QAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 1654:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/Assets/images/brands/wipro.293d75233e71390fd956ac1e28e4bae4.png","height":800,"width":720,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAAq0lEQVR42mPABYyipjEyuGdFM4J5PcEcunNmK/j2H1H3qz7IhaIy4GyMuNHelbIBfUct1DybAxgYXHgZTBjCFX2Cw7zdQkK9tN3jXXUCm5wN/dpzrQO6fRiMVMJlPBRDXWKMwqLLbd2suhwKXaqyl+RmZC/xhhv7fyWDxP8ZKnI3naMsNhuV+s/PnsvDMCXcG+ygO52q7M/KjOUvBkSpHWAI5WTABxb7dTACAIryMcPoQeEjAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 1040:
/***/ (function(module) {

// Exports
module.exports = {
	"brandImg": "BrandList_brandImg__3NsyN",
	"brandlist": "BrandList_brandlist__3tpWv",
	"mobileview": "BrandList_mobileview__XJ2zZ",
	"desktopview": "BrandList_desktopview__2TL_l"
};


/***/ })

};
;