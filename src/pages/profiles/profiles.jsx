import React from 'react';
import './profiles.scss'
// 引入组件
import Header from '../../component/header/header'
import MenuList from '../../component/menuList/menuList'

class Home extends React.Component {
  state = {
    menuList: [
      {
        name: '我的订单',
        icon: require('../../assets/images/icon-order.svg')
      },
      {
        name: '积分商城',
        icon: require('../../assets/images/icon-Integral.svg')
      },
      {
        name: '会员中心',
        icon: require('../../assets/images/icon-vip.svg')
      },
      {
        name: '服务中心',
        icon: require('../../assets/images/icon-service.svg')
      },
      {
        name: '下载App',
        icon: require('../../assets/images/icon-app.svg')
      }
    ]
  };
  handleClick(item) {
    alert(item.name)
  };
  render() {
    return (
      <div className="profiles-container">
        <Header />
        <div className="info-bar">
          <div className='bar-item'>
            <div className="sum">
              <span>0.00</span>元
            </div>
            <p>我的余额</p>
          </div>
          <div className='bar-item my-discounts'>
            <div className="discounts-num">
              <span>0</span>个
            </div>
            <p>我的优惠</p>
          </div>
          <div className='bar-item'>
            <div className="my-integral">
              <span>0</span>分
            </div>
            <p>我的积分</p>
          </div>
        </div>
        {this.state.menuList.map((item, index) => {
          return (
            <MenuList name={item.name} icon={item.icon} key={index} detailClick={this.handleClick.bind(this, item)} />
          )
        })}
      </div>
    )
  }
}

export default Home