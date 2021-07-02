import React, { Component } from 'react';
import Slider from "react-slick";
import styles from './Awards.module.scss'
import styled from "styled-components";
const StyledSlider = styled(Slider)`
  .slick-list {
    padding: 0px -74px !important;
  }
`;
class AwardImage extends Component {
    render() {
        var settings = {
            // dots: false,
            infinite: true,
            arrows: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            dots: true,
            autoplay: true,
            centerMode: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        dots: true,
                        autoplay: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        centerMode: true,
                    }
                }
            ]
        };
        let { logo } = this.props.data
        return (
            <div className="container-fluid">
                <StyledSlider {...settings}>
                    {logo.map((list, i) => (
                        <div key={i} >
                            <div  onClick={() => window.open(list.link, "_bank")} className={styles.img} style={{ backgroundImage: `url('${list.imgUrl}')` }}></div>
                        </div>
                    ))}
                </StyledSlider>
            </div>
        )
    }
}
export default AwardImage;
