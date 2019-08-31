/* eslint no-console: 0 */
import { Dispatch, Middleware, MiddlewareAPI } from 'redux';

import { StoreAction, StoreState } from '../types';

const logger: Middleware = (api: MiddlewareAPI<Dispatch, StoreState>) => (
  next: Dispatch<StoreAction>
) => (action: StoreAction) => {
  console.group(action.type);
  console.info('dispatching', action);
  const result = next(action);
  console.log('next state', api.getState());
  console.groupEnd();
  return result;
};

export default logger;
