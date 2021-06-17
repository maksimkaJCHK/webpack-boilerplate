import React from 'react';
import ExampleForm from './exampleForm.jsx';
import ExampleAfterFormText from './exampleAfterFormText.jsx';
import RandomDog from './randomDog.jsx';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../store/reducers/rootReducer';
import rootSaga from '../store/saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

const App = () => {
  return (
    <Provider store = { store } >
      <div className = 'app'>
        <ExampleForm />
        <ExampleAfterFormText />
        <RandomDog />
      </div>
    </Provider>
  )
}

export default App;