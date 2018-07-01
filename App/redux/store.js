import { createStore, applyMiddleware, composeEnhancers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
const sagaMiddleware = createSagaMiddleware();
import rootReducer from './reducers'
import homepageSaga from '../layouts/Homepage/sagas';
import accountSaga from '../layouts/Account/sagas';

export default function configureStore() {
    const middlewares = [
        sagaMiddleware,
    ];

    const enhancers = [
        applyMiddleware(...middlewares),
    ];
    const store = createStore(
        rootReducer,
        applyMiddleware(sagaMiddleware),
        ...enhancers,
        composeWithDevTools(
            applyMiddleware(
                createLogger({collapsed: true}),
                thunkMiddleware
            )
        )
    );

    sagaMiddleware.run(homepageSaga);
    sagaMiddleware.run(accountSaga);
    store.runSaga = sagaMiddleware.run;
    return store
}

