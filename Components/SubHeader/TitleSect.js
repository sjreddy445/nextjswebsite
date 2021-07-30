import React, { Component } from 'react';

class TitleSect extends Component {
  render() {
    let {subTitleHeader} = this.props.data;
    return (
      <div>
        <h4 className="text-xl font-weight-bold">
          {subTitleHeader}
        </h4>
      </div>
    );
  }
}

export default TitleSect ;