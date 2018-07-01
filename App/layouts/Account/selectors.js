import { createSelector } from 'reselect';

/**
 * Direct selector to the Authenticate state domain
 */
const selectLoginDomain = () => (state) => state.account;

// select all state of Authenticate and convert to Object json
const makeSelectLoginProps = () => createSelector(
    selectLoginDomain(),
  (substate) => substate.toJS(),
);

export {
    makeSelectLoginProps,
};
