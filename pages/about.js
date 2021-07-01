import React, { Component } from 'react';
import BrandList from '../Components/BrandList/BrandList';
import { payload as HeaderData } from '../Payloads/AboutUs/Header.js'
import { payload as BrandData } from '../Payloads/Home/BrandList'
import { payload as PeopleData } from '../Payloads/AboutUs/People'
import { payload as NewsData } from '../Payloads/AboutUs/News'
import OurStory from "../Components/OurStory/OurStory"
import Contact from '../Components/ContactSect/Contact';
import HeaderBanner from '../Components/HeaderBanner/HeaderBanner'
import { setNavColor } from '../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet'
import Leadership from '../Components/Leadership/Leadership';
import EdgeNews from '../Components/EdgeNews/EdgeNews';


class AboutUs extends Component {
  componentDidMount() {
    setNavColor("transparent-bg");
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Fade>
        <Helmet>
          <title>getEdGE AI: Strategic Talent Management Career Development Platform</title>
          <meta name="description" content="getEdGE is a global AI-based strategic talent management career development platform/tool. Edge Networks, aim to connect the right person to the right job." />
        </Helmet>
        <div className="">
          <div className="">
            <HeaderBanner data={HeaderData} />
          </div>
          <div className="section-margin">
            <OurStory />
          </div>
          <div className="section-margin">
            <Leadership data={PeopleData} />
          </div>
          <div className="section-margin">
            <EdgeNews data={NewsData}/>
          </div>
          <div className="section-margin">
            <BrandList data={BrandData} />
          </div>
          <div className="section-margin">
            <Contact />
          </div>
        </div>
      </Fade>
    );
  }
}

export default AboutUs;