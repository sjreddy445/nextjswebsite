import React, { Component } from 'react';
import { Col } from 'reactstrap';
import styles from './ProductList.module.scss'

class ProductCard extends Component {

  constructor(props) {
    super(props);
    this.state = {productImg: ""};
  }

  loadImage = title => {
    let name = title.slice(0,-1).toLowerCase()
    let productImg
    import(`../../Assets/images/Home/${name}.svg`).then(image => {
      this.setState({
        productImg: image.default.src
      });
    });
    return productImg
  };

  componentDidMount() {
    this.loadImage(this.props.data.title2)
  }

  render() {
    return (
      <>
        <Col md={4} sm={12}>
          <div className="d-none d-md-block text-center">
            <img src={this.state.productImg} alt={this.props.data.imgAlt} className="img-fluid"/>
          </div>
          <h2 className={styles.cardTitle+" text-lg mt-4"}>
              <b>{this.props.data.title1}</b> <br/>
              <b>{this.props.data.title2}</b>
          </h2>
          <div className={styles.cardSubtitle+" text-sm mt-2"}> 
            {this.props.data.subtitle}
          </div>
          <div className={styles.cardLink + " text-xs mt-2"}>
            <a href={this.props.data.url}>SEE MORE</a>
          </div>
          <div className="d-sm-block d-md-none sm-center">
            <img src={this.state.productImg} alt={this.props.data.title1 + this.props.data.title2} className="img-fluid"/>
          </div>
        </Col>
      </>
    );
  }
}

export default ProductCard;