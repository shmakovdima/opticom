import 'stylus/style.styl';
import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import { routes } from './routes'

import configureStore from './store/configureStore'


const store = configureStore();

if (module.hot) {
  module.hot.accept('./routes', () => {
    // won't work... need solution to replacing routes...
    const nextRoutes = require('./routes')
    Router.createRoutes(nextRoutes)
  })
}

render(
   <Provider store={store}><Router history={browserHistory} routes={routes}/></Provider>,
  document.getElementById('root')
)
