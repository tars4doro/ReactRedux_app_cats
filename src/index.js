import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers }  from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import * as serviceWorker from './serviceWorker';
import 'tachyons';
import './index.css';
import App from './App';
import { searchPetName, fetchCats } from './reducers';

//combining imported reducers into one root reducer
const rootReducer = combineReducers({ searchPetName, fetchCats });
//creating main store for root reducer and applying middlewares;
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()));

//wrapping into Provider to pass store to children components
ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
