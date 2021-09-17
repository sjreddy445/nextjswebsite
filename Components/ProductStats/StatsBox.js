import React, { Component } from 'react'
import styles from './ProductStats.module.scss'

export default class StatsBox extends Component {
  render() {
    let { data } = this.props
    return (
      
        <div className={styles.statsBox }>
          <div className={styles.number}>
            <span>{data.number}</span>
          </div>
          <div className="text" >
            <p className={styles.text + " text-lg"}>{data.text}</p>
          </div>
        </div>
    )
  }
}
