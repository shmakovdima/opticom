require('!style!css!slick-carousel/slick/slick.css'); 
require('!style!css!slick-carousel/slick/slick-theme.css');

import '../stylus/components/slick.styl';
import '../stylus/components/catalog.styl';


import React, { Component } from 'react'
import HeaderDark from '../components/Headers/HeaderDark'
import CategoryHeader from './SubItems/Category/CategoryHeader'
import AllIsReady from './SubItems/Catalog/AllIsReady'
import {connect } from 'react-redux'


class SubCategory extends Component {
  render() {
    let categoryData= this.props.categoryData
    return (
      <div>
        <HeaderDark/>
        <CategoryHeader categoryData={categoryData}/>
        <AllIsReady/>
      </div>
    )
  }
}









function mapStateToProps (state) {
  return {
    categoryData: state.pageData.categoryData,
    only_eco: state.user.only_eco
  }
}

export default connect(mapStateToProps)(SubCategory)


