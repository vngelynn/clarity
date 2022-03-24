/**
 * ************************************
 *
 * @module  optionsReducer
 * @description reducer for option data
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
    totalVotes: 0,
    optionList: [],   
    newOption: '',
    spinResult: '',
    synced: true,
}

const optionsReducer = (state = initialState, action) => {
  switch (action.type) {
      case types.ADD_OPTION: {
          return {
            ...state,
            optionList: state.optionList.concat({
                option: action.payload,
                votes: 0,
            })
          };
      }

      case types.UPDATE_OPTION: {
          return {
              ...state,
              newOption: action.payload,
          };
      }

      case types.RESET_OPTIONS: 
      return {
        ...state,
        optionList: [],
        newOption: '',
        spinResult: '',
        synced: false,
      };

    case types.SPIN_OPTIONS: {
      // optionList: [ {location: 'place'}, {location: 'place'}..]
      const random = Math.floor(Math.random() * (state.optionList.length - 0) + 0);
      console.log(random);
      const newSpinResult = state.optionList[random].option;
      return {
        ...state,
        spinResult: newSpinResult, 
      }
    }

    case types.SYNC_OPTIONS:
      return {
        ...state,
        synced: true,
      };

    case types.LOAD_OPTIONS:
      return {
        ...state,
        totalOptions: action.payload.length,
        totalVotes: action.payload.reduce((res, m) => res + m.votes, 0),
        optionList: action.payload,
      };

    default:
      return state;
  }
};

export default optionsReducer;