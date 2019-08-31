/* eslint no-console: 0 */
import { Dispatch, Middleware, MiddlewareAPI } from 'redux';

import { StoreAction, StoreState } from '../types';

const crashReporter: Middleware = (api: MiddlewareAPI<Dispatch, StoreState>) => (
  next: Dispatch<StoreAction>
) => (action: StoreAction) => {
  try {
    return next(action);
  } catch (err) {
    console.error('Caught an exception!', err);
    throw err;
  }
};

export default crashReporter;
