exports.id = 9142;
exports.ids = [9142];
exports.modules = {

/***/ 8536:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "vO": function() { return /* binding */ MAILCHIMP_URL; },
/* harmony export */   "RM": function() { return /* binding */ BLOG; },
/* harmony export */   "HF": function() { return /* binding */ PODCAST; },
/* harmony export */   "FM": function() { return /* binding */ VIDEOS; }
/* harmony export */ });
/* unused harmony exports API_BASE_URL, YOUTUBE_BASE_URL, apiUrls */
const API_BASE_URL = "https://api.getedge.ai";
const MAILCHIMP_URL = "https://edgenetworks.us14.list-manage.com/subscribe/post-json?u=f659ca1b353586a0c99df3cad&amp;id=0049088ee0";
const YOUTUBE_BASE_URL = "https://www.youtube.com/channel/UCrceycnUns21KLXYubEZuTA";
const apiUrls = {
  BLOGS: `${API_BASE_URL}/blogs`,
  VIDEOS: `${API_BASE_URL}/blog-videos`,
  PODCAST: `${API_BASE_URL}/blog-videos`
};
const BLOG = "/blogs";
const PODCAST = "/podcasts";
const VIDEOS = "/blog-videos";

/***/ }),

/***/ 9142:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _app; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: ./Utils/Utils.js
var Utils = __webpack_require__(5005);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
// EXTERNAL MODULE: external "react-scroll"
var external_react_scroll_ = __webpack_require__(3783);
var external_react_scroll_default = /*#__PURE__*/__webpack_require__.n(external_react_scroll_);
;// CONCATENATED MODULE: ./Components/TopNav/TopNav.js




function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




 // import "./TopNav.scss";




class TopNav extends external_react_.Component {
  constructor(props) {
    super();

    _defineProperty(this, "scrollToContact", () => {
      let scroller = (external_react_scroll_default()).scroller;
      scroller.scrollTo('contactWidget', {
        duration: 800,
        delay: 0,
        offset: -80,
        smooth: 'easeInOutQuart'
      });
    });

    _defineProperty(this, "handleNavigate", () => {
      const {
        router: {
          pathname
        }
      } = this.props;

      if (pathname === '/' || pathname.includes('/products')) {
        this.scrollToContact();
      } else {
        this.props.router.push('/contact');
      }
    });

    this.state = {
      mobileMenuActive: false,
      bgClass: ""
    };
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
    this.hideMobileMenu = this.hideMobileMenu.bind(this);
    this.scrollDiv = /*#__PURE__*/external_react_default().createRef();
  }

  componentDidMount() {
    const {
      router: {
        pathname
      }
    } = this.props;

    if (pathname === "/blog") {
      this.setState({
        bgClass: 'transparent-bg text-white'
      });
    }
  }

  toggleMobileMenu() {
    this.setState({
      mobileMenuActive: !this.state.mobileMenuActive
    });
  }

  hideMobileMenu() {
    this.setState({
      mobileMenuActive: false
    });
  }

