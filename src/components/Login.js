import React, { Component } from 'react'
import {connect } from 'react-redux'
import * as pageActions from '../actions/setLogged'
import * as pageActionsLoginShow from '../actions/setLoggedShow'
import { bindActionCreators } from 'redux'
import { If, Then } from 'react-if';
import { Link } from 'react-router'
import '../stylus/components/menu.styl';
import $ from 'jquery'

import '../stylus/components/login.styl';

class Login extends Component {

  hideLogin() {
    this.props.pageActionsLoginShow.setLoggedShow(false)
    $('body').removeClass('overflowlogin');
  }

  setLogin() {
    this.props.pageActions.setLogged(true)
    this.hideLogin()
  }

  setPlaceholder(text) {

    var selector
    if (text=='Введите ваш логин') {
      selector = '#login'      
    }else{
      selector = '#password'
    }

    if ($(selector).val() == text) {
      $(selector).val('')
      $(selector).removeClass('placeholder')
    }
  }

  removePlaceholder(text) {

    var selector
    if (text=='Введите ваш логин') {
      selector = '#login'      
    }else{
      selector = '#password'
    }
    
    if ($(selector).val() == '') {
        $(selector).val(text)
        $(selector).addClass('placeholder')
    }
  }

  render(){
    const showLogin = this.props.showLogin

    if (showLogin) {
      $('body').addClass('overflowlogin');
    }

    return(
      <div>
        <If condition={showLogin}>
          <Then>
            <div className='login text-center'>
              <div className='login_opacity'>
              </div>
              <div className='login_block'>
                <button className='login_close' onClick={::this.hideLogin}></button>
                <div className='login_enter'>
                  <input id='login' type='text' onBlur={this.removePlaceholder.bind(this, 'Введите ваш логин')} onFocus={this.setPlaceholder.bind(this, 'Введите ваш логин')} defaultValue='Введите ваш логин'/>
                  <input id='password' type='text' onBlur={this.removePlaceholder.bind(this, 'Введите ваш пароль')} onFocus={this.setPlaceholder.bind(this, 'Введите ваш пароль')} defaultValue='Введите ваш пароль'/>
                </div>
                <div className='login_button text-center'>
                  <button className='btn' onClick={::this.setLogin}>войти</button>
                  <Link className='login_forgot' to='/forgotpass' title='Забыли пароль?'>Забыли пароль?</Link>
                </div>
              </div>
            </div>
          </Then>
        </If>
      </div>

    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    pageActionsLoginShow: bindActionCreators(pageActionsLoginShow, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    showLogin: state.user.showLogin,
    isLogged: state.user.isLogged
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Login)