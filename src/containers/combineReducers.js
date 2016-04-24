import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as reduxAsyncConnect } from 'redux-async-connect'

import counter from './Counter/reducer'

export default () => {
  return combineReducers({
    router,
    reduxAsyncConnect,
    counter
  })
}
