import React from 'react';
import ReactDOM from 'react-dom';
import './css/style.scss';
import './css/randomDog.less';
import App from './components/app';

const node = document.getElementById('app');

ReactDOM.render(
  <App />,
  node
)