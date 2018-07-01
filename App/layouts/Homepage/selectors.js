import { createSelector } from 'reselect';

/**
 * Direct selector to the Authenticate state domain
 */
const selectHomepageDomain = () => (state) => state.homepage;

// select all state of Authenticate and convert to Object json
const makeSelectHomepageProps = () => createSelector(
    selectHomepageDomain(),
  (substate) => substate.toJS(),
);

export {
    makeSelectHomepageProps,
};
