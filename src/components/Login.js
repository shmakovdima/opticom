import React, { Component } from 'react'
import {connect } from 'react-redux'
import '../stylus/components/menu.styl';

import '../stylus/components/login.styl';

class Login extends Component {
  render(){
    return(
      <div className='login'>
        <div className='login_opacity'>
        </div>
        <div className='login_block'>
          <button className='login_close'></button>
        </div>
      </div>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    pageActionsLogin: bindActionCreators(pageActionsLogin, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    showLogin: state.user.showLogin,
    isLogged: state.user.isLogged
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu)