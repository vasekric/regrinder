import React from 'react'
import {IndexRoute, Route} from 'react-router'
import CoreLayout from 'layouts/CoreLayout/CoreLayout'
import Home from 'components/HomeView'
import NotFound from 'components/NotFound'
import Counter from 'containers/Counter'

export const createRoutes = (store) => {
  /**
   * Please keep routes in alphabetical order
   */
  return (
    <Route path='/' component={CoreLayout}>
      { /* Home (main) route */ }
      <IndexRoute component={Home} />

      { /* Routes */ }
      <Route path='counter' component={Counter} />

      { /* Catch all route */ }
      <Route path='*' component={NotFound} status={404} />
    </Route>
  )
}

export default createRoutes
