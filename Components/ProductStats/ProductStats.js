import React, { Component } from 'react';
import Slider from "react-slick";
import StatsBox from './StatsBox';
import { Row, Col } from 'reactstrap';
import styles from './ProductStats.module.scss';
class ProductStats extends Component {
  state = {
    data: []
  }   
  componentDidMount() {
    this.setState({ data: this.props.data })
  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <>
        <div className={"container-inner py-4 " + styles.desktopview}>
          <Slider className="gap-50" {...settings}>
            {this.props?.data?.map((stats, i) => { 
              return (
                <StatsBox key={i} data={stats} />
              )
            })}
          </Slider>
        </div>

        <div className={"container-inner justify-content-center " + styles.mobileview}>
          <Row className="no-gutters m-0">
            {this.props?.data?.map((stats, i) => (
              <Col md={4} xs={12} className="mt-4" key={i}>
                <StatsBox key={i} data={stats} />
              </Col>
            ))}
          </Row>
        </div>
      </>
    );
  }
}
export default ProductStats;