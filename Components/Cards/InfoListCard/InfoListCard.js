import React, { Component } from 'react';
import styles from './InfoListCard.module.scss';
import parse from 'html-react-parser';
import $ from 'jquery';
export default class InfoListCard extends Component {

  constructor(props) {
    super()
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
    return (
      <div className={styles.infolistcard}>
        <div className={styles.header} onClick={this.toggleExpansion}>
          <h3 className={styles.text+" m-0"}>{this.props.index} {this.props.data.title}</h3>
          <i className={styles.arrowicon + " icon-chevron-down"}></i>
        </div>
          <div className={styles.description} ref={this.collapsible}>
            <p className="text-xs text-line-height-1-6"> {parse(this.props.data.body)}</p>
          </div>
        </div>
        )
  }
}