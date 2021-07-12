import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import BlogPodcast from './BlogPodcast'
// import "./CardSect.scss"
import Slider from "react-slick";
import styled from "styled-components";
import withRouter from 'next/dist/client/with-router';
const StyledSlider = styled(Slider)`
  .slick-list {
    min-heightheight:600px;
    width:400px
  }
  .slick-slide img {
    display: inline;
}
`;
 class PodcastSect extends Component {
  render() {
    let { sect } = this.props
    var settings = {
      dots: false,
      infinite: false,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            // centerMode: true,
          }
        }
      ]
    };
    return (
      <Row className="card-sect">
        <Col md={12} className="mb-3 p-0">
          <div className="title d-flex allign-middle">
            <Col md={6} className=" p-0">
              <span><b>{'Podcasts'}</b></span>
              {/* <span className="text-xs ml-2 mt-1">({sect.items.length})</span> */}
            </Col>
          </div>
        </Col>
        <Row className="container-fluid desktopview">
          {sect.items.map((item, i) => (
            <BlogPodcast podcast={item} key={i} {...this.props} />
          ))}
        </Row>
        <Row className="container-fluid mobileview">
          <StyledSlider {...settings}>
            {sect.items.map((item, i) => (
              <BlogPodcast podcast={item} key={i} {...this.props} />
            ))}
          </StyledSlider>
        </Row>
        <Col md={11} sm={8} xs={4} className={'container-inner'} >
        <span className="mt-2 text-xs" onClick={() => this.props.router.push(sect.viewAll, "", { shallow: true })} >
            <b className="text-brand mt-2 float-right" style={{ cursor: 'pointer' }}>VIEW ALL</b>
          </span>
        </Col>
      </Row>
    )
  }
}

export default withRouter(PodcastSect)