  componentDidMount() {
    Utils/* event.on */.B.on("setNavColor", data => {
      this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
        bgClass: data
      }));
    });
    this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
      bgState: 0
    }));
    window.addEventListener("scroll", () => {
      if (this.state.bgState === 0 && window.pageYOffset > 100) {
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          bgState: 1
        }));
      } else if (this.state.bgState === 1 && window.pageYOffset <= 100) {
        this.setState(_objectSpread(_objectSpread({}, this.state), {}, {
          bgState: 0
        }));
      }
    });
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "text-center",
        style: {
          backgroundColor: '#f4f4f4',
          height: '30px'
        },
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
          onClick: () => {
            this.handleNavigate();
          },
          className: "link-no-decor text-xs top-bar",
          children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
            style: {
              color: 'black'
            },
            children: "EDGE Recruit -"
          }), " Book a Demo Now"]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${this.state.bgClass} ${this.state.bgState === 1 ? 'scrolled' : ''} top-nav`,
        id: "topNav",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "d-flex justify-content-between align-items-center mt-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            className: "link-no-decor",
            href: "/",
            children: /*#__PURE__*/jsx_runtime_.jsx("i", {
              className: "icon-edge_logo edge-logo"
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            children: [/*#__PURE__*/jsx_runtime_.jsx("button", {
              className: "mobile-hamburger",
              onClick: this.toggleMobileMenu,
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "icon-menu"
              })
            }), /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: `back-drop ${this.state.mobileMenuActive ? "active" : ''}`,
              onClick: this.hideMobileMenu
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
              className: `top-menu  ${this.state.mobileMenuActive ? "active" : ''}`,
              onClick: this.hideMobileMenu,
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
                className: "has-sub-menu nav-item",
                children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                  className: "link-no-decor nav-link",
                  href: "/#",
                  children: ["Products ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "arrow-down icon-chevron-down"
                  })]
                }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "sub-menu dropdown-menu ",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.DropdownItem, {
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        activeClassName: "selected",
                        href: "/products/pathfinder",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          className: "link-no-decor",
                          children: ["Pathfinder ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "mobile-only icon-chevron-right"
                          })]
                        })
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.DropdownItem, {
                    divider: true
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.DropdownItem, {
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        activeClassName: "selected",
                        href: "/products/mobility",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          className: "link-no-decor",
                          children: [" Mobility", /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "mobile-only icon-chevron-right"
                          }), " "]
                        })
                      })
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.DropdownItem, {
                    divider: true
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    children: /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.DropdownItem, {
                      children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                        activeClassName: "selected",
                        href: "/products/recruit",
                        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                          className: "link-no-decor",
                          children: ["Recruit ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                            className: "mobile-only icon-chevron-right"
                          })]
                        })
                      })
                    })
                  })]
                })]
              }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  activeClassName: "selected",
                  href: "/blog",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "link-no-decor",
                    children: ["Blog & Resources ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "mobile-only icon-chevron-right"
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  activeClassName: "selected",
                  href: "/contact",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "link-no-decor",
                    children: ["Contact ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "mobile-only icon-chevron-right"
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  activeClassName: "selected",
                  href: "/careers",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "link-no-decor",
                    children: ["Careers ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "mobile-only icon-chevron-right"
                    })]
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.NavItem, {
                children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  activeClassName: "selected",
                  href: "/about",
                  children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("a", {
                    className: "link-no-decor",
                    children: ["About Us ", /*#__PURE__*/jsx_runtime_.jsx("i", {
                      className: "mobile-only icon-chevron-right"
                    })]
                  })
                })
              })]
            })]
          })]
        })
      })]
    });
  }

}

/* harmony default export */ var TopNav_TopNav = ((0,router_.withRouter)(TopNav));
// EXTERNAL MODULE: ./Assets/images/Icons/credits-modal.svg
var credits_modal = __webpack_require__(67);
;// CONCATENATED MODULE: ./Assets/images/edge_logo_white.svg
/* harmony default export */ var edge_logo_white = ({"src":"/_next/static/image/Assets/images/edge_logo_white.78855eacee0261cd07b121c3d150eb36.svg","height":30,"width":90});
;// CONCATENATED MODULE: ./Assets/images/Gartner_Cool_Vendor.png
/* harmony default export */ var Gartner_Cool_Vendor = ({"src":"/_next/static/image/Assets/images/Gartner_Cool_Vendor.d6908af2798a392380d03d508e107ef0.png","height":800,"width":800,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA3ElEQVR42iXOyy5DURSA4X/tvXZ7cBppSiIxcYuIgcQzeAAv510MO/AETHSCoimaoo0eOWefy3LpP/4Gv9wO35qiiKTpqsRYWlDFQFQ9zgk6eJzwPJoAEIJS1w0Ax0c7/CFdlCadjR7eCc456mYJRu9fmBl69/Jp6h2LvMIwkuAJ3tlvAGgnCPtb68y/I2tJYJ7l9AevpC1P1Rg6nsxkRYxY1eQttfFHRn84lcO0ReIdjhg52O7SS9t4jNO9TS7OTzjb7XL5MEWvrp/wZfE/WJY1SVsREW7upzDL+AGEN1s92UJjAwAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(7717);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: ./configs/constants.js
var constants = __webpack_require__(8536);
// EXTERNAL MODULE: external "cogo-toast"
var external_cogo_toast_ = __webpack_require__(5582);
var external_cogo_toast_default = /*#__PURE__*/__webpack_require__.n(external_cogo_toast_);
// EXTERNAL MODULE: external "jsonp"
var external_jsonp_ = __webpack_require__(2603);
var external_jsonp_default = /*#__PURE__*/__webpack_require__.n(external_jsonp_);
;// CONCATENATED MODULE: ./Components/Footer/NewsletterForm.js







 // import { Redirect } from 'react-router-dom';
// import styles from '../ContactSect/ContactSet.module.scss'

 // import SuccessModal from '../ContactSect/SuccessModal';




const validationSchema = external_yup_.object({
  EMAIL: external_yup_.string().email("Please enter valid email").required("Email is required")
});

const NewsletterForm = () => {
  const router = (0,router_.useRouter)();
  const {
    0: modal,
    1: setModal
  } = (0,external_react_.useState)(false);

  const toggleModal = () => setModal(!modal); // const [errmsg, setErrmsg] = useState("");


  const getFormattedUrl = values => {
    return constants/* MAILCHIMP_URL */.vO + "&EMAIL=" + values.EMAIL;
  };

  const message = "Thank you for subscribing to our mailing list";
  const {
    handleSubmit,
    handleChange,
    values
  } = (0,external_formik_.useFormik)({
    initialValues: {
      EMAIL: ""
    },
    validateOnChange: false,
    validationSchema,

    onSubmit(values) {
      let url = getFormattedUrl(values); // console.log("success", url);
      // axios.get(url).then((response) => {
      // 	//console.log("success", response.data);
      //   if (response.data.result === "success") {
      //     toggleModal( )
      //     callThank()
      //   } else {
      //     showError(response.data.msg)
      //   }
      //   // toggleModal()

      console.lo; // }).catch((err) => {
      // })

      external_jsonp_default()(url, {
        param: "c"
      }, (err, data) => {
        if (err) {
          showError(data.msg);
        } else if (data.result !== "success") {
          showError(data.msg);
        } else {
          console.log("hello"); // toggleModal()
          // callThank()
        }
      });
    }

  });

  const showError = msg => {
    external_cogo_toast_default().error( /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("b", {
        children: "Error!"
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          dangerouslySetInnerHTML: {
            __html: msg
          }
        })
      })]
    }));
  };

  const callThank = () => {
    external_axios_default().get("/thankyouNews.html").then(response => {});
  };

  if (modal) {
    router.push('/thankyou', {
      shallow: true
    });
  }

  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
      className: "form",
      onSubmit: handleSubmit,
      children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
        placeholder: "Your Email Address",
        type: "email",
        values: values.EMAIL,
        name: "EMAIL",
        onChange: handleChange
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        style: {
          position: "absolute",
          left: " -5000px"
        },
        "aria-hidden": "true",
        children: /*#__PURE__*/jsx_runtime_.jsx("input", {
          type: "text",
          name: "b_f659ca1b353586a0c99df3cad_0049088ee0",
          tabIndex: "-1",
          value: "",
          onChange: handleChange
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("button", {
        className: "btn btn-primary",
        type: "submit",
        children: "SUBMIT"
      })]
    })
  });
};

/* harmony default export */ var Footer_NewsletterForm = ((0,router_.withRouter)(NewsletterForm));
// EXTERNAL MODULE: external "react-device-detect"
var external_react_device_detect_ = __webpack_require__(2047);
;// CONCATENATED MODULE: ./Components/Footer/BookDemo.js

 // import { useLocation, useHistory } from 'react-router-dom'




const BookDemo = props => {
  // const location = useLocation();
  // const history = useHistory();
  const scrollToContact = () => {
    let scroller = (external_react_scroll_default()).scroller;
    scroller.scrollTo('contactWidget', {
      duration: 800,
      delay: 0,
      offset: external_react_device_detect_.isBrowser ? -20 : 320,
      smooth: 'easeInOutQuart'
    });
  };

  const handleNavigate = e => {
    e.preventDefault();

    if (location && (location.pathname === '/' || location.pathname.includes('/products'))) {
      scrollToContact();
    } else {
      history.push('/contact');
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("form", {
    className: "form",
    onSubmit: handleNavigate,
    children: /*#__PURE__*/jsx_runtime_.jsx("button", {
      className: "btn",
      children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "BOOK A DEMO"
      })
    })
  });
};

/* harmony default export */ var Footer_BookDemo = (BookDemo);
;// CONCATENATED MODULE: ./Components/Footer/Footer.js




function Footer_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // import { NavLink } from 'react-router-dom';

 // import "./Footer.scss";







const year = new Date().getFullYear();

class Footer extends external_react_.Component {
  constructor(props) {
    super();

    Footer_defineProperty(this, "toggleCreditModal", () => {
      this.setState({
        modal: !this.state.modal
      });
    });

    this.state = {
      modal: false
    };
  }

  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Modal, {
        isOpen: this.state.modal,
        toggle: this.toggleCreditModal,
        className: "info-modal",
        size: "lg",
        children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.ModalHeader, {
          toggle: this.toggleCreditModal
        }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.ModalBody, {
          children: /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "info-modal-body",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
                md: 5,
                xm: 12,
                className: "p-0",
                children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                  className: "info-modal-image info-modal-credit",
                  children: /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "img-box",
                    children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                      src: credits_modal.default.src,
                      alt: ""
                    })
                  })
                })
              }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
                md: 7,
                xm: 12,
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                  className: "info-modal-text pl-4",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "title text-xl mb-4",
                    children: /*#__PURE__*/jsx_runtime_.jsx("b", {
                      children: "Credits"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "subtitle text-xs mb-2",
                    children: /*#__PURE__*/jsx_runtime_.jsx("b", {
                      children: "Images:"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "msg text-xs mb-4",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "msg-text mb-1",
                      children: "Life@Edge Header: Pexels | Andrea Piacquadio"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "msg-text",
                      children: "Homepage Header: Freepik | Drobotdean"
                    })]
                  }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                    className: "subtitle text-xs mb-2",
                    children: /*#__PURE__*/jsx_runtime_.jsx("b", {
                      children: "All Illustrations:"
                    })
                  }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                    className: "msg text-xs mb-2",
                    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "msg-text mb-1",
                      children: "Life@Edge Header: Pexels | Andrea Piacquadio"
                    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                      className: "msg-text",
                      children: "Homepage Header: Freepik | Drobotdean"
                    })]
                  })]
                })
              })]
            })
          })
        })]
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "footer",
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "py-5 book-demo-form",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "container-inner book-demo-box",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "text-white ma-0 title",
              children: "Text Placeholder - Lorem Ipsum is simply dummy text."
            }), /*#__PURE__*/jsx_runtime_.jsx(Footer_BookDemo, {})]
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "py-5 news-letter-form",
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "container-inner news-letter-box",
            children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
              className: "text-white ma-0 title",
              children: "Sign up for our newsletter."
            }), /*#__PURE__*/jsx_runtime_.jsx(Footer_NewsletterForm, {})]
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "bold-grey-bg",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "py-5",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "container-inner",
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                src: edge_logo_white.src,
                alt: ""
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "mt-5 container-inner footer-quarter-element d-flex justify-content-between",
              children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "about-edge",
                children: /*#__PURE__*/jsx_runtime_.jsx("p", {
                  className: "text-xs text-grey1 text-line-height-1-6 edge-details",
                  children: "Edge Networks is a talent decision platform powered by Artificial Intelligence. We aim to simplify decisions in talent management to help organizations build the workforce of the future."
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "footer-link-1",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "text-white footer-v-nav",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "text-line-height-1-6",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/elapage",
                      className: "link-no-decor",
                      children: "ELA"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "text-line-height-1-6",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/life-at-edge",
                      className: "link-no-decor",
                      children: "Life @ Edge"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "text-line-height-1-6",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/careers",
                      className: "link-no-decor",
                      children: "Careers"
                    })
                  })]
                })
              }), /*#__PURE__*/jsx_runtime_.jsx("div", {
                className: "footer-link-2",
                children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
                  className: "text-white footer-v-nav",
                  children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "text-line-height-1-6",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/contact",
                      className: "link-no-decor",
                      children: "Contact"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "text-line-height-1-6",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/about",
                      className: "link-no-decor",
                      children: "About us"
                    })
                  }), /*#__PURE__*/jsx_runtime_.jsx("li", {
                    className: "text-line-height-1-6",
                    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                      href: "/sitemap",
                      className: "link-no-decor",
                      children: "Sitemap"
                    })
                  })]
                })
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
                className: "social-icons",
                children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "https://www.facebook.com/edgenetworkspvtltd",
                  rel: "noopener noreferrer",
                  target: "_blank",
                  className: "link-no-decor",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "icon-facebook icon"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "https://twitter.com/getedge_ai",
                  rel: "noopener noreferrer",
                  className: "link-no-decor",
                  target: "_blank",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "icon-twitter icon"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "https://www.linkedin.com/company/avr-edge-networks-pvt--ltd-/",
                  rel: "noopener noreferrer",
                  className: "link-no-decor",
                  target: "_blank",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "icon-linkedin icon"
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx("a", {
                  href: "https://www.youtube.com/channel/UCrceycnUns21KLXYubEZuTA",
                  rel: "noopener noreferrer",
                  className: "link-no-decor",
                  target: "_blank",
                  children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                    className: "icon-youtube icon"
                  })
                })]
              })]
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "py-5 container-inner footer-trio-element d-flex justify-content-between align-items-center",
            children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
              children: /*#__PURE__*/jsx_runtime_.jsx("img", {
                className: "gartner-img",
                alt: "",
                src: Gartner_Cool_Vendor.src
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              className: "text-grey1 box gartner-title",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h3", {
                className: "gartner",
                children: ["Gartner,", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Cool Vendors in Human", /*#__PURE__*/jsx_runtime_.jsx("br", {}), "Capital Management."]
              }), /*#__PURE__*/jsx_runtime_.jsx("h5", {
                className: "text-xs text-white",
                children: "2016, May 9, 2016"
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "text-xxs text-grey1 box text-line-height-1-6 gartner-details",
              children: "The Gartner Cool Vendor Logo is a trademark and service mark of Gartner, Inc., and/or its affiliates, and is used herein with permission. All rights reserved. Gartner does not endorse any vendor, product or service depicted in its research publications, and does not advise technology users to select only those vendors with the highest ratings or other designation. Gartner research publications consist of the opinions of Gartners research organization and should not be construed as statements of fact. Gartner disclaims all warranties, expressed or implied, with respect to this research, including any warranties of merchantability or fitness for a particular purpose."
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "container-inner py-2",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: "text-right text-grey1 text-xxs sm-text-left m-0 py-2",
              children: [year, " \xA9 EdGE Networks. All Rights Reserved |", /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                href: "/privacy",
                className: "link-no-decor",
                children: " Privacy Policy"
              }), " | ", /*#__PURE__*/jsx_runtime_.jsx("span", {
                onClick: this.toggleCreditModal,
                className: "pointer",
                children: "Credits"
              })]
            })
          })]
        })]
      })]
    });
  }

}

/* harmony default export */ var Footer_Footer = (Footer);
;// CONCATENATED MODULE: ./Components/Layout/Layout.js


// components/Layout.js



class Layout extends external_react_.Component {
  render() {
    const {
      children
    } = this.props;
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "layout",
      children: [/*#__PURE__*/jsx_runtime_.jsx(TopNav_TopNav, {}), children, /*#__PURE__*/jsx_runtime_.jsx(Footer_Footer, {})]
    });
  }

}
// EXTERNAL MODULE: external "react-ga"
var external_react_ga_ = __webpack_require__(9831);
var external_react_ga_default = /*#__PURE__*/__webpack_require__.n(external_react_ga_);
// EXTERNAL MODULE: ./Config/Api.js
var Api = __webpack_require__(845);
// EXTERNAL MODULE: external "react-cookie-consent"
var external_react_cookie_consent_ = __webpack_require__(3708);
var external_react_cookie_consent_default = /*#__PURE__*/__webpack_require__.n(external_react_cookie_consent_);
;// CONCATENATED MODULE: ./pages/_app.js



function _app_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _app_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { _app_ownKeys(Object(source), true).forEach(function (key) { _app_defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { _app_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _app_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













































function MyApp({
  Component,
  pageProps
}) {
  (0,external_react_.useEffect)(() => {
    external_react_ga_default().initialize('UA-35684919-1');
    external_react_ga_default().pageview(window.location.pathname + window.location.search);
    Api/* default.get */.Z.get("/blog-page-sections").then(({
      data
    }) => {
      localStorage.setItem("blogPageSections", JSON.stringify(data));
    });
  });
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Component, _app_objectSpread({}, pageProps)), /*#__PURE__*/jsx_runtime_.jsx((external_react_cookie_consent_default()), {
      location: "bottom",
      buttonText: "I Accept",
      cookieName: "myAwesomeCookieName2",
      style: {
        background: "#2B373B",
        margin: "0px"
      },
      buttonStyle: {
        color: "#4e503b",
        fontSize: "10px",
        margin: "10px"
      },
      expires: 150,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
        style: {
          fontSize: "10px"
        },
        children: ["We use cookies to enhance the user experience.", " "]
      })
    })]
  });
}

/* harmony default export */ var _app = ((0,router_.withRouter)(MyApp));

/***/ }),

/***/ 67:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({"src":"/_next/static/image/Assets/images/Icons/credits-modal.365dad0fc57a558de1b71d9d4aa4fcb3.svg","height":181,"width":177});

/***/ })

};
;