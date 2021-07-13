import React, { Component } from 'react';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';
import { payload as RecruitHeaderData } from '../../Payloads/Recruit/Header';
import { payload as sliderData } from '../../Payloads/Recruit/Slider';
import { payload as screenshotData } from '../../Payloads/Recruit/screenshots';
import Contact from '../../Components/ContactSect/Contact';
import OurProducts from '../../Components/OurProducts/OurProducts';
import { payload as ourProductsData } from '../../Payloads/Home/OurProducts';
import { payload as StatsData } from '../../Payloads/Recruit/stats';
import VerticalSlider from "../../Components/VerticalSlider/VerticalSlider";
import { setNavColor } from '../../Components/TopNav/Utils';
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet';
import ProductStats from '../../Components/ProductStats/ProductStats';
import ProductScreenShot from '../../Components/ProductScreenShots/ProductScreenShots';
import ProductVideo from '../../Components/ProductVideos/ProductVideo';
import Awards from '../../Components/Awards/Awards';
import Testimonial from '../../Components/Testimonials/Testimonials';
import { payload as testimonialData } from '../../Payloads/Testimonials/client'
class Recruit extends Component {
  state = {
    headerData: {}
  }
  componentDidMount() {
    setNavColor("transparent-bg")
    window.scrollTo(0, 0)
    this.headerDataFunc();
  }

  headerDataFunc = async () => {
    var headerData = await RecruitHeaderData();
    this.setState({ headerData: headerData })
  }
  render() {
    return (
      <Fade>
        <Helmet>
          <title>getEdGE Recruit: AI Based Talent Acquisition Platforms for HR Solutions</title>
          <meta name="description" content="getEdGE Recruit, a talent acquisition platform that helps HR's to find the right talent for auto-sourcing.  AI-based Talent Acquisition Platform for HR visibility." />
        </Helmet>
        <div className="mt-5">
          <HeaderBanner data={this.state.headerData} />
        </div>
        <div className="section-margin dark-grey-bg">
          <VerticalSlider dotColor="light" data={sliderData} />
        </div>
        <div className="section-margin">
          <ProductStats data={StatsData} />
        </div>
        <div className="section-margin">
          <ProductScreenShot data={screenshotData} />
        </div>
        <div className="section-margin" >
          <ProductVideo />
        </div>
        <div className="light-sliver-bg">
          <Awards />
        </div>
        <div className="section-margin">
          <Contact />
        </div>
        <div className="section-margin light-sliver-bg">
          <Testimonial data={testimonialData} />
        </div>
        <div className="section-margin">
          <OurProducts data={ourProductsData} />
        </div>
      </Fade>
    );
  }
}

export default Recruit;