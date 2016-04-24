/* @flow */
import * as actions from './actions'

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [actions.COUNTER_INCREMENT]: (state: number, action: {payload: number}): number => state + action.payload
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = 0
export default function counterReducer (state: number = initialState, action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
