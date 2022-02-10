import React, { Component } from 'react'
import { setNavColor } from '../Components/TopNav/Utils'
import HeaderBanner from '../Components/HeaderBanner/HeaderBanner'
import { payload as LifeHeaderData } from '../Payloads/Life/Header'
import { payload as SliderData } from '../Payloads/Life/Slider'
import { Fade } from 'react-reveal'
import SimpleSlider from '../Components/SimpleSlider/SimpleSlider';
import Head from 'next/head'
import { pageTitle } from '../Payloads/pageTitle/title';

export default class Life extends Component {
  state = {
    headerData: {},
    sliders:[]
  }
  componentDidMount() {
    setNavColor("transparent-bg text-white");
    window.scrollTo(0, 0)
  }



  render() {
    return (
      <Fade>
        <Head>
        <title>{pageTitle('life')}</title>
          <meta name="description" content="According to PwC, 74% of companies will deploy HR tech in 2020. Talent management is an industry that's rapidly growing and you should come work with us at Edge" />
        </Head>
        <div className="header-box mb-5">
          <HeaderBanner data={this.props.headerData} />
        </div>
        {this.props?.sliders?.map((slider, i) => (
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

export async function getStaticProps(context) {
  var headerData = await LifeHeaderData();
  var slider = await SliderData();
  return {
    props: { headerData: headerData,sliders: slider }
  }
}
