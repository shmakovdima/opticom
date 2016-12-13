import '../../stylus/components/header.styl';
import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as pageActions from '../../actions/showMenu'
import $ from 'jquery'
import { bindActionCreators } from 'redux'
import { If, Then } from 'react-if';
import {DropdownButton, MenuItem} from 'react-bootstrap'
import * as pageActionsLogin from '../../actions/setLogged'
import * as pageActionsLoginShow from '../../actions/setLoggedShow'
import 'jquery.maskedinput/src/jquery.maskedinput.js'

class MountPhone extends Component {
  componentDidMount() {
    $('.phone').mask('+7 (999) 999-9999');
    $('.menu_search').val('Введите ваш телефон')
  }
  render(){
    return(<div></div>)
  }
}

class ReCall extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curaddress: '',
      curoffice: ''
    }
  }

  setAddress(address){
    this.setState({
      curaddress: address
    })
  }

  setOffice(office){
    this.setState({
      curoffice: office
    })
  }


  setPlaceholder() {
    if ($('.menu_search').val() == 'Введите ваш телефон') {
        $('.menu_search').val('')
        $('.menu_search').removeClass('placeholder')
      }
   
  }

  removePlaceholder() {
    setTimeout(function(){

      if ($('.menu_search').val() == '') {
        $('.menu_search').val('Введите ваш телефон')
        $('.menu_search').addClass('placeholder')
      }
    }, 200)
    
  }

  componentDidMount() {

    var Addresses = ['Петропавловск-Камчатский', 'Москва']
    var Offices = ['Головной офис', 'Местный офис']

    if (this.state.curaddress == '') this.setState({curaddress: Addresses[0]})
    if (this.state.curoffice == '') this.setState({curoffice: Offices[0]})
  }


  render() {

    var Addresses = ['Петропавловск-Камчатский', 'Москва']
    var Offices = ['Головной офис', 'Местный офис']



    const dropdownAddress = this.state.curaddress
    const dropdownOffice = this.state.curoffice

    var isOpen = this.props.isOpen
    var windowWidth = this.props.windowWidth

    var offsetLeft = windowWidth
    
    var recallClass = 'header_recall'

    recallClass+= ((isOpen) && (windowWidth>992)) ? ' active' : '';


    if ((isOpen==true) && (windowWidth>992))  {
      offsetLeft = document.getElementById('recall').offsetLeft;
      var containerWidth = $('.container').width();
      offsetLeft = ((windowWidth - containerWidth)/2) + offsetLeft  - 60;
      $('body').addClass('overflowrecall');
      $('.header_basket, .header_user , .header_phone').addClass('black');
      $('.catalog_header, .profile_orders, .profile_sets_header, .profile_items, .header').addClass('zindex');
    } else{
      $('.header_basket, .header_user , .header_phone').removeClass('black')
      $('body').removeClass('overflowrecall');
      $('.catalog_header, .profile_orders, .profile_sets_header , .profile_items, .header').removeClass('zindex')
    }

    var recallWidth = {width: windowWidth - offsetLeft}

    var self = this
    return(
      <div>

        <div className={recallClass} style={recallWidth}>
          <div>
            {this.props.children}
          </div>
          <div className='header_recall_dropdowns'>
            <div className='dropdown_block'>
              <span className='header_recall_header'>Выберите город</span>
              <DropdownButton title={dropdownAddress} id='bg-nested-dropdown'>       
                {
                  Addresses.map(function(item, key){
                    return(
                      <MenuItem onClick={self.setAddress.bind(self, item)} eventKey={key}>{item}</MenuItem>
                    )
                  })
                }
              </DropdownButton>
            </div>
            <div className='dropdown_block'>
              <span className='header_recall_header'>Выберите офис</span>
              <DropdownButton title={dropdownOffice} id='bg-nested-dropdown2'>
        
                {
                  Offices.map(function(item, key){
                    return(
                      <MenuItem onClick={self.setOffice.bind(self, item)} eventKey={key}>{item}</MenuItem>
                    )
                  })
                }
              </DropdownButton>
            </div>
            <div className='dropdown_block'>
              <span className='header_recall_header'>Телефон склада</span>
              <a className='header_recall_phone' title='Телефон склада' href='tel:+7 (4876) 84-19-82'>+7 (4876) 84-19-82</a>
            </div>
            <div className='dropdown_block phone'>
              <input type='text' onBlur={::this.removePlaceholder} onFocus={::this.setPlaceholder} defaultValue='Введите ваш телефон' className='menu_search placeholder header_recall_phone_input phone'/>
              <button className='btn'>Перезвоните мне</button>
            </div>
            <div className='dropdown_block more'>
              <span className='header_recall_questions'>Остались вопросы?</span>
              <button className='btn close_modal'>Написать сообщение</button>
            </div>
          </div>
        </div>
        <MountPhone/>
      </div>
    )
  }
}


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
      <Link className='pull-right header_basket' to='/cart'>
        <span>{2}</span>
      </Link>
    )
  }
}




