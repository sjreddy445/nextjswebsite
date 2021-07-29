import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import ProductCard from './ProductCard';
class ProductList extends Component {

  render() {
    return (
      <div className="container-inner">
        <Row className="m-0">
          <Col md={12}>
            <div className="title text-lg mb-4"><b>{this.props?.title?.title}</b></div>
          </Col>
          <Row className="w-100">
            {this.props?.data?.map((card, i) => (
              <ProductCard data={card} key={i} />
            ))}
          </Row>
        </Row>
      </div>
    );
  }
}

export default ProductList;