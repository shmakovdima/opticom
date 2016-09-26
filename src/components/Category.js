require('!style!css!slick-carousel/slick/slick.css'); 
require('!style!css!slick-carousel/slick/slick-theme.css');

import '../stylus/components/slick.styl';
import '../stylus/components/catalog.styl';


import React, { Component } from 'react'
import HeaderLight from '../components/Headers/HeaderLight'
import CatalogHeader from './SubItems/Catalog/CatalogHeader'
import AllIsReady from './SubItems/Catalog/AllIsReady'
import Interesed from './SubItems/Catalog/Interesed'
import SpecialOffer from './SubItems/Catalog/SpecialOffer'
import Preferences from './SubItems/Catalog/Preferences'

export default class Catalog extends Component {
  render() {
    return (
      <div>
        <HeaderLight/>
        <CatalogHeader/>
        <Preferences/>
        <AllIsReady/>
        <SpecialOffer className='hidden-xs'/>    
        <Interesed/>
      </div>
    )
  }
}
