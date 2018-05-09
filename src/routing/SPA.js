import React from 'react'
import { Route, Switch, Redirect } from 'react-router'

import UI from '../views'

const Home = () => <div>Home</div>

/*
SPA Router
Exports a single js bundle that uses hash routes
*/
export default () => (
  <main>
    <UI>
      <Switch>
        <Route exact path='/' component={Home}/>
        {/* <Route path="/about-us" component={About} /> */}
        <Redirect to="/" />
      </Switch>
    </UI>
  </main>
)
