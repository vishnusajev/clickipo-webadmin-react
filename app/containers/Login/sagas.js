/**
 * API calls for Ola
 */

import { take, call, put, cancel, takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import { BASE_URL } from 'containers/App/constants';
import request from 'utils/request';
import { submitLoginFormSuccess, submitLoginFormFailure } from './actions';
import { SUBMIT_LOGIN_FORM } from './constants';

const ajaxRequestHeaders = new Headers({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

export function* validateCredentials(action) {
  const URL = `${BASE_URL}/auth/login`;
  let validateLogin;
  const BODY = JSON.stringify({
    admin: 'true',
    ...action.data.toJS(),
  });
  try {
    validateLogin = yield call(request, URL, {
      method: 'POST',
      headers: ajaxRequestHeaders,
      body: BODY,
    });
    if (validateLogin.token) {
      localStorage.setItem('currentUser', validateLogin.token);
      yield put(submitLoginFormSuccess(validateLogin.token));
      yield put(push('/offerings'));
    } else {
      yield put(submitLoginFormFailure(validateLogin.error));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* submitLoginForm() {
  const watcher = yield takeEvery(SUBMIT_LOGIN_FORM, validateCredentials);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  submitLoginForm,
];
