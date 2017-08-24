import {
  FETCH_OFFERING_DETAILS,
  OFFERINGS_DETAILS,
  FETCH_OFFERING_STATS,
  OFFERING_STATS,
  FETCH_CUSTOMERS,
  OFFERING_CUSTOMERS,
  FETCH_OFFERING_TYPE,
  OFFERING_TYPE,
  CLEAR_DATA,
} from './constants';


export function fetchOfferingDetails(id) {
  return {
    type: FETCH_OFFERING_DETAILS,
    id,
  };
}

export function offeringDetails(data) {
  return {
    type: OFFERINGS_DETAILS,
    data,
  };
}

export function fetchOfferingStats(id) {
  return {
    type: FETCH_OFFERING_STATS,
    id,
  };
}

export function OfferingStats(data) {
  return {
    type: OFFERING_STATS,
    data,
  };
}

export function fetchCustomers(id) {
  return {
    type: FETCH_CUSTOMERS,
    id,
  };
}

export function OfferingCustomers(data) {
  return {
    type: OFFERING_CUSTOMERS,
    data,
  };
}

export function fetchOfferingType(id) {
  return {
    type: FETCH_OFFERING_TYPE,
    id,
  };
}

export function OfferingType(data) {
  return {
    type: OFFERING_TYPE,
    data,
  };
}

export function ClearData() {
  return {
    type: CLEAR_DATA,
  };
}
