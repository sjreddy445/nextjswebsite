import React, { Component } from 'react';
import Slider from "react-slick";
import styles from './Awards.module.scss'
import styled from "styled-components";
import { AddCmsImgBaseUrl } from '../../Utils/Utils';
const StyledSlider = styled(Slider)`
  .slick-list {
    padding: 0px 70px !important;
    margin:10px -10px;
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
        return (
            <div className="container-fluid">
                <StyledSlider {...settings}>
                    {this.props?.data?.map((list, i) => (
                        <div key={i}>
                            <img onClick={() => window.open(list.link, "_bank")} src={AddCmsImgBaseUrl(list.imgUrl.url)} alt={list.imgUrl} className={styles.img} />
                        </div>
                    ))}
                </StyledSlider>
            </div >
        )
    }
}
export default AwardImage;
