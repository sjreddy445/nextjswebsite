import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';
import BlogHeaders from '../../Components/BlogItem/BlogHeaders';
import Api from '../../Config/Api'
import { AddCmsImgBaseUrl } from '../../Utils/Utils'
import { setNavColor } from '../../Components/TopNav/Utils'
import Image from 'next/image';
import { withRouter } from 'next/router';

class BlogPost extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setNavColor("transparent-bg");

    Api.get(`blogs/?slug=${this.props.router.query.id}`).then(res => {
      this.setState({
        blogPost: res.data[0]
      })
      window.scrollTo({
        top: 200,
        left: 0,
        behavior: 'smooth'
      })
    })
  }

  getCleanText = (content) => {
    let filtered = content.replace(/&nbsp;/g, ' ')
    let endpoint = filtered;
    endpoint = endpoint.replace('oembed url', 'iframe height=250 width=400 src');
    // endpoint = endpoint.replace('url', '');
    endpoint = endpoint.replace('watch?v=', 'embed/');
    endpoint = endpoint.replace('oembed', 'iframe');
    return endpoint;
  }

  render() {
    return (
      <div className="container-inner">
        {this.state.blogPost ?
          <>
            <Row className="d-flex justify-content-center">
              <Col md={8}>
                <Row>
                  <Col className="text-center">
                    <img src={AddCmsImgBaseUrl(this.state.blogPost.featuredImage.url)} alt={this.state.blogPost.title} className="img-fluid" />
                  </Col>
                </Row>
                <Row className=" mt-5">
                  <Col md={12}>
                    <div>
                      <BlogHeaders categories={this.state.blogPost.categories} date={this.state.blogPost.created_at} />
                    </div>
                  </Col>
                  <Col md={12}>
                    <div className=".text-xl mt-3">
                      <b>
                        {this.state.blogPost.title}
                      </b>
                    </div>
                  </Col>
                </Row>
                <Row className=" mt-5">
                  <Col>
                    <span dangerouslySetInnerHTML={{ __html: this.getCleanText(this.state.blogPost.content) }} className="text-sm" />
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
export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
export default withRouter(BlogPost)