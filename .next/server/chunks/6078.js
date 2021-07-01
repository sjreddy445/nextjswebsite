exports.id = 6078;
exports.ids = [6078];
exports.modules = {

/***/ 671:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ProductScreenShots_ProductScreenShots; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
;// CONCATENATED MODULE: ./Components/ProductScreenShots/TextSect.js




class TextSect extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "text-lg mb-4 mt-2 font-weight-bold",
        children: "Product screenshot"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-xl font-weight-bold",
        children: "Placeholder for text Lorem Ipsum is simply dummy text of the printing and typesetting industry."
      })]
    });
  }

}

/* harmony default export */ var ProductScreenShots_TextSect = (TextSect);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./Components/ProductScreenShots/ScreenShotSect.js


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class ScreenShotSect extends external_react_.Component {
  componentDidMount() {}

  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
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
    return /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({}, settings), {}, {
      children: this.props.data.map((list, i) => /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("img", {
          alt: list.imgAlt,
          className: "w-100",
          style: {
            height: 400
          },
          src: list.img
        })
      }, i))
    }));
  }

}

/* harmony default export */ var ProductScreenShots_ScreenShotSect = (ScreenShotSect);
// EXTERNAL MODULE: ./Components/ProductScreenShots/ProductScreenShots.module.scss
var ProductScreenShots_module = __webpack_require__(2582);
var ProductScreenShots_module_default = /*#__PURE__*/__webpack_require__.n(ProductScreenShots_module);
;// CONCATENATED MODULE: ./Components/ProductScreenShots/ProductScreenShots.js




function ProductScreenShots_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ProductScreenShots_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ProductScreenShots_ownKeys(Object(source), true).forEach(function (key) { ProductScreenShots_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ProductScreenShots_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ProductScreenShots_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class ProductScreenShots extends external_react_.Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "py-5 " + (ProductScreenShots_module_default()).productscreenshot,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
          className: "container-inner text-lg mb-4 text-black " + (ProductScreenShots_module_default()).productscreenshotbox,
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            md: 4,
            sm: 12,
            className: "pr-5",
            children: /*#__PURE__*/jsx_runtime_.jsx(ProductScreenShots_TextSect, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            md: 6,
            sm: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(ProductScreenShots_ScreenShotSect, ProductScreenShots_objectSpread({}, this.props))
          })]
        })
      })
    });
  }

}

/* harmony default export */ var ProductScreenShots_ProductScreenShots = (ProductScreenShots);

/***/ }),

/***/ 968:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ProductStats_ProductStats; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: ./Components/ProductStats/ProductStats.module.scss
var ProductStats_module = __webpack_require__(8819);
var ProductStats_module_default = /*#__PURE__*/__webpack_require__.n(ProductStats_module);
;// CONCATENATED MODULE: ./Components/ProductStats/StatsBox.js




class StatsBox extends external_react_.Component {
  render() {
    let {
      data
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (ProductStats_module_default()).statsBox,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (ProductStats_module_default()).number,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: data.number
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text",
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: (ProductStats_module_default()).text + " text-lg",
          children: data.text
        })
      })]
    });
  }

}
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
;// CONCATENATED MODULE: ./Components/ProductStats/ProductStats.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ProductStats extends external_react_.Component {
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
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      // autoplay: true,
      autoplaySpeed: 2000,
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
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container-inner py-4 desktopview",
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_slick_default()), _objectSpread(_objectSpread({
          className: "arrow-dark arrow-slider gap-50"
        }, settings), {}, {
          children: this.state.data.map((stats, i) => {
            return /*#__PURE__*/jsx_runtime_.jsx(StatsBox, {
              data: stats
            }, i);
          })
        }))
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container-inner mobileview justify-content-center",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Row, {
          className: "no-gutters m-0",
          children: this.state.data.map((stats, i) => /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            md: 4,
            xs: 12,
            className: "mt-4",
            children: /*#__PURE__*/jsx_runtime_.jsx(StatsBox, {
              data: stats
            }, i)
          }, i))
        })
      })]
    });
  }

}

/* harmony default export */ var ProductStats_ProductStats = (ProductStats);

/***/ }),

/***/ 1560:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ProductVideos_ProductVideo; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
;// CONCATENATED MODULE: ./Components/ProductVideos/TextSect.js




class TextSect extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "text-lg mb-4 mt-2 font-weight-bold",
        children: "Product screenshot"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-xl font-weight-bold",
        children: "Placeholder for text Lorem Ipsum is simply dummy textofthe printing"
      })]
    });
  }

}

/* harmony default export */ var ProductVideos_TextSect = (TextSect);
// EXTERNAL MODULE: external "react-youtube"
var external_react_youtube_ = __webpack_require__(8728);
var external_react_youtube_default = /*#__PURE__*/__webpack_require__.n(external_react_youtube_);
// EXTERNAL MODULE: ./Utils/Utils.js
var Utils = __webpack_require__(5005);
;// CONCATENATED MODULE: ./Components/ProductVideos/VideoSect.js





