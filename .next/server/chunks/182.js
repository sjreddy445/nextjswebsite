exports.id = 182;
exports.ids = [182,3035,4341,2970,9594,4788,4048];
exports.modules = {

/***/ 450:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Awards_Awards; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
;// CONCATENATED MODULE: ./Components/Awards/AwardText.js




class AwardText extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "text-lg mb-4 mt-2 font-weight-bold",
        children: "Awards"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-xl font-weight-bold",
        children: "Placeholder for text"
      })]
    });
  }

}

/* harmony default export */ var Awards_AwardText = (AwardText);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./Components/Awards/Awards.module.scss
var Awards_module = __webpack_require__(65);
var Awards_module_default = /*#__PURE__*/__webpack_require__.n(Awards_module);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./Components/Awards/AwardImage.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const StyledSlider = external_styled_components_default()((external_react_slick_default()))`
  .slick-list {
    padding: 0px -74px !important;
  }
`;

class AwardImage extends external_react_.Component {
  render() {
    var settings = {
      // dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      dots: true,
      autoplay: true,
      centerMode: true,
      autoplaySpeed: 2000,
      responsive: [{
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          autoplay: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true
        }
      }]
    };
    let {
      logo
    } = this.props.data;
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-fluid",
      children: /*#__PURE__*/jsx_runtime_.jsx(StyledSlider, _objectSpread(_objectSpread({}, settings), {}, {
        children: logo.map((list, index) => /*#__PURE__*/jsx_runtime_.jsx("div", {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            onClick: () => window.open(list.link, "_bank"),
            className: (Awards_module_default()).img,
            style: {
              backgroundImage: `url('${list.imgUrl}')`
            }
          })
        }, index))
      }))
    });
  }

}

/* harmony default export */ var Awards_AwardImage = (AwardImage);
;// CONCATENATED MODULE: ./Components/Awards/Awards.js




function Awards_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function Awards_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { Awards_ownKeys(Object(source), true).forEach(function (key) { Awards_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { Awards_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function Awards_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Awards extends external_react_.Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container-inner py-5",
        id: "contactid",
        name: "contactWidget",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
          className: "no-gutters",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            md: 4,
            sm: 12,
            className: "",
            children: /*#__PURE__*/jsx_runtime_.jsx(Awards_AwardText, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            md: 8,
            sm: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(Awards_AwardImage, Awards_objectSpread({}, this.props))
          })]
        })
      })
    });
  }

}

/* harmony default export */ var Awards_Awards = (Awards);

/***/ }),

/***/ 4723:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ OurProducts_OurProducts; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./Components/Cards/RatioCard/dynamicRatioCard.js



function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import "./ratioCard.scss"
// import { Redirect } from 'react-router-dom'



class RatioCard extends external_react_.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      redirectTo: ""
    });

    _defineProperty(this, "handleClick", url => {
      this.setState({
        redirectTo: "/products/" + url
      }); // return <Redirect to={{pathname:`/${url}`}} />
      // this.props.history.push("/"+url)
    });
  }

  render() {
    let {
      data
    } = this.props; // if (this.state.redirectTo) {
    //   return <Router to={{pathname: this.state.redirectTo}} />
    // }

    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `ratio-card pointer ${this.props.ratio}`,
      style: {
        backgroundImage: `url('${data.imgUrl}')`,
        backgroundColor: data.bgColor
      },
      onClick: () => this.handleClick(data.pageUrl),
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "content-box",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "logo",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: data.logo,
            alt: data.alt,
            className: "img-fluid"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: data.captionClass,
          children: /*#__PURE__*/jsx_runtime_.jsx("span", {
            children: data.caption
          })
        })]
      })
    });
  }

}

