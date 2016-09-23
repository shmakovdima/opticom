import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'

import Catalog from './components/Catalog'

import Home from './components/Home'
import NotFound from './components/NotFound'

export const routes = (
  <div>
    <Route path='/' component={App}>      
      <IndexRoute component={Home} />
      <Route path='/Catalog' component={Catalog} />
      {/*<Route path='/admin' component={Admin} />
      <Route path='/list' component={List} />
      <Route path='/:genre/' component={Release}>
        <Route path='/:genre/:name' component={ReleaseItem} />
      </Route>*/}
    </Route>




    <Route path='*' component={NotFound} />
  </div>
)
