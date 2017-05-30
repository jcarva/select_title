// See https://github.com/erikras/ducks-modular-redux

import axios from 'axios';

// Constants
const url = 'http://jsonplaceholder.typicode.com/posts';

// Actions
export const FETCH_HOME_SUCESS = 'FETCH_HOME_SUCESS';
export const FETCH_HOME_FAILURE = 'FETCH_HOME_FAILURE';

// Initial State
const INITIAL_STATE = {isFetching: true,rows: {}};

// Reducer
export default (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_HOME_SUCESS:
      return Object.assign({}, { isFetching: false, rows: action.payload.data });
    case FETCH_HOME_FAILURE:
      console.log('FETCH_HOME_FAILURE: ', action.payload.error);
    default:
      return state;
  }
}

// Action Creators
export function fetchData() {
  const request = axios.get(url);

  return dispatch => {
    request
      .then(response => dispatch({
        type: FETCH_HOME_SUCESS,
        payload: response
      })).catch((response) => dispatch({
        type: FETCH_HOME_FAILURE,
        payload: response
      }))
  }
}
