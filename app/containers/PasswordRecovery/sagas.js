/**
 * API calls for Ola
 */

import { take, call, put, cancel, takeEvery } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { BASE_URL } from 'containers/App/constants';
import request from 'utils/request';
import { submitRecoveryFormSuccess, submitRecoveryFormFailure } from './actions';
import { SUBMIT_RECOVERY_FORM } from './constants';

const ajaxRequestHeaders = new Headers({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

export function* resetPassword(action) {
  const URL = `${BASE_URL}/auth/password`;
  let response;
  const BODY = JSON.stringify({
    ...action.data.toJS(),
  });
  try {
    response = yield call(request, URL, {
      method: 'POST',
      headers: ajaxRequestHeaders,
      body: BODY,
    });
    if (response === null) {
      yield put(submitRecoveryFormSuccess('Password reset instructions have been sent to the email provided'));
    } else {
      yield put(submitRecoveryFormFailure(response.error));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* submitRecoveryForm() {
  const watcher = yield takeEvery(SUBMIT_RECOVERY_FORM, resetPassword);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  submitRecoveryForm,
];
