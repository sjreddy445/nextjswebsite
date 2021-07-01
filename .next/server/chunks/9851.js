exports.id = 9851;
exports.ids = [9851];
exports.modules = {

/***/ 9851:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ ContactSect_Contact; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "reactstrap"
var external_reactstrap_ = __webpack_require__(6099);
;// CONCATENATED MODULE: ./Components/ContactSect/TextSect.js




class TextSect extends external_react_.Component {
  render() {
    return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("h4", {
        className: "text-lg mb-4 mt-2 font-weight-bold",
        children: "Intrigued?"
      }), /*#__PURE__*/jsx_runtime_.jsx("h2", {
        className: "text-xl font-weight-bold",
        children: "Lets discuss how we can find the best talent for you."
      })]
    });
  }

}

/* harmony default export */ var ContactSect_TextSect = (TextSect);
// EXTERNAL MODULE: external "formik"
var external_formik_ = __webpack_require__(7717);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
// EXTERNAL MODULE: ./Components/ContactSect/ContactSet.module.scss
var ContactSet_module = __webpack_require__(1510);
var ContactSet_module_default = /*#__PURE__*/__webpack_require__.n(ContactSet_module);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react-google-invisible-recaptcha"
var external_react_google_invisible_recaptcha_ = __webpack_require__(5250);
var external_react_google_invisible_recaptcha_default = /*#__PURE__*/__webpack_require__.n(external_react_google_invisible_recaptcha_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./Components/ContactSect/FormSect.js






 // import { Redirect } from 'react-router-dom';


 // import SuccessModal from './SuccessModal';



const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
const validationSchema = external_yup_.object({
  name: external_yup_.string().required("Name is required"),
  email: external_yup_.string().email("Please enter valid email").required("Email is required"),
  designation: external_yup_.string(),
  organization: external_yup_.string().required("Organization is required"),
  message: external_yup_.string().required("Message is required"),
  phone: external_yup_.string().matches(phoneRegExp, "Phone number is not valid").required("Phone number is required")
});

const FormSect = () => {
  const {
    0: modal,
    1: setModal
  } = (0,external_react_.useState)(false);
  const router = (0,router_.useRouter)();

  const toggleModal = val => setModal(val);

  let recaptcha = null;
  const TEST_SITE_KEY = "6LcsyyobAAAAAPUXq6-8DiWB8ZoJoD5LdLqUB1p-";
  const {
    handleSubmit,
    handleChange,
    values,
    errors
  } = (0,external_formik_.useFormik)({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      designation: "",
      organization: "",
      phone: "",
      message: ""
    },
    validateOnChange: false,
    validationSchema,

    async onSubmit(values) {
      await recaptcha.execute(); //get token using this

      external_axios_default().post("https://formspree.io/f/xdopaedp", values).then(response => {// toggleModal(true)
        // callThank()
      }).catch(err => {});
    }

  });

  const onResolve = token => {};

  let message = "Your message has been sent. The team will get in touch with you shortly.";

  const callThank = () => {
    external_axios_default().get("/thankyouContact.html").then(response => {});
  }; // if (modal) {
  //   return <Router to={{ pathname: "/thankyou", data: { isOpen: true, message: message } }} />
  // }


  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
          md: 12,
          className: (ContactSet_module_default()).formSect,
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            name: "name",
            placeholder: "Your Name",
            onChange: handleChange,
            values: values.name
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (ContactSet_module_default()).error,
            children: errors.name ? errors.name : null
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
          md: 12,
          className: (ContactSet_module_default()).formSect,
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            name: "designation",
            placeholder: "Designation",
            onChange: handleChange,
            values: values.designation
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (ContactSet_module_default()).error,
            children: errors.designation ? errors.designation : null
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
          md: 12,
          className: (ContactSet_module_default()).formSect,
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
            name: "organization",
            placeholder: "Organization Name",
            onChange: handleChange,
            values: values.organization
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (ContactSet_module_default()).error,
            children: errors.organization ? errors.organization : null
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
          className: "m-0",
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
            md: 6,
            sm: 12,
            className: (ContactSet_module_default()).formSect,
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              name: "phone",
              placeholder: "Phone",
              onChange: handleChange,
              values: values.phone
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (ContactSet_module_default()).error,
              children: errors.phone ? errors.phone : null
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
            md: 6,
            sm: 12,
            className: (ContactSet_module_default()).formSect,
            children: [/*#__PURE__*/jsx_runtime_.jsx("input", {
              name: "email",
              placeholder: "Email",
              onChange: handleChange,
              values: values.email
            }), /*#__PURE__*/jsx_runtime_.jsx("span", {
              className: (ContactSet_module_default()).error,
              children: errors.email ? errors.email : null
            })]
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
          md: 12,
          className: (ContactSet_module_default()).formSect,
          children: [/*#__PURE__*/jsx_runtime_.jsx("textarea", {
            name: "message",
            placeholder: "Tell us how we can help you?",
            onChange: handleChange,
            values: values.message
          }), /*#__PURE__*/jsx_runtime_.jsx("span", {
            className: (ContactSet_module_default()).error,
            children: errors.message ? errors.message : null
          })]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Col, {
          md: 12,
          className: "mt-4",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Button, {
            color: "primary",
            type: "submit",
            className: "sm-w-100",
            children: "Book A Demo"
          }), /*#__PURE__*/jsx_runtime_.jsx((external_react_google_invisible_recaptcha_default()), {
            ref: ref => recaptcha = ref,
            sitekey: TEST_SITE_KEY,
            onResolved: X => onResolve(X)
          })]
        })]
      })
    })
  });
};

/* harmony default export */ var ContactSect_FormSect = (FormSect);
;// CONCATENATED MODULE: ./Components/ContactSect/Contact.js





 // import {Element} from 'react-scroll'

class Contact extends external_react_.Component {
  render() {
    return (
      /*#__PURE__*/
      // <Element name="contact" id="contactw">
      jsx_runtime_.jsx("div", {
        className: "container-inner mb-5",
        id: "contactid",
        name: "contactWidget",
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_reactstrap_.Row, {
          className: "no-gutters",
          children: [/*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            md: 4,
            sm: 12,
            className: "pr-5",
            children: /*#__PURE__*/jsx_runtime_.jsx(ContactSect_TextSect, {})
          }), /*#__PURE__*/jsx_runtime_.jsx(external_reactstrap_.Col, {
            md: 8,
            sm: 12,
            children: /*#__PURE__*/jsx_runtime_.jsx(ContactSect_FormSect, {})
          })]
        })
      }) // </Element>

    );
  }

}

/* harmony default export */ var ContactSect_Contact = (Contact);

/***/ }),

/***/ 1510:
/***/ (function(module) {

// Exports
module.exports = {
	"error": "ContactSet_error__1PuPc",
	"formSect": "ContactSet_formSect__UrvT_"
};


/***/ })

};
;