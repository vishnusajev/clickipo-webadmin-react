import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const makeSelectCurrentUser = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('currentUser')
);

const makeSelectLoginError = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('loginError')
);

const makeSelectPasswordRecoveryMessage = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('passwordRecoveryMessage')
);

const makeSelectPasswordResetMessage = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('resetPasswordErrorMessage')
);

const makeSelectLoaderStatus = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('showLoader')
);

// makeSelectLocationState expects a plain JS object for the routing state
const makeSelectLocationState = () => {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get('route'); // or state.route

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
};

export {
  selectGlobal,
  makeSelectCurrentUser,
  makeSelectLoginError,
  makeSelectLocationState,
  makeSelectPasswordRecoveryMessage,
  makeSelectPasswordResetMessage,
  makeSelectLoaderStatus,
};
