import React, { useState } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { Col, Button, Row } from 'reactstrap';
// import { Redirect } from 'react-router-dom';
import styles from './ContactSet.module.scss'
import axios from "axios";
// import SuccessModal from './SuccessModal';
import Recaptcha from 'react-google-invisible-recaptcha';
import { useRouter } from 'next/router';
import { countries as countryList } from '../../Payloads/country'

const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Please enter valid email").required("Email is required"),
  designation: Yup.string(),
  organization: Yup.string().required("Organization is required"),
  message: Yup.string().required("Message is required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid").required("Phone number is required"),
  country: Yup.string().required("Country is required"),
  no_of_emp: Yup.string().required("No of Employees is required"),
})



const FormSect = () => {
  const [modal, setModal] = useState(false);
  const router = useRouter();
  const toggleModal = (val) => setModal(val);
  const [token, setToken] = useState("");
  let recaptcha = null;
  const TEST_SITE_KEY = "6LcsyyobAAAAAPUXq6-8DiWB8ZoJoD5LdLqUB1p-";
  let msg = "Your message has been sent. The team will get in touch with you shortly."
  const { handleSubmit, handleChange, values, errors } = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      designation: "",
      organization: "",
      phone: "",
      message: "",
      country: "",
      no_of_emp: ""
    },
    validateOnChange: false,
    validationSchema,
    async onSubmit(values) {
      if (!token) {
        await recaptcha.execute();
      } else {
        axios.post("https://formspree.io/f/xdopaedp", values).then((response) => {
          router.replace({ pathname: '/thankyou', query: { msg: msg, isOpen: true } }, '/thankyou', { shallow: true });
          // callThank()
        }).catch((err) => {
        })
      }
    }
  })

  const onResolve = (token) => {
    console.log("token", token)
    setToken(token);
    handleSubmit();
  }



  const callThank = () => {
    axios.get("/thankyouContact.html").then((response) => {
    })
  }



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
              value={values.name}
            />
            <span className={styles.error}>{errors.name ? errors.name : null}</span>
          </Col>
          <Col md={12} className={styles.formSect}>
            <input
              name="designation"
              placeholder="Designation"
              onChange={handleChange}
              value={values.designation}
            />
            <span className={styles.error}>{errors.designation ? errors.designation : null}</span>
          </Col>
          <Col md={12} className={styles.formSect}>
            <input
              name="organization"
              placeholder="Organization Name"
              onChange={handleChange}
              value={values.organization}
            />
            <span className={styles.error}>{errors.organization ? errors.organization : null}</span>
          </Col>
          <Row className="m-0">
            <Col md={6} sm={12} className={styles.formSect}>
              <input
                name="phone"
                placeholder="Phone"
                onChange={handleChange}
                value={values.phone}
              />
              <span className={styles.error}>{errors.phone ? errors.phone : null}</span>
            </Col>
            <Col md={6} sm={12} className={styles.formSect}>
              <input
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={values.email}
              />
              <span className={styles.error}>{errors.email ? errors.email : null}</span>
            </Col>
          </Row>
          <Row className="m-0">
            <Col md={6} sm={12} className={styles.formSect} >
              <select
                name="no_of_emp"
                className={!values.no_of_emp ? styles.color : styles.bl}
                onChange={handleChange}
                value={values.no_of_emp}>
                <option value="" disabled selected hidden>No of Employees</option>
                <option value="Below 100">Below 100</option>
                <option value="101-500">101-500</option>
                <option value="501-2500">501-2500</option>
                <option value="2501-5000">2501-5000</option>
                <option value="5001-10000">5001-10000</option>
                <option value="10000+">10000+</option>
              </select>
              <span className={styles.error}>{errors.no_of_emp ? errors.no_of_emp : null}</span>
            </Col>
            <Col md={6} sm={12} className={styles.formSect}>
              <select
                name="country"
                className={!values.country ? styles.color : styles.bl}
                onChange={handleChange}
                value={values.country}>
                <option value="" disabled selected hidden>Country</option>
                <option value={"USA"}>{"USA"}</option>
                <option value={"India"}>{"India"}</option>
                <hr />
                {countryList.map(data => {
                  return (
                    <option value={data.name}>{data.name}</option>
                  )
                })}
              </select>
              <span className={styles.error}>{errors.country ? errors.country : null}</span>
            </Col>
          </Row>
          <Col md={12} className={styles.formSect}>
            <textarea
              name="message"

              placeholder="Tell us how we can help you?"
              onChange={handleChange}
              value={values.message}
            />
            <span className={styles.error}>{errors.message ? errors.message : null}</span>
          </Col>
          <Col md={12} className="mt-4">
            <Button color="primary" type="submit" className="sm-w-100">Book A Demo</Button>
          </Col>
          <div style={{ visibility: 'hidden' }}>
            <Recaptcha
              ref={ref => recaptcha = ref}
              sitekey={TEST_SITE_KEY}
              onResolved={(X) => onResolve(X)} />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormSect;