import React, { Component } from 'react'
import CardSect from './CardSect'

export default class CardList extends Component {
  render() {
    let {blogData} = this.props
    return (
      <div className="container-inner">
        {blogData?.map((blog, i)=>(
          <CardSect sect={blog} key={i} {...this.props}/>
        ))}
        
      </div>
    )
  }
}
