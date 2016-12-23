import React, { Component } from 'react'
import HeaderLight from '../components/Headers/HeaderLight'
import {Link} from 'react-router'

import '../stylus/components/today.styl';
import '../stylus/components/press.styl';


export default class Future extends Component {
  render() {
    return (
    <div>
      <HeaderLight/>
      <div className='press_projects press_future'>
          <section className='profile_sets_header'>
              <div className='container'>
                <div className='row'>
                  <div className='profile_sets_white'></div>
                  <div className='col20-lg-12 col20-lg-offset-1 col20-md-12 col20-md-offset-1 col20-sm-20 '>
                    <h1>Чистое будущее</h1>
                  </div>
                </div>
               
              </div>
            </section>
            <section> 
              <div className='container'>
                <div className='row'>



                  <div className='col20-lg-9 col20-lg-offset-1 col-md-5 col-sm-12 col-xs-12'>
                    <p className='press_kit_p'> «ОптиКом» - лидирующий оператор российского рынка оптовых поставок упаковочных и расходных материалов, товаров хозяйственно-бытового назначения. Компания предоставляет высококлассный сервис, обеспечивая комплексное обслуживание своих клиентов во всех регионах России и странах СНГ в таких направлениях как дистрибуция, логистика, производство, оптовая торговля.
                    </p>
                  </div>
                  <div className='col20-lg-9 col20-lg-offset-1 col-md-6 col-md-offset-1 col-sm-12  col-xs-12'>
     
                        <Link className='press_kit_link' title='Будущее компании «ОптиКом»' to=''>
                          <span>
                            Будущее компании «ОптиКом»
                          </span>
                        </Link>
        
                  </div>
                </div>
              </div>        
            </section>
          </div>
        </div>
    


    )}
}