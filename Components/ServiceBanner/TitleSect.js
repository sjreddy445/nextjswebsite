import React, { useState, useEffect } from 'react';
import Scroll from 'react-scroll'
import {isBrowser } from "react-device-detect";



const TitleSect = (props) => {

  const scrollToContact = () => {
    let scroller = Scroll.scroller
    scroller.scrollTo('contactWidget', {
      duration: 800,
      delay: 0,
      offset: isBrowser ? -20 : 320,
      smooth: 'easeInOutQuart'
    })
  }
  return (
    <div>
      <h4 className="text-lg font-weight-bold">Our Offerings</h4>
      <h2 className="text-xl mt-4 font-weight-bold">{props.data.title}</h2>
      <div className="text-sm mt-4 text-brand pointer" onClick={scrollToContact}>LETS DISCUSS YOURS</div>
    </div>
  );
}

export default TitleSect;