import React from 'react'
import './header.scss'

class Header extends React.Component {
  render() {
    return (
      <header className="header-container">
        <div className="icon-back"></div>
        我的
      </header>
    )
  }
}

export default Header