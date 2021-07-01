import React, { Component } from 'react'
import styles from "./StoryCard.module.scss"
import parse from 'html-react-parser'
import Image from 'next/image';
class StoryCard extends Component {

  constructor(props) {
    super();
  }


  render() {
    return (
      <div className={styles.storycard}>
        <div>
          <h5 className="text-weight-800">{this.props.smallTitle}</h5>
          <h4 className={"text-lg " + styles.headerText}>{this.props.title}</h4>
          <p className="text-xs">{parse(this.props.body)}</p>
        </div>
        {this.props.imgUrl ?
          <div>
            <img className={styles[this.props.imgClass] + " img-fluid image"} alt={this.props.imgAlt} src={this.props.imgUrl} />
          </div>
          :
          ""
        }
      </div>
    )
  }
}

export default StoryCard;