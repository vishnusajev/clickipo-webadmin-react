import { createSelector } from 'reselect';

const selectInvestors = (state) => state.get('investors');

const makeSelectUserDetails = () => createSelector(
  selectInvestors,
  (globalState) => globalState.get('userDetails')
);

const makeSelectActiveOfferings = () => createSelector(
  selectInvestors,
  (globalState) => globalState.get('activeOfferings')
);

const makeSelectClosedOfferings = () => createSelector(
  selectInvestors,
  (globalState) => globalState.get('closedOfferings')
);

const makeSelectOrderStatus = () => createSelector(
  selectInvestors,
  (globalState) => globalState.get('orderStatus')
);

export {
  selectInvestors,
  makeSelectUserDetails,
  makeSelectActiveOfferings,
  makeSelectClosedOfferings,
  makeSelectOrderStatus,
};
