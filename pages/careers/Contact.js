import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className="ml-4 my-4">
        <span className="text-sm"><b>{this.props?.data?.title}  <a style={{ color: '#007bff' }} href="mailto:careers@edgenetworks.in">careers@edgenetworks.in</a></b></span>
      </div>
    )
  }
}
