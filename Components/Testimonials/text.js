import React, { Component } from 'react';

class AwardText extends Component {
    render() {
        return (
            <div>
                <h3 className="mb-5">{this.props?.title?.title}</h3>
                <h2 className="text-xl font-weight-bold">
                    {this.props?.title?.description}
                </h2>
            </div>
        );
    }
}

export default AwardText;