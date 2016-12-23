import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'





class PressKit extends Component {

  render() {

    var Data = this.props.PressKit

    return (
      <div className='press_projects'>
        <section className='profile_sets_header'>
            <div className='container'>
              <div className='row'>
                <div className='profile_sets_white'></div>
                <div className='col20-lg-9 col20-lg-offset-1 col20-md-9 col20-md-offset-1 col20-sm-20'>
                  <h1>Преcc-центр</h1>
                </div>
              </div>
              <div className='row press_links'>
                <div className='col20-lg-19 col20-lg-offset-1 col20-md-19 col20-md-offset-1 col20-sm-20 '>
                  <Link to='/press/news' activeClassName='active'>Новости компании</Link>
                  <Link to='/press/projects' activeClassName='active'>Наши проекты</Link>
                  <Link to='/press/kit' activeClassName='active'>Пресс-кит</Link>
                  <Link to='/press/smi' activeClassName='active'>СМИ о нас</Link>
                  <Link to='/press/photo' activeClassName='active'>Фото-портфолио</Link>                               
                </div>
              </div>
            </div>
          </section>
          <section> 
            <div className='container'>
              <div className='row'>
                <div className='col20-lg-9 col20-lg-offset-1 col-md-5 col-sm-5 col-xs-12'>
                  <p className='press_kit_p'> «ОптиКом» - лидирующий оператор российского рынка оптовых поставок упаковочных и расходных материалов, товаров хозяйственно-бытового назначения. Компания предоставляет высококлассный сервис, обеспечивая комплексное обслуживание своих клиентов во всех регионах России и странах СНГ в таких направлениях как дистрибуция, логистика, производство, оптовая торговля.
                  </p>
                </div>
                <div className='col20-lg-9 col20-lg-offset-1 col-md-6 col-md-offset-1 col-sm-6 col-sm-offset-1 col-xs-12'>
                {
                  Data.map(function(item){

                    return(
                      <Link className='press_kit_link' title={item.title} to={item.link}>
                        <span>
                          {item.title}
                        </span>
                      </Link>
                    )
                  })

                }
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
    windowWidth: state.pageData.windowWidth,
    PressKit: state.pageData.PressKit
  }
}


export default connect(mapStateToProps)(PressKit)