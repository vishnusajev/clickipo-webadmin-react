/**
 * API calls for Ola
 */

import { take, call, put, cancel, takeEvery, select } from 'redux-saga/effects';
import { LOCATION_CHANGE, push } from 'react-router-redux';
import { BASE_URL } from 'containers/App/constants';
import request from 'utils/request';
import { submitResetFormFailure, submitResetFormSuccess } from './actions';
import { SUBMIT_RESET_FORM } from './constants';

const getToken = (state) => state.getIn(['global', 'passwordResetToken']);
const ajaxRequestHeaders = new Headers({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

export function* resetPassword(action) {
  const URL = `${BASE_URL}/auth/password`;
  const TOKEN = yield select(getToken);
  let response;
  const BODY = JSON.stringify({
    reset_password_token: TOKEN,
    ...action.data.toJS(),
  });
  try {
    response = yield call(request, URL, {
      method: 'PUT',
      headers: ajaxRequestHeaders,
      body: BODY,
    });
    if (response) {
      yield put(submitResetFormSuccess());
      yield put(push('/login'));
    } else {
      yield put(submitResetFormFailure(response.error));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* submitRecoveryForm() {
  const watcher = yield takeEvery(SUBMIT_RESET_FORM, resetPassword);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  submitRecoveryForm,
];
