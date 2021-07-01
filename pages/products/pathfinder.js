import React, { Component } from 'react';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';
import { payload as HeaderData } from '../../Payloads/Pathfinder/Header'
import { payload as sliderData } from '../../Payloads/Pathfinder/Slider'
import { payload as screenshotData } from '../../Payloads/Pathfinder/screenshots'
import Contact from '../../Components/ContactSect/Contact';
import OurProducts from '../../Components/OurProducts/OurProducts';
import { payload as ourProductsData } from '../../Payloads/Home/OurProducts'
import { payload as StatsData } from '../../Payloads/Pathfinder/stats'
import VerticalSlider from "../../Components/VerticalSlider/VerticalSlider"
import { setNavColor } from '../../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import { Helmet } from 'react-helmet'
import ProductStats from '../../Components/ProductStats/ProductStats';
import ProductScreenShot from '../../Components/ProductScreenShots/ProductScreenShots';
import ProductVideo from '../../Components/ProductVideos/ProductVideo';
import Awards from '../../Components/Awards/Awards';
import Testimonial from '../../Components/Testimonials/Testimonials';
import { payload as testimonialData } from '../../Payloads/Testimonials/client'
import { payload as AwardsData } from '../../Payloads/Awards/logo'
class Pathfinder extends Component {
  componentDidMount() {
    setNavColor("transparent-bg text-white");
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <Fade>
        <Helmet>
          <title>getEdGE Pathfinder AI: HR Career Path Tool for Career Development</title>
          <meta name="description" content="getEdGE pathfinder is a pro-AI-driven product.  Artificial Intelligence-based HR Career Path Tool for finding jobs that suit employee skills, potential  & goals." />
        </Helmet>
        <div className="">
          <HeaderBanner data={HeaderData} />
        </div>
        <div className="section-margin">
          <VerticalSlider dotColor="grey" data={sliderData} />
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
          <Awards data={AwardsData} />
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

export default Pathfinder;