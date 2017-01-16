import React, { Component } from 'react'
import '../../stylus/components/profile.styl'
import HeaderLight from '../../components/Headers/HeaderLight'
import {connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from '../../actions/emptyCart'
import '../../stylus/components/profile.styl';
import '../../stylus/components/cart.styl';
import {Link} from 'react-router';
import CartItem from '../SubItems/Item/CartItem';
import CartRight from './CartRight';
import Sticky from 'sticky-js';
import setHeightLeftBlock from '../function/setHeightLeftBlock';

class Cart extends Component {
  constructor(props){
    super(props);
    this.sticky = new Sticky('.sticky_container');
  }

  componentDidUpdate() {
    setHeightLeftBlock(this);
  }

  componentDidMount(){
    document.getElementsByClassName('sticky')[0].classList.add('active');
    setHeightLeftBlock(this);
  }

  emptyCart(){
    this.props.pageActions.emptyCart([])
  }

  render(){

    var CartItems = this.props.Cart
    this.sticky.update();

    return(
      <div>
        <HeaderLight/>
        <section className='cart_header'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                <span className='cart_title active'>Корзина</span>
                <span className='cart_title hidden-xs hidden-sm'>Доставка и оплата</span>
                <span className='cart_title hidden-xs hidden-sm'>Подтверждение</span>
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
              <div className='col20-lg-14 col20-md-14 col20-sm-15 cart_height' id = 'leftPart'>
                <div>
                  {
                    CartItems.map(function(item, key){
                      return(
                        <CartItem remove={true} submit={false} item={item} key={key}/>
                      )

                    })
                  }
                </div>

              </div>
              <div className='col20-lg-offset-2 col20-lg-4 col20-md-offset-1 col20-md-5  col20-sm-5' data-sticky-container id = 'rightPart'>
                <div className='sticky_container' data-margin-top='100' data-sticky-for='768'>
                  <div  className='sticky'>
                    <div className='profile_right' >
                      <CartRight/>
                     <Link to='/delivery' title='Далее' className='cart_total_button button'>
                        Далее
                      </Link>
                    </div>
                    <div className='cart_links '>
                      <button className='cart_trash text-left  greenborderbottom' onClick={::this.emptyCart}>
                        <span>Очистить корзину
                        </span>
                        </button>
                      <Link className='cart_add greenborderbottom' to='addset' title='Добавить в набор '>
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
    windowWidth: state.pageData.windowWidth,
    windowTop: state.pageData.windowTop
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart)
