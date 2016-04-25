/* @flow */
import * as actions from './actions'

// FlowType annotations
type State = {
  counter: number,
  html: string
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [actions.COUNTER_INCREMENT]: (state: State, action: {payload: number}): State => {
    state.counter += action.payload;
    return JSON.parse(JSON.stringify(state));
  },
  [actions.HTML]: (state: State, action: {payload: string}): State => {
    state.html = action.payload;
    return JSON.parse(JSON.stringify(state));
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  counter: 0,
  html: ''
}
export default function counterReducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
