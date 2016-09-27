import '../stylus/components/item.styl';
import '../stylus/components/category.styl';


import {connect } from 'react-redux'
import React, { Component } from 'react'

import HeaderLight from '../components/Headers/HeaderLight'



import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/setLove'

import AllReadySet from './SubItems/ItemPage/AllReadySet'
import BuyToo from './SubItems/ItemPage/BuyToo'


class ItemPage extends Component {
  render(){

    const allSetReady = this.props.curItem.allSetReady

    const buyToo = this.props.curItem.BuyToo

    return(
      <div>
        <HeaderLight/>
        <BuyToo buyToo={buyToo}/>
        <AllReadySet allSetReady={allSetReady}/>
      </div>

    )
  }

}


function mapStateToProps (state) {
  return {
    curItem: state.pageData.curItem,
    lovedItems: state.pageData.lovedItems,
    windowWidth: state.pageData.windowWidth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemPage)