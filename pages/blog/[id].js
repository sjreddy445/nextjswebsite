import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import BlogHeaders from '../../Components/BlogItem/BlogHeaders';
import { AddCmsImgBaseUrl } from '../../Utils/Utils'
import { setNavColor } from '../../Components/TopNav/Utils'
import { withRouter } from 'next/router';
import { singleBlog, blogPopup,  allBlogCount, allBlogWithparmas } from '../../Payloads/Blog/BlogPost';
import FormModal from '../../Components/Model/FormModel';
import moment from 'moment';
import Head from '../../Components/Metdata/head-1';
import { BASEURL } from '../../Config/Api';
class BlogPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isModal: false
    }
  }

  componentDidMount() {

    setNavColor("transparent-bg");
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
    const { setting } = this.props;
    document.documentElement.addEventListener("mouseenter", () => { }, false);

    if (setting?.onScroll) {
      window.addEventListener("scroll", this.handleScroll, false);
      return
    }
    if (setting?.timeBound) {
      this.onTimeBound(setting.seconds)
      return
    }
    if (setting?.userLeaving) {
      document.documentElement.addEventListener("mouseleave", () => this.onuserLeaving(setting.userLeaving), false);
      return
    }

  }

  componentWillUnmount() {

    const { setting } = this.props;
    if (setting?.onScroll) {
      window.removeEventListener("scroll", this.handleScroll, false);
    }
  }


  toggleModal = (expiresIn) => {
    document.cookie = `blogModelExpires=${expiresIn.toUTCString()};${document.cookie}`
    this.setState({ isModal: !this.state.isModal });
  };

  getCleanText = (content) => {
    let filtered = content.replace(/&nbsp;/g, ' ')
    let endpoint = filtered;
    endpoint = endpoint.replace('oembed url', 'iframe height=450 width=100% allowfullscreen="allowfullscreen" src');
    // endpoint = endpoint.replace('url', '');
    endpoint = endpoint.replace('watch?v=', 'embed/');
    endpoint = endpoint.replace('oembed', 'iframe');
    endpoint = endpoint.replace(`<img src="`, `<img height=450 width=100%  src="${BASEURL}`);
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

  onuserLeaving = () => {
    var regex = /blogModelExpires=(.[^;]*)/ig;
    var match = regex.exec(document.cookie);
    var value = match && match.length > 0 ? match[1] : '';
    if (value && moment(value).isAfter(moment())) {
      return;
    }
    this.setState({ isModal: true })
  }

  handleScroll = (e) => {
    var regex = /blogModelExpires=(.[^;]*)/ig;
    var match = regex.exec(document.cookie);
    var value = match && match.length > 0 ? match[1] : '';
    if (value && moment(value).isAfter(moment())) {
      return;
    }
    if (window.scrollY > 550) {
      this.setState({ isModal: true })
    }
  }

  render() {

    return (
      <div className="container-inner" >
        <Head {...this.props} />
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


export async function getStaticPaths() {
  var count = await allBlogCount();
  var data = [];
  let no = 0;
  if (count > 0) {
    no = Math.ceil(count / 80)
  }
  for (var i = 0; i < no; i++) {
    var ds = await allBlogWithparmas(i)
    data=[...data,...ds]
  }
  const paths = data.map((user) => ({
    params: { id: user.slug.toString() },
  }))

  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  var data = await singleBlog(params?.id?.toLowerCase())
  var settings = await blogPopup();
  return {
    props: {
      blogPost: data,
      setting: settings
    },
  };
}

export default withRouter(BlogPost)