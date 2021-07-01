import React, { Component } from 'react'
import HeaderBanner from '../Components/HeaderBanner/HeaderBanner'
import { payload as HeaderData } from '../Payloads/Contact/Header'
import Contact from '../Components/ContactSect/Contact';
import AddressSect from '../Components/AddressSect/AddressSect';
import {setNavColor} from '../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import {Helmet} from 'react-helmet'

export class ContactUs extends Component {

  componentDidMount() {
    setNavColor("transparent-bg");
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Fade>
        <Helmet>
          <title>getEdGE Contact - Strategic Talent Management | Career Management</title>
          <meta name="description" content="Contact getEdGE to help you make strategic talent management decisions. Our AI-driven career management will help you built a futuristic workforce" />
        </Helmet>
      <div className="contact-page-box">
        <div className="header-box">
          <HeaderBanner data={HeaderData} />
        </div>
        <div className="container-inner content section-margin">
          <AddressSect />
        </div>
        <div className="section-margin">
          <Contact />
        </div>
      </div>
      </Fade>
    )
  }
}


export default ContactUs
