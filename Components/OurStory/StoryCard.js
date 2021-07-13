import React, { Component } from 'react'
import styles from "./StoryCard.module.scss"
import parse from 'html-react-parser'
import Image from 'next/image';
import { AddCmsImgBaseUrl } from '../../Utils/Utils'
class StoryCard extends Component {

  constructor(props) {
    super();
  }


  render() {
    console.log("this.props.",this.props.imgUrl)
    return (
      <div className={styles.storycard}>
        <div>
          <h5 className="text-weight-800">{this.props.smallTitle}</h5>
          <h4 className={"text-lg " + styles.headerText}>{this.props.title}</h4>
          <p className="text-xs">{parse(this.props.body)}</p>
        </div>
        {this.props.imgUrl ?
          <div>
            <img className={styles[this.props.imgClass] + " img-fluid image"} alt={this.props.imgAlt} src={AddCmsImgBaseUrl(this.props.imgUrl.url)} />
          </div>
          :
          ""
        }
      </div>
    )
  }
}

export default StoryCard;