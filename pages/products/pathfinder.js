import React, { Component } from 'react';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner';
import { payload as PathfinderHeaderData,getServiceVideo } from '../../Payloads/Pathfinder/Header'
import { payload as sliderData } from '../../Payloads/Pathfinder/Slider'
import { payload as ourProductsData } from '../../Payloads/Home/OurProducts'
import { payload as testimonialPayload } from '../../Payloads/Testimonials/client'
import { payload as screenshotData } from '../../Payloads/Pathfinder/screenshots'
import { payload as payloadAwards } from '../../Payloads/Awards/logo';
import { payload as sectionTitle } from '../../Payloads/sectionTitle/title'
import Contact from '../../Components/ContactSect/Contact';
import OurProducts from '../../Components/OurProducts/OurProducts';
import { payload as StatsData } from '../../Payloads/Pathfinder/stats'
import VerticalSlider from "../../Components/VerticalSlider/VerticalSlider"
import { setNavColor } from '../../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import Head from 'next/head'
import ProductStats from '../../Components/ProductStats/ProductStats';
import ProductScreenShot from '../../Components/ProductScreenShots/ProductScreenShots';
import ProductVideo from '../../Components/ProductVideos/ProductVideo';
import Awards from '../../Components/Awards/Awards';
import Testimonial from '../../Components/Testimonials/Testimonials';
import { pageTitle } from '../../Payloads/pageTitle/title';

class Pathfinder extends Component {
  state = {
    headerData: {},
    scrrenshots: [],
    sliders: [],
    stats: []
  }
  componentDidMount() {
    setNavColor("transparent-bg text-white");
    window.scrollTo(0, 0)
  }


  render() {
    return (
      <Fade>
        <Head>
        <title>{pageTitle('pathfinder')}</title>
          <meta name="description" content="getEdGE pathfinder is a pro-AI-driven product.  Artificial Intelligence-based HR Career Path Tool for finding jobs that suit employee skills, potential  & goals." />
        </Head>
        <div className="">
          <HeaderBanner data={this.props.headerData} />
        </div>
        <div className="section-margin">
          <VerticalSlider dotColor="grey" data={this.props.sliders} />
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
          <Testimonial data={this.props.testimonialService} title={this.props.TestimonialTitle}  />
        </div>
        <div className="section-margin">
          <OurProducts data={this.props.ourProductData} />
        </div>
      </Fade>
    );
  }
}

export default Pathfinder;

export async function getStaticProps(context) {
  var headerData = await PathfinderHeaderData();
  var slidData = await sliderData();
  var ssData = await screenshotData();
  var statData = await StatsData();
  var testimonialData = await testimonialPayload();
  var proddata = await ourProductsData();
  var awardsData = await payloadAwards();
  var contactTitle = await sectionTitle('contact');
  var AwardTitle = await sectionTitle('awards');
  var TestimonialTitle = await sectionTitle('testimonial');
  var scrrenshotSecTitle = await sectionTitle('pathfinderSS');
  var videoSectTitle = await sectionTitle('pathfinderVid');
  var serviceVideo=await getServiceVideo();
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
      serviceVideo:serviceVideo
    }
  }
}