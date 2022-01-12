import React, { Component } from 'react';
import { AddCmsImgBaseUrl } from '../../../Utils/Utils';
import styles from './ratioCard.module.scss';
import { withRouter } from 'next/router'
class RatioCard extends Component {

  handleClick = (url) => {
    // this.props.router.push("/products/" + url, '')
  }

  render() {
    let { data } = this.props
    return (
      <div className={styles.ratiocard + ` pointer ${this.props?.ratio}`} style={{ backgroundImage: `url('${AddCmsImgBaseUrl(data?.imgUrl?.url)}')`, backgroundColor: data?.bgColor }} onClick={() => window.open(data.pageUrl, '_blank')}>
        <div className={styles.contentbox}>
          <div className={styles.logo}>
            <img src={AddCmsImgBaseUrl(data?.logo?.url)} alt={data?.alt} className="img-fluid" />
          </div>
          <div className={data?.captionClass}>
            <span>
              {data?.caption}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(RatioCard);