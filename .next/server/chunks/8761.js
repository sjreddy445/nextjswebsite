exports.id = 8761;
exports.ids = [8761];
exports.modules = {

/***/ 5761:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ InfoListCard; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _InfoListCard_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8387);
/* harmony import */ var _InfoListCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_InfoListCard_module_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7051);
/* harmony import */ var html_react_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html_react_parser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1273);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);






class InfoListCard extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(props) {
    super();
    this.collapsible = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createRef();
    this.expanded = false;
    this.toggleExpansion = this.toggleExpansion.bind(this);
  }

  componentDidMount() {
    this.collapsible = this.collapsible.current;
  }

  toggleExpansion() {
    if (!this.expanded) {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.collapsible).css({
        "height": this.collapsible.scrollHeight
      });
      this.expanded = true;
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.collapsible).css({
        "height": ''
      });
      this.expanded = false;
    }
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_InfoListCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().infolistcard),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_InfoListCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().header),
        onClick: this.toggleExpansion,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h3", {
          className: (_InfoListCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().text) + " m-0",
          children: [this.props.index, " ", this.props.data.title]
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
          className: (_InfoListCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().arrowicon) + " icon-chevron-down"
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_InfoListCard_module_scss__WEBPACK_IMPORTED_MODULE_4___default().description),
        ref: this.collapsible,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
          className: "text-xs text-line-height-1-6",
          children: [" ", html_react_parser__WEBPACK_IMPORTED_MODULE_2___default()(this.props.data.body)]
        })
      })]
    });
  }

}

/***/ }),

/***/ 8387:
/***/ (function(module) {

// Exports
module.exports = {
	"infolistcard": "InfoListCard_infolistcard__14vuk",
	"header": "InfoListCard_header__1Jc2v",
	"arrowicon": "InfoListCard_arrowicon__1kA8w",
	"text": "InfoListCard_text__2hXju",
	"description": "InfoListCard_description__3OEVa",
	"expanded": "InfoListCard_expanded__1MD9I"
};


/***/ }),

/***/ 6113:
/***/ (function(module) {

// Exports
module.exports = {
	"elapage": "ElaPage_elapage__11QlX",
	"infolisting": "ElaPage_infolisting__3naeG",
	"elafooter": "ElaPage_elafooter__3Ldxt",
	"mt5": "ElaPage_mt5__1eSEc"
};


/***/ })

};
;