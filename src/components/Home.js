import React, { Component } from 'react'
import HeaderDark from '../components/Headers/HeaderDark'
import AllIsReady from './SubItems/Catalog/AllIsReady'
import Interesed from './SubItems/Catalog/Interesed'
import CategorySlider from './SubItems/CategorySlider'
export default class Catalog extends Component {
  render() {
    return (
      <div>
        <HeaderDark/>
        <CategorySlider/>
        <AllIsReady/>  
        <Interesed/>
      </div>
    )
  }
}