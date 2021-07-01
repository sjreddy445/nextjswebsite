import React, { Component } from 'react';
import { payload as HeaderData } from '../Payloads/Sitemap/Header.js'
import HeaderBanner from '../Components/HeaderBanner/HeaderBanner'
import { setNavColor } from '../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet'
import SitemalList from '../Components/SitemapList/index.js';


class Sitemap extends Component {
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
          <HeaderBanner data={HeaderData} />
        </div>
        <div className="section-margin">
          <SitemalList />
        </div>
      </Fade>
    );
  }
}

export default Sitemap;