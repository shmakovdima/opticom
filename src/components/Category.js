require('!style!css!slick-carousel/slick/slick.css'); 
require('!style!css!slick-carousel/slick/slick-theme.css');

import '../stylus/components/slick.styl';
import '../stylus/components/category.styl';


import React, { Component } from 'react'
import HeaderLight from '../components/Headers/HeaderLight'
import CategoryHeader from './SubItems/Category/CategoryHeader'
import Interesed from './SubItems/Category/Interested'


export default class Catalog extends Component {
  render() {
    return (
      <div>
        <HeaderLight/>
        <CategoryHeader/>
        <Interesed/>
      </div>
    )
  }
}
