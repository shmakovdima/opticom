import React, { Component } from 'react'
import {Link} from 'react-router'

export default class AllIsReady extends Component {
  render(){
    return(
      <section className='catalog_preferences'>
        <div className='container'>
          <div className='row'>
            <h2 className='col20-lg-offset-1'>Все уже готово</h2>
            <span><Link to='catalog/readyset'></Link></span>


            <div className='catalog_preferences_item catalog_preferences_item_1 col20-lg-4 col20-md-4 col-sm-6'>
              <div></div>
              <h3>Подбор ассортимента</h3>
              <p>Адаптивный и большой ассортимент товаров собственного производства и от ведущих производителей</p>
            </div>
            <div className='catalog_preferences_item catalog_preferences_item_2 col20-lg-4 col20-md-4 col-sm-6'>
              <div></div>
              <h3>Обучение</h3>
              <p>Обучающие программы по разным направлениям профессиональной уборки</p>
            </div>
            <div className='catalog_preferences_item catalog_preferences_item_3 col20-lg-4 col20-md-4 col-sm-6'>
              <div></div>
              <h3>Доставка</h3>
              <p>Наличие и доставка в кратчайшие сроки, благодаря собственному логистическому хабу</p>
            </div>
            <div className='catalog_preferences_item catalog_preferences_item_4 col20-lg-4 col20-md-4 col-sm-6'>
              <div></div>
              <h3>Сервис</h3>
              <p>Отсрочка платежа, удобный личный кабинет, персональный менеджер</p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}