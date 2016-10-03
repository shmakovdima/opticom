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

class Cart extends Component {

  

  render(){


    var CartItems = this.props.Cart

    return(
      <div>
        <HeaderLight/>
        <section className='cart_header'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                <span className='cart_title active'>Корзина</span>
                <span className='cart_title'>Доставка и оплата</span>
                <span className='cart_title'>Подтверждение</span>
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
              <div className='col20-lg-14 col20-md-14'>
                <div>
                  {
                    CartItems.map(function(item, key){
                      return(
                        <CartItem item={item} key={key}/>
                      )

                    })
                  }
                </div>

              </div>
              <div className='col20-lg-offset-2 col20-lg-4 col20-md-offset-2 col20-md-4'>
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
                  <button className='cart_trash greenborderbottom'>
                    <span>Очистить корзину
                    </span>
                    </button>
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
      </div>

    )
  }

}


function mapStateToProps (state) {
  return {
    Cart: state.user.Cart,
    windowWidth: state.pageData.Cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)



