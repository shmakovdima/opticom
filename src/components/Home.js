import React, { Component } from 'react'
import HeaderDark from '../components/Headers/HeaderDark'
import AllIsReady from './SubItems/Catalog/AllIsReady'
import Interesed from './SubItems/Catalog/Interesed'
import CategorySlider from './SubItems/CategorySlider'
import {connect } from 'react-redux'
import Footer from './Footer'
import {Link} from 'react-router'
import $ from 'jquery'
import '../stylus/components/home.styl';
import '../stylus/components/planet.styl';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breakpoint: 900
    }
  }

  componentDidMount() {
    $('.home_header_down').addClass('active')
  }

  scrollTop() {
    var windowTop= this.props.windowTop
    var breakpoint = this.state.breakpoint

    if (windowTop < (breakpoint/2)) {
      $('html, body').animate({
          scrollTop: breakpoint/2
        }, 1000)
    }else{
      if (windowTop < breakpoint) {
        $('html, body').animate({
            scrollTop: breakpoint
          }, 1000)
        }else{
          $('html, body').animate({
            scrollTop: breakpoint + $('.home_header').height() - 100
          }, 1000)
        }
    }
  }

  render() {

    // init positions

    //default > 1300px

    const windowWidth = this.props.windowWidth

    var text1init = {top: 280} 
    

    var suninit = { top: 500, right: 139}
    

    var mooninit = {top: 200, left: 290}
    

    var text2init = {top: 700, opacity: 0.3 }
    

    var text3init = {top: 700, opacity: 0.3 }
    
    var planetclass = 'col20-lg-18 col20-lg-offset-1'


    if (windowWidth<1300) {
      suninit = { top: 500, right: 100}
      planetclass = 'col20-lg-20'
    }

    var text1 = text1init
    var sun = suninit
    var moon = mooninit
    var text2 = text2init
    var text3 = text3init
    
    var breakpoint = (this.state.breakpoint) ? this.state.breakpoint : 800

    var cardlenght = breakpoint / 30
    var homeHeight = $('.home_header').height()
    if (homeHeight == null) homeHeight = 1000

    //console.log(homeHeight)

    var scrollTop = this.props.windowTop
    //console.log(scrollTop)

    var curCard =  Math.round(scrollTop / cardlenght)
    //console.log('curCard ' + curCard)


    if (curCard > 29) curCard = 29

    var bgImage = {backgroundPosition: 'center '+ '-'+ curCard * 450 + 'px'}

  
    var topBody = {top: breakpoint + homeHeight}
    var topHome
    var topSection = {top: 100}


    if (scrollTop < breakpoint) {

      var halfstep = (scrollTop/breakpoint)*2;
      if  (halfstep>1) halfstep = 1;
      //console.log('halfstep' + halfstep);

      var fullstep = ((scrollTop-breakpoint/2)/(breakpoint/2))

      var fullrealstep = scrollTop/breakpoint

      console.log('fullstep' + fullstep);

      
      topHome = {top: 'inherit'}
      topSection = {top: 100}

      text1 = {top: text1init.top - 120 * fullrealstep}

      if (scrollTop <= (breakpoint/2)) {
        moon = {
          top: mooninit.top -  40 * halfstep,
          left: mooninit.left + 30 * halfstep
        }

        sun = {
          top: suninit.top - 180 * halfstep,
          right: suninit.right - 10 * halfstep
        }

        text2 = {
          opacity: text2init.opacity + 0.7 * halfstep,
          top: text2init.top - 220 * halfstep
        } 

        text3 = {
          top: text3init.top - 60 * halfstep,
          opacity: text3init.opacity + 0.7 * fullrealstep
        } 

      }else{
          moon = {
            top: mooninit.top -  40 - 30 * fullstep ,
            left: mooninit.left + 30 + 40 * fullstep
          }
          sun = {
            top: suninit.top - 180 - 120 * fullstep,
            right: suninit.right - 10 + 70 * fullstep        
          }
          text3 = {
            top: text3init.top - 60 - 140 * fullstep,
            opacity: text2init.opacity + 0.7 * fullrealstep
          } 

          text2 = {
            opacity: 1,
            top: text2init.top - 220 - 120 * fullstep
          } 
      }

      if (scrollTop >= (breakpoint - breakpoint/10)) {

        var step = (breakpoint - breakpoint/10)

        topSection = {
          top: 100 - 150 * ((scrollTop-step)/(breakpoint-step))
        }
      }

    }else{

      topSection = {
        top: ((scrollTop-breakpoint)<200) ? -50 + 50 *(scrollTop-breakpoint)/200  : 0
      }


      text2 = {
        opacity: 1,
        top: text2init.top - 340
      }

      moon = {
        top: mooninit.top - 70,
        left: mooninit.left + 70
      }

      text3 = {
        top: text3init - 360,
        opacity: 1
      }

      sun = {
        top: suninit.top - 300,
        right: suninit.right + 60
      }

      text1= {top: 160}
      topHome = { top: -(scrollTop - breakpoint)}
    }

    return (
      <div className='home'>
        <section style={topHome} className='home_header'>
          <HeaderDark/>
          <div className  = 'home_planet' style={bgImage}>
          </div>
    
          <div className = 'container'>
            <div className='home_header_moon' style={moon}>
            </div>
            <div className='home_header_sun' style={sun}>
            </div>
            <div className='home_header_down' onClick = {::this.scrollTop}>
            </div>
            <div className='row'>
              <div className={planetclass}>
                <div className='col20-lg-6 home_header_text' style={text1}>
                  <h2>Предлагаем
                    <br/>
                    и доставляем</h2>
                    <p> 
                    Являемся дистрибьютором, производителем 
                    и логистическим оператором 
                    продукции обеспечения хозяйственной
                    деятельности компаний
                    </p>
                </div>
                <div className='col20-lg-6 col-md-7 home_header_text home_header_text_2 pull-right' style={text2}>
                  <h2>Исследуем
                    <br/>
                    и производим</h2>
                    <p> 
                    Обьединяем в единую структуру научный центр разработки, заготовителей сырья, производственные и перерабатывающие предприятия
                    </p>
                </div>
                <div className='home_header_text text3' style={text3}>
                  <h2>Сохраняем
                    <br/>и сберегаем</h2>
                    <p> 
                    Философия нашего бизнеса продиктована самой природой 
                    и ответственностью 
                    перед людьми
                    </p>
                </div>
              </div>
            </div>
          </div>
          
        </section>

        <div style={topBody} className='home_main'>
          <section className='home_preferences' style={topSection}> 
            <div className='container'>
              <div className='row'>
                <div className='col20-lg-9 col20-md-10 col20-sm-10 home_preferences_clients'>
                  <div className='home_preferences_clients_image'></div>
                  <span className='home_preferences_title greenlighted'>КЛИЕНТЫ</span>
                  <span className='home_preferences_clients_6500'>6 500</span>
                  <span className='home_preferences_clients_adds'>довольных клиентов развивают свой бизнес с Оптиком</span>
                  <span className='home_preferences_clients_riteil'>

                  
                    <span>сетевой ретейл</span>    
                    <span className='adding'>РОЗНИЦА</span>
                    <span className='adding'>HORECA</span>
                    <br/>
                    <span>АГРОКОМПЛЕКСЫ</span>
                    <span className='adding'>ГОС УЧРЕЖДЕНИЯ</span>
                    <br/>
                    <span> БИЗНЕС ЦЕНТРЫ</span>          
                  </span>
                </div>
                <div className='col20-lg-5 col20-md-8 col20-lg-offset-0 col20-md-offset-2 col20-sm-10 col20-sm-offset-2 col20-sm-8 home_preferences_base'>
                  <span className='home_preferences_title '>
                    <span>База <br/> экологических</span>
                    <br/>
                    <span className='greenlighted'>знаний</span>
                  </span>
                  <div className='home_preferences_base_image'></div>
                  <p>Мы готовы поделиться своим опытом в производстве
                    и использовании экономичной 
                    продукции</p>
                </div>
                <div className='col20-lg-6 col20-md-8 col20-sm-10 home_preferences_ecology'>
                  <span className=' home_preferences_title greenlighted'>ЭКОЛОГИЯ</span>
                  <p>ГК Оптиком - обладатель международных сертификатов в области экологии и бережного производства</p>
                  <div className='home_preferences_ecology_images pull-right'>
                    <img className='pull-right' src='images/home/ecology_3.png'/>
                    <img className='pull-right' src='images/home/ecology_2.png'/>
                    <img className='pull-right' src='images/home/ecology_1.png'/>
                  </div>
                </div>
                <div className='col20-lg-9 col20-sm-10 col20-lg-offset-0 col20-md-offset-2 col20-sm-offset-0 col20-md-8 home_preferences_social'>
                  <span className='home_preferences_title greenlighted'>СОЦИАЛЬНАЯ <br/>ОТВЕТСТВЕННОСТЬ</span>
                  <div className='home_preferences_social_image'></div>
                  <p>Поддерживаем <br/>10 благотворительных проектов, и постоянно ищем новые возможности сделать мир лучше!</p>
                </div>
                <div className='col20-lg-5 col20-sm-10 col20-md-10 home_preferences_future'>
                  <span className='home_preferences_title greenlighted'>БУДУЩЕЕ <br/>ОПТИКОМ</span>
                  <p>Очередным этапом в развитии компании станет пополнение товарной линейки новыми экологичными товарами и запуск новых мощностей по производству биоупаковки.</p>
                  <button className='home_preferences_future_button hidden-sm hidden-xs hidden-md greenlighted close_modal'>НАПИШИТЕ<br/>НАМ</button>
                </div>
                <div className='col20-lg-6 col20-sm-10 col20-md-10 home_preferences_press'>
                  <Link to='/press' title='ПРЕСС-ЦЕНТР' className='home_preferences_title greenlighted'>ПРЕСС-ЦЕНТР
                  </Link>
                  <span className='home_preferences_press_speakers'>Спикеры компании — постоянные участники конференций в России и за рубежом</span>
                  <div className='home_preferences_press_image'></div>
                  <p>Более 3500 слушателей посетили наши выступления и мастер-классы в прошлом году</p>
                </div>
                <div className='text-center hidden-lg col-xs-12'>
                  <button className='home_preferences_future_button2 greenlighted close_modal'>НАПИШИТЕ<br/>НАМ</button>
                </div>
              </div>
            </div>            
          </section>

          <div className='home_slider'>
            <div className='container'>
              <div className='row'>
                <h2 className='col-xs-12 col20-lg-offset-1'>Товары для всех</h2>
              </div>
            </div>
            <CategorySlider greenMode={true}/>
          </div>
          <AllIsReady/>  
          <Interesed/>
          <Footer/>
          
        </div>

      </div>
    )
  }
}



function mapStateToProps (state) {
  return {
    windowTop: state.pageData.windowTop,
    windowWidth: state.pageData.windowWidth
  }
}

export default connect(mapStateToProps)(Home)


