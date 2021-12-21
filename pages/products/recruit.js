import React, { Component } from 'react';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';
import { payload as RecruitHeaderData, getServiceVideo } from '../../Payloads/Recruit/Header';
import { payload as ourProductsData } from '../../Payloads/Home/OurProducts'
import { payload as testimonialPayload } from '../../Payloads/Testimonials/client'
import { payload as sliderData } from '../../Payloads/Recruit/Slider'
import { payload as screenshotData } from '../../Payloads/Recruit/screenshots'
import { payload as payloadAwards } from '../../Payloads/Awards/logo';
import { payload as sectionTitle } from '../../Payloads/sectionTitle/title'
import OurProducts from '../../Components/OurProducts/OurProducts';
import Contact from '../../Components/ContactSect/Contact';
import { payload as StatsData } from '../../Payloads/Recruit/stats';
import VerticalSlider from "../../Components/VerticalSlider/VerticalSlider"
import { setNavColor } from '../../Components/TopNav/Utils';
import Fade from 'react-reveal/Fade';
import Head from 'next/head';
import ProductStats from '../../Components/ProductStats/ProductStats';
import ProductScreenShot from '../../Components/ProductScreenShots/ProductScreenShots';
import ProductVideo from '../../Components/ProductVideos/ProductVideo';
import Awards from '../../Components/Awards/Awards';
import Testimonial from '../../Components/Testimonials/Testimonials';
import { pageTitle } from '../../Payloads/pageTitle/title';
class Recruit extends Component {
  state = {
    headerData: {},
    scrrenshots: [],
    sliders: [],
    stats: []
  }
  componentDidMount() {
    setNavColor("transparent-bg")
    window.scrollTo(0, 0)
    console.log("props",this.props)
  }

  

  render() {
    return (
      <Fade>
        <Head>
          <title>{pageTitle('recruit')}</title>
          <meta name="description" content="getEdGE Recruit, a talent acquisition platform that helps HR's to find the right talent for auto-sourcing.  AI-based Talent Acquisition Platform for HR visibility." />
        </Head>
        <div className="mt-5">
          <HeaderBanner data={this.props.headerData} />
        </div>
        <div className="section-margin dark-grey-bg">
          <VerticalSlider dotColor="light" data={this.props.sliders} />
        </div>
        <div className="section-margin">
          <ProductStats data={this.props.stats} />
        </div>
        <div className="section-margin">
          <ProductScreenShot data={this.props.scrrenshots} title={this.props.scrrenshotSecTitle} />
        </div>
        <div className="section-margin" >
          <ProductVideo title={this.props.videoSectTitle} video={this.props.serviceVideo} />
        </div>
        <div className="light-sliver-bg">
          <Awards data={this.props.awardsList} title={this.props.AwardTitle} />
        </div>
        <div className="section-margin">
          <Contact title={this.props.contactTitle} />
        </div>
        <div className="section-margin light-sliver-bg">
          <Testimonial data={this.props.testimonialService} title={this.props.TestimonialTitle} />
        </div>
        <div className="section-margin">
          <OurProducts data={this.props.ourProductData} />
        </div>
      </Fade>
    );
  }
}

export default Recruit;

export async function getServerSideProps(context) {
  var headerData = await RecruitHeaderData();
  var slidData = await sliderData();
  var ssData = await screenshotData();
  var statData = await StatsData();
  var testimonialData = await testimonialPayload();
  var proddata = await ourProductsData();
  let awardsData = await payloadAwards();
  var contactTitle = await sectionTitle('contact');
  var AwardTitle = await sectionTitle('awards');
  var TestimonialTitle = await sectionTitle('testimonial');
  var scrrenshotSecTitle = await sectionTitle('recruitSS');
  var videoSectTitle = await sectionTitle('recruitVid');
  var serviceVideo = await getServiceVideo();
  return {
    props: {
      headerData: headerData,
      stats: statData,
      scrrenshots: ssData,
      sliders: slidData,
      testimonialService: testimonialData,
      ourProductData: proddata,
      awardsList: awardsData,
      contactTitle: contactTitle,
      AwardTitle: AwardTitle,
      TestimonialTitle: TestimonialTitle,
      scrrenshotSecTitle: scrrenshotSecTitle,
      videoSectTitle: videoSectTitle,
      serviceVideo: serviceVideo
    }
  }
}