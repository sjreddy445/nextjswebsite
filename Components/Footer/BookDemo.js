import React from 'react';
// import { useLocation, useHistory } from 'react-router-dom'
import { useRouter } from 'next/router'
import Scroll from 'react-scroll'
import { isBrowser } from "react-device-detect";
const BookDemo = (props) => {
    const router = useRouter();
    const scrollToContact = () => {
        let scroller = Scroll.scroller
        scroller.scrollTo('contactWidget', {
            duration: 800,
            delay: 0,
            offset: -80,
            smooth: 'easeInOutQuart'
        })
    }
    const handleNavigate = (e) => {
        e.preventDefault();
        const { pathname } = router;
        if (pathname === '/' || pathname.includes('/products') || pathname==='/about' || pathname==='/integrations') {
            scrollToContact();
        } else {
            router.push('/contact')
        }
    };
    return (
        <form className="form" onSubmit={handleNavigate} >
            <button className="btn" style={{fontWeight:700}} >
                BOOK A DEMO</button>
        </form>
    );
}

export default BookDemo;