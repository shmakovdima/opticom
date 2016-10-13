import React, { Component } from 'react'
import HeaderLight from '../components/Headers/HeaderLight'
import {Link} from 'react-router'
import '../stylus/components/today.styl';
import '../stylus/components/press.styl';

export default class Social extends Component {
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
              <li><Link activeClassName='active' className='greenlighted_left contact' to='contact'><span>Контакты</span></Link></li>
            </ul>
          </div>
        </div>

          <section id='social' className='today_social'>
              <div className='container'>
                <div className='row'>
                    <div className='col20-lg-19'>
                      <div className='today_job_image'>
                      </div>
                    </div>

                    <div className='col20-lg-offset-1 col20-lg-18 col20-md-offset-1 col20-md-18'>
                     <h2>Социальная<br/> ответственность</h2>
                    </div>
 
                    <div className='col20-lg-offset-2 col20-lg-8 col20-md-offset-2 col20-md-9'>
                      <span className='today_description'>
                        Среди главных ориентиров деятельности нашей компании — социальная политика группы «ОптиКом». Мы стремимся не только добиться максимальной эффективности в своей работе с экономической точки зрения. Мы ставим для себя цели и задачи, которые помогут сделать существование группы «ОптиКом» осмысленным и оправданным в эмоциональном и духовном плане.
                      </span>
                    </div>
                  </div>
                  <div className='row today_social_row'>
                    <div className='col20-lg-8 col20-lg-offset-1 col-md-6 col-sm-6 col-xs-12'>
                      <div className='press_projects_item'>
                        <div className='press_projects_overflow'>
                          <Link to='press' title='Благотворительный фонд «Я Есть!»'>
                            <img alt='Благотворительный фонд «Я Есть!»' src='images/press/I.png'/>
                            <span className='underlined'>Благотворительный фонд</span>
                            <br/>
                            <span className='underlined'>«Я Есть!»</span>
                            
                          </Link>
                          <p className='today_social_p'>Мы принимаем активное участие в благотворительных акциях наших друзей — БФ «Я есть!» Благотворительный фонд Ксении Алферовой и Егора Бероева поддержки детей с особенностями развития "Я есть!" регулярно организует мероприятия, помогающие воспитанникам специализированных учреждений познавать окружающий мир и становиться полноценными членами современного общества.</p>
                          <Link className='today_social_href greenlighted' to='press'><span>Читать в блоге</span></Link>
                          </div>
                        </div>
                    </div>

                    <div className='col20-lg-8 col20-lg-offset-1 col-md-6 col-sm-6 col-xs-12'>
                      <div className='press_projects_item'>
                        <div className='press_projects_overflow'>
                          <Link to='press' title='Детский дом-интернат №8'>
                            <img alt='Детский дом-интернат №8' src='images/press/moscow.png'/>
                            <span className='underlined'>Детский дом-</span>
                            <br/>
                            <span className='underlined'>интернат №8</span>
                            
                          </Link>
                          <p className='today_social_p'>Наши маленькие друзья — воспитанники детского дома-интерната №8.Добрые и удивительные дети с особенностями развития, так горячо любимые нами, нуждаются во внимании и заботе. Главная проблема воспитанников ДДИ №8 - это отсутсвие контакта со внешним миром.</p>
                          <Link className='today_social_href greenlighted' to='press'><span>Читать в блоге</span></Link>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div className='row today_social_row'>
                    <div className='col20-lg-8 col20-lg-offset-1 col-md-6 col-sm-6 col-xs-12'>
                      <div className='press_projects_item'>
                        <div className='press_projects_overflow'>
                          <Link to='press' title='Благотворительный фонд «Детский мир»'>
                            <img alt='Благотворительный фонд «Детский мир»' src='images/press/childworld.png'/>
                            <span className='underlined'>Благотворительный фонд </span>
                            <br/>
                            <span className='underlined'>«Детский мир»</span>
                            
