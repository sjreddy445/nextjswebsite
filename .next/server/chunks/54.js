exports.id = 54;
exports.ids = [54];
exports.modules = {

/***/ 4085:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./edge-stats-2per.svg": [
		2383,
		2383
	],
	"./edge-stats-2x.svg": [
		4455,
		4455
	],
	"./edge-stats-40.svg": [
		194,
		194
	],
	"./mobility.svg": [
		6861,
		6861
	],
	"./pathfinder.svg": [
		5011,
		5011
	],
	"./recruit.svg": [
		104,
		104
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
webpackAsyncContext.id = 4085;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 54:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ Home; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./Components/HeaderBanner/HeaderBanner.js + 5 modules
var HeaderBanner = __webpack_require__(6373);
;// CONCATENATED MODULE: ./Payloads/Home/Header.js
const payload = {
  bgRq: false,
  bgImg: 'women_header.png',
  imgAlt: "getedge HR solutions",
  bgClr: "light-sliver-bg",
  mainTitle1: "Talent decisions,",
  mainTitle2: "Simplified.",
  subtitle: "A future-proof Talent Marketplace solution "
};
;// CONCATENATED MODULE: ./Payloads/Home/ProductList.js
const ProductList_payload = [{
  title1: "EDGE",
  title2: "Pathfinder.",
  subtitle: "Get the right skills mix to build the workforce of the future",
  imgAlt: "AI talent management Marketplace",
  image: "https://picsum.photos/250",
  url: "/products/pathfinder"
}, {
  title1: "EDGE",
  title2: "Mobility.",
  subtitle: "Comprehensive employee view easing internal mobility",
  imgAlt: "ai in HR Management",
  image: "https://picsum.photos/250",
  url: "/products/mobility"
}, {
  title1: "EDGE",
  title2: "Recruit.",
  subtitle: "Hire the best talent before your competition does",
  imgAlt: "get edge talent management",
  image: "https://picsum.photos/250",
  url: "/products/recruit"
}];
;// CONCATENATED MODULE: ./Payloads/Home/Secret.js
const Secret_payload = {
  mainTitle: "Our flagship product",
  subTitle: "Pathfinder, an AI-based employee experience that helps you shape your career.",
  imgUrl: __webpack_require__(6690)/* .default.src */ .Z.src,
  youtube: "https://youtu.be/7jMkwj8cDTA"
};
// EXTERNAL MODULE: ./Payloads/Home/BrandList.js
var BrandList = __webpack_require__(6364);
;// CONCATENATED MODULE: ./Payloads/Home/Services.js
const Services_payload = {
  title: "Our solutions are personalised to the problem statement.",
  serviceList: [{
    title: "Demand-supply forecasting"
  }, {
    title: "Skill gap analysis"
  }, {
    title: "Learning"
  }, {
    title: "Changing skills mix"
  }, {
    title: "Productivity improvement"
  }, {
    title: "Flight risk"
  }, {
    title: "Talent acquisition"
  }, {
    title: "Resource optimization"
  }]
};
// EXTERNAL MODULE: ./Payloads/Home/OurProducts.js
var OurProducts = __webpack_require__(1402);
// EXTERNAL MODULE: ./Payloads/Testimonials/client.js
var client = __webpack_require__(700);
// EXTERNAL MODULE: ./Payloads/Awards/logo.js
var logo = __webpack_require__(4633);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: ./Components/ProductList/ProductList.module.scss
var ProductList_module = __webpack_require__(5533);
var ProductList_module_default = /*#__PURE__*/__webpack_require__.n(ProductList_module);
;// CONCATENATED MODULE: ./Components/ProductList/ProductCard.js




function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class ProductCard extends external_react_.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "loadImage", title => {
      let name = title.slice(0, -1).toLowerCase();
      let productImg;
      __webpack_require__(4085)(`./${name}.svg`).then(image => {
        this.setState({
          productImg: image.default.src
        });
      });
      return productImg;
    });

    this.state = {
      productImg: ""
    };
  }

  componentDidMount() {
    this.loadImage(this.props.data.title2);
  }

  render() {
    return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
        md: 4,
        sm: 12,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "d-none d-md-block",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: this.state.productImg,
            alt: this.props.data.imgAlt,
            className: "img-fluid"
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
          className: (ProductList_module_default()).cardTitle + " text-lg mt-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
            children: this.props.data.title1
          }), " ", /*#__PURE__*/jsx_runtime_.jsx("br", {}), /*#__PURE__*/jsx_runtime_.jsx("b", {
            children: this.props.data.title2
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (ProductList_module_default()).cardSubtitle + " text-sm mt-2",
          children: this.props.data.subtitle
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: (ProductList_module_default()).cardLink + " text-xs mt-2",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: this.props.data.url,
            children: "SEE MORE"
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "d-sm-block d-md-none sm-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("img", {
            src: this.state.productImg,
            alt: this.props.data.title1 + this.props.data.title2,
            className: "img-fluid"
          })
        })]
      })
    });
  }

}

