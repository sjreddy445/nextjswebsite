import React, { Component } from 'react'
import StoryCard from './StoryCard'
import styles from "./OurStory.module.scss";
class OurStory extends Component {

  constructor() {
    super();
    this.sliderContainer = React.createRef();
    this.scrollLeft = this.scrollLeft.bind(this);
    this.scrollRight = this.scrollRight.bind(this); 
  }

  componentDidMount() {
    if (this.props?.story.length > 0) {
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
    return (
      <div className="py-4">
        <div className="container-inner d-flex justify-content-between">
          <h3 className="mb-4 text-weight-800">{this.props?.title?.title}</h3>
          <div>
            <button className="bg-transparent border-0 btn-no-outline" onClick={this.scrollLeft}><i className="icon-arrow-left"></i></button>
            <button className="bg-transparent border-0 btn-no-outline" onClick={this.scrollRight}><i className="icon-arrow-right"></i></button>
          </div>
        </div>
        <div className={styles.slidercontainer} ref={this.sliderContainer}>
          {this.props?.story?.map((data, i) => <StoryCard key={i} {...data} />)}

        </div>
      </div>
    )
  }
}

export default OurStory;