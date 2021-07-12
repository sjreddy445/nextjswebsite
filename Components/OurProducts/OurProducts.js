import React, { Component } from 'react';
import Slider from "react-slick";
import RatioCard from "../../Components/Cards/RatioCard/dynamicRatioCard";
import styles from '../Cards/RatioCard/ratioCard.module.scss';

const SlideBtn = ({ arrow, direction, ...props }) => (
  <button {...props} className={`slick-arrow slick-${direction}`}><i className={`icon-chevron-${arrow}`}></i></button>
)

class OurProducts extends Component {

  componentDidMount() {

  } 

  render() {
    var settings = {
      dots: false,
      infinite: true,
      arrows: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      nextArrow: <SlideBtn arrow="right" direction="next" />,
      prevArrow: <SlideBtn arrow="left" direction="prev" />,
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
      <div className="container-inner py-4">
        <h3 className="mb-3">Our Products.</h3>

        <Slider className="arrow-dark arrow-slider gap-10" {...settings}>
          {this.props.data.map((data, i) => <RatioCard key={i} ratio={styles.seventyperc} data={data} />)}
        </Slider>
      </div>
    );
  }
}

export default OurProducts;