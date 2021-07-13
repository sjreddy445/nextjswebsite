import React, { Component } from 'react';
import { AddCmsImgBaseUrl } from '../../../Utils/Utils';
import styles from './ratioCard.module.scss';
class RatioCard extends Component {

  state = {
    redirectTo: ""
  }

  handleClick = (url) => {
    this.setState({
      redirectTo: "/products/" + url
    })
    // return <Redirect to={{pathname:`/${url}`}} />
    // this.props.history.push("/"+url)
  }

  render() {
    let { data } = this.props
    // if (this.state.redirectTo) {
    //   return <Router to={{pathname: this.state.redirectTo}} />
    // }
    return (
      <div className={styles.ratiocard + ` pointer ${this.props.ratio}`} style={{ backgroundImage: `url('${AddCmsImgBaseUrl(data.imgUrl.url)}')`, backgroundColor: data.bgColor }} onClick={() => this.handleClick(data.pageUrl)}>
        <div className={styles.contentbox}>
          <div className={styles.logo}>
            <img src={AddCmsImgBaseUrl(data.logo.url)} alt={data.alt} className="img-fluid" />
          </div>
          <div className={data.captionClass}>
            <span>
              {data.caption}
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default RatioCard;