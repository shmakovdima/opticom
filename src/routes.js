import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'

import Catalog from './components/Catalog'
import Category from './components/Category'
import SubCategory from './components/SubCategory'
import ItemPage from './components/ItemPage'

import Home from './components/Home'
import NotFound from './components/NotFound'

import ProfileSets from './components/Profile/Sets'
import ProfileSettings from './components/Profile/Settings'
import ProfileMyItems from './components/Profile/myItems'
import ProfileOrders from './components/Profile/myOrders'
import ProfileSpecial from './components/Profile/Special'

import Profile from './components/Profile'

export const routes = (
  <div>
    <Route path='/' component={App}>      
      <IndexRoute component={Home} />
      <Route path='catalog' component={Catalog} />
      <Route path='catalog/subcatalog' component={SubCategory} />
      <Route path='catalog/subcategory' component={SubCategory} />
      <Route path='catalog/subcatalog/category' component={Category} />
      <Route path='catalog/subcatalog/category/testitem' component={ItemPage} />

      <Route path='profile' component={Profile}>
        <IndexRoute component={ProfileSettings} />
        <Route path='sets' component={ProfileSets} />
        <Route path='myitems' component={ProfileMyItems}/>
        <Route path='orders' component={ProfileOrders} />
        <Route path='special' component={ProfileSpecial} />
        
      </Route>

{/*

  
                 <Link className='header_usermenu_link' to='profile' title='Настройки'>Настройки</Link>
                  <Link className='header_usermenu_link' to='profile/orders' title='Мои заказы'>Мои заказы</Link>
                  <Link className='header_usermenu_link' to='profile/sets' title='Наборы'>Наборы</Link>
                  <Link className='header_usermenu_link' to='profile/myitems' title='Мои товары'>Мои товары</Link>
                  <Link className='header_usermenu_link' to='profile/special' title='Спецпредложения'>Спецпредложения</Link>
                  <Link className='header_usermenu_link' to='profile/messages' title='Сообщения'>Сообщения</Link>

*/}


      
      <Route path='*' component={NotFound} />
    </Route>
    
  </div>
)
