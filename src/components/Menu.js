import React, { Component } from 'react'
import {connect } from 'react-redux'
import '../stylus/components/menu.styl';
import {Link} from 'react-router'
import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/showMenu'
import { If, Then, Else } from 'react-if';
import $ from 'jquery'
import * as pageActionsLoginShow from '../actions/setLoggedShow'
import {DropdownButton, MenuItem} from 'react-bootstrap'
import ContactForm from './ContactForm'


class SubCat extends Component{
  hideMenu(){
    $('body').removeClass('overflow')
    this.props.setMenu.showMenu(false)
  }

  componentDidMount() {
    $(document).on('click', '.close_modal', function(){

    })
  }

  lgShow() {
    this.setState({lgShow: !this.state.lgShow})
  }

  render(){
    var Cat = []

    var self = this

    if (this.props.data.childrens != undefined) {
      Cat = this.props.data.childrens
    } 
    console.log(Cat)

    return(
      <ul className='menu_ul'>
      {
        Cat.map(function(it){
           return(<li>
            <Link onClick={::self.hideMenu} to={'/'+it.link} title={it.title}>{it.title}</Link>
          </li>
          )
        })
      }
      </ul>     
    )
  }
}

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curcategory: 0,
      mobilemenu: true,
      curaddress: '',
      curoffice: '',
      show: false
    }
  }

  componentDidMount() {
    var self = this
    $(document).on('click', '.contact_close', function(){
      self.setState({show: false})
    })

    $(document).on('click', '.close_modal', function(){
      self.setState({show: true})
    })

  }

  showCategory() {
    this.setState({
      mobilemenu: !this.state.mobilemenu
    })
  }

  exitLogin() {
    this.setState({showuser: false})
    this.props.pageActionsLoginShow.setLoggedShow(!this.props.isLogged)
    this.hideMenu()
  }

  hideMenu(){
    $('body').removeClass('overflow');
    this.props.pageActions.showMenu(!this.props.show_menu)
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
    if ($('#menu_search').val() == 'Поиск') {
      $('#menu_search').val('')
      $('#menu_search').removeClass('placeholder')
    }
  }

  removePlaceholder() {
    setTimeout(function(){
      if ($('#menu_search').val() == '') {
        $('#menu_search').val('Поиск')
        $('#menu_search').addClass('placeholder')
      }
    }, 200)
    
  }

  hideCat() {
    $('.menu_green').removeClass('active');
    $('.menu_block').removeClass('notactive')
  }

  showCats(){
    this.setState({mobilemenu: !this.state.mobilemenu})
  }

  setCat(id){
    $('.menu_green').addClass('active');

    $('.menu_block').addClass('notactive')

    this.setState({
      curcategory: id
    })
  }

  render() {

    const show_menu = this.props.show_menu
    const Categories = this.props.Categories
    const mobilemenu = this.state.mobilemenu

    const windowWidth = this.props.windowWidth
    const mobile = (windowWidth < 768) ? true : false

    var CutCategory = this.props.Categories[this.state.curcategory].childrens
    const HeaderLinks = this.props.HeaderLinks

    var curcat = this.state.curcategory
    var setCat = this.setCat
    var self = this

    var titleCur = this.props.Categories[this.state.curcategory].title

    const isLogged = this.props.isLogged
    const setMenu = this.props.pageActions

    var Addresses = ['Петропавловск-Камчатский', 'Москва']
    var Offices = ['Головной офис', 'Местный офис']

    if (this.state.curaddress == '') this.setState({curaddress: Addresses[0]})
    if (this.state.curoffice == '') this.setState({curoffice: Offices[0]})

    const dropdownAddress = this.state.curaddress
    const dropdownOffice = this.state.curoffice

    if (show_menu == true) {
      $('body').addClass('overflow')
    }

    return(
      <div> 
        <ContactForm show={this.state.show}/>  
        <If condition = {show_menu==true}>
          <Then>
            <div className='menu'>
              <If condition={((mobile==true) && mobilemenu)}>
                <Then>
                  <div className='menu_overflow menu_mobile'>
                    <div className='container'>
                      <div className='row'>

                        <div className='col-xs-12'>
                          <input type='text' onBlur={::this.removePlaceholder} onFocus={::this.setPlaceholder} defaultValue='Поиск' id='menu_search' className='menu_search placeholder'/>
                        </div>

                        <div className='col-xs-12 menu_mobile_links'>
                          <button className='menu_showcategory' onClick={::this.showCats}></button>
                          <ul>
                            {
                              HeaderLinks.map(function(item) {
                                return (
                                 <li>
                                    <Link onClick={::self.hideMenu} className='' activeClassName='active'  to={'/'+item.href} title={item.title}>{item.title}</Link>
                                  </li>
                                )
                              })
                            }

                            <If condition={isLogged==false}>
                              <Then>
                                <li>
                                  <a  onClick={::this.exitLogin}>Вход</a>
                                </li>
                              </Then>
                            </If>
                          </ul>

                        </div>
                        <div className='col-xs-12 menu_dropdowns'>
                          <a className='menu_phone' title='Наш телефон' href='tel:+7-495-980-06-48'>+7-495-980-06-48</a>
                          
                          <div className='dropdown_block'>
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
                        </div>

                        <div className='col-xs-12 menu_call'>
                          <button className='btn'>Перезвоните мне</button>
                        </div>

                        <div className='col-xs-12 menu_write'>
                          <button className='btn close_modal'>Написать сообщение</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Then>
                <Else>
                  <div className='menu_overflow'>
                    <div className='col20-lg-6 col20-md-8 col20-sm-8'>
                      <div className='menu_block'>
                        <h2>
                        <button onClick={::this.showCats} className='hidden-lg hidden-md hidden-sm menu_prev'></button>
                        Каталог</h2>
                        <div>
                          {
                            Categories.map(function(item, key){
                              return(<button  onClick={setCat.bind(self, key)} className={'menu_mainlink text-left '+ (key == curcat ? 'active' : '') } to={item.link} title={item.title}>
                                {item.title}
                                <div></div>
                              </button>)
                            })
                          }

                        </div>
                      </div>
                    </div>
                    <div className='col20-lg-14 col20-md-12  col20-sm-12 menu_green'>
                      <div className='menu_links'>
                        <h3 className='hidden-lg col-xs-12 hidden-md hidden-sm'>{titleCur}
                          <button onClick={::this.hideCat} className='hidden-lg hidden-md hidden-sm menu_prev'></button>
                        </h3>
                        {
                          CutCategory.map(function(item){
                            return(
                              <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12'>
                                <div className='menu_subcategory'>
                                  <Link onClick={::self.hideMenu} to={'/'+item.link} title={item.title}>{item.title}</Link>
                                </div>
                                <SubCat setMenu={setMenu} data={item} />
                              </div>
                              )
                            })
                        }

                      </div>

                    </div>
                    
                  </div>
                </Else>
              </If>   
              <button onClick={::this.hideMenu} className='menu_close'></button>
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
    Categories: state.pageData.Categories,
    show_menu: state.user.show_menu,
    windowWidth: state.pageData.windowWidth,
    isLogged: state.user.isLogged
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu)