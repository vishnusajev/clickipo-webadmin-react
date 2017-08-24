/*
 * Investor Reducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  USER_DETAILS,
  CLOSED_OFFERINGS,
  ACTIVE_OFFERINGS,
  ORDER_STATUS,
  CLEAR_DATA,
} from './constants';

const initialState = fromJS({
  userDetails: null,
  activeOfferings: null,
  closedOfferings: null,
  orderStatus: null,
});


function investorReducer(state = initialState, action) {
  switch (action.type) {
    case USER_DETAILS:
      return state.set('userDetails', action.data);
    case CLOSED_OFFERINGS:
      return state.set('activeOfferings', action.data);
    case ACTIVE_OFFERINGS:
      return state.set('closedOfferings', action.data);
    case ORDER_STATUS:
      return state.set('orderStatus', action.data);
    case CLEAR_DATA:
      return state.set('userDetails', null).set('activeOfferings', null).set('closedOfferings', null).set('orderStatus', null);
    default:
      return state;
  }
}


export default investorReducer;
