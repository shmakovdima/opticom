import React, { Component } from 'react'
import HeaderLight from '../components/Headers/HeaderLight'
import {Link} from 'react-router'

import '../stylus/components/today.styl';
import '../stylus/components/press.styl';




export default class Static extends Component {
  render() {
    return (
      <div className='today'>
        <HeaderLight/>
        <div className='today_head'>
          <div className='today_navigation black static' >
            <ul>
              <li><Link activeClassName='active' className='greenlighted_left about' to='today#about'><span>О компании</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left sotr' to='cooperation'><span>Сотрудничество</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left prod' to='production'><span>Производство</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left ecology' to='ecology'><span>Экология</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left social' to='social'><span>Ответственность</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left job' to='today#job'><span>Вакансии</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left press' to='press'><span>Пресс-центр</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left contact' to='contact'><span>Контакты</span></Link></li>
            </ul>
          </div>
        </div>
            <section id='ecology'>
              <div className='container'>
                <div className='row'>
                    <div className='col20-lg-15'>
                      <div className='today_white'>
                      </div>
                    </div>
                    <div className='col20-lg-20'>
                      <div className='today_ecology_image'>
                      </div>
                    </div>
                   
                    <div className='col20-lg-offset-1 col20-lg-18 col20-md-offset-1 col20-md-18'>
                     <h2>Экология</h2>
                    </div>
                    <div className='col20-lg-offset-2 col20-lg-9 col20-md-offset-2 col20-md-10'>
                      <span className='today_description'>
                        В своей работе ГК «ОптиКом» опирается на принципы корпоративной экологической ответственности. Мы стремимся к тому, чтобы наша деятельность оказывала минимальное негативное воздействие на окружающую среду.
                      </span>
                    </div>
                    <div className='col20-lg-offset-2 col20-lg-16 col20-md-offset-2 col20-md-18'>

                      <div className='today_ecology_block today_ecology_block_1'>
                        <Link >
                          <span className='green_underline'>Экопрограммы</span>
                        </Link>
                      </div>

                      <div className='today_ecology_block today_ecology_block_2'>
                        <Link >
                          <span className='green_underline'>Зелёный офис</span>
                        </Link>
                      </div>

                      <div className='today_ecology_block today_ecology_block_3'>
                        <Link >
                          <span className='green_underline'>Зелёные товары</span>
                        </Link>
                      </div>

                      <div className='today_ecology_block today_ecology_block_4'>
                        <Link >
                          <span className='green_underline'>База Эко Знаний</span>
                        </Link>
                      </div>

                      <div className='today_ecology_block today_ecology_block_5'>
                        <Link >
                          <span className='green_underline'>Зеленая гостиница</span>
                        </Link>
                      </div>

                      <div className='today_ecology_block today_ecology_block_6'>
                        <Link >
                          <span className='green_underline'>Зеленый магазин</span>
                        </Link>
                      </div>

                      <div className='today_ecology_block today_ecology_block_7'>
                        <Link >
                          <span className='green_underline'>Экспертные<br/> материалы</span>
                        </Link>
                      </div>

                      <div className='today_ecology_block today_ecology_block_8'>
                        <Link >
                          <span className='green_underline'>Кейсы: зеленый<br/> бизнес</span>
                        </Link>
                      </div>
                      

                    </div>
                  
                </div>
              </div>
          </section>
        
      </div>
    )}
}