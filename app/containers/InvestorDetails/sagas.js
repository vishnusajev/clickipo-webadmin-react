/**
 * API calls for Ola
 */

import { take, call, put, cancel, takeEvery, select } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { BASE_URL } from 'containers/App/constants';
import { showGlobalLoader, closeGlobalLoader } from 'containers/App/actions';
import request from 'utils/request';
import { UserDetails, ClosedOfferings, ActiveOfferings, OrderStatus } from './actions';
import { FETCH_USER_DETAILS, FETCH_ACTIVE_OFFERING, FETCH_CLOSED_OFFERINGS, FETCH_ORDER_STATUS } from './constants';

const getToken = (state) => state.getIn(['global', 'currentUser']);

const ajaxRequestHeaders = new Headers({
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

export function* getUserDetails(action) {
  const TOKEN = yield select(getToken);
  yield put(showGlobalLoader());
  ajaxRequestHeaders.append('Authorization', `Bearer ${TOKEN}`);
  const URL = `${BASE_URL}/users/${action.id}/detail`;
  let userData;
  try {
    userData = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (userData) {
      console.log(userData, 'userDetails');
      yield put(UserDetails(userData));
    }
  } catch (err) {
    console.log(err);
  } finally {
    yield put(closeGlobalLoader());
  }
}

export function* getOrderStatus(action) {
  const TOKEN = yield select(getToken);
  ajaxRequestHeaders.append('Authorization', `Bearer ${TOKEN}`);
  const URL = `${BASE_URL}/users/${action.id}/order_status`;
  let offerings;
  try {
    offerings = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (offerings) {
      console.log(offerings);
      yield put(OrderStatus(offerings));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* getClosedOfferings(action) {
  const TOKEN = yield select(getToken);
  ajaxRequestHeaders.append('Authorization', `Bearer ${TOKEN}`);
  const URL = `${BASE_URL}/users/${action.id}/closed_orders`;
  let userData;
  try {
    userData = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (userData) {
      console.log(userData, 'closed_orders');
      yield put(ClosedOfferings(userData));
    }
  } catch (err) {
    console.log(err);
  }
}

export function* getActiveOfferings(action) {
  const TOKEN = yield select(getToken);
  ajaxRequestHeaders.append('Authorization', `Bearer ${TOKEN}`);
  const URL = `${BASE_URL}/users/${action.id}/active_orders`;
  let userData;
  try {
    userData = yield call(request, URL, {
      method: 'GET',
      headers: ajaxRequestHeaders,
    });
    if (userData) {
      console.log(userData, 'active_orders');
      yield put(ActiveOfferings(userData));
    }
  } catch (err) {
    console.log(err);
  }
}


export function* fetchUserDetails() {
  const watcher = yield takeEvery(FETCH_USER_DETAILS, getUserDetails);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* fetchActiveOfferings() {
  const watcher = yield takeEvery(FETCH_ACTIVE_OFFERING, getActiveOfferings);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* fetchClosedOfferings() {
  const watcher = yield takeEvery(FETCH_CLOSED_OFFERINGS, getClosedOfferings);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

export function* fetchOrderStatus() {
  const watcher = yield takeEvery(FETCH_ORDER_STATUS, getOrderStatus);
  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  fetchUserDetails,
  fetchActiveOfferings,
  fetchClosedOfferings,
  fetchOrderStatus,
];
