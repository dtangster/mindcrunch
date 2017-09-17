import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga';

import reducers from './reducers';
import Router from './router';
import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(createSagaMiddleware())(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.querySelector('.app')
)
