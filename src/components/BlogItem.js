import React, { Component } from 'react'
import { connect } from 'react-redux'
//import {Link} from 'react-router'

import '../stylus/components/ecology.styl';
import HeaderDark from '../components/Headers/HeaderDark'


class EcologyItem extends Component {


  render() {

    var bg = {backgroundImage: 'url(http://' + window.location.host + '/' + 'images/press/eco_page.png)'}
    return (
      <div>
        
        <section className='ecology_header' style={bg}>
            <HeaderDark/>
            <div className='container'>
              <div className='row'>
               
               
                <div className='col20-lg-14 col20-lg-offset-3 col20-md-14 col20-md-offset-3 col20-sm-20 col20-xs-20'>


                  <ol className='breadcrumb'>
                    <li className='breadcrumb-item'>
                      <a>База эко-знаний</a>
                    </li>
                    <li className='breadcrumb-item'>
                      <span>Новости</span>
                    </li>
                      
                    
                  </ol>

                  <h1>Экологическая маркировка и упаковка: критерии, ограничения, возможности</h1>
                </div>
              </div>
            </div>
          </section>
          <section>
            <div className='container'>
              <div className='row'>
                <div className='col20-lg-12 col20-lg-offset-3 col20-md-12 col20-md-offset-3 col20-sm-20 col20-xs-20 ecology_content'>
                  <p>
                  20 июня компания «ОптиКом» приняла участие в обсуждении экологической ответственности бизнеса на молодежной образовательной конференции в Санкт-Петербурге «Экологическая ответственность бизнеса: состояние и перспективы».
                  </p>
                  <p>Никита Малякин, руководитель филиала «ОптиКом» в Санкт-Петербурге, представил студентам ведущих петербургских ВУЗов и ССУЗов, молодым специалистам городских компаний и предприятий, активистам общественных организаций и движений, представителям бизнес-сообществ, органов надзора и исполнительной власти инициативы нашей компании в сфере ресурсосбережения и ответственного подхода в ведении бизнеса.
                  </p>
                  <ul>
                    <li>
                        в доступности всего ассортимента;
                    </li>
                    <li>
                       путем полной информационно- рекламной поддержки (POSm&POPm, торговое оборудование, презентационные материалы и другое);
                    </li>

                  </ul>

                </div>
                <div className='col20-lg-4 col20-lg-offset-1 col20-md-4 col20-md-offset-1 col20-sm-20 col20-xs-20'>
                  <div className='ecology_category'>
                    <span className='active greenlighted_left'>Все</span>
                    <a className='greenlighted_left'>Статьи</a>
                    <a className='greenlighted_left'>Уроки</a>
                    <a className='greenlighted_left'>Новости</a>
                    <a className='greenlighted_left'>Категория 1</a>
                  </div>
                  <div className='ecology_tegs'>
                    <h3>Теги</h3>
                    <div>
                      <a className='green_underline'>Экология</a>
                      <a className='green_underline'>Уборка</a>
                      <a className='green_underline'>HoReCa</a>
                      <a className='green_underline'>Отели</a>
                      <a className='green_underline'>Офис</a>
                      <a className='green_underline'>Награды</a>


                                         
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
    windowWidth: state.pageData.windowWidth
  }
}


export default connect(mapStateToProps)(EcologyItem)