import React, { Component } from 'react';
import styles from './SubHeader.module.scss';


class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {icon: ""};
  }

  loadImage = icon => {
    let name = icon
    import(`../../Assets/images/Icons/${name}.svg`).then(image => {
      this.setState({
        icon: image.default.src
      });
    });
    // return icon
  };

  componentDidMount() {
    this.loadImage(this.props.item.icon)
  }
  render() {
    let {item} = this.props
    return (
      <>
        <div className={styles.item}>
          <div className={styles.iconBox}>
            <div className="ed-icon1">
              <img src={this.state.icon} alt={item.icon} className="ed-icon" /> 
            </div>
          </div>
          <div className={styles.textBox}>
              <h3 className="text-md ml-4 text-line-height-1-6">
                {item.msg}
              </h3>
          </div>
        </div>
      </>
    );
  }
}

export default ListItem;