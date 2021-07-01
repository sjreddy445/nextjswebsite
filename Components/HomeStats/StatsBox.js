import React, { Component } from 'react'
import styles from './HomeStats.module.scss'

export default class StatsBox extends Component {
  render() {
    let { data } = this.props
    return (
      <div className={styles.statsBox}>
        <div className={styles.number}>
          <span>{data.number}</span>
        </div>
        <div className={"text" } >
          <h3 className={styles.text + " text-lg"}>{data.text}</h3>
        </div>
      </div>
    )
  }
}
