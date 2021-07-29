// components/Layout.js
import React, { Component } from 'react';
import Header from '../TopNav/TopNav';
import Footer from '../Footer/Footer';

export default class Layout extends Component {
  render () {
    const { children } = this.props
    console.log("hello,",this.props)
    return (
      <div className='layout'>
        <Header />
        {children}
        <Footer  />
      </div>
    );
  }
}

