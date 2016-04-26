/* @flow */
import * as actions from './actions'
import { Record } from 'immutable'

// FlowType annotations
type State = {
  counter: number,
  html: string
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [actions.COUNTER_INCREMENT]: (state: State&Record, action: {payload: number}): State&Record => {
  const value: number = state.counter + action.payload
  return state.set('counter', value)
},
[actions.HTML]: (state: State&Record, action: {payload: string}): State&Record => {
  return state.set('html', action.payload)
}
}

// ------------------------------------
// Reducer
// ------------------------------------
const InitialState: State&Record = Record({
  counter: 0,
  html: ''
})
export default function counterReducer (state: State&Record = new InitialState(), action: Action): number {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
