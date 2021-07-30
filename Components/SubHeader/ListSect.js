import React, { Component } from 'react';
import ListItem from './ListItem';
import { Col } from 'reactstrap';

class ListSect extends Component {
  render() {
    let {sub_headers} = this.props?.data;
    
    return (
      <div className="d-flex flex-mobile-wrap mt-3">
        {sub_headers?.map((item, i)=>(
          <Col md={4} sm={12} className="p-0" key={i}>
            <ListItem item={item} />
          </Col>
        ))}
      </div>
    );
  }
}

export default ListSect;