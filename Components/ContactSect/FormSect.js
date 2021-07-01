import React, { useState } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Col, Button, Row } from 'reactstrap';
// import { Redirect } from 'react-router-dom';
import styles from './ContactSet.module.scss'
import axios from "axios";
// import SuccessModal from './SuccessModal';
import Recaptcha from 'react-google-invisible-recaptcha';
import Router, { useRouter } from 'next/router'
const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Please enter valid email").required("Email is required"),
  designation: Yup.string(),
  organization: Yup.string().required("Organization is required"),
  message: Yup.string().required("Message is required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Phone number is required"),
})



const FormSect = () => {
  const [modal, setModal] = useState(false);
  const router=useRouter();
  const toggleModal = (val) => setModal(val);
  let recaptcha = null;
  const TEST_SITE_KEY = "6LcsyyobAAAAAPUXq6-8DiWB8ZoJoD5LdLqUB1p-";
  const { handleSubmit, handleChange, values, errors } = useFormik({
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
      await recaptcha.execute();//get token using this
      axios.post("https://formspree.io/f/xdopaedp", values).then((response) => {
        // toggleModal(true)
        // callThank()
      }).catch((err) => {
      })
    }
  })

  const onResolve = (token) => {
  }

  let message = "Your message has been sent. The team will get in touch with you shortly."

  const callThank = () => {
    axios.get("/thankyouContact.html").then((response) => {
    })
  }

  // if (modal) {
  //   return <Router to={{ pathname: "/thankyou", data: { isOpen: true, message: message } }} />
  // }


  return (
    <>
      {/* <SuccessModal modal={modal} toggleModal={toggleModal} message={message} /> */}
      <div>
        <form onSubmit={handleSubmit}>
          <Col md={12} className={styles.formSect}>
            <input
              name="name"
              placeholder="Your Name"
              onChange={handleChange}
              values={values.name}
            />
            <span className={styles.error}>{errors.name ? errors.name : null}</span>
          </Col>
          <Col md={12} className={styles.formSect}>
            <input
              name="designation"
              placeholder="Designation"
              onChange={handleChange}
              values={values.designation}
            />
            <span className={styles.error}>{errors.designation ? errors.designation : null}</span>
          </Col>
          <Col md={12} className={styles.formSect}>
            <input
              name="organization"
              placeholder="Organization Name"
              onChange={handleChange}
              values={values.organization}
            />
            <span className={styles.error}>{errors.organization ? errors.organization : null}</span>
          </Col>
          <Row className="m-0">
            <Col md={6} sm={12} className={styles.formSect}>
              <input
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                values={values.phone}
              />
              <span className={styles.error}>{errors.phone ? errors.phone : null}</span>
            </Col>
            <Col md={6} sm={12} className={styles.formSect}>
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                values={values.email}
              />
              <span className={styles.error}>{errors.email ? errors.email : null}</span>
            </Col>
          </Row>
          <Col md={12} className={styles.formSect}>
            <textarea
              name="message"

              placeholder="Tell us how we can help you?"
              onChange={handleChange}
              values={values.message}
            />
            <span className={styles.error}>{errors.message ? errors.message : null}</span>
          </Col>
          <Col md={12} className="mt-4">
            <Button color="primary" type="submit" className="sm-w-100">Book A Demo</Button>

            <Recaptcha
              ref={ref => recaptcha = ref}
              sitekey={TEST_SITE_KEY}
              onResolved={(X) => onResolve(X)} />
          </Col>
        </form>
      </div>
    </>
  );
};

export default FormSect;