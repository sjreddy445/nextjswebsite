import React, { Component } from 'react'
import parse from 'html-react-parser'
import styles from './SimpleSlider.module.scss'

export default class TextSect extends Component {
  render() {
    let message = parse(this.props.data.message)
    return (
      <div>
        <div className="text-xl mb-4"><b>{this.props.data.title}</b></div>
        <div className={styles.message}>
          {message}
        </div>
      </div>
    )
  }
}
