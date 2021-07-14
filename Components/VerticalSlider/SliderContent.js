import React, { Component } from 'react';
import Image from 'next/image';
import styles from './VerticalSlider.module.scss';
import { AddCmsImgBaseUrl } from '../../Utils/Utils';
class SliderContent extends Component {
  constructor(props) {
    super();
  }

  render() {
    let { item, currentIndex, total } = this.props
    return (
      <div className={styles.slidercontent}>
        <div className={"d-flex flex-wrap flex-xl-nowrap justify-content-between align-items-center align-content-center "+ styles.containerinner}>
          <div className={"col-md-12 col-xl-6 order-1 order-xl-0 " + styles.textcontainer}>
            <p className={styles.mobilepagination}>{currentIndex} of {total}</p>
            <h4 className="text-xl mb-3 slidetitle">{item.title}</h4>
            <p className="text-xs text-grey text-line-height-1-6" dangerouslySetInnerHTML={{ __html: item.body }}></p>
          </div>
          <div className={"col-md-12 col-xl-6 order-0 order-xl-1" + styles.imagecontainer}>
            <img className="img-round img-fluid" alt={item.imgAlt} src={AddCmsImgBaseUrl(item.img.url)} />
          </div>
        </div>
      </div>
    )
  }
}

export default SliderContent;