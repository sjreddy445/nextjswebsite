import React, { Component } from 'react'
import dynamic from 'next/dynamic';
// import { ReactTinyLink } from 'react-tiny-link'
const ReactTinyLink = dynamic(
  () => import('react-tiny-link').then(mod => mod.ReactTinyLink),
  { ssr: false }
)

export default class LinkPreview extends Component {
  render() {
    return (
      <>
        <ReactTinyLink
          cardSize="large"
          showGraphic={true}
          maxLine={2}
          minLine={1}
          proxyUrl="https://sheltered-cliffs-38463.herokuapp.com"
          url={this.props.data.url}
        />
      </>
    )
  }
}
