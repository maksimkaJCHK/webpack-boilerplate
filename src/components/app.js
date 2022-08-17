import React from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import ExampleForm from 'components/exampleForm.jsx';
import ExampleAfterFormText from 'components/exampleAfterFormText.jsx';
import RandomDog from 'components/randomDog.jsx';

import rootReducer from 'reducers/rootReducer';
import rootSaga from 'saga/rootSaga';

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