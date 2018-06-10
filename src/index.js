import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createLogger} from 'redux-logger';

import App from "./components/App";
import reducers from "./redux";
import './index.less'

const logger = createLogger({duration: true, diff: false});


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose, middleware = [thunk, logger];

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middleware))
);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
