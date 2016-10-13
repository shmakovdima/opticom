import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'

import Catalog from './components/Catalog'
import Category from './components/Category'
import SubCategory from './components/SubCategory'
import ItemPage from './components/ItemPage'

import Home from './components/Home'
import NotFound from './components/NotFound'

import Cart from './components/Cart/Cart'
import Delivery from './components/Cart/Delivery'
import Submit from './components/Cart/Submit'

import ProfileSets from './components/Profile/Sets'
import ProfileSettings from './components/Profile/Settings'
import ProfileMyItems from './components/Profile/myItems'
import ProfileOrders from './components/Profile/myOrders'
import ProfileSpecial from './components/Profile/Special'
import ProfileMessages from './components/Profile/Messages'
import Profile from './components/Profile'

import Press from './components/Press/Press'

import PressNews from './components/Press/PressNews'
import PressProjects from './components/Press/PressProjects'
import PressKit from './components/Press/PressKit'
import PressSmi from './components/Press/PressSmi'
import PressPhoto from './components/Press/PressPhoto'

import Blog from './components/Blog'
import BlogItem from './components/BlogItem'

import Sets from './components/Sets/Sets'
import AddSet from './components/Sets/AddSet'

import Today from './components/Today'

import Ecology from './components/Ecology'
import Production from './components/Production'
import Social from './components/Social'
import Contacts from './components/Contacts'


export const routes = (
  <div>
    <Route path='/' component={App}>      
      <IndexRoute component={Home} />
      
      <Route path='catalog' component={Catalog} />
      <Route path='catalog/subcatalog' component={SubCategory} />
      <Route path='catalog/subcategory' component={SubCategory} />
      <Route path='catalog/subcatalog/category' component={Category} />
      <Route path='catalog/subcatalog/category/testitem' component={ItemPage} />


      <Route path='cart' component={Cart}/>
      <Route path='delivery' component={Delivery}/>
      <Route path='submit' component={Submit}/>

      <Route path='blog' component={Blog}/>
      <Route path='blog/test' component={BlogItem}/>

      <Route path='allisready' component={Sets}/>
      <Route path='addset' component={AddSet}/>

      <Route path='today' component={Today}/>

      <Route path='ecology' component={Ecology}/>
      <Route path='production' component={Production}/>
      <Route path='social' component={Social}/>
      <Route path='contact' component={Contacts}/>

      <Route path='press' component={Press}>
        <IndexRoute component={PressNews} />
        <Route path='news' component={PressNews} />
        <Route path='projects' component={PressProjects} />
        <Route path='kit' component={PressKit} />
        <Route path='smi' component={PressSmi} />
        <Route path='photo' component={PressPhoto} />
      </Route>

      <Route path='profile' component={Profile}>
        <IndexRoute component={ProfileSettings} />
        <Route path='sets' component={ProfileSets} />
        <Route path='myitems' component={ProfileMyItems}/>
        <Route path='orders' component={ProfileOrders} />
        <Route path='special' component={ProfileSpecial} />
        <Route path='messages' component={ProfileMessages} />
      </Route>

      



      
      <Route path='*' component={NotFound} />
    </Route>
    
  </div>
)
