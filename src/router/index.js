import React from 'react';
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom';

// 页面
import Profiles from '../pages/profiles/profiles';
import Home from '../pages/home/home';
import Classify from '../pages/classify/classify';
import ShoppingCar from '../pages/shoppingCar/shoppingCar';

export default class Routers extends React.Component {
  render() {
    return (
      <HashRouter>
        <Route path="/profiles" component={Profiles}></Route>
        <Route path="/home" component={Home}></Route>
        <Route path="/classify" component={Classify}></Route>
        <Route path="/shoppingCar" component={ShoppingCar}></Route>
        <Redirect from='/' to='/profiles'></Redirect>
      </HashRouter>
    )
  }
}