import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    homepage: require('../../layouts/Homepage/reducer').default,
    account: require('../../layouts/Account/reducer').default,
});

export default rootReducer;