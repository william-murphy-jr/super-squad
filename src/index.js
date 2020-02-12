import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import RootReducer from './reducers';

const store = createStore(RootReducer);
console.log('store.getState(): ', store.getState());
// console.log('store: ', store);
// setTimeout(() => {
//   store.dispatch(addCharacterById(2));
// },1000);

// store.subscribe(() => console.log('store.subscribe:(cb) ', store.getState()));

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
, document.getElementById('root'));
