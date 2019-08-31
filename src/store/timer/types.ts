export enum TimerAction {
  START_TIMER = 'START_TIMER',
  STOP_TIMER = 'STOP_TIMER',
}

export interface TimerState {
  timeRemaining: number;
}

export interface StartTimerAction {
  type: typeof TimerAction.START_TIMER,
}

export interface StopTimerAction {
  type: typeof TimerAction.STOP_TIMER,
}

export type TimerActionTypes = StartTimerAction | StopTimerAction
