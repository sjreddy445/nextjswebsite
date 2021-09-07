import React, { Component } from 'react';
import CardSect from '../CardList/CardSect';
import Api from '../../Config/Api'

export default class BlogItem extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    
    Api.get(this.props.resourceUrl, { params: { _limit: 6 , _sort:"created_at:desc" } }).then(({ data: dataItems }) => {
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
      return (<p className="container-inner"></p>)
    }

    return (
      <div className="container-inner blog-item" id={this.props.title}>
        <CardSect sect={this.state.sect} {...this.props}/>
      </div>
    )
  }
} 