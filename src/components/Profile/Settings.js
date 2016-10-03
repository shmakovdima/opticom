import '../../stylus/components/profile.styl';
import '../../stylus/components/item.styl';

import {Link} from 'react-router'
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import isValidEmailAddress from '../function/isValidEmailAddress'
import $ from 'jquery'
import 'jquery.maskedinput/src/jquery.maskedinput.js'
import { If, Then, Else } from 'react-if';
import * as pageActions from '../../actions/setCompany'
//var ReactDOM = require('react-dom');

class Adress extends Component {
  render(){

    let title = (this.props.item.title) ? this.props.item.title : ''
    let address = (this.props.item.address) ? this.props.item.address : ''

    let editlink = (this.props.item.editlink) ? this.props.item.editlink : ''
    let sendinvite = (this.props.item.sendinvite) ? this.props.item.sendinvite : ''

    return(
      <div className='item_gor address'>
        <div className='item'>
          <div className='item_under'>
            <span className='item_title'>{title}</span>
            <span className='item_address'>{address}</span>
            <div className='item_address_links'>
              <Link className='greenborderbottom' to={editlink} title='Редактировать'><span>Редактировать</span></Link>
              <Link className='greenborderbottom' to={sendinvite} title='Выслать приглашение'><span>Выслать приглашение</span></Link>
            </div>
          </div>
         </div>
      </div>
    )
  }
}


class MountPhone extends Component {
  componentDidMount() {
    $('.phone').mask('+7 (999) 999-9999');
  }
  render(){
    return(<div></div>)
  }
}

class ProfileSettings extends Component {


  constructor(props) {
    super(props);

    this.state = {
      select_company: 0,
      addcompany: false
    }
  }

  setCurCompany(key) {
    this.setState({
      select_company: key
    })
  }

  addCompanyButton(e) {
    e.preventDefault();
    this.setState({
      addcompany: (!this.state.addcompany)
    })
    
  }

  addCompany(e) {
    e.preventDefault();
    var array = $('.profile_right_company_addblock').serializeArray()

    console.log(array)
    var resultarray = {}

    for (let i of array) {      
      resultarray[i.name] = i.value
    }

    let Companies = (this.props.Companies) ? JSON.parse(JSON.stringify(this.props.Companies)) : []

    this.props.pageActions.setCompany(Companies.concat(resultarray))

    this.setState({
      addcompany: false
    })

  }

  componentDidMount() {
    $('.phone').mask('+7 (999) 999-9999');

    $(document).on('change', '.phone', function(e){
      e.preventDefault();
      if ($(this).val() == ''){
        $(this).addClass('error')
      }
    });
    $(document).on('focus', 'input', function(){
      $(this).removeClass('error');

    });

    $(document).on('change', '.email', function(e){
      e.preventDefault();
      if (isValidEmailAddress($(this).val())){
        $(this).addClass('ok')
      }else{
        $(this).removeClass('ok')
      }
    })

  }

