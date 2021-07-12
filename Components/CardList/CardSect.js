import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import BlogCard from './BlogCard'
// import "./CardSect.scss"
import Slider from "react-slick";
import styled from "styled-components";
import styles from './CardSect.module.scss'
import { withRouter } from 'next/router';
const StyledSlider = styled(Slider)`
  .slick-list {
    min-height:400px;
    width:370px !important
  }
`;
class CardSect extends Component {
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

    // allResource = () => {
    //   this.props.router.push({ query: { page: 1 } }, undefined, { shallow: true });
    // }
    return (
      <Row className={styles.cardsect}>
        <Col md={12} className="mb-3 p-0">
          <div className="title d-flex allign-middle">
            <Col md={6} className="p-0">
              <span><b>{sect.title}</b></span>
              {/* <span className="text-xs ml-2 mt-1">({sect.items.length})</span> */}
            </Col>
          </div>
        </Col>
        <Row className={"container-fluid "+styles.desktopview}>
          {sect.items.map((item, i) => (
            <BlogCard blog={item} key={i} {...this.props} />
          ))}
        </Row>
        <Row className={"container-fluid "+styles.mobileview}>
          <StyledSlider {...settings}>
            {sect.items.map((item, i) => (
              <BlogCard blog={item} key={i} {...this.props} />
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
export default withRouter(CardSect)