import React from 'react';
import PropTypes from 'prop-types'
import './menuList.scss'

class MenuList extends React.Component {
  static propTypes = {
    detailClick: PropTypes.func
  }
  handleClick() {
      this.props.detailClick()
  }
  render() {
    
    return(
      <div className="menulist-container" onClick={this.handleClick.bind(this)}>
        <div className="menu-item">
          <img className="item-icon" src={this.props.icon} />
          <span className="menu-name">{this.props.name}</span>
          <img className="icon-right" src={require("../../assets/images/icon-right.svg")} />
        </div>
      </div>
    )
  }
}

export default MenuList