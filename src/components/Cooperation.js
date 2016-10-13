import React, { Component } from 'react'
import HeaderLight from '../components/Headers/HeaderLight'
import {Link} from 'react-router'
import '../stylus/components/today.styl';
import '../stylus/components/press.styl';
import ContactForm from './ContactForm'
import { Accordion, Panel } from 'react-bootstrap'

export default class Cooperation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lgShow: false
     
    }
  }


  lgShow() {
    this.setState({lgShow: !this.state.lgShow})
  }

  render() {

    

    return (
      <div className='today'>
        <HeaderLight/>
        <div className='today_head'>
          <div className='today_navigation black static cooperation' >
            <ul>
              <li><Link activeClassName='active' className='greenlighted_left about' to='today#about'><span>О компании</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left cooperation' to='cooperation'><span>Сотрудничество</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left production' to='production'><span>Производство</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left ecology' to='ecology'><span>Экология</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left social' to='social'><span>Ответственность</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left job' to='today#job'><span>Вакансии</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left press' to='press'><span>Пресс-центр</span></Link></li>
              <li><Link activeClassName='active' className='greenlighted_left contact' to='contact'><span>Контакты</span></Link></li>
            </ul>
          </div>
        </div>

          <section id = 'contact' className='today_cooperation'>
              <div className='container'>
                <div className='row'>

                    <div className='col-xs-12'>
                      <div className='today_cooperation_topimage'></div>
                    </div>
                    <div className='col20-lg-offset-1 col20-lg-18 col20-md-offset-1 col20-md-18'>
                     <h1>Сотрудничество</h1>
                    </div>



                    <div className='col20-lg-offset-2 col20-lg-9 col20-md-offset-2 col20-md-9'>
                      <span className='today_description cooperation'>
                        Группа компаний «ОптиКом» — лидирующий оператор российского рынка оптовых поставок упаковочных и расходных материалов, товаров хозяйственно-бытового назначения. Компания предоставляет высококлассный сервис, обеспечивая комплексное обслуживание своих клиентов во всех регионах России и странах СНГ.
                      </span>
                    </div>

                    <div className='col20-lg-offset-2 col20-lg-11 col20-md-offset-2 col20-md-12'>
                      <h2>Наши преимущества для клиентов</h2>

                      <ul className='ul'>
                        <li>
                          Большой ассортимент: свыше 16000 наименований в 20 товарных категориях, складируемых в комплексах общей площадью 23000 м²

                        </li>
                        <li>
                          Индивидуальный подход: собственное производство и и эксклюзивные поставки продукции ведущих отечественных и зарубежных производителей под заказ.
                        
                        </li>
                        <li>
                          Доставка по Москве на следующий день: автопарк из 110 единиц транспорта различной тоннажности ежедневно развозит 1200 заказов.
                        </li>
                        <li>
                          Дистрибьюторская сеть в 83 регионах РФ, филиалы компании в Санкт-Петербурге и Нижнем Новгороде.
                        </li>
                        <li>
                          Удобная система расчетов: наличная и безналичная оплата, отсрочка платежа.
                        </li>
                      </ul>
                    </div>

                  </div>
                  <div className='row'>
                    <div className='col20-lg-offset-3 col20-lg-17 col20-md-offset-3 col20-md-17'>
                      <div className='today_white'>
                      </div>
                    </div>
                    <div className='col20-lg-offset-1 col20-lg-10 col20-lg-offset-1 col20-md-6'>
                      <h2 className='second'>С нами выгодно!</h2>
                      <div className='col20-lg-offset-2 today_cooperation_pblock'>
                        <p>Наши специалисты работают в сфере государственных заказов уже более 5 лет. Они помогут Вам разобраться в технических характеристиках и описании товаров, представленных в нашем каталоге. Все специалисты прошли обучение на базе нового Федерального Закона «О контрактной системе в сфере закупов товаров, работ, услуг для обсепечения государственных и муниципальных нужд» №44 ФЗ от 5 апреля 2013 года.</p>
                        <p>Мы заинтересованы в новых партнёрах и приглашаем войти в состав нашей коммерческой системы всех профессионалов (в том числе ИП), предпочитающих долговременные и плодотворные отношения. Гарантируем равноправное сотрудничество партнёрам с любым торговым оборотом.</p>
                      </div>
                    </div>

                    <div className='pull-right col20-lg-6 col20-md-6'>
                      <div className='today_contactform_panel'>
                        <Accordion defaultActiveKey={0}>
                          <Panel header='Госзаказчикам' eventKey={0} >
                            <div className='today_contactform_block'>
                              <a href='mailto:tender@opti-com.ru' className='green_underline'>tender@opti-com.ru</a>
                              <a href='tel:+7-495-980-06-48'>+7-495-980-06-48</a>
                              
                            </div>

                            <div className='today_contactform_block'>
                              <span>Мы предлагаем быстрое формирование коммерческих предложений по интересующему Вас товару и индивидуальный подход.</span>
                            </div>

                            <div className='today_contactform_block'>
                            
                              <span>Наша Группа Компаний является аккредитованным поставщиком на «портале поставщиков города Москвы».</span>
                            </div>
                            

                          </Panel>
                          <Panel header='Дистрибьюторам' eventKey={1} >

                          </Panel>

                          <Panel header='Поставщикам' eventKey={2}>
                           
                          </Panel>

                        </Accordion>
                      </div>
                    </div>


                    <div className='col20-lg-offset-1 col20-lg-10 col20-lg-offset-1 col20-md-6'>
                      <h2 >Одним из основополагающих принципов группы был и остаётся постулат «Клиент — наше всё!»</h2>
                      <div className='col20-lg-offset-2 today_cooperation_pblock'>
                        <p>Этот принцип реализуется в практике поддержки партнёров, а именно:</p>         
                        <ul className='ul second'>
                          <li>
                            в доступности всего ассортимента;
                          </li>
                          <li>
                            через конкурентоспособность представляемых закупочных цен;
                          </li>

                          <li>
                            благодаря гибкости в формировании коммерческих и сопутствующих условий сотрудничества;
                          </li>

                          <li>
                            путем полной информационно- рекламной поддержки (POSm&POPm, торговое оборудование, презентационные материалы и другое);
                          </li>

                          <li>
                            посредством инженерного сопровождения.
                          </li>

                        </ul>

                      </div>
                    </div>
                    <div className='col-xs-12'>
                      <div className='today_cooperation_bottomimage'></div>
                    </div>
                    <div className='today_cooperation_last col20-lg-offset-1 col20-lg-14 col20-md-offset-2 col20-md-13'>
                      <h2 className='second'>
                        Приглашаем партнеров
                      </h2>
                      <div className='col20-lg-offset-1'>
                        <span className='today_cooperation_pb'>
                          Мы заинтересованы в долгосрочных контактах с производителями и поставщиками следующих категорий товаров:
                        </span>
                        <div className='row today_cooperation_ul'>
                          <div className='col20-sm-8'>
                            <ul className='ul'>
                              <li>Барных аксессуаров и товаров для сервировки</li>
                              <li>Гигиенических товаров</li>
                              <li>Бытовой и профессиональной химии</li>
                              <li>Контейнеров пищевых одноразовых</li>
                              <li>Лотков пищевых</li>
                              <li>Одноразовой посуды</li>
                              <li>Товаров для гостиниц, отелей и бань</li>
                              <li>Спецодежды, обуви и средств защиты</li>

                            </ul>
                          </div>
                          <div className='col20-sm-8 col20-sm-offset-2'>
                            <ul className='ul'>
                              <li>Пакетов и сумок</li>
                              <li>Канцелярских товаров</li>
                              <li>Продукции с логотипом заказчика</li>
                              <li>Принадлежностей для касс и торговли</li>
                              <li>Упаковочных материалов</li>
                              <li>Уборочного инвентаря и оборудования</li>
                              <li>Кухонных принадлежностей</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                    </div>


                    <div className=' col20-lg-4 col-md-4'>

                      <a className='today_cooperation_phone' href='tel:+7-495-980-06-48'>+7-495-980-06-48</a>
                      <button className='close_modal button pull-right' onClick={::this.lgShow}>Написать нам</button>
                    </div>

                  </div>

              </div>
          </section>
          <ContactForm show={this.state.lgShow} onHide={this.lgShow}/>
        
      </div>
    )}
}