class VideoSect extends external_react_.Component {
  render() {
    let videoId = (0,Utils/* YouTubeGetID */.rR)("https://www.youtube.com/watch?v=uR_FJl6WyKM");
    const opts = {
      playerVars: {
        rel: 0
      }
    };
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "section-margin",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "embed-responsive embed-responsive-16by9",
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_youtube_default()), {
          videoId: videoId,
          opts: opts,
          onReady: this._onReady,
          className: "embed-responsive-item"
        })
      })
    });
  }

}

/* harmony default export */ var ProductVideos_VideoSect = (VideoSect);
// EXTERNAL MODULE: ./Components/ProductVideos/ProductVideos.module.scss
var ProductVideos_module = __webpack_require__(8389);
var ProductVideos_module_default = /*#__PURE__*/__webpack_require__.n(ProductVideos_module);
;// CONCATENATED MODULE: ./Components/ProductVideos/ProductVideo.js









class ProductVideo extends external_react_.Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "py-5 " + (ProductVideos_module_default()).productvideo,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
          className: "container-inner text-lg mb-4 text-white " + (ProductVideos_module_default()).productvideobox,
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            md: 5,
            sm: 12,
            className: "pr-5",
            children: /*#__PURE__*/jsx_runtime_.jsx(ProductVideos_TextSect, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            md: 7,
            sm: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(ProductVideos_VideoSect, {})
          })]
        })
      })
    });
  }

}

/* harmony default export */ var ProductVideos_ProductVideo = (ProductVideo);

/***/ }),

/***/ 7601:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ VerticalSlider_VerticalSlider; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./Components/VerticalSlider/VerticalSlider.module.scss
var VerticalSlider_module = __webpack_require__(6403);
var VerticalSlider_module_default = /*#__PURE__*/__webpack_require__.n(VerticalSlider_module);
;// CONCATENATED MODULE: ./Components/VerticalSlider/SliderContent.js






class SliderContent extends external_react_.Component {
  constructor(props) {
    super();
  }

