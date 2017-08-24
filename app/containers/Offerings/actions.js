/*
 * Login Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  FETCH_OFFERINGS,
  FETCH_OFFERINGS_DATA,
  SEARCH_OFFERINGS,
  SEARCH_OFFERINGS_SUCCESS,
} from './constants';

/**
 * Fetches the login details of the user if already in DB
 *
 * @param  {data} data in the form
 *
 * @return {object}    An action object with a type of FETCH_LOGIN_DETAILS
 */
export function fetchOfferings(status = null) {
  return {
    type: FETCH_OFFERINGS,
    status,
  };
}

export function offeringFetchData(data) {
  return {
    type: FETCH_OFFERINGS_DATA,
    data,
  };
}

export function offeringSearch(data) {
  return {
    type: SEARCH_OFFERINGS,
    data,
  };
}

export function offeringSearchSuccess(data) {
  return {
    type: SEARCH_OFFERINGS_SUCCESS,
    data,
  };
}
