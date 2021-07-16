import React, { Component } from 'react'
import { Col, Row } from 'reactstrap'
import BlogVideo from './BlogVideo'
import styles from "./CardSect.module.scss"
import { withRouter } from 'next/router';
class VideoSect extends Component {
  constructor() {
    super();
    this.sliderContainer = React.createRef();
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this);
  }

  componentDidMount() {
    if (this.props.sect.items.length > 0) {
      let firstChild = this.sliderContainer.current.children[0];
      let style = firstChild.currentStyle || window.getComputedStyle(firstChild);
      this.slideWidth = this.sliderContainer.current.children[0].offsetWidth + parseInt(style.marginRight);
    }
  }

  scrollLeft() {
    let container = this.sliderContainer.current;
    container.scrollLeft = container.scrollLeft - this.slideWidth;
  }

  scrollRight() {
    let container = this.sliderContainer.current;
    container.scrollLeft = container.scrollLeft + this.slideWidth;
  }

  render() {
    let { sect } = this.props
    return (
      <Row className={styles.cardsect}>
        <Col md={12} className="mb-3 p-0">
          <div className="title d-flex allign-middle">
            <Col md={6} className=" p-0">
              <span><b>{sect.title}</b></span>
            </Col>
          </div>
        </Col>
        <Row className={"container-fluid " + styles.desktopview}>
          {sect?.items?.map((item, i) => (
            <BlogVideo video={item} key={i} {...this.props} />
          ))}
        </Row>
        <div className={"container-inner text-center " + styles.mobileview + " " + styles.slidercontainer} ref={this.sliderContainer}>
          {sect?.items?.map((item, i) => (
            <BlogVideo video={item} key={i} {...this.props}  />
          ))}
        </div>
        <Col md={11} sm={8} xs={4} className={'container-inner'} >
          <span className="mt-2 text-xs" onClick={() => this.props.router.push(sect.viewAll, "", { shallow: true })} >
            <b className="text-brand mt-2 float-right" style={{ cursor: 'pointer' }}>VIEW ALL</b>
          </span>
        </Col>
      </Row>
    )
  }
}

export default withRouter(VideoSect)