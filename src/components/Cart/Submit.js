import React, { Component } from 'react'
import '../../stylus/components/profile.styl'
import HeaderLight from '../../components/Headers/HeaderLight'
import {connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from '../../actions/emptyCart'

import '../../stylus/components/profile.styl';
import '../../stylus/components/cart.styl';
import {Link} from 'react-router'
import CartItem from '../SubItems/Item/CartItem'
import MountCost from './MountCost'

class Submit extends Component {

  render(){
    var CartItems = this.props.Submit
    return(
      <div>
        <HeaderLight/>
        <section className='cart_header'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                <span className='cart_title'>Корзина</span>
                <span className='cart_title'>Доставка и оплата</span>
                <span className='cart_title  active'>Подтверждение</span>
              </div>
              <div className='col-xs-12'>
                <Link className='cart_tocatalog green_underline' to='/catalog' title='Вернуться в каталог'>Вернуться в каталог</Link>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col20-lg-15 col20-md-15'>

                <div className='col20-lg-offset-2 col20-md-offset-2 cart_submit_padding'>
                  <div className='profile_block'>

                    <div className='row'>
                      <div className='profile_block_row'>
                        <span className='col-xs-3 inputlabel'>Имя и фамилия</span>
                        <span className='col-xs-9 spanlabel'>Максим Глубоков</span>
                      </div>
                      <div className='profile_block_row'>
                        <span className='col-xs-3 inputlabel'>Мобильный телефон</span>
                        <span className='col-xs-9 spanlabel'>+7 (922) 921-92-11</span>
                      </div>
                      <div className='profile_block_row'>
                        <span className='col-xs-3 inputlabel'>Электронная почта</span>
                        <span className='col-xs-9 spanlabel'>some@mail.com</span>
                      </div>
                    </div>


                    <div className='row'>
                      <div className='profile_block_row'>
                        <span className='col-xs-3 inputlabel'>Адрес доставки</span>
                        <span className='col-xs-9 spanlabel'>
                          Покров, Ленина 45
                          <br/>
                          Владимирская область, 601122
                        </span>
                      </div>
                    </div>


                    <div className='row'>
                      <div className='profile_block_row'>
                        <span className='col-xs-3 inputlabel'>Время доставки</span>
                        <span className='col-xs-9 spanlabel'>
                          11 сентября 2016, с 9:00 до 16:00
                        </span>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='profile_block_row'>
                        <span className='col-xs-3 inputlabel'>Предпочитаемая оплата</span>
                        <span className='col-xs-9 spanlabel'>
                          Банковский счет
                        </span>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='profile_block_row'>
                        <span className='col-xs-3 inputlabel'>Комментарий</span>
                        <span className='col-xs-9 spanlabel'>
                          Промо-продукция, важна целостность упаковки
                        </span>
                      </div>
                    </div>
                        
                       
                       

          

                  </div>

                </div>

                <div>
                  {
                    CartItems.map(function(item, key){
                      return(
                        <CartItem remove={false} submit={true} item={item} key={key}/>
                      )

                    })
                  }
                </div>

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
                  <Link to='/delivery' title='Далее' className='cart_total_button button'>
                    Далее
                  </Link>
                </div>
                <div className='cart_links'>
                  <Link className='cart_add greenborderbottom' to='addtoset' title='Добавить в набор '>
                    <span>Добавить в набор
                    </span>
                   </Link>
                  <Link className='cart_print greenborderbottom' to='print' title='Распечатать'>
                    <span>
                    Распечатать
                    </span>
                  </Link>
                  <Link className='cart_excel greenborderbottom' to='excel' title='Выгрузить в Excel (.xls)'>
                    <span>
                    Выгрузить в Excel (.xls)
                    </span>
                  </Link>   
                </div>
              </div>
            </div>
          </div>
        </section>
        <MountCost/>
      </div>

    )
  }

}


function mapStateToProps (state) {
  return {
    Submit: state.user.Submit,
    windowWidth: state.pageData.Cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Submit)



