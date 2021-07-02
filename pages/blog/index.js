import React, { Component } from 'react';
import HeaderBanner from '../../Components/HeaderBanner/HeaderBanner'
import { payload as HeaderData } from '../../Payloads/Blog/Header'
import { setNavColor } from '../../Components/TopNav/Utils'
import SubMenu from '../../Components/SubMenu/SubMenu';
import { BrowserView } from 'react-device-detect'
import Fade from 'react-reveal/Fade';
import Api from '../../Config/Api'
import BlogItem from "../../Components/BlogItem/BlogItem.js";
import BlogVideo from "../../Components/BlogItem/BlogVideoItem"
import BlogPodcast from "../../Components/BlogItem/BlogPodcastItem"
import { BLOG, VIDEOS, PODCAST } from '../../configs/constants';


export default class Blog extends Component {

  constructor(props) {
    super(props);
    this.state = {};
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

    Api.get("/blog-page-sections").then(({ blogPageSections }) => {
      localStorage.setItem("blogPageSections", JSON.stringify(blogPageSections));
      this.setState({
        blogPageSections: blogPageSections
      });
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
        <div>
          <HeaderBanner data={HeaderData} />
        </div>
        <div className="drop-shadow">
          <BrowserView>
            <div>
              <SubMenu menuItems={this.state.blogPageSections.map(item => item.name)} hasSocial={true} menuWidth={6} />
            </div>
          </BrowserView>
        </div>
        <div className="xlight-grey-bg section-padding">
          {this.state.blogPageSections.map((item, i) => {
            let blogSect = null;
            if (item.resourceUrl === BLOG) {
              blogSect = <BlogItem {...this.props} key={i} title={item.name} resourceUrl={item.resourceUrl} />
            }
            return blogSect;
          }
          )}
        </div>
        <div className="xlight-grey-bg section-padding">
          {this.state.blogPageSections.map((item, i) => {
            let videoSect = null;
            if (item.resourceUrl === VIDEOS) {
              videoSect = <BlogVideo {...this.props} key={i} title={item.name} resourceUrl={item.resourceUrl} />
            }
            return videoSect
          })}
        </div>
        <div className="xlight-grey-bg section-padding">
          {this.state.blogPageSections.map((item, i) => {
            let podcastSect = null;
            if (item.resourceUrl === PODCAST) {
              podcastSect = <BlogPodcast {...this.props} key={i} title={item.name} resourceUrl={item.resourceUrl} />
            }
            return podcastSect;
          })}
        </div>
      </Fade>
    );
  }
}