/* harmony default export */ var dynamicRatioCard = (RatioCard);
;// CONCATENATED MODULE: ./Components/OurProducts/OurProducts.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { OurProducts_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function OurProducts_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const SlideBtn = (_ref) => {
  let {
    arrow,
    direction
  } = _ref,
      props = _objectWithoutProperties(_ref, ["arrow", "direction"]);

  return /*#__PURE__*/jsx_runtime_.jsx("button", _objectSpread(_objectSpread({}, props), {}, {
    className: `slick-arrow slick-${direction}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
      className: `icon-chevron-${arrow}`
    })
  }));
};

class OurProducts extends external_react_.Component {
  componentDidMount() {}

  render() {
    var settings = {
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: /*#__PURE__*/jsx_runtime_.jsx(SlideBtn, {
        arrow: "right",
        direction: "next"
      }),
      prevArrow: /*#__PURE__*/jsx_runtime_.jsx(SlideBtn, {
        arrow: "left",
        direction: "prev"
      }),
      responsive: [{
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }]
    };
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container-inner py-4",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "mb-3",
        children: "Our Products."
      }), /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({
        className: "arrow-dark arrow-slider gap-10"
      }, settings), {}, {
        children: this.props.data.map((data, i) => /*#__PURE__*/jsx_runtime_.jsx(dynamicRatioCard, {
          ratio: "seventy_perc",
          data: data
        }, i))
      }))]
    });
  }

}

/* harmony default export */ var OurProducts_OurProducts = (OurProducts);

/***/ }),

/***/ 3675:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ Testimonials; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./Components/Testimonials/testimonial.module.scss
var testimonial_module = __webpack_require__(9738);
var testimonial_module_default = /*#__PURE__*/__webpack_require__.n(testimonial_module);
;// CONCATENATED MODULE: ./Components/Testimonials/content.js







class Content extends external_react_.Component {
  componentDidMount() {}

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
        md: {
          offset: 1
        },
        sm: {
          offset: 1
        },
        xs: {
          offset: 4,
          span: 10
        },
        className: "",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "p-2 ml-3",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: (testimonial_module_default()).img,
            src: this.props.data.img,
            alt: "new"
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
        md: 6,
        className: (testimonial_module_default()).desc + " m-1",
        children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs font-weight-light m-2",
          children: this.props.data.name
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-xs m-2 font-weight-normal",
          children: this.props.data.designation
        }), /*#__PURE__*/jsx_runtime_.jsx("p", {
          className: "text-md m-2 font-weight-bold",
          children: this.props.data.company
        })]
      })]
    });
  }

}

/* harmony default export */ var content = (Content);
;// CONCATENATED MODULE: ./Components/Testimonials/Testimonials.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }







const SlideBtn = (_ref) => {
  let {
    arrow,
    direction
  } = _ref,
      props = _objectWithoutProperties(_ref, ["arrow", "direction"]);

  return /*#__PURE__*/jsx_runtime_.jsx("button", _objectSpread(_objectSpread({}, props), {}, {
    className: `slick-arrow slick-${direction}`,
    children: /*#__PURE__*/jsx_runtime_.jsx("i", {
      className: `icon-chevron-${arrow}`
    })
  }));
};

class Awards extends external_react_.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      data: []
    });
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    });
  }

  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 3,
      // autoplay: true,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      nextArrow: /*#__PURE__*/jsx_runtime_.jsx(SlideBtn, {
        style: {
          margin: 10
        },
        arrow: "right",
        direction: "next"
      }),
      prevArrow: /*#__PURE__*/jsx_runtime_.jsx(SlideBtn, {
        arrow: "left",
        direction: "prev"
      }),
      responsive: [{
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1 // centerMode: true,

        }
      }]
    };
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "container-inner py-5 light-sliver-bg",
      children: [/*#__PURE__*/jsx_runtime_.jsx("h3", {
        className: "mb-3",
        children: "Testimonials"
      }), /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({
        className: "arrow-dark arrow-slider"
      }, settings), {}, {
        children: this.state.data.map(list => /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "card card-body text-xs " + (testimonial_module_default()).cardborder,
          children: [/*#__PURE__*/jsx_runtime_.jsx("p", {
            className: (testimonial_module_default()).cardheight,
            children: list.desc
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Row, {
            children: /*#__PURE__*/jsx_runtime_.jsx(content, {
              data: list
            })
          })]
        }))
      }))]
    });
  }

}

/* harmony default export */ var Testimonials = (Awards);

/***/ }),

/***/ 4633:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": function() { return /* binding */ payload; }
/* harmony export */ });
const payload = {
  logo: [{
    imgUrl: __webpack_require__(9415)/* .default.src */ .Z.src,
    link: 'https://media.londonandpartners.com/news/india-s-best-companies-selected-for-mayor-of-london-s-ie20-business-programme',
    alt: "IE20"
  }, {
    imgUrl: __webpack_require__(6223)/* .default.src */ .Z.src,
    link: 'https://www2.deloitte.com/content/dam/Deloitte/in/Documents/technology-media-telecommunications/in-tmt-techfast50-2016-winners-noexp.pdf',
    alt: "Deloitte"
  }, {
    imgUrl: __webpack_require__(6561)/* .default.src */ .Z.src,
    link: 'https://developers.googleblog.com/2017/05/announcing-fourth-class-of-launchpad.html',
    alt: "Google Launchpad"
  }, {
    imgUrl: __webpack_require__(9723)/* .default.src */ .Z.src,
    link: 'https://inc42.com/buzz/meet-top-50-emerging-startups-nasscom-emerge-50-2016-awards/',
    alt: "Emerge"
  }]
};

/***/ }),

/***/ 1402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": function() { return /* binding */ payload; }
/* harmony export */ });
const payload = [{
  logo: __webpack_require__(9594).default.src,
  caption: "Talent Transformation, Simplified..",
  alt: "Edge Pathfinder",
  pageUrl: "pathfinder",
  captionClass: "text-white",
  bgColor: "#181e2e",
  imgUrl: __webpack_require__(2970).default.src
}, {
  logo: __webpack_require__(4048).default.src,
  caption: "Simplify reskill, invest or maintain decisions.",
  alt: "Edge Recruit",
  pageUrl: "recruit",
  bgColor: "#ededed",
  imgUrl: __webpack_require__(4788).default.src
}, {
  logo: __webpack_require__(4341).default.src,
  caption: "Talent Acquisition, Simplified.",
  alt: "Edge Mobility",
  pageUrl: "mobility",
  bgColor: "#ffebde",
  imgUrl: __webpack_require__(3035).default.src
}];

/***/ }),

/***/ 700:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": function() { return /* binding */ payload; }
/* harmony export */ });
const payload = [{
  desc: "We make significant investments to attract, recruit, and train our world-class digital engineering teams across the globe. EDGE Networks’ AI-powered talent platform, enables us to gain deep insights into our team’s capabilities to optimize talent deployment and to build a future-ready workforce though intelligent upskilling/reskilling recommendations.",
  name: "Madu Ratnayake",
  designation: "CIO",
  company: "Virtusa",
  img: __webpack_require__(7377)/* .default.src */ .Z.src
}, {
  desc: "EDGE Networks has successfully managed to leverage the power of Artificial Intelligence (AI) and NLP to help HCL optimize its internal talent. As a company, we need to ensure that the workforce is utilized and engaged constantly, avenues open for internal employees whilst external hiring cost is driven down.",
  name: "Apparao",
  designation: "VV-CHRO",
  company: "HCL",
  img: __webpack_require__(6854)/* .default.src */ .Z.src
}, {
  desc: "NTT Data is an organization that positions its business alongside the dreams and aspirations of its employees. EDGE Networks built a platform that helps us understand an employee's skill sets, analyze business demands, and identify potential candidates for positions. We’ve put this platform into the hands of our employee’s as well to allow them to express interest in open positions based on their skills and aspirations, which has helped us accelerate internal fulfillment  is an organization that positions its business alongside the dreams and aspirations of its employees.",
  name: "Barry Shurkey",
  designation: "CIO",
  company: "NTT DATA Services",
  img: __webpack_require__(2617)/* .default.src */ .Z.src
}, {
  desc: "NTT Data is an organization that positions its business alongside the dreams and aspirations of its employees. EDGE Networks built a platform that helps us understand an employee's skill sets, analyze business demands, and identify potential candidates for positions. We’ve put this platform into the hands of our employee’s as well to allow them to express interest in open positions based on their skills and aspirations, which has helped us accelerate internal fulfillment.",
  name: "Barry Shurkey",
  designation: "CIO",
  company: "NTT DATA Services",
  img: __webpack_require__(2617)/* .default.src */ .Z.src
}];

/***/ }),

/***/ 3035:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/Assets/images/Products/mobility/slider/mobility-bg.0f5ee7f4f39b9d65cc1040aeba78ef99.svg","height":420,"width":620});

/***/ }),

/***/ 4341:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/Assets/images/Products/mobilityLogo.d374073d4e4b314d7a74980f174ee75f.svg","height":150,"width":453});

/***/ }),

/***/ 2970:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/Assets/images/Products/pathfinder/slider/pathfinder-bg.fbef5525f6f40cc87c8298302e792576.svg","height":420,"width":623});

/***/ }),

/***/ 9594:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/Assets/images/Products/pathfinderLogo.6a2f3142ef9ec53aa113aa89aa9e559a.svg","height":150,"width":616});

/***/ }),

/***/ 4788:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/Assets/images/Products/recruit/slider/recruit-bg.a1d9440fd823b729c666aca972360044.svg","height":420,"width":620});

/***/ }),

/***/ 4048:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/Assets/images/Products/recruitLogo.6ce593ecee24262d5f70d9836c99545a.svg","height":150,"width":409});

/***/ }),

/***/ 9415:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/Assets/images/awards/award-IE20.70f14c8445a8626444266b3a3c0549b4.png","height":248,"width":312,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAx0lEQVR42jXIv67BUADH8d+p09btTW+uUCmC+DfRGC1MXsCziIWX8CA2L2GQEIMgqEEwsCCq2tMeNfgmn+ULzjk+gqRAI9BEQUt+P5kaaCtV0Puh5allS1DEe+jWH72evZpIxnOPrDtd/l8vg8Z02IsJvP0WDo/C//FBZiYExUhZcrbCxLjmsv2OWUeH/RZVF5bDnpHSg9pXk4Y3EqWyBlvKgWQYyGqJv7SO13kjkIGBbvAf6hDhk54PSTkTxXTiIvsn145m3Dc04lH62fv1rwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 6223:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/Assets/images/awards/award-deloitte.5c5a22afcb6385f225063eb207e8447c.png","height":217,"width":635,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAbklEQVR4nAFjAJz/AZe2n5D/+BViGg8MSVBDtQwABREbACf7+QDsAA4AAP3hAYqptvcUFBAIA/vlnMrekagE+jQe48ER7xIcAAMgNPsCAYCVqZD8CfJv/QMbQSowYgf69zYF8JU8wi5lAP5EPbn0q10pG25mfkgAAAAASUVORK5CYII="});

/***/ }),

/***/ 9723:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/Assets/images/awards/award-emerge.d62b832b6e047e589178c95e5fc090ee.png","height":248,"width":215,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA1klEQVR42hXEz0vCYBzA4c+7zW2NNDsIiwhjHkro1qlDh/7xUJKuSTmjQzFl1nIbHYbx6n58y+fwqDAMxTRNPM9DRLAsS/6pfZbrumitKYqCqqpotWxWq5ggCDC03srT9JmvZC2+fyLzlylx/InjuBhZnvP+EUmnfchs/kp9POBiOGQ0GqOiaNEAPEweSdOct7rH3fmBso1aDGkqJuN7mlJze3PN5S6kSJf0z05Ryc+vzBYZA79Np9sl+c5ZFzuu+j1Ry2xTFo1DWdVstiVHnk1ZK4xayx9JwHGVhz1qeQAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 6561:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/Assets/images/awards/award-google.00ad679d399932a4e6ae968de6827c92.png","height":216,"width":834,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAASElEQVR4nGM8k5TeN8fuw5sZCSuXiTAyiL1hZvzK8Oc/KwMDw18gfsk4v+1UnqOu2RsFX53zGgJXpG98YvjK8I+BHSjJAcTsAH1VF2ippWjZAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 7377:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/Assets/images/clients/image20.15dcdee1895b2da583ab24c6a43d2a51.png","height":99,"width":99,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AVFiYgD//v0u5PL3mszp8TQvEwwAGA4MzPj7+2YDBATSAVJjZCzu+fzFF/HiDjIT9v/J2u0A6Bs1ARAODPLz8/M7AVRoacPg8PY8hjQE+iwlHwa4vsMAYrny+lFEOQby8vHEAVRsbvoHCAgEQALjARQNBv/19fUA1uTzAdEMJv/39fT8AVpyc/kKDxEFXhLmAQoEA/8CAfwAwdbtAbL3Ff//9fL7AVxycsAHExc/L/7s+hnszwbv68MA5hJV+swFHAby5eLBAVNqbCgRFRXFCA4QEjDow/8tLDEADCxDAWaKlO4bHBo7AWSBhAAUDQooyNfcmIFNPDk+TFQAtbq/x0xIR2gAAADYMXt24MpBRg0AAAAASUVORK5CYII="});

/***/ }),

/***/ 6854:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/Assets/images/clients/image21.4d8eb039a956b4266cf846ea157dc61e.png","height":100,"width":100,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABEklEQVR4nGNkgADJ3kmdU0JC4x3kJMRBYid//fqdw8zMeJcx3UdF/P7bf8ekteyUbFWlGCR1TRic3f0YmBkZX/3798+GMdnfcMWFc+fDp/TN+mmkpsK2cucWBq+Mht/CvLxsf//+3ccY5qr4SkVaRTQjLOr/NwYOhgdPHzJYReYwcnFy/weC34zJvqqvhQTERWIcnf9/+c7CcOHDD4bE8kZGdibm/3/+/v3DmBpsse75N7ZAAR7Rn75WOmwvWXkYdW3dfolJSLDxcHEdYXSMSpf98/Xj8XsvXku7m2j9l5QUZVi6fjujkqbax/zaShtGY/cAhm9vninycPPMOn1on11ofBKjmYnJqdLcrIy8mbOuAABcK2ZU/L1iqwAAAABJRU5ErkJggg=="});

/***/ }),

/***/ 2617:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/Assets/images/clients/image22.55300a1886386ff4dec62040042abe52.png","height":100,"width":100,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAABE0lEQVR4nAEIAff+AcK/vgANDAsZu8LClNfT00AdGhkBJistySEeHWz8/PzdAc3HxxfW3t3G0bStIk81LgAMDQsAvdbdABw5QeoeGBc8Abm3tqje4uJX6r6v+WNeYwYIDAsAtbiz+/0mNQYdGhq+AbKzser06ekV+NLE/ycoLAAIBwQA8e3oAfEZKf8GExX7Aa+vresA+voU/dTI/xoRFQAEAgIA/wkAAeMPIP8IDAz8AbGvra75/P1Rz7y3+UAdFgYXEBIB2P78+gggLAYEAP7EAb6+vh2SkIzH8P4TG1hGQf8J798A1PYEAe3r4PFUU1I8AYOBfgB9f4IhAAAAmrHB0z7y4t0B5fD2ynhtWmh0cWvUx5R6ONiolVMAAAAASUVORK5CYII="});

/***/ }),

/***/ 65:
/***/ (function(module) {

// Exports
module.exports = {
	"img": "Awards_img__3y77P"
};


/***/ }),

/***/ 9738:
/***/ (function(module) {

// Exports
module.exports = {
	"desc": "testimonial_desc__2N7NL",
	"designation": "testimonial_designation__1WPcH",
	"cardheight": "testimonial_cardheight__3Z9G_",
	"slick-list": "testimonial_slick-list__34qm9",
	"cardborder": "testimonial_cardborder__3rsL5",
	"img": "testimonial_img__2q-mp",
	"slick-next": "testimonial_slick-next__Jojtf"
};


/***/ })

};
;