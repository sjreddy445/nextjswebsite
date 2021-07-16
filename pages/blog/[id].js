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

class BlogPost extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setNavColor("transparent-bg");
    window.scrollTo({
      top: 200,
      left: 0,
      behavior: 'smooth'
    })
  }

  getCleanText = (content) => {
    let filtered = content.replace(/&nbsp;/g, ' ')
    let endpoint = filtered;
    endpoint = endpoint.replace('oembed url', 'iframe height=280 width=450 allowfullscreen="allowfullscreen" src');
    // endpoint = endpoint.replace('url', '');
    endpoint = endpoint.replace('watch?v=', 'embed/');
    endpoint = endpoint.replace('oembed', 'iframe');
    return endpoint;
  }

  render() {
    console.log("this.ptops", this.props)
    return (
      <div className="container-inner">
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
