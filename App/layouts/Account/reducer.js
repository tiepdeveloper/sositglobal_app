import { LOGIN } from './constants'
import { fromJS } from 'immutable';
const initialState = fromJS({
    loginStatus: false,
    message: false,
    isFetching: false,
    token: ''
});

export default function accountReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN.REQUEST:
            return state.set('loginStatus',false).set('message','').set('isFetching', true).set('token','');
        case LOGIN.SUCCESS:
            return state.set('loginStatus',action.data.loginStatus)
                .set('message',action.data.message)
                .set('isFetching', false)
                .set('token',action.data.token);
        case LOGIN.FAILURE:
            return state.set('loginStatus',false)
                .set('message','System error')
                .set('isFetching', false)
                .set('token','');
        default:
            return state;
    }
}