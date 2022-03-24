/**
 * ************************************
 *
 * @module  store.js
 * @description Redux 'single source of truth'
 *
 * ************************************
 */

import { createStore, applyMiddleware } from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducers from './reducers/index.js';
import { loadOptions } from './actions/actions.js';

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(thunk)),
);

store.dispatch(loadOptions());

export default store;