/**
 * API calls for Ola
 */

import { take, call, put, cancel, takeEvery, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { BASE_URL } from 'containers/App/constants';
import { showGlobalLoader, closeGlobalLoader } from 'containers/App/actions';
import request from 'utils/request';
import { offeringDetails, OfferingStats, OfferingCustomers, OfferingType } from './actions';
import { FETCH_OFFERING_DETAILS, FETCH_OFFERING_STATS, FETCH_CUSTOMERS, FETCH_OFFERING_TYPE } from './constants';

const getToken = (state) => state.getIn(['global', 'currentUser']);

const ajaxRequestHeaders = new Headers({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

export function* getOfferingDetails(action) {
  const TOKEN = yield select(getToken);
  yield put(showGlobalLoader());
  ajaxRequestHeaders.append('Authorization', `Bearer ${TOKEN}`);
  const URL = `${BASE_URL}/offerings/${action.id}`;
  let offerings;
  try {
    offerings = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (offerings) {
      yield put(offeringDetails(offerings));
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(closeGlobalLoader());
  }
}

export function* getOfferingStats(action) {
  const TOKEN = yield select(getToken);
  ajaxRequestHeaders.append('Authorization', `Bearer ${TOKEN}`);
  const URL = `${BASE_URL}/offerings/${action.id}/status`;
  let offerings;
  try {
    offerings = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (offerings) {
      yield put(OfferingStats(offerings));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* getCustomers(action) {
  const TOKEN = yield select(getToken);
  ajaxRequestHeaders.append('Authorization', `Bearer ${TOKEN}`);
  const URL = `${BASE_URL}/offerings/${action.id}/users`;
  let offerings;
  try {
    offerings = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (offerings) {
      console.log(offerings, 'custo');
      yield put(OfferingCustomers(offerings));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* getOfferingType(action) {
  const TOKEN = yield select(getToken);
  ajaxRequestHeaders.append('Authorization', `Bearer ${TOKEN}`);
  const URL = `${BASE_URL}/offerings/types/${action.id}`;
  let offerings;
  try {
    offerings = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (offerings) {
      console.log(offerings, 'type');
      yield put(OfferingType(offerings));
    }
  } catch (err) {
    console.log(err);
  }
}


export function* fetchOfferingDetails() {
  const watcher = yield takeEvery(FETCH_OFFERING_DETAILS, getOfferingDetails);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* fetchOfferingStats() {
  const watcher = yield takeEvery(FETCH_OFFERING_STATS, getOfferingStats);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* fetchCustomers() {
  const watcher = yield takeEvery(FETCH_CUSTOMERS, getCustomers);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* fetchOfferingType() {
  const watcher = yield takeEvery(FETCH_OFFERING_TYPE, getOfferingType);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}


// Bootstrap sagas
export default [
  fetchOfferingDetails,
  fetchOfferingStats,
  fetchCustomers,
  fetchOfferingType,
];
