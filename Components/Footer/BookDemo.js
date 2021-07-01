import React from 'react';
// import { useLocation, useHistory } from 'react-router-dom'
import Scroll  from 'react-scroll'
import {isBrowser } from "react-device-detect";
const BookDemo = (props) => {
    // const location = useLocation();
    // const history = useHistory();
    const scrollToContact = () => {
        let scroller = Scroll.scroller
        scroller.scrollTo('contactWidget', {
            duration: 800,
            delay: 0,
            offset: isBrowser ? -20 : 320,
            smooth: 'easeInOutQuart'
        })
    }
    const handleNavigate = (e) => {
        e.preventDefault();

        if (location && (location.pathname === '/' || location.pathname.includes('/products'))) {
            scrollToContact();
        } else {
            history.push('/contact')
        }
    };
    return (
        <form className="form" onSubmit={handleNavigate} >
            <button className="btn" >
                <strong>BOOK A DEMO</strong></button>
        </form>
    );
}

export default BookDemo;