import React, { Component } from 'react'
import Slider from 'react-slick'
import { AddCmsImgBaseUrl } from '../../Utils/Utils'
export default class ImageSlider extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      swipeToSlide: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    let { life_images } = this.props?.data
    return (
      <div>
        <Slider {...settings}>
          {life_images?.map((image, i) => (
            <div key={i}>
              <img src={AddCmsImgBaseUrl(image?.img?.url)} alt={''} width={this.props.width} height={this.props.height} />
            </div>
          ))}

        </Slider>
      </div>
    )
  }
}
