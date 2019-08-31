import { TimerAction, TimerActionTypes } from './types';

export function startTimer(): TimerActionTypes {
  return {
    type: TimerAction.START_TIMER,
  };
}

export default startTimer;
