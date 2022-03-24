/**
 * ************************************
 *
 * @module  index.js
 * @description simply a place to combine reducers
 *
 * ************************************
 */

import { combineReducers } from 'redux';
import optionsReducer from './optionsReducer.js';

export default combineReducers({
    options: optionsReducer,
});