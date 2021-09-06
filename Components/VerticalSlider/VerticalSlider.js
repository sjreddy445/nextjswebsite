import React, { Component } from 'react';
import SliderContent from './SliderContent';
import $ from "jquery";
import Slider from "react-slick";
import styles from './VerticalSlider.module.scss';

import styled from 'styled-components'

const SliderC = styled(Slider)
  `.slick-list, .slick-slider {
    position: relative;
    display: block;
  }
   .slick-dots {
    width: 20px;
    top: 0px;
    left: 10px;
    display: flex !important;
    flex-wrap: wrap;
    align-content: center;
    li {
        margin: 3px 0px;
        button:before {
            color: #f23a5a;
            font-size: 14px;
            opacity: 1;
        }
        &.slick-active {
            button:before {
                border: 2px solid #fff;
                padding: 2px;
                background: #fff content-box;
                font-size: 0px;
                border-radius: 50%;
            }
        }
    }
}
    .slick-dots li button::before {
        color: rgba(0, 0, 0, .3);
    }
    .slick-dots li.slick-active button::before {
        background-color: #f23a5a;
        border-color: #f23a5a;
    }
   `


class VerticalSlider extends Component {

  constructor() {
    super();
    this.sliderContainer = React.createRef();
    this.animate = this.animate.bind(this);
    this.calculate = this.calculate.bind(this);
    this.hidden = false;
    this.isAnimating = false;
  }

  animate(offset) {
    $("html, body").animate(
      {
        scrollTop: offset
      },
      1000,
      () => {
        setTimeout(() => {
          this.isAnimating = false;
        }, 10);
      })
  }


  calculate(e) {

    if (this.isAnimating) {
      e.preventDefault();
      return;
    }

    var direction = -e.deltaY;

    if (direction < 0) {


      if ((this.currentSlide + 1) === this.props.data.length) {
        return;
      }

      if (window.pageYOffset < (this.sliderContainer.current.offsetTop - this.sliderContainer.current.offsetHeight)) {
        return;
      }


      if (parseInt($(this.sliderContainer.current).offset().top - 70) === window.pageYOffset) {
        this.isAnimating = true;
        this.currentSlide = this.currentSlide + 1;
        this.slider.slickGoTo(this.currentSlide);
        e.preventDefault();
        setTimeout(() => {
          this.isAnimating = false
        }, 1000)
        return;
      }

      this.isAnimating = true;
      e.preventDefault();
      this.animate($(this.sliderContainer.current).offset().top - 70);
    }

    else {
      if (this.currentSlide === 0) {
        return;
      }

      if ((this.currentSlide + 1) === this.props.data.length && window.pageYOffset > this.sliderContainer.current.offsetTop + this.sliderContainer.current.offsetHeight) {
        return;
      }

      if (parseInt($(this.sliderContainer.current).offset().top - 70) === window.pageYOffset) {
        this.isAnimating = true;
        this.slider.slickGoTo(--this.currentSlide);
        e.preventDefault();
        setTimeout(() => {
          this.isAnimating = false
        }, 1000)
        return;
      }


      this.isAnimating = true;
      e.preventDefault();
      this.animate($(this.sliderContainer.current).offset().top - 70);
    }

  }


  componentDidMount() {
    // const container = this.sliderContainer.current;
    this.currentSlide = 0;
    window.scrollTo(0, 0);
    // document.addEventListener("wheel", this.calculate, { passive: false })
  }
  render() {
    const items = this.props.data;
    const settings = {
      dots: true,
      infinite: true,
      vertical: true,
      verticalSwiping: true,
      arrows: false,
      // speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };

    

    return (
      <div className={`${styles.verticalslider} ${(this.props.dotColor) ? 'dot' + this.props.dotColor : ''}`} >
        <div className="py-4" >
          <SliderC className={styles.desktopslider}   {...settings}>
            {items?.map((item, index) => (
              <SliderContent key={index + '_slider'} item={item} />
            ))}
          </SliderC>
          <div className={styles.mobileslider}>
            {items?.map((item, index) => (
              <SliderContent key={index + '_slider'} item={item} total={items.length} currentIndex={index + 1} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default VerticalSlider;