import React, { Component } from 'react';
import Slider from "react-slick";
import Image from 'next/image';
class ScreenShotSect extends Component {
  componentDidMount() {

  }
  render() {
    var settings = {
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
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
      <Slider {...settings}>
        {this.props.data.map((list,i) => (
          <div key={i}>
            <img alt={list.imgAlt} className="w-100" style={{height:400}} src={list.img} />
          </div>
        ))}
      </Slider>
    );
  }
}

export default ScreenShotSect;