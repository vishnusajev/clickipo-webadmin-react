/*
 * Offering Reducer
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
import { OFFERINGS_DETAILS, OFFERING_STATS, OFFERING_TYPE, CLEAR_DATA, OFFERING_CUSTOMERS } from 'containers/OfferingDetails/constants';

import {
  FETCH_OFFERINGS_DATA,
  SEARCH_OFFERINGS_SUCCESS,
} from './constants';
const initialState = fromJS({
  offerings: null,
  offeringTableView: null,
  offeringDetails: null,
  offeringStats: null,
  offeringType: null,
  offeringCustomers: [],
});


function offeringReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_OFFERINGS_DATA:
      return state.set('offerings', action.data).set('offeringTableView', action.data);
    case SEARCH_OFFERINGS_SUCCESS:
      return state.set('offeringTableView', action.data);
    case OFFERINGS_DETAILS:
      return state.set('offeringDetails', action.data);
    case OFFERING_STATS:
      return state.set('offeringStats', action.data);
    case OFFERING_TYPE:
      return state.set('offeringType', action.data);
    case OFFERING_CUSTOMERS:
      return state.set('offeringCustomers', action.data);
    case CLEAR_DATA:
      return state.set('offeringType', null).set('offeringStats', null).set('offeringCustomers', []);
    default:
      return state;
  }
}


export default offeringReducer;
