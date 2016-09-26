import React, { Component } from 'react'
import {connect } from 'react-redux'
import '../stylus/components/menu.styl';
//import {Link} from 'react-router'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/showMenu'

import { If, Then } from 'react-if';

class Menu extends Component {

  render() {

    const show_menu = this.props.show_menu
    return(
      <div>
       
        <If condition = {show_menu==true}>
          <Then>
            <div className='menu'></div>
          </Then>
        </If>
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
    show_menu: state.user.show_menu
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu)