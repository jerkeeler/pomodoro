import { TimerState, TimerActionTypes } from './timer/types';

export type StoreAction = TimerActionTypes;

export interface StoreState {
  timerReducer: TimerState,
};
