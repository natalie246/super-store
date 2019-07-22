import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AppManager from './AppManager';
import Desc from './components/ProductPage/DescTab';
import Login from './components/Login/Login';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import ProductPage from './components/ProductPage/ProductPage';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import { searchProduct, requestProducts, requestCurrentProduct } from './reducers';

const logger = createLogger();

const rootReducers = combineReducers({ searchProduct, requestProducts, requestCurrentProduct });

const store = createStore(
    rootReducers,
    applyMiddleware(thunkMiddleware, logger)
);
ReactDOM.render(
    <Provider store={store}>
        <AppManager/>

    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
