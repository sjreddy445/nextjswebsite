import React, { Component } from 'react';
import ListItem from './ListItem';
import { Col } from 'reactstrap';

class ListSect extends Component {
  render() {
    let {items} = this.props.data.subHeader
    return (
      <div className="d-flex flex-mobile-wrap mt-3">
        {items?.map((item, i)=>(
          <Col md={4} sm={12} className="p-0" key={i}>
            <ListItem item={item} />
          </Col>
        ))}
      </div>
    );
  }
}

export default ListSect;