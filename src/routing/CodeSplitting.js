import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import App from '../views'

/*
TODO: Code split router
*/
export default () => (
  <main>
    <App>
      <Switch>
        <Route exact path='/' component={Home}/>
        {/* <Route path="/about-us" component={About} /> */}
        <Redirect to="/" />
      </Switch>
    </App>
  </main>
)
