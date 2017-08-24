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
  SUBMIT_RESET_FORM,
  SET_RESET_TOKEN,
  SUBMIT_RESET_FORM_FAILURE,
  SUBMIT_RESET_FORM_SUCCESS,
} from './constants';

/**
 * Fetches the login details of the user if already in DB
 *
 * @param  {data} data in the form
 *
 * @return {object}    An action object with a type of FETCH_LOGIN_DETAILS
 */
export function submitResetForm(data) {
  return {
    type: SUBMIT_RESET_FORM,
    data,
  };
}

export function setResetToken(token) {
  return {
    type: SET_RESET_TOKEN,
    token,
  };
}

export function submitResetFormFailure(message) {
  return {
    type: SUBMIT_RESET_FORM_FAILURE,
    message,
  };
}

export function submitResetFormSuccess() {
  return {
    type: SUBMIT_RESET_FORM_SUCCESS,
  };
}
