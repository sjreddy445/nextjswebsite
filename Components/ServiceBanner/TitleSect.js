import React, { useState, useEffect } from 'react';
import Scroll from 'react-scroll'
import {isBrowser } from "react-device-detect";



const TitleSect = (props) => {

  const scrollToContact = () => {
    let scroller = Scroll.scroller
    scroller.scrollTo('contactWidget', {
      duration: 800,
      delay: 0,
      offset: -80,
      smooth: 'easeInOutQuart'
    })
  }
  return (
    <div>
      <p className="text-lg font-weight-bold">{props?.title?.title}</p>
      <p className="text-xl mt-4 font-weight-bold">{props?.title?.description}</p>
      <div className="text-sm mt-4 text-brand pointer" onClick={scrollToContact}>LETS DISCUSS YOURS</div>
    </div>
  );
}

export default TitleSect;