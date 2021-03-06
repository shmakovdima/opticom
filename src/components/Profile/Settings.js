import sweetAlert from 'sweetalert' 
require('!style!css!sweetalert/dist/sweetalert.css'); 
import '../../stylus/components/profile.styl';
import '../../stylus/components/item.styl';

import '../../stylus/components/sweetal.styl';
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import isValidEmailAddress from '../function/isValidEmailAddress'
import $ from 'jquery'
import Adress from './adress'
import 'jquery.maskedinput/src/jquery.maskedinput.js'
import { If, Then, Else } from 'react-if';
import * as pageActions from '../../actions/setCompany'
import * as pageActionsAddress from '../../actions/addDelivery'



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
      addcompany: false,
      adresses: (this.props.adresses) ? this.props.adresses : [],
      addAdress: null
    }
  }

  componentDidMount() {
    var self = this


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
        console.log('not valid')
        $(this).addClass('ok')
      }else{
        console.log('valid')
        $(this).removeClass('ok')
      }
    })


    $(document).on('click', '.profile_right_company_block', function(){
      var block = $(this).find('.profile_right_company_special');
      if (block.hasClass('hide')) {
        block.removeClass('hide');
        $(this).addClass('active');
      }else{
        block.addClass('hide');
        $(this).removeClass('active');
      }

    });

    $(document).on('click', '.address_edit_save', function(){

        var prevArray = JSON.parse(JSON.stringify(self.state.adresses))
        var key = $(this).attr('data-key')
        var Item = {
          sendinvite: document.getElementById('addressInvite').value,
          title: document.getElementById('addressName').value,
          address: document.getElementById('addressValue').value
        }

        prevArray[key] = Item

        self.setState({
          adresses: prevArray,
          addAdress: null
        })

      $('.profile_right_company_add').removeClass('hidden')
    })

    $(document).on('click', '.address_edit_cancel', function(){
      var prevArray = JSON.parse(JSON.stringify(self.state.adresses))

      if ($('.profile_right_company_add').hasClass('hidden')) {
       self.setState({
          adresses: prevArray.slice(0, prevArray.length-1),
          addAdress: null
        })
      }

      $('.profile_right_company_add').removeClass('hidden')
    })
  }

  addAddressButton(e) {
    e.preventDefault();

    $('.address_edit_cancel').click()

    var prevArray = this.state.adresses

    this.setState({
      adresses: prevArray.concat({
        title: '',
        adress: '',
        sendinvite: ''
      }),
      addAdress: prevArray.length
    });

    $('.profile_right_company_add').addClass('hidden')
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

    if ($('.settings_name').val()=='') {
      sweetAlert('Ошибка', 'Вы не ввели название компании', 'error');
      return;
    }
    
    if ($('.settings_adress').val()=='') {
      sweetAlert('Ошибка', 'Вы не ввели фактический адрес компании', 'error');
      return;
    }

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





  render(){
    let adresses = this.state.adresses
    
    let addAdress = this.state.addAdress

    let manager = (this.props.SettingsPage.manager) ? this.props.SettingsPage.manager : []
    let telemarket = (this.props.SettingsPage.telemarket) ? this.props.SettingsPage.telemarket : []

    let workers = (this.props.SettingsPage.workers) ? this.props.SettingsPage.workers : []

    let Companies = (this.props.Companies) ? this.props.Companies : []

   

    return(
    <div className='profile'>
      <section className='profile_sets_header'>
        <div className='container'>
          <div className='row'>
            <div className='col20-lg-9 col20-lg-offset-1 col20-md-20'>
              <h1>Наcтройки</h1>
            </div>
          </div>
          <div className='row profile_settings'>
            <div className='col20-lg-10 col20-lg-offset-2 col20-md-14 col20-sm-20 col20-xs-20'>
              <div className='profile_block'>
                <h2>Личные данные</h2>
                <div className='row'>
                  <span className='col-sm-4 col-xs-12 inputlabel'>Логин для входа</span>
                  <div className='col-sm-8 col-xs-12'><input type='text'/></div>
                </div>
                <div className='row'>
                  <span className='col-sm-4 col-xs-12 inputlabel'>Пароль</span>
                  <div className='col-sm-8 col-xs-12'><input type='text'/></div>
                </div>
                <div className='row'>
                  <span className='col-sm-4 col-xs-12 inputlabel'>Имя и фамилия</span>
                  <div className='col-sm-8 col-xs-12'><input type='text'/></div>
                </div>
                <div className='row'>
                  <span className='col-sm-4 col-xs-12 inputlabel'>Должность</span>
                  <div className='col-sm-8 col-xs-12'><input type='text'/></div>
                </div>
                <div className='row'>
                  <span className='col-sm-4 col-xs-12 inputlabel'>Мобильный телефон</span>
                  <div className='col-sm-8 col-xs-12'>
                    <input placeholder='+7' ref='phone' type='text' className='phone' />
                    <span className='error'>Укажите номер</span>
                  </div>
                </div>
                <div className='row'>
                  <span className='col-sm-4 col-xs-12 inputlabel'>Электронная почта</span>
                  <div className='col-sm-8 col-xs-12'><input className='email'  ref='email' type='text'/>
                  </div>
                </div>

              </div>
              <div className='profile_block'>
                <h2>Адреса Доставки</h2>
                <div className='profile_addresses'>
                  {
                    adresses.map(function(item, key){
                      var edit = false
                      if (key==addAdress) edit = true;
                      return(<Adress item={item} keyitem = {key} edit={edit}/>)
                    })  
                  }
                  <div className='profile_right_company_add'>
                    <button className='greenborderbottom' onClick={::this.addAddressButton}><span >Добавить новый адрес</span></button>
                  </div>
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
                    <input id='bank' value='bank' type='radio' name='paymenttype' checked/>
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
            <div className='col20-lg-5 col20-lg-offset-2 col20-md-offset-1 col20-md-5 col20-sm-20 col20-xs-20 profile_margin_top'>
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
                    Companies.map(function(item){
                      return(
                        <div className='profile_right_company_block'>
                          <h3>{item.name}</h3>
                          <span>{item.factaddress}</span>
                          <div className='profile_right_company_special hide'>
                            <div className='row'>
                              <If condition={item.uraddress}>
                                <Then>
                                  <div className='col-xs-12'>
                                    <span className='profile_right_company_special_title'>
                                      Юридический адрес
                                    </span>
                                   <span className='profile_right_company_special_value'>
                                      {item.uraddress}
                                    </span>
                                  </div>
                                
                                </Then>
                              </If>

                              <If condition={item.phone}>
                                <Then>
                                  <div className='col-xs-12'>
                                    <span className='profile_right_company_special_title'>
                                      Телефон
                                    </span>
                                   <span className='profile_right_company_special_value'>
                                      {item.phone}
                                    </span>
                                  </div>
                                
                                </Then>
                              </If>


                              <If condition={item.inn}>
                                <Then>
                                  <div className='col-xs-12'>
                                    <span className='profile_right_company_special_title'>
                                      ИНН
                                    </span>
                                   <span className='profile_right_company_special_value'>
                                      {item.inn}
                                    </span>
                                  </div>
                                
                                </Then>
                              </If>

                              <If condition={item.kpp}>
                                <Then>
                                  <div className='col-xs-12'>
                                    <span className='profile_right_company_special_title'>
                                      КПП
                                    </span>
                                   <span className='profile_right_company_special_value'>
                                      {item.kpp}
                                    </span>
                                  </div>
                                
                                </Then>
                              </If>


                              <If condition={item.ogrn}>
                                <Then>
                                  <div className='col-xs-12'>
                                    <span className='profile_right_company_special_title'>
                                      ОГРН
                                    </span>
                                   <span className='profile_right_company_special_value'>
                                      {item.ogrn}
                                    </span>
                                  </div>
                                
                                </Then>
                              </If>

                              <If condition={item.rs}>
                                <Then>
                                  <div className='col-xs-12'>
                                    <span className='profile_right_company_special_title'>
                                      Расчётный счёт
                                    </span>
                                   <span className='profile_right_company_special_value'>
                                      {item.rs}
                                    </span>
                                  </div>
                                
                                </Then>
                              </If>

                              <If condition={item.namebank}>
                                <Then>
                                  <div className='col-xs-12'>
                                    <span className='profile_right_company_special_title'>
                                      Наименование банка
                                    </span>
                                   <span className='profile_right_company_special_value'>
                                      {item.namebank}
                                    </span>
                                  </div>
                                
                                </Then>
                              </If>


                              <If condition={item.coraccount}>
                                <Then>
                                  <div className='col-xs-12'>
                                    <span className='profile_right_company_special_title'>
                                      Кор. счёт
                                    </span>
                                   <span className='profile_right_company_special_value'>
                                      {item.coraccount}
                                    </span>
                                  </div>
                                
                                </Then>
                              </If>


                              <If condition={item.bik}>
                                <Then>
                                  <div className='col-xs-12'>
                                    <span className='profile_right_company_special_title'>
                                      БИК
                                    </span>
                                   <span className='profile_right_company_special_value'>
                                      {item.bik}
                                    </span>
                                  </div>
                                
                                </Then>
                              </If>
                            </div>
                          </div>
                        </div>
                      )
                    })  
                  }
                </div>


                <If condition={this.state.addcompany==false}>
                  <Then>
                    <div className='profile_right_company_add'>
                      <button onClick={::this.addCompanyButton} className='greenborderbottom text-left'><span >Добавить компанию</span></button>
                    </div>
                  </Then>
                  <Else>
                    <Then>
                      <form ref='companyform'  className='profile_right_company_addblock profile_block' name='addcompany[]'>

                          <div className='row'>
                            <div className='col-xs-12'>
                              <input required placeholder='Название компании' className='settings_name' name='name' type='text'/>
                            </div>
                          </div>

                          <div className='row'>
                            <div className='col-xs-12'>
                              <input placeholder='Юридический адрес' name='uraddress' type='text'/>
                            </div>
                          </div>
                          <div className='row'>
                            <div className='col-xs-12'>
                              <input required placeholder='Фактический адрес' className='settings_adress' name='factaddress' type='text'/>
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
    pageActions: bindActionCreators(pageActions, dispatch),
    pageActionsAddress: bindActionCreators(pageActionsAddress, dispatch) 
  }
}

function mapStateToProps (state) {
  return {
    SettingsPage: state.user.SettingsPage,
    adresses: state.user.AdressDelivery,
    Companies:  state.user.Companies
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(ProfileSettings)


