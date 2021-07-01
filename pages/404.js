import React, { Component } from 'react'
import { setNavColor } from '../Components/TopNav/Utils'
import Fade from 'react-reveal/Fade';
import BgImage from '../public/images/404.svg'

export default class FourZeroFour extends Component {

    componentDidMount() {
        setNavColor("white-bg");
        window.scrollTo(0, 0)
    }
    render() {
        return (
            <Fade>
                <div className="container-inner">
                    <div className="d-flex justify-content-center align-items-center flex-column" style={{ paddingTop: "6rem" }}>
                        <img src={BgImage.src} alt="404" className="img-fluid" />
                        <div className="mt-4 text-center">
                            <span>Oops! The Page you were looking for could not be found.</span>
                        </div>
                    </div>
                </div>
            </Fade>
        )
    }
}


