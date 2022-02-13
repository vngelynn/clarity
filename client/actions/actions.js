/**
 * ************************************
 *
 * @module  actions.js
 * @description Action Creators
 *
 * ************************************
 */

import axios from 'axios';
import * as types from '../constants/actionTypes';

export const updateOption = data => ({
    type: types.UPDATE_OPTION,
    payload: data,
  });
  
  export const addVote = id => ({
    type: types.ADD_VOTE,
    payload: id,
  });
  
  export const deleteVote = id => ({
    type: types.DELETE_VOTE,
    payload: id,
  });
  
  export const resetOptions = id => (dispatch, getState) => {
      dispatch({ type: types.RESET_OPTIONS, payload: id });
  };
  
  export const spinOptions = id => (dispatch, getState) => {
    dispatch({ type: types.SPIN_OPTIONS, payload: id });
    const spinResult = getState().markets.spinResult;
    alert(spinResult);
  };
  
  export const addOption = event => (dispatch, getState) => {
    event.preventDefault();
    const option = getState().markets.newOption;
    if (option) {
      dispatch({
        type: types.ADD_OPTION,
        payload: option,
      });
    }
  };
  
  export const syncOptions = () => (dispatch, getState) => {
    axios.put('/markets', getState().markets.marketList)
      .then(({ status }) => {
        if (status === 200) dispatch({ type: types.SYNC_OPTIONS });
      })
      .catch(console.error);
  };
  
  export const loadOptions = () => (dispatch) => {
    axios.get('/markets')
      .then(({ data }) => {
        dispatch({
          type: types.LOAD_OPTIONS,
          payload: data,
        });
      })
      .catch(console.error);
  };
  
