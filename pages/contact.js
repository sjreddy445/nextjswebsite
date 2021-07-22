import React, { Component } from 'react'
import HeaderBanner from '../Components/HeaderBanner/HeaderBanner'
import { payload as ContactHeaderData } from '../Payloads/Contact/Header'
import Contact from '../Components/ContactSect/Contact';
import AddressSect from '../Components/AddressSect/AddressSect';
import { setNavColor } from '../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import Head from 'next/head'

export class ContactUs extends Component {
  state = {
    headerData: {}
  }
  componentDidMount() {
    setNavColor("transparent-bg");
    window.scrollTo(0, 0)
  }


  render() {
    return (
      <Fade>
        <Head>
          <title>getEdGE Contact - Strategic Talent Management | Career Management</title>
          <meta name="description" content="Contact getEdGE to help you make strategic talent management decisions. Our AI-driven career management will help you built a futuristic workforce" />
        </Head>
        <div className="contact-page-box">
          <div className="header-box">
            <HeaderBanner data={this.props.headerData} />
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


export async function getServerSideProps(context) {
  var headerData = await ContactHeaderData();
  return {
    props: { headerData: headerData }
  }
}