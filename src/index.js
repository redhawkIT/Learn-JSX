import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import store, { history } from './flux/store'

import './styles/CSS/index.css'
// import App from './views/App'
import App from './routing/SPA'

import registerServiceWorker from './util/registerServiceWorker'

const mount = document.getElementById('root')
ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>Div</div>
      {/* <App /> */}
    </ConnectedRouter>
  </Provider>,
  mount
)
registerServiceWorker()
