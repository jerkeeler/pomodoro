import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import crashReporter from './middleware/crash';
import loggerMiddleware from './middleware/logger';
import timerReducer from './timer/reducer';
import { Environment } from '../types';

const devMiddleware = [crashReporter, loggerMiddleware, thunkMiddleware];

const prodMiddleware = [crashReporter, thunkMiddleware];

const middleware = process.env.NODE_ENV === Environment.PRODUCTION ? prodMiddleware : devMiddleware;

const middlewareEnhancer = applyMiddleware(...middleware);

const composedEnhancers = compose(middlewareEnhancer);

const rootReducer = combineReducers({
  timerReducer,
});

const store = createStore(rootReducer, undefined, composedEnhancers);

if (process.env.NODE_ENV === Environment.DEVELOPMENT) {
  console.log('initial state', store.getState()); // eslint-disable-line no-console
}

export default store;
