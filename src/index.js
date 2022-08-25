import React from 'react';
import ReactDOM from 'react-dom/client';
import list from 'helpers/example.coffee';
import 'styles/style.scss';
import 'styles/style.less';

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

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