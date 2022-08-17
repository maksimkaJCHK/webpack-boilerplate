import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/style.scss';
import './css/randomDog.less';
import App from './components/app';

const node = document.getElementById('app');
const root = ReactDOM.createRoot(node);

root.render(<App />);