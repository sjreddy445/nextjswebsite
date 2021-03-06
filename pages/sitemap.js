import React, { Component } from 'react';
import { payload as SiteHeaderData } from '../Payloads/Sitemap/Header.js'
import HeaderBanner from '../Components/HeaderBanner/HeaderBanner'
import { setNavColor } from '../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import Head from 'next/head'
import SitemalList from '../Components/SitemapList/index.js';
import { pageTitle } from '../Payloads/pageTitle/title';


class Sitemap extends Component {
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
        <title>{pageTitle('sitemap')}</title>
          <meta name="description" content="getEdGE is a global AI-based strategic talent management career development platform/tool. Edge Networks, aim to connect the right person to the right job." />
        </Head>
        <div className="">
          {/* <HeaderBanner data={this.props.headerData} /> */}
        </div>
        <div className="section-margin">
          <SitemalList />
        </div>
      </Fade>
    );
  }
}

export default Sitemap;

export async function getStaticProps(context) {
  var headerData = await SiteHeaderData();
  return {
    props: { headerData: headerData}
  }
}