  render(){
    let address = (this.props.SettingsPage.addresses) ? this.props.SettingsPage.addresses : []
    
    let manager = (this.props.SettingsPage.manager) ? this.props.SettingsPage.manager : []
    let telemarket = (this.props.SettingsPage.telemarket) ? this.props.SettingsPage.telemarket : []

    let workers = (this.props.SettingsPage.workers) ? this.props.SettingsPage.workers : []

    let Companies = (this.props.Companies) ? this.props.Companies : []

    var self = this
    return(
    <div className='profile'>
      <section className='profile_sets_header'>
        <div className='container'>
          <div className='row'>
            <div className='col20-lg-9 col20-lg-offset-1 col20-md-9 col20-md-offset-1 col20-sm-9 '>
              <h1>Наcтройки</h1>
            </div>
          </div>
          <div className='row profile_settings'>
            <div className='col20-lg-10 col20-lg-offset-2'>
              <div className='profile_block'>
                <h2>Личные данные</h2>
                <div className='row'>
                  <span className='col-xs-4 inputlabel'>Логин для входа</span>
                  <div className='col-xs-8'><input type='text'/></div>
                </div>
                <div className='row'>
                  <span className='col-xs-4 inputlabel'>Пароль</span>
                  <div className='col-xs-8'><input type='text'/></div>
                </div>
                <div className='row'>
                  <span className='col-xs-4 inputlabel'>Имя и фамилия</span>
                  <div className='col-xs-8'><input type='text'/></div>
                </div>
                <div className='row'>
                  <span className='col-xs-4 inputlabel'>Должность</span>
                  <div className='col-xs-8'><input type='text'/></div>
                </div>
                <div className='row'>
                  <span className='col-xs-4 inputlabel'>Мобильный телефон</span>
                  <div className='col-xs-8'>
                    <input placeholder='+7' ref='phone' type='text' className='phone' />
                    <span className='error'>Укажите номер</span>
                  </div>
                </div>
                <div className='row'>
                  <span className='col-xs-4 inputlabel'>Электронная почта</span>
                  <div className='col-xs-8'><input className='email'  ref='email' type='text'/>
                  </div>
                </div>

              </div>
              <div className='profile_block'>
                <h2>Адреса Доставки</h2>
                <div className='profile_addresses'>
                {
                  address.map(function(item){
                    return(<Adress item={item}/>)
                  })  
                }
                </div>
              </div>
              <div className='profile_block'>
                <h2>Предпочитаемая оплата</h2>
                <div className='row'>
                  <div className='col-xs-12'>
                    <input id='cash' value='cash' type='radio' name='paymenttype'/>
                    <label htmlFor='cash'></label>
                    <span className='radiolabel'>Наличные</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xs-12'>
                    <input id='bank' value='bank' type='radio' name='paymenttype'/>
                    <label htmlFor='bank'></label>
                    <span className='radiolabel'>Банковский счёт</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xs-12'>
                    <input id='card' value='card' type='radio' name='paymenttype' />
                    <label htmlFor='card'></label>
                    <span className='radiolabel'>Оплата банковской картой</span>
                  </div>
                </div>
              </div>
              <div className='profile_block'>
                <h2>Уведомления</h2>
                <div className='row'>
                  <div className='col-xs-12'>
                    <input className='checkbox2' id='changestatus' value='cash' type='checkbox' name='changestatus'/>
                    <label htmlFor='changestatus'></label>
                    <span className='radiolabel'>Изменение статусов заказов</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xs-12'>
                    <input className='checkbox2' id='newdiscount' value='bank' type='checkbox' name='newdiscount'/>
                    <label htmlFor='newdiscount'></label>
                    <span className='radiolabel'>Рассылки о скидках и акциях</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xs-12'>
                    <input className='checkbox2' id='newitems' value='true' type='checkbox' name='newitems' />
                    <label htmlFor='newitems'></label>
                    <span className='radiolabel'>Уведомления о новых товарах</span>
                  </div>
                </div>
              </div>
              
            </div>
            <div className='col20-lg-5 col20-lg-offset-2'>
              <div className='profile_right'>
                <h2>Менеджер</h2>
                <span className='profile_right_name'>{manager.name}</span>
                <a href={'tel:'+manager.phone} className='profile_right_name' title='Телефон'>{manager.phone}</a>  
                <a href={'mailto:'+manager.email} className='profile_right_name green_underline' title='Почта'>{manager.email}</a>  
              </div>
              <div className='profile_right'>
                <h2>Телемаркетолог</h2>
                <span className='profile_right_name'>{telemarket.name}</span>
                <a href={'tel:'+telemarket.phone} className='profile_right_name' title='Телефон'>{telemarket.phone}</a>  
                <a href={'mailto:'+telemarket.email} className='profile_right_name green_underline' title='Почта'>{telemarket.email}</a>  
              </div>

              <div className='profile_right_company'>
                <h2>Компания</h2>
                <div>
                  {
                    Companies.map(function(item, key){
                      return(
                        <div onClick = {self.setCurCompany.bind(self, key)} className={ (self.state.select_company==key ? 'active ' :'')+ 'profile_right_company_block'}>
                          <h3>{item.name}</h3>
                          <span>{item.factaddress}</span>
                        </div>
                      )
                    })  
                  }
                </div>


                <If condition={this.state.addcompany==false}>
                  <Then>
                    <div className='profile_right_company_add'>
                      <button onClick={::this.addCompanyButton} className='greenborderbottom'><span >Добавить компанию</span></button>
                    </div>
                  </Then>
                  <Else>
                    <Then>
                      <form ref='companyform'  className='profile_right_company_addblock profile_block' name='addcompany[]'>
                          <div className='row'>
                            <div className='col-xs-12'>
                              <input required placeholder='Название компании' name='name' type='text'/>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-xs-12'>
                              <input placeholder='Юридический адрес' name='uraddress' type='text'/>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-xs-12'>
                              <input required placeholder='Фактический адрес' name='factaddress' type='text'/>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-xs-12'>
                              <input placeholder='Телефон' name='phone' className='phone' type='text'/>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-xs-12'>
                              <input placeholder='ИНН' name='inn'  type='text'/>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-xs-12'>
                              <input placeholder='КПП' name='kpp'  type='text'/>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-xs-12'>
                              <input placeholder='ОГРН' name='ogrn' type='text'/>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-xs-12'>
                              <input placeholder='Расчётный счёт' name='rs' type='text'/>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-xs-12'>
                              <input placeholder='Наименование банка' name='namebank' type='text'/>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-xs-12'>
                              <input placeholder='Кор. счёт' name='coraccount' type='text'/>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-xs-12'>
                              <input placeholder='БИК' name='bik' type='text'/>
                            </div>
                          </div>
                          <MountPhone/>
                          <button onClick={::this.addCompanyButton} className='pull-left profile_right_button profile_right_button_left'>Отмена</button>
                          <button onClick={::this.addCompany} className='pull-right profile_right_button profile_right_button_right'>Добавить</button>
                      </form>
                    </Then>
                  </Else>
                </If>


              </div>


              <div className='profile_right profile_right_workers'>
                <h2>Сотрудники</h2>

                <div className=''> 
                {
                    workers.map(function(item){
                      return(
                        <div >
                          <h3 className='profile_right_title'>{item.name}</h3>
                          <span className='profile_right_job'>{item.job}</span>
                          <a href={'tel:'+item.phone} className='profile_right_name' title='Телефон'>{item.phone}</a>  
                          <a href={'mailto:'+item.email} className='profile_right_name green_underline' title='Почта'>{item.email}</a>  
                          <span className='profile_right_name'>{item.address}</span>
                        </div>
                      )
                    })

                }

                </div>


                
              </div>

            </div>
          </div>
        </div>
      </section>


      </div>)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    SettingsPage: state.user.SettingsPage,
    Companies:  state.user.Companies
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings)