/* harmony default export */ var ProductList_ProductCard = (ProductCard);
;// CONCATENATED MODULE: ./Components/ProductList/ProductList.js






class ProductList extends external_react_.Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-inner",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
        className: "m-0",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
          md: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "title text-lg mb-4",
            children: /*#__PURE__*/jsx_runtime_.jsx("b", {
              children: "We do this in 3 ways"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Row, {
          className: "w-100",
          children: this.props.data.map((card, i) => /*#__PURE__*/jsx_runtime_.jsx(ProductList_ProductCard, {
            data: card
          }, i))
        })]
      })
    });
  }

}

/* harmony default export */ var ProductList_ProductList = (ProductList);
;// CONCATENATED MODULE: ./Components/SingleTextImageBanner/TextSect.js




class TextSect extends external_react_.Component {
  render() {
    let {
      data
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "text-sm mb-3 mt-2 pl-2 font-weight-bold",
        children: data.mainTitle
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "px-2",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("h2", {
          className: "text-weight-500 text-xl",
          children: [" ", data.subTitle, " "]
        })
      })]
    });
  }

}

/* harmony default export */ var SingleTextImageBanner_TextSect = (TextSect);
// EXTERNAL MODULE: ./Utils/Utils.js
var Utils = __webpack_require__(5005);
// EXTERNAL MODULE: external "react-youtube"
var external_react_youtube_ = __webpack_require__(8728);
var external_react_youtube_default = /*#__PURE__*/__webpack_require__.n(external_react_youtube_);
;// CONCATENATED MODULE: ./Components/SingleTextImageBanner/ImageSect.js





class ImageSect extends external_react_.Component {
  render() {
    let videoId;

    if (this.props.data.youtube) {
      videoId = (0,Utils/* YouTubeGetID */.rR)(this.props.data.youtube);
    }

    const opts = {
      playerVars: {
        rel: 0
      }
    };
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: this.props.data.youtube ? /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "embed-responsive embed-responsive-16by9",
        children: /*#__PURE__*/jsx_runtime_.jsx((external_react_youtube_default()), {
          videoId: videoId,
          opts: opts,
          onReady: this._onReady,
          className: "embed-responsive-item"
        })
      }) : /*#__PURE__*/jsx_runtime_.jsx("img", {
        src: this.props.data.imgUrl,
        className: "img-fluid img-round",
        alt: "edge-news"
      })
    });
  }

}

/* harmony default export */ var SingleTextImageBanner_ImageSect = (ImageSect);
;// CONCATENATED MODULE: ./Components/SingleTextImageBanner/SingleTextImageBanner.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { SingleTextImageBanner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function SingleTextImageBanner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class SingleTextImageBanner extends external_react_.Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container-inner",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
          className: "no-gutters",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            md: 5,
            sm: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(SingleTextImageBanner_TextSect, _objectSpread({}, this.props))
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            md: 7,
            sm: 12,
            className: "sm-mt-2",
            children: /*#__PURE__*/jsx_runtime_.jsx(SingleTextImageBanner_ImageSect, _objectSpread({}, this.props))
          })]
        })
      })
    });
  }

}

/* harmony default export */ var SingleTextImageBanner_SingleTextImageBanner = (SingleTextImageBanner);
;// CONCATENATED MODULE: ./Payloads/Home/Stats.js
const Stats_payload = [{
  number: "40%",
  text: "Reduction in time to fulfil."
}, {
  number: "2X",
  text: "Improvement in fitment."
}, {
  number: "2%",
  text: "Improvement in employee utilization."
}];
// EXTERNAL MODULE: ./Components/HomeStats/HomeStats.module.scss
var HomeStats_module = __webpack_require__(843);
var HomeStats_module_default = /*#__PURE__*/__webpack_require__.n(HomeStats_module);
;// CONCATENATED MODULE: ./Components/HomeStats/StatsBox.js