class Header extends Component {

  componentDidMount() {
    var self = this
    $(document).on('click', '#root', function(){
      if(!$(event.target).closest('.header_recall').length) {
        if($('.header_recall').hasClass('active')) {
          self.setState({shownumber:false})
        }
      }     
    })
      
  }

  hideRecall() {
    this.setState({shownumber:false})
  }

  constructor(props) {
    super(props);
    this.state = {
      showuser: false,
      shownumber: false
    };
  }

  showNumber(){
    this.setState({shownumber:!this.state.shownumber})
  }

  showLogin() {
    this.props.pageActionsLoginShow.setLoggedShow(true)
  }

  exitLogin() {
    this.setState({showuser: false})
    this.props.pageActionsLogin.setLogged(false)
  }

  showMenu(){
    this.props.pageActions.showMenu(!this.props.show_menu);
  }

  showUser() {
    this.setState({showuser: true})
  }

  hideUser() {
    this.setState({showuser: false})
    $('body').removeClass('overflow');
  }

  render() {
    const username = (this.props.name) ? this.props.name : ''

    const showuser = this.state.showuser
    const isLogged = this.props.isLogged

    const windowWidth = this.props.windowWidth


    if ((showuser==true) && (windowWidth<768)) {
      $('body').addClass('overflow');
    }

    var windowTop = this.props.windowTop

    if ($('.home').length==0){

      if ((windowTop>34) &&  (!$('.header').hasClass('header_home')))
      {
        $('.header').addClass('fixed')
      }
        else
      { 
        $('.header').removeClass('fixed')
      }   
    }

    return (
        <div className='container'>
          <ReCall  isOpen={this.state.shownumber} windowWidth = {windowWidth}>
            <div className='header_recall_close'  onClick={::this.hideRecall}></div>
          </ReCall>
          <Link className='header_logo pull-left' to='/'></Link>
          <button className='header_menu pull-left pull-right-xs' onClick={::this.showMenu}></button>

          <ul className='header_links pull-left hidden-xs'>
            {
              this.props.HeaderLinks.map(function(item, index) {
                return <HeaderLink data={item} key={index}/>
              })
            }
            <If condition={isLogged==false}>
              <Then>
                <li>
                  <a className='greenlighted_left header_enter' onClick={::this.showLogin}>Вход</a>
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
              <button id = 'recall' onClick={::this.showNumber} className='hidden-xs hidden-sm header_phone pull-right'>+7-495-980-06-48</button>
            <HeaderSearch/>  
          </div>

        </div>
    )
  }
} 

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch),
    pageActionsLogin: bindActionCreators(pageActionsLogin, dispatch),
    pageActionsLoginShow: bindActionCreators(pageActionsLoginShow, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    HeaderLinks: state.pageData.HeaderLinks,
    showMenu: state.user.show_menu,
    name: state.user.name,
    windowTop: state.pageData.windowTop,
    isLogged: state.user.isLogged,
    windowWidth: state.pageData.windowWidth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)