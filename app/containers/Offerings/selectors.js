import { createSelector } from 'reselect';

const selectOffering = (state) => state.get('offering');

const makeSelectOfferings = () => createSelector(
  selectOffering,
  (globalState) => globalState.get('offerings')
);

const makeSelectOfferingTableView = () => createSelector(
  selectOffering,
  (globalState) => globalState.get('offeringTableView')
);

const makeSelectOfferingDetails = () => createSelector(
  selectOffering,
  (globalState) => globalState.get('offeringDetails')
);

const makeSelectOfferingStats = () => createSelector(
  selectOffering,
  (globalState) => globalState.get('offeringStats')
);

const makeSelectOfferingType = () => createSelector(
  selectOffering,
  (globalState) => globalState.get('offeringType')
);

const makeSelectOfferingCustomers = () => createSelector(
  selectOffering,
  (globalState) => globalState.get('offeringCustomers')
);

export {
  selectOffering,
  makeSelectOfferings,
  makeSelectOfferingTableView,
  makeSelectOfferingDetails,
  makeSelectOfferingStats,
  makeSelectOfferingType,
  makeSelectOfferingCustomers,
};
