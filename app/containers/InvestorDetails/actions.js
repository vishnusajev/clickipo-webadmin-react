import {
  FETCH_USER_DETAILS,
  FETCH_ACTIVE_OFFERING,
  FETCH_CLOSED_OFFERINGS,
  FETCH_ORDER_STATUS,
  USER_DETAILS,
  CLOSED_OFFERINGS,
  ACTIVE_OFFERINGS,
  ORDER_STATUS,
  CLEAR_DATA,
} from './constants';


export function fetchUserDetails(id) {
  return {
    type: FETCH_USER_DETAILS,
    id,
  };
}

export function fetchActiveOfferings(id) {
  return {
    type: FETCH_ACTIVE_OFFERING,
    id,
  };
}

export function fetchClosedOfferings(id) {
  return {
    type: FETCH_CLOSED_OFFERINGS,
    id,
  };
}

export function fetchOrderStatus(id) {
  return {
    type: FETCH_ORDER_STATUS,
    id,
  };
}

export function UserDetails(data) {
  return {
    type: USER_DETAILS,
    data,
  };
}

export function ClosedOfferings(id) {
  return {
    type: CLOSED_OFFERINGS,
    id,
  };
}

export function ActiveOfferings(data) {
  return {
    type: ACTIVE_OFFERINGS,
    data,
  };
}

export function OrderStatus(data) {
  return {
    type: ORDER_STATUS,
    data,
  };
}

export function ClearData() {
  return {
    type: CLEAR_DATA,
  };
}
