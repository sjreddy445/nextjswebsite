import React, { Component } from 'react'
import { setNavColor } from '../Components/TopNav/Utils'
import HeaderBanner from '../Components/HeaderBanner/HeaderBanner'
import { payload as LifeHeaderData } from '../Payloads/Life/Header'
import { payload as SliderData } from '../Payloads/Life/Slider'
import { Fade } from 'react-reveal'
import SimpleSlider from '../Components/SimpleSlider/SimpleSlider';
import { Helmet } from 'react-helmet'

export default class Life extends Component {
  state = {
    headerData: {},
    sliders:[]
  }
  componentDidMount() {
    setNavColor("transparent-bg text-white");
    window.scrollTo(0, 0)
    this.headerDataFunc();
    this.getSliders();
  }

  headerDataFunc = async () => {
    var headerData = await LifeHeaderData();
    this.setState({ headerData: headerData })
  }

  getSliders = async () => {
    var slider = await SliderData();
    this.setState({ sliders: slider })
  }


  render() {
    return (
      <Fade>
        <Helmet>
          <title>Life @Edge - Talent management is an industry that's rapidly growing and you should come work with us at Edge</title>
          <meta name="description" content="According to PwC, 74% of companies will deploy HR tech in 2020. Talent management is an industry that's rapidly growing and you should come work with us at Edge" />
        </Helmet>
        <div className="header-box mb-5">
          <HeaderBanner data={this.state.headerData} />
        </div>
        {this.state.sliders.map((slider, i) => (
          <div className="section-margin" key={i}>
            <SimpleSlider data={slider} width="620" height="368" />
          </div>
        ))}
        <div className="section-margin">

        </div>
      </Fade>
    )
  }
}
