import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import BlogVideo from './BlogVideo'
import styles from "./CardSect.module.scss"
import Slider from "react-slick";
import styled from "styled-components";
import { withRouter } from 'next/router';
const StyledSlider = styled(Slider)`
  .slick-list {
    min-height:200px;
    width:370px; 
  }
`;
class VideoSect extends Component {
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
      <Row className={styles.cardsect}>
        <Col md={12} className="mb-3 p-0">
          <div className="title d-flex allign-middle">
            <Col md={6} className=" p-0">
              <span><b>{sect.title}</b></span>
            </Col>
          </div>
        </Col>
        <Row className={"container-fluid " + styles.desktopview}>
          {sect.items.map((item, i) => (
            <BlogVideo video={item} key={i} {...this.props} />
          ))}
        </Row>
        <Row className={"container-fluid " + styles.mobileview}>
          <StyledSlider {...settings}>
            {sect.items.map((item, i) => (
              <BlogVideo video={item} key={i} {...this.props} style={"mobileView"} />
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

export default withRouter(VideoSect)