class StatsBox extends external_react_.Component {
  render() {
    let {
      data
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: (HomeStats_module_default()).statsBox,
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: (HomeStats_module_default()).number,
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          children: data.number
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text",
        children: /*#__PURE__*/jsx_runtime_.jsx("h3", {
          className: (HomeStats_module_default()).text + " text-lg",
          children: data.text
        })
      })]
    });
  }

}
;// CONCATENATED MODULE: ./Components/HomeStats/HomeStats.js







class HomeStats extends external_react_.Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "container-inner home-stats d-flex justify-content-center",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
        className: "no-gutters m-0",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
          md: 12,
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "title ml-3 text-lg mb-4",
            children: /*#__PURE__*/jsx_runtime_.jsx("b", {
              children: "Our Impact"
            })
          })
        }), Stats_payload.map((stats, i) => /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
          md: 4,
          xs: 12,
          className: "mt-4",
          children: /*#__PURE__*/jsx_runtime_.jsx(StatsBox, {
            data: stats
          })
        }, i))]
      })
    });
  }

}

/* harmony default export */ var HomeStats_HomeStats = (HomeStats);
// EXTERNAL MODULE: ./Components/BrandList/BrandList.js + 2 modules
var BrandList_BrandList = __webpack_require__(4344);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3783);
var external_react_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_);
// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__(2047);
;// CONCATENATED MODULE: ./Components/ServiceBanner/TitleSect.js






const TitleSect = props => {
  const scrollToContact = () => {
    let scroller = (external_react_scroll_default()).scroller;
    scroller.scrollTo('contactWidget', {
      duration: 800,
      delay: 0,
      offset: external_react_device_detect_.isBrowser ? -20 : 320,
      smooth: 'easeInOutQuart'
    });
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
      className: "text-lg font-weight-bold",
      children: "Our Offerings"
    }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
      className: "text-xl mt-4 font-weight-bold",
      children: props.data.title
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "text-sm mt-4 text-brand pointer",
      onClick: scrollToContact,
      children: "LETS DISCUSS YOURS"
    })]
  });
};

/* harmony default export */ var ServiceBanner_TitleSect = (TitleSect);
// EXTERNAL MODULE: ./Components/ServiceBanner/ServiceBanner.module.scss
var ServiceBanner_module = __webpack_require__(811);
var ServiceBanner_module_default = /*#__PURE__*/__webpack_require__.n(ServiceBanner_module);
;// CONCATENATED MODULE: ./Components/ServiceBanner/ListSect.js









class ListSect extends external_react_.Component {
  render() {
    let serviceList = this.props.data.serviceList;
    let videoId = (0,Utils/* YouTubeGetID */.rR)("https://www.youtube.com/watch?v=uR_FJl6WyKM");
    const opts = {
      playerVars: {
        rel: 0
      }
    };
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "",
        children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Row, {
          children: serviceList.map((list, i) => /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            md: 6,
            sm: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: (ServiceBanner_module_default()).serviceList,
              children: list.title
            })
          }, i))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "section-margin mb-n5",
        children: /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "d-flex justify-content-center",
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "embed-responsive embed-responsive-16by9",
            children: /*#__PURE__*/jsx_runtime_.jsx((external_react_youtube_default()), {
              videoId: videoId,
              opts: opts,
              onReady: this._onReady,
              className: "embed-responsive-item"
            })
          })
        })
      })]
    });
  }

}

/* harmony default export */ var ServiceBanner_ListSect = (ListSect);
;// CONCATENATED MODULE: ./Components/ServiceBanner/ServiceBanner.js



function ServiceBanner_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function ServiceBanner_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ServiceBanner_ownKeys(Object(source), true).forEach(function (key) { ServiceBanner_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ServiceBanner_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function ServiceBanner_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ServiceBanner extends external_react_.Component {
  render() {
    return /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dark-grey-bg",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "container-inner py-5",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            md: 4,
            sm: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(ServiceBanner_TitleSect, ServiceBanner_objectSpread({}, this.props))
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            md: 8,
            sm: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(ServiceBanner_ListSect, ServiceBanner_objectSpread({}, this.props))
          })]
        })
      })
    });
  }

}

