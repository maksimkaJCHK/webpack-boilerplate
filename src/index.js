import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './css/style.scss';
import './css/style.less';

const node = document.getElementById('app');

const Primer = (props) => {
  let { name } = props;

  return (
    <div className = "brd">
      <p>Привет { name }!</p>
      <p>Твое имя содержит - <b>{ name.length }</b> символов</p>
    </div>
  );
}

ReactDOM.render(
  <Primer name="Максим" />,
  node
)