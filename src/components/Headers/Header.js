import '../../stylus/components/header.styl';
import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as pageActions from '../../actions/showMenu'
import $ from 'jquery'
import { bindActionCreators } from 'redux'
import { If, Then } from 'react-if';

import * as pageActionsLogin from '../../actions/setLogged'

class HeaderSearch extends Component {
  render() {
    return(
      <div className='pull-right header_search hidden-sm hidden-xs'>
        <input type='text' placeholder='ПОИСК'/>
      </div>
    )
  }
}
class HeaderLink extends Component {
  render() {
    return(
      <li>
        <Link className='greenlighted_left' activeClassName='header_link_active'  to={'/'+this.props.data.href} title={this.props.data.title}>{this.props.data.title}</Link>
      </li>
    )
  }
}

class HeaderCount extends Component {
  render() {
    return(
      <Link className='pull-right header_basket' to='/user/cart'>
        <span>{2}</span>
      </Link>
    )
  }
}

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showuser: false
    };
  }

  exitLogin() {
    this.setState({showuser: false})
    this.props.pageActionsLogin.setLogged(!this.props.isLogged)
  }

  showMenu(){
    $('body').addClass('overflow');
    this.props.pageActions.showMenu(!this.props.show_menu);
  }

  showUser() {
    this.setState({showuser: true})
  }

  hideUser() {
    this.setState({showuser: false})
  }

  render() {
    const username = (this.props.name) ? this.props.name : ''

    const showuser = this.state.showuser
    const isLogged = this.props.isLogged

    return (
        <div className='container'>
          <Link className='header_logo pull-left' to='/'></Link>
          <button className='header_menu pull-left pull-right-xs' onClick={::this.showMenu}></button>
          <ul className='header_links pull-left hidden-xs'>
            {
              this.props.FooterLinks.map(function(item, index) {
                return <HeaderLink data={item} key={index}/>
              })
            }
            <If condition={isLogged==false}>
              <Then>
                <li>
                  <a className='greenlighted_left' onClick={::this.exitLogin}>Вход</a>
                </li>
              </Then>
            </If>


          </ul>
          <div>
            <If condition={isLogged==true}>
              <Then>
                <button onClick={::this.showUser} className='header_user pull-right' title='Личный кабинет' to='/user'></button>
              </Then>
            </If>

            <If  condition={((showuser == true) && (isLogged == true))}>
              <Then>
                <div className='header_usermenu'>
                  <div className='header_usermenu_close' onClick={::this.hideUser}></div>
                  <h3 className='header_usermenu_name'>{username}</h3>
                  <Link onClick={::this.hideUser} className='header_usermenu_link' to='/profile' title='Настройки'>Настройки</Link>
                  <Link onClick={::this.hideUser} className='header_usermenu_link' to='/profile/orders' title='Мои заказы'>Мои заказы</Link>
                  <Link onClick={::this.hideUser} className='header_usermenu_link' to='/profile/sets' title='Наборы'>Наборы</Link>
                  <Link onClick={::this.hideUser} className='header_usermenu_link' to='/profile/myitems' title='Мои товары'>Мои товары</Link>
                  <Link onClick={::this.hideUser} className='header_usermenu_link' to='/profile/special' title='Спецпредложения'>Спецпредложения</Link>
                  <Link onClick={::this.hideUser} className='header_usermenu_link' to='/profile/messages' title='Сообщения'>Сообщения</Link>
                  <button onClick={::this.exitLogin} className='header_usermenu_link'>Выйти</button>
                </div>
              </Then>
            </If>
            <HeaderCount/>
            <a href='tel:+74959800648' className='hidden-xs hidden-sm header_phone pull-right'>+7-495-980-06-48</a>
            <HeaderSearch/>  
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
    FooterLinks: state.pageData.HeaderLinks,
    showMenu: state.user.show_menu,
    name: state.user.name,
    isLogged: state.user.isLogged
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)