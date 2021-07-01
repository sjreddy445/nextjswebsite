exports.id = 8411;
exports.ids = [8411];
exports.modules = {

/***/ 7193:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./about-us.svg": [
		6829,
		6829
	],
	"./blog.svg": [
		6187,
		6187
	],
	"./careers.svg": [
		8302,
		8302
	],
	"./contact.svg": [
		3458,
		3458
	],
	"./ela.svg": [
		5782,
		7051
	],
	"./life_at_edge.jpg": [
		4517,
		4517
	],
	"./mobility.svg": [
		1412,
		1412
	],
	"./pathfinder.svg": [
		2195,
		2195
	],
	"./recruit.svg": [
		1593,
		1593
	],
	"./sitemap.svg": [
		6529,
		6529
	],
	"./women_header.png": [
		6049,
		6049
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 7193;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 7770:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./credits-modal.svg": [
		67
	],
	"./line-chart-dark.svg": [
		9286,
		9286
	],
	"./line-chart.svg": [
		8944,
		8944
	],
	"./message-modal.svg": [
		2581,
		2581
	],
	"./timer-line-dark.svg": [
		1302,
		1302
	],
	"./timer-line.svg": [
		1564,
		1564
	],
	"./user-follow.svg": [
		9854,
		9854
	],
	"./user-heart-dark.svg": [
		4152,
		4152
	],
	"./user-heart.svg": [
		5909,
		5909
	],
	"./vip-diamond.svg": [
		4809,
		4809
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 7770;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 8274:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./mobility/slider/mobility-bg.svg": [
		3035,
		3035
	],
	"./mobilityLogo.svg": [
		4341,
		4341
	],
	"./pathfinder/slider/pathfinder-bg.svg": [
		2970,
		2970
	],
	"./pathfinderLogo.svg": [
		9594,
		9594
	],
	"./recruit/slider/recruit-bg.svg": [
		4788,
		4788
	],
	"./recruitLogo.svg": [
		4048,
		4048
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 8274;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 6373:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ HeaderBanner_HeaderBanner; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: ./Components/HeaderBanner/HeaderBanner.module.css
var HeaderBanner_module = __webpack_require__(1228);
var HeaderBanner_module_default = /*#__PURE__*/__webpack_require__.n(HeaderBanner_module);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3783);
var external_react_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_);
;// CONCATENATED MODULE: ./Components/HeaderBanner/TextSect.js




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class TextSect extends external_react_.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "loadImage", title => {
      let name = title;
      let productImg;
      __webpack_require__(8274)(`./${name}.svg`).then(image => {
        this.setState({
          titleImg: image.default.src
        });
      });
      return productImg;
    });

    _defineProperty(this, "scrollToContact", () => {
      let scroller = (external_react_scroll_default()).scroller;
      scroller.scrollTo('contactWidget', {
        duration: 800,
        delay: 0,
        offset: -80,
        smooth: 'easeInOutQuart'
      });
    });

    this.state = {
      titleImg: ""
    };
  }

  componentDidMount() {
    if (this.props.data.titleImg) {
      this.loadImage(this.props.data.titleImg);
    }
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (HeaderBanner_module_default()).headerTitle,
          children: !this.props.data.titleImg ? /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
              className: "text-xxl font-weight-bold",
              children: ["  ", this.props.data.mainTitle1]
            }), /*#__PURE__*/jsx_runtime_.jsx("h1", {
              className: "text-xxl font-weight-bold",
              children: this.props.data.mainTitle2
            })]
          }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: this.state.titleImg,
            alt: this.props.data.titleImg,
            className: "img-fluid"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mt-4",
          children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
            className: "text-lg text-line-height-1-6 text-weight-400",
            children: this.props.data.subtitle
          })
        }), !this.props.data.hideDemoBtn ? /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "mt-4",
          children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Button, {
            color: "primary",
            onClick: this.scrollToContact,
            children: "REQUEST DEMO"
          })
        }) : ""]
      })
    });
  }

}

/* harmony default export */ var HeaderBanner_TextSect = (TextSect);
// EXTERNAL MODULE: ./pages/_app.js + 7 modules
var _app = __webpack_require__(9142);
;// CONCATENATED MODULE: ./Components/SubHeader/TitleSect.js



class TitleSect extends external_react_.Component {
  render() {
    let {
      subHeader
    } = this.props.data;
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "text-xl font-weight-bold",
        children: subHeader.title
      })
    });
  }

}

/* harmony default export */ var SubHeader_TitleSect = (TitleSect);
// EXTERNAL MODULE: ./Components/SubHeader/SubHeader.module.scss
var SubHeader_module = __webpack_require__(2771);
var SubHeader_module_default = /*#__PURE__*/__webpack_require__.n(SubHeader_module);
;// CONCATENATED MODULE: ./Components/SubHeader/ListItem.js




