import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import BlogHeaders from '../../Components/BlogItem/BlogHeaders';
import Api from '../../Config/Api'
import { AddCmsImgBaseUrl } from '../../Utils/Utils'
import { setNavColor } from '../../Components/TopNav/Utils'
import Image from 'next/image';
import { withRouter } from 'next/router';
import YouTube from 'react-youtube'
import { singleBlog, blogPopup } from '../../Payloads/Blog/BlogPost';
import FormModal from '../../Components/Model/FormModel';
import moment from 'moment';
import Head from 'next/head';

class BlogPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModal: false
    };

  }

  componentDidMount() {
    setNavColor("transparent-bg");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    const { setting } = this.props;
    if (setting?.onScroll) {
      window.addEventListener("scroll", this.handleScroll, false);
    }
    else if (setting?.timeBound) {
      this.onTimeBound(setting.seconds)
    }
    else {

    }
  }

  componentWillUnmount() {
    const { setting } = this.props;
    if (setting?.onScroll) {
      window.removeEventListener("scroll", this.handleScroll, false);
    }
  }

  toggleModal = (expiresIn) => {
    document.cookie = `blogModelExpires=${expiresIn};${document.cookie}`
    this.setState({ isModal: !this.state.isModal });
  };

  getCleanText = (content) => {
    let filtered = content.replace(/&nbsp;/g, ' ')
    let endpoint = filtered;
    endpoint = endpoint.replace('oembed url', 'iframe height=450 width=100% allowfullscreen="allowfullscreen" src');
    // endpoint = endpoint.replace('url', '');
    endpoint = endpoint.replace('watch?v=', 'embed/');
    endpoint = endpoint.replace('oembed', 'iframe');
    return endpoint;
  }

  onTimeBound = (no) => {
    var regex = /blogModelExpires=(.[^;]*)/ig;
    var match = regex.exec(document.cookie);
    var value = match && match.length > 0 ? match[1] : '';
    if (value && moment(value).isAfter(moment())) {
      return;
    }
    setTimeout(() => {
      this.setState({ isModal: true })
    }, no * 1000)
  }



  handleScroll = (e) => {
    var regex = /blogModelExpires=(.[^;]*)/ig;
    var match = regex.exec(document.cookie);
    var value = match && match.length > 0 ? match[1] : '';
    if (value && moment(value).isAfter(moment())) {
      return;
    }
    if (window.scrollY > 450) {
      this.setState({ isModal: true })
    }
  }
  render() {
    return (
      <div className="container-inner">
        <Head>
          <meta property="og:type" content="website" />
          <meta property="og:url" content={`https://getedge.ntb.one/blog/${this.props.blogPost.title}`} />
          <meta property="og:title" content={this.props.blogPost.title} />
          <meta property="og:description" content="getEdGE talent acquisition tool is powered using Artificial Intelligence to ensure talent management systems are simplified.  HR solution for talent management." />
          <meta property="og:image" content={AddCmsImgBaseUrl(this.props.blogPost?.featuredImage.url)} />
          <meta property="og:image:width" content="500" />
          <meta property="og:image:height" content="500" />
        </Head>
        <FormModal modal={this.state.isModal} toggleModal={this.toggleModal} />
        {this.props.blogPost ?
          <>
            <Row className="d-flex justify-content-center">
              <Col md={8}>
                <Row>
                  <Col className="text-center">
                    <img src={AddCmsImgBaseUrl(this.props.blogPost?.featuredImage.url)} alt={this.props.blogPost.title} className="img-fluid" />
                  </Col>
                </Row>
                <Row className=" mt-5">
                  <Col md={12}>
                    <div>
                      <BlogHeaders categories={this.props.blogPost.categories} date={this.props.blogPost.created_at} />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className=".text-xl mt-3">
                      <b>
                        {this.props.blogPost.title}
                      </b>
                    </div>
                  </Col>
                </Row>
                <Row className=" mt-5">
                  <Col>
                    <span dangerouslySetInnerHTML={{ __html: this.getCleanText(this.props.blogPost.content) }} className="text-sm" />
                  </Col>
                </Row>
              </Col>
            </Row>
          </>
          :
          "Loading..."
        }
      </div>
    )
  }
}
export async function getServerSideProps({ query }) {
  var data = await singleBlog(query.id)
  var settings = await blogPopup();
  return {
    props: {
      blogPost: data,
      setting: settings
    },
  };
}
export default withRouter(BlogPost)