                          </Link>
                          <p className='today_social_p'>Для нас стало традицией участие в предновогодней акции «Подари новогоднее чудо», организатором которой выступает благотворительный фонд «Детский мир». Цель мероприятия — собрать подарки для нуждающихся детей более чем из 350 социальных учреждений по всей России, многодетных семей, детей-инвалидов.</p>
                          <Link className='today_social_href greenlighted' to='press'><span>Читать в блоге</span></Link>
                          </div>
                        </div>
                    </div>

                    <div className='col20-lg-8 col20-lg-offset-1 col-md-6 col-sm-6 col-xs-12'>
                      <div className='press_projects_item'>
                        <div className='press_projects_overflow'>
                          <Link to='press' title='Дом трудолюбия «НОЙ»'>
                            <img alt='Дом трудолюбия «НОЙ»' src='images/press/noi.png'/>
                            <span className='underlined'>Дом трудолюбия </span>
                            <br/>
                            <span className='underlined'>«НОЙ»</span>
                            
                          </Link>
                          <p className='today_social_p'>Для тех, кто оказался заложником обстоятельств и по тем или иным причинам остался без крыши над головой, в Москве есть межрегиональная общественная организация социальной адаптации лиц без определенного места жительства «ДОМ ТРУДОЛЮБИЯ «НОЙ» (ДОМ «НОЙ»).ГК «ОптиКом» оказывает посильный вклад в существование Дома.</p>
                          <Link className='today_social_href greenlighted' to='press'><span>Читать в блоге</span></Link>
                          </div>
                        </div>
                    </div>
                  </div>

                  <div className='row today_social_row'>
                    <div className='col20-lg-8 col20-lg-offset-1 col-md-6 col-sm-6 col-xs-12'>
                      <div className='press_projects_item'>
                        <div className='press_projects_overflow'>
                          <Link to='press' title='Школа-интернат с.Широки Буерак'>
                            <img alt='Школа-интернат с.Широки Буерак' src='images/press/internat.png'/>
                            <span className='underlined'>Школа-интернат с.</span>
                            <br/>
                            <span className='underlined'> Широки Буерак</span>

                          </Link>
                          <p className='today_social_p'>Одними из наших горячо любимых друзей являются воспитанники ГКОУ «Специальная (коррекционная) школа-интернат VIII вида с. Ш.Буерак» - дети-сироты и дети, оставшиеся без попечения родителей, с ограниченными возможностями здоровья. ГК «ОптиКом» регулярно оказывает посильную помощь в содержании учреждения, а также проводит для воспитанников праздничные и спортивные мероприятия, позволяющие им познавать окружающий мир и таким образом бороться с недоверием к "внешнему миру".</p>
                          <Link className='today_social_href greenlighted' to='press'><span>Читать в блоге</span></Link>
                          </div>
                        </div>
                    </div>

                    <div className='col20-lg-9 col20-lg-offset-1 col-md-6 col-sm-6 col-xs-12'>
                      <div className='press_projects_item'>
                        <div className='press_projects_overflow'>
                          <Link to='press' title='Музей предпринимателей, меценатов и благотворителей'>
                            <img alt='Музей предпринимателей, меценатов и благотворителей' src='images/press/museum.png'/>
                            <span className='underlined'>Музей предпринимателей,</span>
                            <br/>
                            <span className='underlined'>меценатов и</span>
                            <br/>
                            <span className='underlined'>благотворителей</span>
                            
                          </Link>
                          <p className='today_social_p'>Среди наших друзей — «Музей предпринимателей, меценатов и благотворителей», представляющий особый интерес для современного общества. Однако, музей нуждается в поддержке и содействии.</p>
                          <Link className='today_social_href greenlighted' to='press'><span>Читать в блоге</span></Link>
                          </div>
                        </div>
                    </div>
                  </div>


              </div>
          </section>

        
      </div>
    )}
}