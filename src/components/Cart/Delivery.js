import React, { Component } from 'react'
import '../../stylus/components/profile.styl'
import HeaderLight from '../../components/Headers/HeaderLight'
import {connect } from 'react-redux'

import '../../stylus/components/profile.styl';
import '../../stylus/components/cart.styl';
import {Link} from 'react-router'

import { If, Then } from 'react-if';
import isValidEmailAddress from '../function/isValidEmailAddress'
import 'jquery.maskedinput/src/jquery.maskedinput.js'
import DatePicker from 'react-bootstrap-date-picker'

import 'react-bootstrap-date-picker'


import $ from 'jquery'

class MountPhone extends Component {
  componentDidMount() {
    $('.phone').mask('+7 (999) 999-9999');
  }
  render(){
    return(<div></div>)
  }
}


class MountTime extends Component {
  componentDidMount() {
    //$('.timepicker').mask('99:99');
    //$('.timepicker').setMask({mask: 'time', defaultValue: 'hh:mm'});
  }

  render(){
    return(<div></div>)
  }
}

class Delivery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      settime: false
    };
  }

  changeSetDate() {
    this.setState({
      settime: $('#bank').is(':checked')
    })
    $('.timepicker').mask('00:00');
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


    var monthLabels = ['Январь','Февраль','Март','Апрель','Май','Июнь', 'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь']

    var dayLabels = ['ПН','ВТ','СР','ЧТ','ПТ','СБ','ВС']

    var dateFormat = 'DD.MM.YYYY'

    return(
      <div>
        <HeaderLight/>
        <section className='cart_header'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                <span className='cart_title  delivery'>Корзина</span>
                <span className='cart_title  active delivery'>Доставка и оплата</span>
                <span className='cart_title  delivery'>Подтверждение</span>
              </div>

            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-offset-2 col20-lg-10 col-md-offset-2 col20-md-10'>
                <div className='profile_block'>
                  <h2>Получатель</h2>
                    <div className='row'>
                      <span className='col-xs-4 inputlabel'>Имя и фамилия</span>
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
                    <h2>Адрес доставки</h2>
                    <Link className = 'cart_address_change greenlighted' to='/changeadress' title='Изменить'>
                      <span>Изменить</span>
                    </Link>
                    <div className='row row_nopadding'>
                      <div className='col-xs-12'>
                        <span className='cart_address_title'>Головной офис</span>
                        <span className='cart_address_content'>
                          Покров, Ленина 45
                          <br/>
                          Владимирская область, 601122
                        </span>
                      </div>
                    </div>
                </div>

              <div className='profile_block'>
                <h2>Время доставки</h2>
                <div className='row'>
                  <div className='col-xs-12'>
                    <input onChange={::this.changeSetDate} id='faster' value='faster' type='radio' name='deliverytime'/>
                    <label htmlFor='faster'></label>
                    <span className='radiolabel'>Как можно скорее</span>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-xs-12'>
                    <input onChange={::this.changeSetDate} id='set' value='set' type='radio' name='deliverytime'/>
                    <label htmlFor='set'></label>
                    <span className='radiolabel'>Выбрать</span>
                  </div>
                  <If condition={this.state.settime}>
                    <Then>
                      <div className='cart_date'>
                        <div className='col-xs-12 cart_date_row'>
                          <span className='cart_date_title'>Дата</span>
                          <DatePicker className='cart_input'  id = 'date' dateFormat={dateFormat} dayLabels={dayLabels} monthLabels={monthLabels}/>
                        </div>
                        <div className='col-xs-12 cart_date_row'>
                          <span className='cart_date_title'>Время</span>
                          <div className='input-group'>
                            <input className='timepicker' type='text'/>
                          </div>
                        </div>
                        <MountTime/>
                      </div>
                    </Then>
                  </If>
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
                <h2>Комментарий</h2>
                <div className='row'>
                  <div className='col-xs-12'>
                    <textarea placeholder='Напишите комментарий'></textarea>                   
                  </div>
                </div>

              </div>

                 <MountPhone/>

              </div>
              <div className='col20-lg-offset-1 col20-lg-4 col20-md-offset-1 col20-md-4'>
                <div className='profile_right'>
                  <h2>Итого</h2>
                  <span className='cart_total_cost'>18 056 ₽</span>
                  <span className='cart_total_vendors'>24 артикула</span>
                  <span className='cart_total_qual'>
                    <span>32 ед.</span>
                    <span> • </span>
                    <span>4 уп.</span>                  
                  </span>
                  <span className='cart_total_waiting'>
                    Ожидаемая дата поставки — 24 мая
                  </span>
                  <Link to='/submit' title='Далее' className='cart_total_button button'>
                    Далее
                  </Link>
                </div>


              </div>
            </div>
          </div>
        </section>
        
      </div>

    )
  }
}


function mapStateToProps (state) {
  return {
    windowWidth: state.pageData.Cart
  }
}



export default connect(mapStateToProps)(Delivery)



