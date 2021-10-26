import React, { Component } from 'react'
import { AddCmsImgBaseUrl } from '../../Utils/Utils'
import { withRouter } from 'next/router'
import {
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
} from 'reactstrap'
import BlogHeaders from './../BlogItem/BlogHeaders'
import styles from './CardSect.module.scss'

class BlogCard extends Component {

  navigateToPost = (id) => {
    this.props.router.push(`/blog/${id}`, '', { shallow: true })
  }

  getCleanText = (content) => {
    let filtered = content ? content.replace(/&nbsp;/g, ' ') : '';
    return filtered
  }

  render() {
    let { blog } = this.props

    return (
      <Col md={4} className="p-3">
        <Card className={"h-100 pointer " + styles.cardmobile} onClick={() => this.navigateToPost(blog.slug)}>
          <CardImg top width="100%" src={AddCmsImgBaseUrl(blog.featuredImage.url)} alt={blog.title} className={"img-fluid " + styles.cardimg} />
          <CardBody>
            {blog.categories ?
              <span className="text-xxs">
                <BlogHeaders categories={blog.categories} date={blog.created_at} /> </span>
              :
              ""
            }
            <CardTitle className="text-sm mt-3"><b>{blog.title}</b></CardTitle>
            <CardText className="text-xs"><span dangerouslySetInnerHTML={{ __html: this.getCleanText(blog.subTitle) }} /></CardText>
          </CardBody>
        </Card>
      </Col>
    )
  }
}
export default withRouter(BlogCard)