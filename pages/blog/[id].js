import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import BlogHeaders from '../../Components/BlogItem/BlogHeaders';
import Api from '../../Config/Api'
import { AddCmsImgBaseUrl } from '../../Utils/Utils'
import { setNavColor } from '../../Components/TopNav/Utils'
import Image from 'next/image';
import { withRouter } from 'next/router';
import YouTube from 'react-youtube'
import { singleBlog } from '../../Payloads/Blog/BlogPost';
import FormModal from '../../Components/Model/FormModel';
import moment from 'moment';

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
      top: 200,
      left: 0,
      behavior: 'smooth'
    })
    window.addEventListener("scroll", this.handleScroll, false);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll, false);
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
    console.log("this.tate", this.state.isModal)
    return (
      <div className="container-inner">
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
  return {
    props: { blogPost: data },
  };
}
export default withRouter(BlogPost)