function ListItem_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class ListItem extends external_react_.Component {
  constructor(props) {
    super(props);

    ListItem_defineProperty(this, "loadImage", icon => {
      let name = icon;
      __webpack_require__(7770)(`./${name}.svg`).then(image => {
        this.setState({
          icon: image.default.src
        });
      }); // return icon
    });

    this.state = {
      icon: ""
    };
  }

  componentDidMount() {
    this.loadImage(this.props.item.icon);
  }

  render() {
    let {
      item
    } = this.props;
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: (SubHeader_module_default()).item,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (SubHeader_module_default()).iconBox,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "ed-icon1",
            children: /*#__PURE__*/jsx_runtime_.jsx("img", {
              src: this.state.icon,
              alt: item.icon,
              className: "ed-icon"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (SubHeader_module_default()).textBox,
          children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
            className: "text-md ml-4 text-line-height-1-6",
            children: item.msg
          })
        })]
      })
    });
  }

}

/* harmony default export */ var SubHeader_ListItem = (ListItem);
;// CONCATENATED MODULE: ./Components/SubHeader/ListSect.js





class ListSect extends external_react_.Component {
  render() {
    let {
      items
    } = this.props.data.subHeader;
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "d-flex flex-mobile-wrap mt-3",
      children: items.map((item, i) => /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
        md: 4,
        sm: 12,
        className: "p-0",
        children: /*#__PURE__*/jsx_runtime_.jsx(SubHeader_ListItem, {
          item: item
        })
      }, i))
    });
  }

}

/* harmony default export */ var SubHeader_ListSect = (ListSect);
;// CONCATENATED MODULE: ./Components/SubHeader/SubHeader.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { SubHeader_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SubHeader_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class SubHeader extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "pb-5",
      children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Row, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
          md: 5,
          children: /*#__PURE__*/jsx_runtime_.jsx(SubHeader_TitleSect, _objectSpread({}, this.props))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Row, {
        children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
          md: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx(SubHeader_ListSect, _objectSpread({}, this.props))
        })
      })]
    });
  }

}

/* harmony default export */ var SubHeader_SubHeader = (SubHeader);
;// CONCATENATED MODULE: ./Components/HeaderBanner/HeaderBanner.js



function HeaderBanner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function HeaderBanner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { HeaderBanner_ownKeys(Object(source), true).forEach(function (key) { HeaderBanner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { HeaderBanner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function HeaderBanner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //  import ProductList from '../ProductList/ProductList';
// import "./headerBanner.scss"
// import styles from './HeaderBanner.module.css'

 // import BannerImg from '../../Assets/images/Home/home-banner.png'



class HeaderBanner extends external_react_.Component {
  constructor(props) {
    super(props);

    HeaderBanner_defineProperty(this, "loadImage", (title, imgAlt) => {
      let name = title;
      let productImg;
      __webpack_require__(7193)(`./${name}`).then(image => {
        this.setState({
          bgImg: image.default.src,
          imgAlt: imgAlt
        });
      });
      return productImg;
    });

    this.state = {
      bgImg: "",
      imgAlt: ""
    };
  }

  componentDidMount() {
    if (this.props.data.bgImg) {
      this.loadImage(this.props.data.bgImg, this.props.data.imgAlt);
    }
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: this.props.data.bgClr ? this.props.data.bgClr + " header-banner" : "header-banner",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "right-bg",
        style: !this.props.data.bgImg ? {
          backgroundImage: `url('${this.props.data.bgCover}')`
        } : {
          backround: 'auto'
        },
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "container-inner content",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
            className: "m-0 no-gutters",
            children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
              md: 6,
              sm: 12,
              className: "d-sm-block d-md-none pb-5",
              children: this.props.data.bgImg ? /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: this.state.bgImg,
                alt: this.state.imgAlt,
                className: "img-fluid"
              }) : ""
            }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
              md: 6,
              sm: 12,
              className: _app.default.titleContainer,
              children: /*#__PURE__*/jsx_runtime_.jsx(HeaderBanner_TextSect, HeaderBanner_objectSpread({}, this.props))
            }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
              md: 6,
              sm: 12,
              className: "d-none d-md-block",
              children: this.props.data.bgImg ? /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: this.state.bgImg,
                alt: this.state.imgAlt,
                className: "img-fluid w-90"
              }) : ""
            }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
              md: 12,
              children: this.props.data.subHeader ? /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "sm-mt-5",
                children: /*#__PURE__*/jsx_runtime_.jsx(SubHeader_SubHeader, HeaderBanner_objectSpread({}, this.props))
              }) : ""
            })]
          })
        })
      })
    });
  }

}

/* harmony default export */ var HeaderBanner_HeaderBanner = (HeaderBanner);

/***/ }),

/***/ 2220:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ setNavColor; }
/* harmony export */ });
/* harmony import */ var _Utils_Utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5005);

const setNavColor = color => {
  _Utils_Utils__WEBPACK_IMPORTED_MODULE_0__/* .event.emit */ .B.emit('setNavColor', color);
};

/***/ }),

/***/ 1228:
/***/ (function(module) {

// Exports
module.exports = {
	"secondTitle": "HeaderBanner_secondTitle__iSqSy",
	"headerTitle": "HeaderBanner_headerTitle__DURPR",
	"titleContainer": "HeaderBanner_titleContainer__S7MGt"
};


/***/ }),

/***/ 2771:
/***/ (function(module) {

// Exports
module.exports = {
	"item": "SubHeader_item__39psl"
};


/***/ })

};
;