import React, { Component } from 'react';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import { payload as BlogHeaderData } from '../../Payloads/Blog/Header'
import { payload as BlogpageSectionPayload } from '../../Payloads/Blog/Blogs'
import { blogs as blogPayload, videos as videoPayload, podcast as podcastPayload } from '../../Payloads/Blog/BlogPost'
import { setNavColor } from '../../Components/TopNav/Utils'
import SubMenu from '../../Components/SubMenu/SubMenu';
import { BrowserView } from 'react-device-detect'
import Fade from 'react-reveal/Fade';
import Api from '../../Config/Api'
import BlogItem from "../../Components/BlogItem/BlogItem.js";
import BlogVideo from "../../Components/BlogItem/BlogVideoItem"
import BlogPodcast from "../../Components/BlogItem/BlogPodcastItem"
import { BLOG, VIDEOS, PODCAST } from '../../configs/constants';
import Head from 'next/head'
import { pageTitle } from '../../Payloads/pageTitle/title';

export default class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headerData: {}
    };
  }
  componentDidMount() {
    setNavColor("transparent-bg text-white");
    let blogPageSections = JSON.parse(localStorage.getItem("blogPageSections"))
    if (blogPageSections) {
      this.setState({
        blogPageSections: blogPageSections
      });
      return;
    }

    localStorage.setItem("blogPageSections", JSON.stringify(this.props.blogPageSections));
    this.setState({
      blogPageSections: this.props.blogPageSections
    })
    window.scrollTo(0, 0)
  }

  render() {
    if (!this.state.blogPageSections) {
      return (
        <p>Loading</p>
      )
    }
    return (
      <Fade>
        <Head>
        <title>{pageTitle('blog')}</title>
          <meta name="description" content="getEdGE talent acquisition tool is powered using Artificial Intelligence to ensure talent management systems are simplified.  HR solution for talent management. " />
        </Head>
        <div>
          <HeaderBanner data={this.props.headerData} />
        </div>
        <div className="drop-shadow">
          <BrowserView>
            <div>
              <SubMenu menuItems={this.state?.blogPageSections?.map(item => item.name)} hasSocial={true} menuWidth={6} />
            </div>
          </BrowserView>
        </div>
        <div className="xlight-grey-bg section-padding">
          {this.state?.blogPageSections?.map((item, i) => {
            let blogSect = null;
            if (item.resourceUrl === BLOG) {
              blogSect = <BlogItem {...this.props} key={i} title={item.name} resourceUrl={item.resourceUrl} />
            }
            return blogSect;
          }
          )}
        </div>
        <div className="xlight-grey-bg section-padding">
          {this.state?.blogPageSections?.map((item, i) => {
            let videoSect = null;
            if (item.resourceUrl === VIDEOS) {
              videoSect = <BlogVideo {...this.props} key={i} title={item.name} resourceUrl={item.resourceUrl} />
            }
            return videoSect
          })}
        </div>
        <div className="xlight-grey-bg section-padding">
          {this.state?.blogPageSections?.map((item, i) => {
            let podcastSect = null;
            if (item.resourceUrl === PODCAST) {
              podcastSect = <BlogPodcast {...this.props} key={i} title={item.name} resourceUrl={item.resourceUrl} data={this.props.podcastList} />
            }
            return podcastSect;
          })}
        </div>
      </Fade>
    );
  }
}

export async function getServerSideProps(context) {
  var headerData = await BlogHeaderData();
  var pagSection = await BlogpageSectionPayload();
  var blogData = await blogPayload(BLOG);
  var videoData = await videoPayload(VIDEOS);
  var podcastData = await podcastPayload(PODCAST);

  return {
    props: {
      headerData: headerData,
      blogPageSections: pagSection,
      blogList: blogData,
      videoList: videoData,
      podcastList: podcastData


    }
  }
}