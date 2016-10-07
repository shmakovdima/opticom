import React, { Component } from 'react'
import { connect } from 'react-redux'
//import {Link} from 'react-router'

import '../stylus/components/ecology.styl';
import HeaderLight from '../components/Headers/HeaderLight'


class EcologyItem extends Component {


  render() {

    var bg = {backgroundImage: 'url(http://' + window.location.host + '/' + 'images/home/eco_page.png)'}
    return (
      <div>
        <HeaderLight/>
        <section className='ecology_header' style={bg}>
            <div className='container'>
              <div className='row'>
               
                <div className='col20-lg-19 col20-lg-offset-1 col20-md-19 col20-md-offset-1 col20-sm-9 '>
                  <h1>База эко знаний</h1>
                </div>
              </div>
              <div className='row'>
                <div className='col20-lg-15 col20-md-15 col-sm-10 col-xs-12'>
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
                <div className='col20-lg-4 col20-lg-offset-1 col20-md-5 col20-md-offset-1 '>
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