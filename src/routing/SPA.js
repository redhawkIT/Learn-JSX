import React from 'react'
import { Route } from 'react-router-dom'

import UI from '../views/index.js'

const Home = () => <div>Home</div>
const About = () => <div>About</div>

/*
SPA Router
Exports a single js bundle that uses hash routes
*/
const App = () => (
  <UI>
    <Route exact path="/" component={Home} />
    <Route exact path="/about-us" component={About} />
  </UI>
)

export default App
