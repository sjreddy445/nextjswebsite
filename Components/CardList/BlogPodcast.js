import React, { Component } from 'react'
import { Col, Card, CardText, CardBody, CardTitle } from 'reactstrap'
import Image from 'next/image';
import { AddCmsImgBaseUrl } from '../../Utils/Utils';
export default class PodcastCard extends Component {

  navigateToPost = (id) => {
    this.props.history.push(`/blog/${id}`)
  }

  getCleanText = (content) => {
    let filtered = content.replace(/&nbsp;/g, ' ')
    return filtered
  }

  render() {
    let { podcast } = this.props

    return (
      <Col md={4} className="p-3">
        <Card className="h-100 pointer shadow border-0">
          <CardBody className="text-center podcast-title p-3">
            <CardTitle className="text-sm text-center mt-3 p-3"><b className="podcast-title">{`Episode ${podcast.episode}`}</b></CardTitle>
            <img className="m-3" style={{borderRadius:50}} src={podcast?.image ? AddCmsImgBaseUrl(podcast.image.url) : "https://www.sunsetlearning.com/wp-content/uploads/2019/09/User-Icon-Grey.png"} height={60} width={60} alt="" />
            <CardText className="text-xs font-weight-light">{podcast.name}</CardText>
            <CardText className="text-xs font-weight-normal">{podcast.designation}</CardText>
            <CardText className="text-xs font-weight-bolder">{podcast.company}</CardText>
            <div className="p-4">
              <button onClick={() => { window.open(podcast.url, "_blank") }} className="btn btn-primary w-75  rounded font-weight-bold">Listen</button>
            </div>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