/* harmony default export */ var ServiceBanner_ServiceBanner = (ServiceBanner);
// EXTERNAL MODULE: ./Components/Awards/Awards.js + 2 modules
var Awards = __webpack_require__(450);
// EXTERNAL MODULE: ./Components/Testimonials/Testimonials.js + 1 modules
var Testimonials = __webpack_require__(3675);
// EXTERNAL MODULE: ./Components/ContactSect/Contact.js + 2 modules
var Contact = __webpack_require__(9851);
// EXTERNAL MODULE: ./Components/OurProducts/OurProducts.js + 1 modules
var OurProducts_OurProducts = __webpack_require__(4723);
// EXTERNAL MODULE: ./Components/TopNav/Utils.js
var TopNav_Utils = __webpack_require__(2220);
// EXTERNAL MODULE: external "react-reveal/Fade"
var Fade_ = __webpack_require__(7206);
var Fade_default = /*#__PURE__*/__webpack_require__.n(Fade_);
// EXTERNAL MODULE: external "react-helmet"
var external_react_helmet_ = __webpack_require__(6481);
;// CONCATENATED MODULE: ./pages/index.js



























function Home() {
  (0,external_react_.useEffect)(() => {
    (0,TopNav_Utils/* setNavColor */.Z)("transparent-bg");
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)((Fade_default()), {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_react_helmet_.Helmet, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "getEdGE AI: HR Strategic Workforce Talent Management Simplified"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "getEdGE talent acquisition tool is powered using Artificial Intelligence to ensure talent management systems are simplified.  HR solution for talent management. "
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/jsx_runtime_.jsx(HeaderBanner/* default */.Z, {
        data: payload
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "section-margin",
      children: /*#__PURE__*/jsx_runtime_.jsx(HomeStats_HomeStats, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "section-margin",
      children: /*#__PURE__*/jsx_runtime_.jsx(ProductList_ProductList, {
        data: ProductList_payload
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "section-margin",
      children: /*#__PURE__*/jsx_runtime_.jsx(SingleTextImageBanner_SingleTextImageBanner, {
        data: Secret_payload
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "section-margin",
      children: /*#__PURE__*/jsx_runtime_.jsx(BrandList_BrandList/* default */.Z, {
        data: BrandList/* payload */.x
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "section-margin",
      children: /*#__PURE__*/jsx_runtime_.jsx(ServiceBanner_ServiceBanner, {
        data: Services_payload
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "light-sliver-bg",
      children: /*#__PURE__*/jsx_runtime_.jsx(Awards/* default */.Z, {
        data: logo/* payload */.x
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "section-margin",
      children: /*#__PURE__*/jsx_runtime_.jsx(Contact/* default */.Z, {})
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "section-margin light-sliver-bg",
      children: /*#__PURE__*/jsx_runtime_.jsx(Testimonials/* default */.Z, {
        data: client/* payload */.x
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "section-margin",
      children: /*#__PURE__*/jsx_runtime_.jsx(OurProducts_OurProducts/* default */.Z, {
        data: OurProducts/* payload */.x
      })
    })]
  });
}

/***/ }),

/***/ 6690:
/***/ (function(__unused_webpack_module, __webpack_exports__) {

"use strict";
/* harmony default export */ __webpack_exports__["Z"] = ({"src":"/_next/static/image/Assets/images/Home/edge_graph.7c0774e8b936841a625687047af59b85.png","height":540,"width":960,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAbklEQVR4nBVOSxYDIQgLitjp/e8KFYEyL7v86Zjl8cDkiTkHIi5ENsYYqCqQ6smfOT2PwK/V3l8kCqsNNAhk6uketFYnGtSCqkOYIXuCuiYBUJuQWTV5wDSwGD3bLRHRdJHfJheX2cHzEerQ+6P+Q5ZC1lKgUaoAAAAASUVORK5CYII="});

/***/ }),

/***/ 843:
/***/ (function(module) {

// Exports
module.exports = {
	"statsBox": "HomeStats_statsBox__1V0m5",
	"number": "HomeStats_number__2MdL4",
	"text": "HomeStats_text__3OLKr"
};


/***/ }),

/***/ 5533:
/***/ (function(module) {

// Exports
module.exports = {
	"cardTitle": "ProductList_cardTitle__3jJK4",
	"cardSubtitle": "ProductList_cardSubtitle__3p-LR",
	"cardLink": "ProductList_cardLink__ymnJx"
};


/***/ }),

/***/ 811:
/***/ (function(module) {

// Exports
module.exports = {
	"serviceList": "ServiceBanner_serviceList__1hJ4M"
};


/***/ })

};
;