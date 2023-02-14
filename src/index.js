import React from 'react';
import ReactDOM from 'react-dom/client';
import 'styles/style.scss';
import 'styles/randomDog.less';
import App from './components/app';

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

root.render(<App />);
