import React, { Component } from 'react';
import styles from './BrandList.module.scss'
import Slider from "react-slick";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  .slick-list {
    padding: 0px 100px !important;
  }
`;
class ImageSect extends Component {
  render() {
    let brands = this.props.data.brands
    var settings = {
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToScroll: 1,
      centerMode: true,
      responsive: [
        {
          breakpoint: 600,
          settings: {
            arrows: false,
            dots: true,
            speed: 150,
            // centerMode: true,
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
    return (
      <div className={styles.brandlist}>
        <div className={styles.desktopview + " d-flex flex-row-wrap desktop-view justify-content-sm-between"}>
          {brands.map((brand, i) => (
            <div key={i} className="mr-3 mt-3 brand-img-holder">
              <img src={brand.imgUrl} alt={brand.alt} className={styles.brandImg + " img-round sm-list-img"} />
            </div>
          ))}
        </div>
        <StyledSlider className={styles.mobileview} {...settings}>
          {brands.map((brand, i) => (
            <div key={i} className="ml-0 mr-0 brand-img-holder">
              <img src={brand.imgUrl} alt={brand.alt} className={styles.brandImg + " img-round sm-list-img"} />
            </div>
          ))}
        </StyledSlider>
      </div>
    );
  }
}

export default ImageSect;