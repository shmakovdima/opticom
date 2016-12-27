require('!style!css!slick-carousel/slick/slick.css'); 
require('!style!css!slick-carousel/slick/slick-theme.css');

import '../stylus/components/slick.styl';
import '../stylus/components/catalog.styl';
import '../stylus/components/category.styl';
import '../stylus/components/setspage.styl';


import {Link} from 'react-router'
import React, { Component } from 'react'
import HeaderLight from '../components/Headers/HeaderLight'
import {connect} from 'react-redux'

import CartItem from '../components/SubItems/Item/CartItem'
import CartRight from '../components/Cart/CartRight'

class ListItems extends Component {
  render() {
    let Sets = this.props.AddSet.Data


    return (
      <div>
        <HeaderLight/>
      <section className='category_header sets_header sets_header_add'>
        <div className='container'>
          <div className='row'>
            <div className='category_header_absolute'>
              <div className='sets_header_picture hidden-xs hidden-sm'>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='category_breadcrumb col20-lg-offset-1 col20-lg-19  col15-md-15 col15-sm-15 '>
              <ol className='breadcrumb'>


              </ol>
              <h1 className='sub'>Заказ номер 2</h1>
              
              <div>
                <span className='sets_header_description'>
                  Создан 24 мая
                  <br/>
                  6 артикулов, 125 упаковок
                  <br/>
                  <span className='item_orderblock_status active'>В обработке</span>
                  {/*<span className='item_orderblock_status ready'>Выполнен</span>*/}
                </span>
              </div>
             
            </div>
          </div>
        </div>
      </section>

          <section>
          <div className='container'>
            <div className='row'>
              <div className='col20-lg-15 col20-md-14 col20-sm-15'>
                <div>
                  {
                    Sets.map(function(item, key){
                      return(
                        <CartItem remove={true} submit={false} item={item} key={key}/>
                      )
                    })
                  }
                </div>

              </div>
              <div className='col20-lg-offset-1 col20-lg-4 col20-md-offset-1 col20-md-5  col20-sm-5'>
                <div className='profile_right'>
                  <CartRight/>
                 <Link to='cart' title='Далее' className='cart_total_button button'>
                    В корзину
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
    AddSet: state.user.AddSet,
    only_eco: state.user.only_eco
  }
}

export default connect(mapStateToProps)(ListItems)


