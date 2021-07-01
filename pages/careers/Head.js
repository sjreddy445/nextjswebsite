import React, { Component } from 'react';
import styles from "./career.module.scss";
export default class Head extends Component {
  render() {
    return (
      <div className={styles.accordionhead}>
        <h3 className={styles.headtitle}>{this.props.title}</h3>
        <i className="icon-chevron-down"></i>
      </div>
    )
  }
}