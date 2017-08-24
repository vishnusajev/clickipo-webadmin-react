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
  SUBMIT_LOGIN_FORM,
  SUBMIT_LOGIN_FORM_SUCCESS,
  SUBMIT_LOGIN_FORM_FAILURE,
} from './constants';

/**
 * Fetches the login details of the user if already in DB
 *
 * @param  {data} data in the form
 *
 * @return {object}    An action object with a type of FETCH_LOGIN_DETAILS
 */
export function submitLoginForm(data) {
  return {
    type: SUBMIT_LOGIN_FORM,
    data,
  };
}

export function submitLoginFormSuccess(data) {
  return {
    type: SUBMIT_LOGIN_FORM_SUCCESS,
    data,
  };
}

export function submitLoginFormFailure(data) {
  return {
    type: SUBMIT_LOGIN_FORM_FAILURE,
    data,
  };
}
