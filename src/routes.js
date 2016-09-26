import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'

import Catalog from './components/Catalog'
//import Catalog from './components/Catalog'

import Home from './components/Home'
import NotFound from './components/NotFound'

export const routes = (
  <div>
    <Route path='/' component={App}>      
      <IndexRoute component={Home} />
      <Route path='catalog' component={Catalog} >
        <Route path='catalog/:category' component={Catalog} />
      </Route>
      <Route path='*' component={NotFound} />
    </Route>
    
  </div>
)
