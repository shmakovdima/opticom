import React, { Component } from 'react'
import HeaderLight from '../components/Headers/HeaderLight'
import {Link} from 'react-router'
import '../stylus/components/today.styl';
import '../stylus/components/press.styl';
import ContactForm from './ContactForm'
import { Accordion, Panel } from 'react-bootstrap'

export default class Contacts extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lgShow: false,
      curCart: 0
    }
  }

  curMap(key) {
    alert(key)
  }

  lgShow() {
    this.setState({lgShow: !this.state.lgShow})
  }

  render() {
    return (
      <div className='today'>
        <HeaderLight/>
        <div className='today_head'>
          <div className='today_navigation black static' >
            <ul>
              <li><Link activeClassName='active' className='greenlighted_left about' to='today#about'><span>О компании</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left cooperation' to='sotr'><span>Сотрудничество</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left production' to='production'><span>Производство</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left ecology' to='ecology'><span>Экология</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left social' to='social'><span>Ответственность</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left job' to='today#job'><span>Вакансии</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left press' to='press'><span>Пресс-центр</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left contact' to='contact'><span>Контакты</span></Link></li>
            </ul>
          </div>
        </div>

          <section id = 'contact' className='today_contact'>
              <div className='container'>
                <div className='row'>
                    <div className='col20-lg-15 col20-lg-offset-3'>
                      <div className='today_white'>
                      </div>
                    </div>
                    <div className='col20-lg-offset-1 col20-lg-18 col20-md-offset-1 col20-md-18'>
                     <h2>Контактная<br/> информация</h2>
                    </div>
                  
                    <div className='col20-lg-offset-1 col20-lg-6 col20-md-offset-2 col20-md-8'>
                      <a className='today_contactform_phone' href='tel:+7-495-980-06-48'>+7-495-980-06-48</a>
                      <span className='today_contactform_pr'>PR-служба</span>
                      <a className='today_contactform_phone' href='tel:+7-495-911-20-41'>+7-495-911-20-41</a>
                      <button className='close_modal button' onClick={::this.lgShow}>Написать нам</button>
                    
                      <div className='today_contactform_panel'>
                        <Accordion defaultActiveKey={0}>
                          <Panel header='Москва и область' eventKey={0} >
                            <div className='today_contactform_block'>
                              <h3>Центральный офис</h3>
                              <span>Москва, Берзарина 36, стр. 3</span>
                              <a href='tel:+7-495-980-06-48'>+7-495-980-06-48</a>
                              <a href='mailto:info@opti-com.ru' className='green_underline'>info@opti-com.ru</a>
                            </div>
                            <div className='today_contactform_block'>
                              <h3>Склад по Москве и МО</h3>
                              <span>Московская область,<br/>
                              Истринский р-н, д. Лешково, к. 5</span>
                            </div>

                            <div className='today_contactform_block'>
                              <h3>Склад по Москве и МО</h3>
                              <span>Московская область,<br/>
                              Истринский р-н, д. Лешково, к. 3</span>
                            </div>
                            

                          </Panel>
                          <Panel header='Нижний Новгород' eventKey={1}>
 
                            <div className='today_contactform_block'>
                              <h3>Центральный офис</h3>
                              <span>Москва, Берзарина 36, стр. 3</span>
                              <a href='tel:+7-495-980-06-48'>+7-495-980-06-48</a>
                              <a href='mailto:info@opti-com.ru' className='green_underline'>info@opti-com.ru</a>
                            </div>
                            <div className='today_contactform_block'>
                              <h3>Склад по Москве и МО</h3>
                              <span>Московская область,<br/>
                              Истринский р-н, д. Лешково, к. 5</span>
                            </div>

                            <div className='today_contactform_block'>
                              <h3>Склад по Москве и МО</h3>
                              <span>Московская область,<br/>
                              Истринский р-н, д. Лешково, к. 3</span>
                            </div>                        


                          </Panel>

                          <Panel header='Санкт-Петербург' eventKey={2}>
                            <div className='today_contactform_block'>
                              <h3>Центральный офис</h3>
                              <span>Москва, Берзарина 36, стр. 3</span>
                              <a href='tel:+7-495-980-06-48'>+7-495-980-06-48</a>
                              <a href='mailto:info@opti-com.ru' className='green_underline'>info@opti-com.ru</a>
                            </div>
                            <div className='today_contactform_block'>
                              <h3>Склад по Москве и МО</h3>
                              <span>Московская область,<br/>
                              Истринский р-н, д. Лешково, к. 5</span>
                            </div>

                            <div className='today_contactform_block'>
                              <h3>Склад по Москве и МО</h3>
                              <span>Московская область,<br/>
                              Истринский р-н, д. Лешково, к. 3</span>
                            </div>

                          </Panel>

                        </Accordion>
                      </div>
                    </div>
                  </div>

              </div>
          </section>
          <ContactForm show={this.state.lgShow} onHide={this.lgShow}/>
        
      </div>
    )}
}