import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router'
import Footer from './component/footer/footer'

import * as serviceWorker from './serviceWorker';

import './style/reset.css'
import './style/common.scss'

ReactDOM.render(
  <div className="app-container">
    <Router />
    <Footer />
  </div>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
