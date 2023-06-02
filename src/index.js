import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import 'front-end/css/import.css'
import 'front-end/css/style.css'



import { createStore , applyMiddleware  } from 'redux';

import rootReducer from 'store/rootReducer';

import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';

// import { hydrate, render } from "react-dom";
 
// const rootElement = document.getElementById("root");
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

// const snapApp = (
//   <Provider store={store}>
//     <App />
//   </Provider>
// );

// if (rootElement.hasChildNodes()) {
//   hydrate(snapApp, rootElement);
// } else {
//   render(snapApp, rootElement);
// }






ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
