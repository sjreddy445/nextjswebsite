import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Api from '../../Config/Api';
import ProductCard from './ProductCard';
import { payload as ProductListData } from '../../Payloads/Home/ProductList.js'
class ProductList extends Component {
  state = {
    productList: []
  }
  componentDidMount = async () => {
    let data = await ProductListData();
    this.setState({ productList: data });

  }

  render() {
    return (
      <div className="container-inner">
        <Row className="m-0">
          <Col md={12}>
            <div className="title text-lg mb-4"><b>We do this in 3 ways</b></div>
          </Col>
          <Row className="w-100">
            {this.state.productList.map((card, i) => (
              <ProductCard data={card} key={i} />
            ))}
          </Row>
        </Row>
      </div>
    );
  }
}

export default ProductList;