/**
 * API calls for Ola
 */

import { take, call, put, cancel, takeEvery, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { BASE_URL } from 'containers/App/constants';
import { showGlobalLoader, closeGlobalLoader } from 'containers/App/actions';
import request from 'utils/request';
import { offeringFetchData, offeringSearchSuccess } from './actions';
import { FETCH_OFFERINGS, SEARCH_OFFERINGS } from './constants';

const getToken = (state) => state.getIn(['global', 'currentUser']);

const ajaxRequestHeaders = new Headers({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

export function* getOfferings(action) {
  const TOKEN = yield select(getToken);
  yield put(showGlobalLoader());
  ajaxRequestHeaders.append('Authorization', `Bearer ${TOKEN}`);
  let URL;
  if (action.status !== null && action.status !== 'all') {
    URL = `${BASE_URL}/offerings?status=${action.status}`;
  } else {
    URL = `${BASE_URL}/offerings`;
  }
  let offerings;
  try {
    offerings = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (offerings) {
      yield put(offeringFetchData(offerings));
    }
  } catch (err) {
    yield put(offeringFetchData(err.error));
    console.log(err);
  } finally {
    yield put(closeGlobalLoader());
  }
}

export function* searchOfferings(action) {
  const TOKEN = yield select(getToken);
  ajaxRequestHeaders.append('Authorization', `Bearer ${TOKEN}`);
  const URL = `${BASE_URL}/offerings?q=${action.data}`;
  try {
    const offerings = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (offerings.length) {
      yield put(offeringSearchSuccess(offerings));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* fetchOfferings() {
  const watcher = yield takeEvery(FETCH_OFFERINGS, getOfferings);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* queryOfferings() {
  const watcher = yield takeEvery(SEARCH_OFFERINGS, searchOfferings);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


// Bootstrap sagas
export default [
  fetchOfferings,
  queryOfferings,
];
