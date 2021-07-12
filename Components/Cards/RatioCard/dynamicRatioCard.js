import React, { Component } from 'react';
// import "./ratioCard.scss"
// import { Redirect } from 'react-router-dom'
import Router from 'next/router'
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
      <div className={styles.ratiocard + ` pointer ${this.props.ratio}`} style={{ backgroundImage: `url('${data.imgUrl}')`, backgroundColor: data.bgColor }} onClick={() => this.handleClick(data.pageUrl)}>
        <div className={styles.contentbox}>
          <div className={styles.logo}>
            <img src={data.logo} alt={data.alt} className="img-fluid" />
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