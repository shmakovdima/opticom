import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'

import Catalog from './components/Catalog'
import Category from './components/Category'

import ItemPage from './components/ItemPage'

import Home from './components/Home'
import NotFound from './components/NotFound'

export const routes = (
  <div>
    <Route path='/' component={App}>      
      <IndexRoute component={Home} />
      <Route path='catalog' component={Catalog} />
      <Route path='catalog/subcatalog' component={Catalog} />
      <Route path='catalog/subcatalog/category' component={Category} />
      <Route path='catalog/subcatalog/category/testitem' component={ItemPage} />

      
      <Route path='*' component={NotFound} />
    </Route>
    
  </div>
)
