import React, { Component } from 'react';
import NavLink from 'next/link'

const year = new Date().getFullYear()

class Footer extends Component {

  constructor(props) {
    super()
    this.state = {
      modal: false
    }
  }
  render() {
    return (
      <>
        <p>Hello</p>
      </>
    )
  }
}

export default Footer;