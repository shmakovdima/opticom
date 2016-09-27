require('!style!css!slick-carousel/slick/slick.css'); 
require('!style!css!slick-carousel/slick/slick-theme.css');

import '../stylus/components/slick.styl';
import '../stylus/components/catalog.styl';


import React, { Component } from 'react'
import HeaderDark from '../components/Headers/HeaderDark'
import CatalogHeader from './SubItems/Category/CategoryHeader'
import AllIsReady from './SubItems/Catalog/AllIsReady'
import Preferences from './SubItems/Catalog/Preferences'

export default class Catalog extends Component {
  render() {
    return (
      <div>
        <HeaderDark/>
        <CategoryHeader/>
      </div>
    )
  }
}








