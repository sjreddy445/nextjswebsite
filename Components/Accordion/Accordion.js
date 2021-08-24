import React, { Component } from 'react';
import styles from "./Accordion.module.scss"
import $ from 'jquery';

export default class Accordion extends Component {
  constructor(props) {
    super();
    this.collapsible = React.createRef();
    this.expanded = false;
    this.toggleExpansion = this.toggleExpansion.bind(this);
  }

  componentDidMount() {
    this.collapsible = this.collapsible.current;
  }

  toggleExpansion() {
    if (!this.expanded) {
      $(this.collapsible).css({ "height": this.collapsible.scrollHeight });
      this.expanded = true;
    } else {
      $(this.collapsible).css({ "height": '' });
      this.expanded = false;
    }
  }

  render() {
    console.log("this.props", this.props)
    return (
      <div className={styles.accordion + " container-inner"}>
        <div className={styles.head} onClick={this.toggleExpansion}>
          <b>{this.props?.head}</b>
        </div>
        <div className={styles.body} ref={this.collapsible}>
          <p className="text-sm">{this.props?.subTitle}</p>
          <div className={styles.innerbody}>
            {this.props?.body}
          </div>
        </div>
        <div className={styles.mt}>
          {this.props.hr && <hr />}
        </div>
      </div>
    )
  }
}