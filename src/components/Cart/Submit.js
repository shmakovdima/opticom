import React, { Component } from 'react'
import '../../stylus/components/profile.styl'
import HeaderLight from '../../components/Headers/HeaderLight'
import {connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as pageActions from '../../actions/emptyCart'
import CartRight from './CartRight'
import '../../stylus/components/profile.styl';
import '../../stylus/components/cart.styl';
import {Link} from 'react-router'
import CartItem from '../SubItems/Item/CartItem'


import Sticky  from 'sticky-js';
import setHeightLeftBlock from '../function/setHeightLeftBlock';

class Submit extends Component {


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

  render(){
    var CartItems = this.props.Submit;

    this.sticky.update();

    return(
      <div>
        <HeaderLight/>
        <section className='cart_header'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12'>
                <span className='cart_title hidden-xs hidden-sm'>Корзина</span>
                <span className='cart_title hidden-xs hidden-sm'>Доставка и оплата</span>
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
              <div className='col20-lg-15 col20-md-15 col20-sm-15  col20-xs-20 cart_height' id = 'leftPart'>

                <div className='col20-lg-offset-2 col20-md-offset-2 col20-lg-18 col20-md-18 col20-xs-20 cart_submit_padding'>
                  <div className='profile_block'>

                    <div className='row'>
                      <div className='profile_block_row'>
                        <span className='col-sm-3 col-xs-12 inputlabel'>Имя и фамилия</span>
                        <span className='col-sm-9 col-xs-12 spanlabel'>Максим Глубоков</span>
                      </div>
                      <div className='profile_block_row'>
                        <span className='col-sm-3 col-xs-12 inputlabel'>Мобильный телефон</span>
                        <span className='col-sm-9 col-xs-12 spanlabel'>+7 (922) 921-92-11</span>
                      </div>
                      <div className='profile_block_row'>
                        <span className='col-sm-3 col-xs-12 inputlabel'>Электронная почта</span>
                        <span className='col-sm-9 col-xs-12 spanlabel'>some@mail.com</span>
                      </div>
                    </div>


                    <div className='row'>
                      <div className='profile_block_row'>
                        <span className='col-sm-3 col-xs-12 inputlabel'>Адрес доставки</span>
                        <span className='col-sm-9 col-xs-12 spanlabel'>
                          Покров, Ленина 45
                          <br/>
                          Владимирская область, 601122
                        </span>
                      </div>
                    </div>


                    <div className='row'>
                      <div className='profile_block_row'>
                        <span className='col-sm-3 col-xs-12 inputlabel'>Время доставки</span>
                        <span className='col-sm-9 col-xs-12 spanlabel'>
                          11 сентября 2016, с 9:00 до 16:00
                        </span>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='profile_block_row'>
                        <span className='col-sm-3 col-xs-12 inputlabel'>Предпочитаемая оплата</span>
                        <span className='col-sm-9 col-xs-12 spanlabel'>
                          Банковский счет
                        </span>
                      </div>
                    </div>

                    <div className='row'>
                      <div className='profile_block_row'>
                        <span className='col-sm-3 col-xs-12 inputlabel'>Комментарий</span>
                        <span className='col-sm-9 col-xs-12 spanlabel'>
                          Промо-продукция, важна целостность упаковки
                        </span>
                      </div>
                    </div>
                        
 

                  </div>

                </div>

                <div className='cart_fullwidth'>
                  {
                    CartItems.map(function(item, key){
                      return(
                        <CartItem remove={false} submit={true} item={item} key={key}/>
                      )

                    })
                  }
                </div>

              </div>
              <div className='col20-lg-offset-1 col20-lg-4 col20-md-offset-1 col20-md-4 col20-sm-5 col20-xs-20' id = 'rightPart' data-sticky-container>
                <div className='sticky_container' data-margin-top='100' data-sticky-for='768'>
                  <div  className='sticky'>
                    <div className='profile_right'>
                      <CartRight/>
                      <Link to='' title='Далее' className='cart_total_button button'>
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
            </div>
          </div>
        </section>
      </div>

    )
  }

}


function mapStateToProps (state) {
  return {
    Submit: state.user.Submit,
    windowWidth: state.pageData.windowWidth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Submit)



