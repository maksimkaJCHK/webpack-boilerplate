import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './store/reducers/rootReducer';
import rootSaga from './store/saga/rootSaga';
import './css/style.scss';
import './css/randomDog.less';
import ExampleForm from './components/exampleForm';
import ExampleAfterFormText from './components/exampleAfterFormText';
import RandomDog from './components/randomDog';

const node = document.getElementById('app');

const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store = { store }>
    <div className = "app">
      <ExampleForm />
      <ExampleAfterFormText />
      <RandomDog />
    </div>
  </Provider>,
  node
)