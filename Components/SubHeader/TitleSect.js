import React, { Component } from 'react';

class TitleSect extends Component {
  render() {
    let {subHeader} = this.props.data
    return (
      <div>
        <h4 className="text-xl font-weight-bold">
          {subHeader.title}
        </h4>
      </div>
    );
  }
}

export default TitleSect ;