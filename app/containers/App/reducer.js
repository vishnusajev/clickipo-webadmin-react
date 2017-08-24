/*
 * AppReducer
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

import { SUBMIT_LOGIN_FORM_SUCCESS, SUBMIT_LOGIN_FORM_FAILURE } from 'containers/Login/constants';
import { SUBMIT_RECOVERY_FORM_FAILURE, SUBMIT_RECOVERY_FORM_SUCCESS } from 'containers/PasswordRecovery/constants';
import { SET_RESET_TOKEN, SUBMIT_RESET_FORM_FAILURE, SUBMIT_RESET_FORM_SUCCESS } from 'containers/ResetPassword/constants';
import {
  OPEN_GLOBAL_LOADER,
  CLOSE_GLOBAL_LOADER,
} from './constants';

const userToken = localStorage.getItem('currentUser') ? localStorage.getItem('currentUser') : null;
const initialState = fromJS({
  currentUser: userToken,
  loginError: null,
  passwordRecoveryMessage: null,
  passwordResetToken: null,
  resetPasswordErrorMessage: null,
  showLoader: false,
});


function appReducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_LOGIN_FORM_SUCCESS:
      return state.set('currentUser', action.data).set('loginError', null).set('passwordRecoveryMessage', null);
    case SUBMIT_LOGIN_FORM_FAILURE:
      return state.set('loginError', action.data).set('passwordRecoveryMessage', null);
    case SUBMIT_RECOVERY_FORM_FAILURE:
    case SUBMIT_RECOVERY_FORM_SUCCESS:
      return state.set('passwordRecoveryMessage', action.message);
    case SET_RESET_TOKEN:
      return state.set('SET_RESET_TOKEN', action.token);
    case SUBMIT_RESET_FORM_FAILURE:
      return state.set('resetPasswordErrorMessage', action.message);
    case SUBMIT_RESET_FORM_SUCCESS:
      return state.set('resetPasswordErrorMessage', null);
    case OPEN_GLOBAL_LOADER:
      return state.set('showLoader', true);
    case CLOSE_GLOBAL_LOADER:
      return state.set('showLoader', false);
    default:
      return state;
  }
}


export default appReducer;
