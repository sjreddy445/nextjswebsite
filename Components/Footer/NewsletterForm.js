import React, { useState } from 'react';
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from "axios";
import Router, { withRouter } from 'next/router'
import { MAILCHIMP_URL } from '../../configs/constants'
import cogoToast from 'cogo-toast';
import jsonp from 'jsonp'
import { useRouter } from 'next/router';


const validationSchema = Yup.object({
  EMAIL: Yup.string().email("Please enter valid email").required("Email is required"),
})

const NewsletterForm = () => {
  const router = useRouter();
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  // const [errmsg, setErrmsg] = useState("");

  const getFormattedUrl = (values) => {
    return MAILCHIMP_URL + "&EMAIL=" + values.EMAIL
  }

  const msg = "Thank you for subscribing to our mailing list"

  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      EMAIL: ""
    },
    validateOnChange: false,
    validationSchema,
    onSubmit(values) {
      let url = getFormattedUrl(values)
      jsonp(url, { param: "c" }, (err, data) => {
        if (err) {
          showError(data.msg)
        } else if (data.result !== "success") {
          showError(data.msg)
        } else {
          router.replace({ pathname: '/thankyou', query: { msg: msg, isOpen: true } }, '/thankyou', { shallow: true });
        }
      });
    }
  })

  const showError = (msg) => {
    cogoToast.error(
      <div>
        <b>Error!</b>
        <div><span dangerouslySetInnerHTML={{ __html: msg }} /></div>
      </div>
    );
  }

  const callThank = () => {
    axios.get("/thankyouNews.html").then((response) => {
    })
  }

  return (
    <>

      {/* <SuccessModal modal={modal} toggleModal={toggleModal} message={message} /> */}
      <form className="form" onSubmit={handleSubmit}>
        <input placeholder="Your Email Address" type="email" value={values.EMAIL} name="EMAIL" onChange={handleChange} />
        <input style={{display:'none'}} type="text" name="b_f659ca1b353586a0c99df3cad_0049088ee0" tabIndex="-1" value="" onChange={handleChange} />
        <button className="btn btn-primary" type="submit">SUBMIT</button>
      </form>
      {/* <span className={styles.error}>{errmsg ? errmsg : null}</span> */}
    </>
  );
}
 


export default withRouter(NewsletterForm);