  render() {
    let {
      item,
      currentIndex,
      total
    } = this.props;
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: (VerticalSlider_module_default()).slidercontent,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "d-flex flex-wrap flex-xl-nowrap justify-content-between align-items-center align-content-center container-inner",
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-md-12 col-xl-6 order-1 order-xl-0 " + (VerticalSlider_module_default()).textcontainer,
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
            className: (VerticalSlider_module_default()).mobilepagination,
            children: [currentIndex, " of ", total]
          }), /*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "text-xl mb-3 slidetitle",
            children: item.title
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "text-xs text-grey text-line-height-1-6",
            dangerouslySetInnerHTML: {
              __html: item.body
            }
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-12 col-xl-6 order-0 order-xl-1" + (VerticalSlider_module_default()).imagecontainer,
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            className: "img-round img-fluid",
            alt: item.imgAlt,
            src: item.img
          })
        })]
      })
    });
  }

}

/* harmony default export */ var VerticalSlider_SliderContent = (SliderContent);
// EXTERNAL MODULE: external "jquery"
var external_jquery_ = __webpack_require__(1273);
var external_jquery_default = /*#__PURE__*/__webpack_require__.n(external_jquery_);
// EXTERNAL MODULE: external "react-slick"
var external_react_slick_ = __webpack_require__(9080);
var external_react_slick_default = /*#__PURE__*/__webpack_require__.n(external_react_slick_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./Components/VerticalSlider/VerticalSlider.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







const SliderC = external_styled_components_default()((external_react_slick_default()))`
   .slick-dots {
    width: 20px;
    height: 100%;
    top: 0px;
    left: 10px;
    display: flex !important;
    flex-wrap: wrap;
    align-content: center;
    li {
        margin: 3px 0px;
        button:before {
            color: #f23a5a;
            font-size: 14px;
            opacity: 1;
        }
        &.slick-active {
            button:before {
                border: 2px solid #fff;
                padding: 2px;
                background: #fff content-box;
                font-size: 0px;
                border-radius: 50%;
            }
        }
    }
}
    .slick-dots li button::before {
        color: rgba(0, 0, 0, .3);
    }
    .slick-dots li.slick-active button::before {
        background-color: #f23a5a;
        border-color: #f23a5a;
    }
   `;

class VerticalSlider extends external_react_.Component {
  constructor() {
    super();
    this.sliderContainer = /*#__PURE__*/external_react_default().createRef();
    this.animate = this.animate.bind(this);
    this.calculate = this.calculate.bind(this);
    this.hidden = false;
    this.isAnimating = false;
  }

  animate(offset) {
    external_jquery_default()("html, body").animate({
      scrollTop: offset
    }, 1000, () => {
      setTimeout(() => {
        this.isAnimating = false;
      }, 10);
    });
  }

  calculate(e) {
    if (this.isAnimating) {
      e.preventDefault();
      return;
    }

    var direction = -e.deltaY;

    if (direction < 0) {
      if (this.currentSlide + 1 === this.props.data.length) {
        return;
      }

      if (window.pageYOffset < this.sliderContainer.current.offsetTop - this.sliderContainer.current.offsetHeight) {
        return;
      }

      if (parseInt(external_jquery_default()(this.sliderContainer.current).offset().top - 70) === window.pageYOffset) {
        this.isAnimating = true;
        this.currentSlide = this.currentSlide + 1;
        this.slider.slickGoTo(this.currentSlide);
        e.preventDefault();
        setTimeout(() => {
          this.isAnimating = false;
        }, 1000);
        return;
      }

      this.isAnimating = true;
      e.preventDefault();
      this.animate(external_jquery_default()(this.sliderContainer.current).offset().top - 70);
    } else {
      if (this.currentSlide === 0) {
        return;
      }

      if (this.currentSlide + 1 === this.props.data.length && window.pageYOffset > this.sliderContainer.current.offsetTop + this.sliderContainer.current.offsetHeight) {
        return;
      }

      if (parseInt(external_jquery_default()(this.sliderContainer.current).offset().top - 70) === window.pageYOffset) {
        this.isAnimating = true;
        this.slider.slickGoTo(--this.currentSlide);
        e.preventDefault();
        setTimeout(() => {
          this.isAnimating = false;
        }, 1000);
        return;
      }

      this.isAnimating = true;
      e.preventDefault();
      this.animate(external_jquery_default()(this.sliderContainer.current).offset().top - 70);
    }
  }

  componentDidMount() {
    // const container = this.sliderContainer.current;
    this.currentSlide = 0;
    window.scrollTo(0, 0);
    document.addEventListener("wheel", this.calculate, {
      passive: false
    });
  }

  componentWillUnmount() {
    document.removeEventListener("wheel", this.calculate, {
      passive: false
    });
  }

  render() {
    const items = this.props.data;
    const settings = {
      dots: true,
      infinite: false,
      vertical: true,
      verticalSwiping: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1 // afterChange: (current, next) => {
      //   console.log("arguments");
      //   console.log(arguments);
      //   this.currentSlide = current + 1;
      // }

    };
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `${(VerticalSlider_module_default()).verticalslider} ${this.props.dotColor ? 'dot' + this.props.dotColor : ''}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "py-4",
        ref: this.sliderContainer,
        children: [/*#__PURE__*/jsx_runtime_.jsx(SliderC, _objectSpread(_objectSpread({
          className: (VerticalSlider_module_default()).desktopslider,
          ref: slider => this.slider = slider
        }, settings), {}, {
          children: items.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(VerticalSlider_SliderContent, {
            item: item
          }, index + '_slider'))
        })), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (VerticalSlider_module_default()).mobileslider,
          children: items.map((item, index) => /*#__PURE__*/jsx_runtime_.jsx(VerticalSlider_SliderContent, {
            item: item,
            total: items.length,
            currentIndex: index + 1
          }, index + '_slider'))
        })]
      })
    });
  }

}

/* harmony default export */ var VerticalSlider_VerticalSlider = (VerticalSlider);

/***/ }),

/***/ 2582:
/***/ (function(module) {

// Exports
module.exports = {
	"productscreenshot": "ProductScreenShots_productscreenshot__2pTVH",
	"productscreenshotbox": "ProductScreenShots_productscreenshotbox__3fUm2",
	"ImageSize": "ProductScreenShots_ImageSize__1nhpv"
};


/***/ }),

/***/ 8819:
/***/ (function(module) {

// Exports
module.exports = {
	"statsBox": "ProductStats_statsBox__3G8SA",
	"number": "ProductStats_number__3__aF",
	"text": "ProductStats_text__2P8I3",
	"desktopview": "ProductStats_desktopview__3iSJY",
	"mobileview": "ProductStats_mobileview__3WP4F"
};


/***/ }),

/***/ 8389:
/***/ (function(module) {

// Exports
module.exports = {
	"productvideo": "ProductVideos_productvideo__7NCHI",
	"productvideobox": "ProductVideos_productvideobox__m33r-",
	"videoSize": "ProductVideos_videoSize__1oErw"
};


/***/ }),

/***/ 6403:
/***/ (function(module) {

// Exports
module.exports = {
	"verticalslider": "VerticalSlider_verticalslider__1P504",
	"slidercontent": "VerticalSlider_slidercontent__1zliZ",
	"mobilepagination": "VerticalSlider_mobilepagination__3by7y",
	"slidetitle": "VerticalSlider_slidetitle__1hHov",
	"containerinner": "VerticalSlider_containerinner__1cDUH",
	"textcontainer": "VerticalSlider_textcontainer__1K-BN",
	"imagecontainer": "VerticalSlider_imagecontainer__1Ykjm",
	"pager": "VerticalSlider_pager__NzQnQ",
	"dot": "VerticalSlider_dot__JIwYA",
	"active": "VerticalSlider_active__3EU70",
	"dotgrey": "VerticalSlider_dotgrey__3MKOZ",
	"mobileslider": "VerticalSlider_mobileslider__2h-pR",
	"desktopslider": "VerticalSlider_desktopslider__-HYkc"
};


/***/ })

};
;