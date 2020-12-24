/* eslint-disable import/no-anonymous-default-export */
import * as actionTypes from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case actionTypes.CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case actionTypes.EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};
