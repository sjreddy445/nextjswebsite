import React, { Component } from 'react';
import BrandList from '../Components/BrandList/BrandList';
import { payload as AboutHeaderData } from '../Payloads/AboutUs/Header.js'
import { payload as PeopleData } from '../Payloads/AboutUs/People'
import { payload as ourStoryPayload } from "../Payloads/OurStory/ourStoryContents"
import { payload as BrandData, getBrands } from '../Payloads/Home/BrandList'
import { payload as NewsData } from '../Payloads/AboutUs/News'
import { payload as VideoData } from '../Payloads/Life/Videos'
import OurStory from "../Components/OurStory/OurStory"
import Contact from '../Components/ContactSect/Contact';
import HeaderBanner from '../Components/HeaderBanner/HeaderBanner'
import { setNavColor } from '../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import Head from 'next/head'
import Leadership from '../Components/Leadership/Leadership';
import EdgeNews from '../Components/EdgeNews/EdgeNews';
import Api from '../Config/Api';
import { pageTitle } from '../Payloads/pageTitle/title';
import { payload as sectionTitle } from '../Payloads/sectionTitle/title'

class AboutUs extends Component {
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
          <title>{pageTitle('about')}</title>
          <meta name="description" content="getEdGE is a global AI-based strategic talent management career development platform/tool. Edge Networks, aim to connect the right person to the right job." />
        </Head>
        <div className="">
          <div className="">
            <HeaderBanner data={this.props.headerData} />
          </div>
          <div className="section-margin">
            <OurStory story={this.props.story}  title={this.props.storyTitle} />
          </div>
          <div className="section-margin">
            <Leadership people={this.props.people} title={this.props.leadershipTitle} />
          </div>
          <div className="section-margin">
            <EdgeNews news={this.props.news} videos={this.props.videos} newsTitle={this.props.newsTitle} mediaTitle={this.props.mediaTitle} />
          </div>
          <div className="section-margin">
            <BrandList data={BrandData} brandList={this.props.brandList} title={this.props.brandTitle} />
          </div>
          <div className="section-margin">
            <Contact title={this.props.contactTitle} />
          </div>
        </div>
      </Fade>
    );
  }
}

export default AboutUs;

export async function getServerSideProps(context) {
  var headerData = await AboutHeaderData();
  var vid = await VideoData();
  var news = await NewsData();
  let brandData = await getBrands();
  var storyData = await ourStoryPayload();
  var peopleData = await PeopleData();
  var storyTitle = await sectionTitle('about-story');
  var mediaTitle = await sectionTitle('about-media');
  var newsTitle = await sectionTitle('about-news');
  var leadershipTitle = await sectionTitle('about-leadership');
  var brandTitle = await sectionTitle('brands');
  var contactTitle = await sectionTitle('contact');

  return {
    props: {
      headerData: headerData,
      videos: vid,
      news: news,
      brandList: brandData,
      story: storyData,
      people: peopleData,
      brandTitle: brandTitle,
      contactTitle: contactTitle,
      storyTitle: storyTitle,
      mediaTitle: mediaTitle,
      newsTitle: newsTitle,
      leadershipTitle: leadershipTitle,
    }
  }
}