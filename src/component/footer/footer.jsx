import React from 'react';
import { createHashHistory } from 'history';

import './footer.scss'
const history = createHashHistory()
class Footer extends React.Component {
  state = {
    footerMenuList: [
      {
        name: '首页',
        icon: require('../../assets/images/icon-home.svg'),
        url: '/home'
      },
      {
        name: '分类',
        icon: require('../../assets/images/icon-classify.svg'),
        url: '/classify'
      },
      {
        name: '购物车',
        icon: require('../../assets/images/shopping-car.svg'),
        url: '/shoppingCar'
      },
      {
        name: '我的',
        icon: require('../../assets/images/icon-profiles.svg'),
        url: '/profiles'
      }
    ]
  }
 
  goToTargetPage(item) {
    if(item.url) {
      history.push(item.url)
    }
  }
  render() {
    return(
      <div className="footer-container">
        {this.state.footerMenuList.map((item, index) => {
          return (
            <div className="footer-item" key={index} onClick={this.goToTargetPage.bind(this, item)}>
              <img src={item.icon} alt=""/>
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Footer