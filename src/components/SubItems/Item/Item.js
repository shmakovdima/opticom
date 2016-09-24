import React, { Component } from 'react'
import {connect } from 'react-redux'
import '../../../stylus/components/item.styl';

import { bindActionCreators } from 'redux'
import * as pageActions from '../../../actions/setLove'

class Item extends Component {
  render() {
    return(
      <div className='item'>
        <button className='item_love'>
        </button>
      </div>
    )
  }
}



function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}


function mapStateToProps (state) {
  return {
    lovedItems: state.pageData.lovedItems
  }
}


export default connect(mapStateToProps)(Item)