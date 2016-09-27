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

        <section className='category_header'>
          <div className='container'>
            <div className='row'>
              <div className='category_header_absolute'>
                <div className='col20-lg-offset-2 col20-md-offset-2col20-sm-offset-2 col20-lg-16 col20-md-16 col20-sm-16'>
                <div className='category_header_white'>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            
            </div>
          </div>
        </section>



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