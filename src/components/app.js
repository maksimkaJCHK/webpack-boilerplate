import React from 'react';

import { Provider } from 'react-redux';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import ExampleForm from 'components/exampleForm.jsx';
import ExampleAfterFormText from 'components/exampleAfterFormText.jsx';
import RandomDog from 'components/randomDog.jsx';

import rootReducer from 'reducers/rootReducer';
import rootSaga from 'saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

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