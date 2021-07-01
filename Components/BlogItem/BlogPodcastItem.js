import React, { Component } from 'react';
import PodcastSect from '../CardList/PodcastSec';
import Api from '../../Config/Api'

export default class BlogItem extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    Api.get(this.props.resourceUrl, { params: { _limit: 6 , _sort:"episode:asc" } }).then(({ data: dataItems }) => {
      this.setState({
        sect: {
          title: this.props.title,
          items: dataItems,
          viewAll: `/all-resource${this.props.resourceUrl}`
        }
      })
    })
  }
 
  render() {

    if (!this.state.sect) {
      return (<p className="container-inner">Loading</p>)
    }

    return (
      <div className="container-inner blog-item" id={this.props.title}>
        <PodcastSect sect={this.state.sect} {...this.props}/>
      </div>
    )
  }
} 