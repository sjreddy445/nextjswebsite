import React, { Component } from 'react';
import { Row } from 'reactstrap';
import Slider from "react-slick";
import Content from './content'
import styles from './testimonial.module.scss'

class TestimonialSlider extends Component {
    render() {
        var settings = {

            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 2,
            // autoplay: true,
            autoplaySpeed: 2000,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        dots: true,
                        // autoplay: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        // centerMode: true,
                    }
                }
            ]
        };



        return (
            <div className="container-inner light-sliver-bg">
                <Slider {...settings}>
                    {this.props?.data?.map((list, i) => (
                        <div key={i} className={"card card-body text-xs " + styles.cardborder}>
                            {/* <div className={"text-xs h-100"}> */}
                            <p className={styles.cardheight}>{list.description}</p>
                            {/* </div> */}
                            <Row>
                                <Content data={list} />
                            </Row>
                        </div>
                    ))}
                </Slider>
            </div >
        );
    }
}

export default TestimonialSlider;