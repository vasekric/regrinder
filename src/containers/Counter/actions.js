/* @flow */
// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = 'COUNTER_INCREMENT'
export const HTML = 'HTML'

// ------------------------------------
// Actions
// ------------------------------------

/*  NOTE: "Action" is a Flow interface defined in https://github.com/TechnologyAdvice/flow-interfaces
    If you're unfamiliar with Flow, you are completely welcome to avoid
    annotating your code, but if you'd like to learn more you can
    check out: flowtype.org.

    NOTE: There is currently a bug with babel-eslint where a `space-infix-ops`
    error is incorrectly thrown when using arrow functions, hence the oddity.  */

export function increment (value: number = 1): Action {
  return {
    type: COUNTER_INCREMENT,
    payload: value
  }
}

/*  This is a thunk, meaning it is a function that immediately
    returns a function for lazy evaluation. It is incredibly useful for
    creating async actions, especially when combined with redux-thunk!

    NOTE: This is solely for demonstration purposes. In a real application,
    you'd probably want to dispatch an action of COUNTER_DOUBLE and let the
    reducer take care of this logic.  */

export const doubleAsync = (): Function => {
  return (dispatch: Function, getState: Function): Promise => {
    return new Promise((resolve: Function): void => {
      setTimeout(() => {
        dispatch(increment(getState().counter.counter))
        resolve()
      }, 200)
    })
  }
}

export const fetchHtml = (): Function => {
  return (dispatch: Function, getState: Function): Promise => {
    return new Promise((resolve: Function): void => {
      fetch('http://localhost:3000/')
        .then((req) => {
          return req.text()
        })
        .then(html => {
          dispatch({
            type: HTML,
            payload: html
          })
          resolve()
        })
      })
  }
}
