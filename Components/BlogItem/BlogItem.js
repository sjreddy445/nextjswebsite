import React, { Component } from 'react';
import CardSect from '../CardList/CardSect';
import Api from '../../Config/Api'

export default class BlogItem extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
      this.setState({
        sect: {
          title: this.props.title,
          items: this.props.blogs,
          viewAll: `/all-resource${this.props.resourceUrl}`
        }
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