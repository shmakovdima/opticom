import React, { Component } from 'react'
import HeaderLight from '../components/Headers/HeaderLight'
import {Link} from 'react-router'
import '../stylus/components/today.styl';
import '../stylus/components/press.styl';

export default class Production extends Component {
  render() {
    return (
      <div className='today'>
        <HeaderLight/>
        <div className='today_head'>
          <div className='today_navigation black static' >
            <ul>
              <li><Link activeClassName='active' className='greenlighted_left about' to='today#about'><span>О компании</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left cooperation' to='cooperation'><span>Сотрудничество</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left production' to='production'><span>Производство</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left ecology' to='ecology'><span>Экология</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left social' to='social'><span>Ответственность</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left job' to='today#job'><span>Вакансии</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left press' to='press'><span>Пресс-центр</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left contact' to='contacts'><span>Контакты</span></Link></li>
            </ul>
          </div>
        </div>
          <section id='prod'>
              <div className='container'>
                <div className='row'>
                    <div className='col20-lg-15'>
                      <div className='today_white'>
                      </div>
                    </div>
                    <div className='col20-lg-19'>
                      <div className='today_sotr_image'>
                      </div>
                    </div>
                   
                    <div className='col20-lg-offset-1 col20-lg-18 col20-md-offset-1 col20-md-18'>
                     <h2>Производство</h2>
                    </div>
                    <div className='col20-lg-offset-2 col20-lg-7 col20-md-offset-2 col20-md-9'>
                      <span className='today_description'>
                        В своей работе ГК «ОптиКом» опирается на принципы корпоративной экологической ответственности. Мы стремимся к тому, чтобы наша деятельность оказывала минимальное негативное воздействие на окружающую среду.
                      </span>
                    </div>
                    <div className='col20-lg-offset-2 col20-lg-18 col20-md-offset-2 col20-md-18'>
                      <div className='today_sotr_block today_sotr_block_1'>
                        <span>OptiLine</span>
                      </div>
                      <div className='today_sotr_block today_sotr_block_1'>
                        <span>ФБВ</span>
                      </div>
                      <div className='today_sotr_block today_sotr_block_1'>
                        <span>Экопласт</span>
                      </div>
                    </div>
                  
                </div>
              </div>
          </section>
        
      </div>
    )}
}