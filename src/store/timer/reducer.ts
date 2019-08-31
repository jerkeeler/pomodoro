import { TimerAction, TimerActionTypes, TimerState } from './types';

const initialState: TimerState = {
  timeRemaining: 4000,
};

const timerReducer = (state = initialState, action: TimerActionTypes) => {
  switch(action.type) {
    case TimerAction.START_TIMER:
      return {
        ...state,
        timeRemaining: state.timeRemaining - 1,
      }
    default:
      return state;
  }
};

export default timerReducer;
