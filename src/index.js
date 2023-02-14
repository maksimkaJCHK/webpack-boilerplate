import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import list from 'helpers/example.coffee';
import 'styles/style.scss';
import 'styles/style.less';
=======
import './css/style.scss';
import './css/randomDog.less';
import App from './components/app';
>>>>>>> e5ce11cabe334ca83efa436b58f446b96596f5e6

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

<<<<<<< HEAD
const Primer = (props) => {
  let { name } = props;

  return (
    <div className = "brd">
      <p>Привет { list(name) }</p>
      <p>Твое имя содержит - <b>{ name.length }</b> символов</p>
    </div>
  );
}

root.render(<Primer name="максим" />);
=======
root.render(<App />);
>>>>>>> e5ce11cabe334ca83efa436b58f446b96596f5e6
