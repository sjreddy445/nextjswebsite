import React, { Component } from 'react';
import { Row } from 'reactstrap';
import Slider from "react-slick";
import Content from './content'
import styles from './testimonial.module.scss'
import { payload as testimonialPayload } from '../../Payloads/Testimonials/client'
const SlideBtn = ({ arrow, direction, ...props }) => (
    <button {...props} className={`slick-arrow slick-${direction}`}><i className={`icon-chevron-${arrow}`}></i></button>
)
class Awards extends Component {
    render() {
        var settings = {

            dots: true,
            infinite: true,
            arrows: true,
            speed: 500,
            slidesToShow: 3,
            autoplay: true,
            autoplaySpeed: 2000,
            slidesToScroll: 1,
            nextArrow: <SlideBtn style={{ margin: 10 }} arrow="right" direction="next" />,
            prevArrow: <SlideBtn arrow="left" direction="prev" />,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        arrows: false,
                        dots: true,
                        autoplay: true,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        // centerMode: true,
                    }
                }
            ]
        };



        return (
            <div className="container-inner py-5 light-sliver-bg">
                <h3 className="mb-3">Testimonials</h3>

                <Slider className="arrow-dark arrow-slider" {...settings}>
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

export default Awards;