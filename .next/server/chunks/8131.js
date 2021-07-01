exports.id = 8131;
exports.ids = [8131];
exports.modules = {

/***/ 8131:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2485);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7795);
/* harmony import */ var react_html_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_html_parser__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _career_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3241);
/* harmony import */ var _career_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_career_module_scss__WEBPACK_IMPORTED_MODULE_4__);








class CareerCard extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor() {
    super();
    this.state = {
      details: [],
      responsibilities: [],
      requirements: [],
      salesMmanagement: [],
      prospects: [],
      proposals: [],
      productKnowledge: [],
      why: {},
      process: [],
      qualifications: [],
      skills: []
    };
  }

  componentDidMount() {
    console.log("this.ptops", this.props);
    this.setState({
      details: this.props.data.details,
      responsibilities: this.props.data.responsibilities,
      requirements: this.props.data.requirements,
      salesMmanagement: this.props.data.salesMmanagement,
      prospects: this.props.data.prospects,
      proposals: this.props.data.proposals,
      productKnowledge: this.props.data.productKnowledge,
      why: this.props.data.why,
      process: this.props.data.process,
      qualifications: this.props.data.qualifications,
      skills: this.props.data.skills
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().careercard),
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().leftcol),
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
          className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().coltitle),
          children: "Details"
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("table", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
            children: this.state.details && this.state.details.map((data, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
              children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                children: data.label
              }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                children: data.text
              })]
            }, `details-table-row-${index}`))
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().rightcol),
        children: [this.state.responsibilities ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
            className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().coltitle),
            children: "Job Responsibilities"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: this.state.responsibilities.map((data, listIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().listitem),
              children: [data.text, data.sub ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: data.sub.map((subData, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sublistitem),
                  children: react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(subData.text)
                }, `sub_list_${index}`))
              }) : '']
            }, `list-item-${listIndex}`))
          })]
        }) : "", this.state.requirements ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
            className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().coltitle),
            children: "Job Requirements"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: this.state.requirements.map((data, listIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().listitem),
              children: [react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(data.text), data.sub ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: data.sub.map((subData, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sublistitem),
                  children: react_html_parser__WEBPACK_IMPORTED_MODULE_3___default()(subData.text)
                }, `sub_list_${index}`))
              }) : '']
            }, `list-item-${listIndex}`))
          })]
        }) : "", this.state.salesMmanagement ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
            className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().coltitle),
            children: "Sales Management"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: this.state.salesMmanagement.map((data, listIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().listitem),
              children: [data.text, data.sub ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: data.sub.map((subData, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sublistitem),
                  children: subData.text
                }, `sub_list_${index}`))
              }) : '']
            }, `list-item-${listIndex}`))
          })]
        }) : "", this.state.prospects ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
            className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().coltitle),
            children: "Prospects and Pipeline Management"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: this.state.prospects.map((data, listIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().listitem),
              children: [data.text, data.sub ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: data.sub.map((subData, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                  className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sublistitem),
                  children: [" ", subData.text]
                }, `sub_list_${index}`))
              }) : '']
            }, `list-item-${listIndex}`))
          })]
        }) : "", this.state.proposals ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
            className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().coltitle),
            children: "Proposals, forecast, contracts, market, etc."
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: this.state.proposals.map((data, listIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().listitem),
              children: [data.text, data.sub ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: data.sub.map((subData, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sublistitem),
                  children: subData.text
                }, `sub_list_${index}`))
              }) : '']
            }, `list-item-${listIndex}`))
          })]
        }) : "", this.state.productKnowledge ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
            className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().coltitle),
            children: "Product knowledge"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: this.state.productKnowledge.map((data, listIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().listitem),
              children: [data.text, data.sub ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: data.sub.map((subData, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sublistitem),
                  children: subData.text
                }, `sub_list_${index}`))
              }) : '']
            }, `list-item-${listIndex}`))
          })]
        }) : "", this.state.skills ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
            className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().coltitle),
            children: "Role Skills"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: this.state.skills.map((data, listIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().listitem),
              children: [data.text, data.sub ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: data.sub.map((subData, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sublistitem),
                  children: subData.text
                }, `sub_list_${index}`))
              }) : '']
            }, `list-item-${listIndex}`))
          })]
        }) : "", this.state.qualifications ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
            className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().coltitle),
            children: "Preferred Qualifications"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: this.state.qualifications.map((data, listIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().listitem),
              children: [data.text, data.sub ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: data.sub.map((subData, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sublistitem),
                  children: subData.text
                }, `sub_list_${index}`))
              }) : '']
            }, `list-item-${listIndex}`))
          })]
        }) : "", this.state.process ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
            className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().coltitle),
            children: "Interview process"
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
            className: "ml-4",
            children: process.text
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: this.state.process && this.state.process.label && this.state.process.label.map((data, listIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
              className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().listitem),
              children: [data.text, data.sub ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                children: data.sub.map((subData, index) => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                  className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().sublistitem),
                  children: subData.text
                }, `sub_list_${index}`))
              }) : '']
            }, `list-item-${listIndex}`))
          })]
        }) : "", this.state.why ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
            className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().coltitle),
            children: this.state.why.label
          }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
              className: (_career_module_scss__WEBPACK_IMPORTED_MODULE_4___default().listitem),
              children: this.state.why.text
            })
          })]
        }) : "", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Contact__WEBPACK_IMPORTED_MODULE_2__.default, {})
        })]
      })]
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CareerCard);

/***/ }),

/***/ 2485:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Contact; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



class Contact extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  render() {
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "ml-4 my-4",
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
        className: "text-sm",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("b", {
          children: ["Interested? Send your details with updated CV to  ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: "mailto:careers@edgenetworks.in",
            children: "careers@edgenetworks.in"
          })]
        })
      })
    });
  }

}

/***/ }),

/***/ 3241:
/***/ (function(module) {

// Exports
module.exports = {
	"accordionhead": "career_accordionhead__3wdf3",
	"headtitle": "career_headtitle__RtyyE",
	"careerpage": "career_careerpage__1JMEP",
	"boldtitle": "career_boldtitle__2uMEZ",
	"aboutedge": "career_aboutedge__2OZqf",
	"leftcol": "career_leftcol__12vKV",
	"rightcol": "career_rightcol__4Azwz",
	"careercard": "career_careercard__1RBe4",
	"coltitle": "career_coltitle__18MCs",
	"listitem": "career_listitem__2LxsJ",
	"applyform": "career_applyform__2j0M6"
};


/***/ })

};
;