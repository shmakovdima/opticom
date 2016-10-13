import React, { Component } from 'react'
import '../stylus/components/home.styl';
import { connect } from 'react-redux'
import Slider from 'react-slick'
import '../stylus/components/set.styl';
import ContactForm from './ContactForm'
import getDate from './function/getDate'
import HeaderDark from '../components/Headers/HeaderDark'
//import {SectionsContainer, Section} from 'react-fullpage';
import {Scrollspy} from 'react-scrollspy'
import $ from 'jquery'
import {Link} from 'react-router'
import wordlenght from './function/wordlenght'
import '../stylus/components/today.styl';

class Today extends Component {

  constructor(props) {
    super(props);
    this.state = {
      lgShow: false,
      curItem: '',
      working: false,
      prevScroll: this.props.windowTop
    }
    this.curItems = ''
    this.prevScroll = this.props.windowTop
    this.working = false
  }

  

  updateTop(){
    var windowTop = this.props.windowTop
    var screenHeight = window.innerHeight
    var sotrTop = (document.getElementById('sotr')) ? document.getElementById('sotr').offsetTop : 2129
    var whiteTop = (document.getElementById('prod')) ? document.getElementById('prod').offsetTop : 2129
    var contactTop = (document.getElementById('contact')) ? document.getElementById('contact').offsetTop : 6726
    var jobTop = (document.getElementById('job')) ? document.getElementById('job').offsetTop : 5084
    var socialTop = (document.getElementById('social')) ? document.getElementById('social').offsetTop: 3989
    var ecologyTop = (document.getElementById('ecology')) ? document.getElementById('ecology').offsetTop: 2988
    var pressTop = (document.getElementById('press')) ? document.getElementById('press').offsetTop : 5858

    //var prevScroll = this.state.prevScroll

    var curItem = ''
    
    
    if (this.prevScroll<=windowTop){
      sotrTop-=screenHeight
      whiteTop-=screenHeight
      ecologyTop-=screenHeight
      socialTop-=screenHeight
      jobTop-=screenHeight
      pressTop-=screenHeight
      contactTop-=screenHeight
    }

    var self = this
    this.prevScroll = windowTop

    if ((windowTop>=0) && (windowTop<whiteTop)) {
      curItem = 'about'
    } 
    if ((windowTop>=whiteTop) && (windowTop<ecologyTop)) {
      curItem = 'prod'
    } 
    if ((windowTop>=ecologyTop) && (windowTop<socialTop)) {
      curItem = 'ecology'
    } 
    if ((windowTop>=socialTop) && (windowTop<jobTop)) {
      curItem = 'social'
    } 

    if ((windowTop>=jobTop) && (windowTop<pressTop)) {
      curItem = 'job'
    }

    if ((windowTop>=pressTop) && (windowTop<contactTop)) {
      curItem = 'press'
    }  

    if (windowTop>=contactTop) {
      curItem = 'contact'
    }


    console.log('curItem' + curItem)
    console.log('curItems' + this.curItems)
    console.log('working' + this.working)

    if (this.curItems =='') {
      this.curItems = curItem
    }else{
      if ((this.curItems != curItem ) && (this.working!=true)) {
        console.log('changing')

        this.working = true
        
        if (curItem!='about') {
          $('.'+curItem).click()
        }
        this.curItems = curItem
        setTimeout(function(){ self.working = false}, 1200)

      }
    }

  }


  lgShow() {
    this.setState({lgShow: !this.state.lgShow})
  }
  componentDidMount(){
    window.addEventListener('wheel', this.updateTop.bind(this))

    $(document).on('click', '.cooperation, .today_navigation a', function(event){

        //prevent the default action for the click event
        event.preventDefault();
        event.stopPropagation()

        //get the full url - like mysitecom/index.htm#home
        var full_url = this.href;

        //split the url by # and get the anchor target name - home in mysitecom/index.htm#home
        var parts = full_url.split('#');
        var trgt = parts[1];

        //get the top offset of the target anchor
        var target_offset = $('#'+trgt).offset();
        var target_top = target_offset.top;

        //goto that anchor by setting the body scroll top to anchor top
        $('html, body').animate({scrollTop: target_top}, 700);
    });





  }

  render() {
    var Data = this.props.PressNews.Data
    var windowTop = this.props.windowTop

    var classN = 'today_navigation'
    if (windowTop>563) {
      classN+=' black'
    }

    var whiteTop = (document.getElementById('prod')) ? document.getElementById('prod').offsetTop : 2129
    var pressTop = (document.getElementById('press')) ? document.getElementById('press').offsetTop : 5858
    
    var classWhite = 'today_white'

    

    if (windowTop>whiteTop) {
      classWhite+=' fixed'
    }
    if (windowTop>(pressTop-450)) {
      classWhite+=' hidden'
    }

    var settings = {
      draggable: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      dots: false,
      infinite: false,
      speed: 500,
      variableWidth: true
    };





    return(
      <div className='today'>
      <div className={classN} >
         <Scrollspy items={ ['about', 'sotr', 'prod', 'ecology','social', 'job', 'press','contact'  ] } currentClassName='active'>
          <li><a className='greenlighted_left about' href='#about'><span>О компании</span></a></li>
          <li><a className='greenlighted_left sotr' href='#sotr'><span>Сотрудничество</span></a></li>
          <li><a className='greenlighted_left prod' href='#prod'><span>Производство</span></a></li>
          <li><a className='greenlighted_left ecology' href='#ecology'><span>Экология</span></a></li>
          <li><a className='greenlighted_left social' href='#social'><span>Ответственность</span></a></li>
          <li><a className='greenlighted_left job' href='#job'><span>Вакансии</span></a></li>
          <li><a className='greenlighted_left press' href='#press'><span>Пресс-центр</span></a></li>
          <li><a className='greenlighted_left contact' href='#contact '><span>Контакты</span></a></li>
        </Scrollspy>
      </div>
          <section> 
            <div className='today_header' id='about'>
              <HeaderDark/>
              <div className='container'>
                <div className='row'>
                  
                </div>
                <div className='row'>
                    <div className='col20-lg-20'>
                      <div className='today_header_sun'>
                      </div>
                    </div>
                    <div className='col20-lg-offset-1 col20-lg-18 col20-md-offset-1 col20-md-18'>
                     <h1>Группа компаний Оптиком</h1>
                    </div>
                    <a href='#sotr' className='cooperation home_header_down'>
                    </a>
                    <div className='col20-lg-offset-2 col20-lg-18 col20-md-offset-2 col20-md-18'>
                      <span className='today_header_description'>
                        Группа ведёт свою деятельность на трёх континентах, объединяя в единую структуру научный центр разработки новых видов упаковки, заготовителей агросырья, производственные и перерабатывающие предприятия.
                      </span>
                      <Link className='today_header_link' title='Подробнее о группе' to='company'>
                        <span className='green_underline'>Подробнее о группе</span>
                      </Link>

                    </div>
                </div>
              </div>
              <div className='today_planet'>
              </div>
            </div>
            <div className='today_sotr' id='sotr'>
              <div className='container'>
                <div className='row'>
                    <div className='col20-lg-offset-1 col20-lg-18 col20-md-offset-1 col20-md-18'>
                     <h2>Сотрудничество</h2>
                    </div>
                    <div className='col20-lg-offset-2 col20-lg-10 col20-md-offset-2 col20-md-10'>
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
                      <Link className='today_link' title='Подробнее о сотрудничестве' to='cooperation'>
                        <span className='green_underline'>
                          Подробнее о сотрудничестве
                        </span>
                      </Link>






                    </div>
                  
                </div>
              </div>
            </div>
          </section>
          <section id='prod'>
              <div className='container'>
                <div className='row'>
                    <div className='col20-lg-15'>
                      <div className={classWhite}>
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
          <section id='ecology'>
              <div className='container'>
                <div className='row'>
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

          <section id='social'>
              <div className='container'>
                <div className='row'>
                    <div className='col20-lg-19'>
                      <div className='today_social_image'>
                      </div>
                    </div>
                   
                    <div className='col20-lg-offset-1 col20-lg-18 col20-md-offset-1 col20-md-18'>
                     <h2>Социальная<br/> ответственность</h2>
                    </div>
                    
                    <div className='col20-lg-offset-2 col20-lg-14 col20-md-offset-2 col20-md-15'>
                      <div className='today_social_block today_social_block_1 text-center'>
                        <Link >
                          <span className='green_underline'>Благотворительный фонд «Я Есть!»</span>
                        </Link>
                      </div>
                      <div className='today_social_block today_social_block_2 text-center'>
                        <Link >
                          <span className='green_underline'>Детский дом-<br/>интернат №8</span>
                        </Link>
                      </div>
                      <div className='today_social_block today_social_block_3 text-center'>
                        <Link >
                          <span className='green_underline'>Благотворительный фонд «Детский мир»</span>
                        </Link>
                      </div>
                      <div className='today_social_block today_social_block_4 text-center'>
                        <Link >
                          <span className='green_underline'>Дом трудолюбия<br/> «НОЙ»</span>
                        </Link>
                      </div>
                      <div className='today_social_block today_social_block_5 text-center'>
                        <Link >
                          <span className='green_underline'>Школа-интернат с.Широкий Буерак</span>
                        </Link>
                      </div>
                      <div className='today_social_block today_social_block_6 text-center'>
                        <Link >
                          <span className='green_underline'>Музей предпринимателей, меценатов и благотворителей</span>
                        </Link>
                      </div>
                    </div>
                  
                </div>
              </div>
          </section>

          <section id='job'>
              <div className='container'>
                <div className='row'>
                    <div className='col20-lg-20'>
                      <div className='today_job_image'>
                      </div>
                    </div>
                   
                    <div className='col20-lg-offset-1 col20-lg-18 col20-md-offset-1 col20-md-18'>
                     <h2>Вакансии</h2>
                    </div>
                    <div className='col20-lg-offset-2 col20-lg-9 col20-md-offset-2 col20-md-10'>
                      <span className='today_description'>
                        Гумусированность однородно перемещает легкосуглинистый уровень грунтовых вод. Если принять во внимание физическую неоднородность почвенного индивидуума, можно прийти к выводу о том, что инфильтрация растворяет гумус.
                      </span>
                    </div>
                    <div className='col20-lg-offset-2 col20-lg-16 col20-md-offset-2 col20-md-18'>
                    
                      <div className='today_job_block today_job_block_1'>
                        <Link >
                          <span className='green_underline'>Москва</span>
                        </Link>
                      </div>
 
                      <div className='today_job_block today_job_block_2'>
                        <Link >
                          <span className='green_underline'>Санкт-Петербург</span>
                        </Link>
                      </div>

                      <div className='today_job_block today_job_block_3'>
                        <Link >
                          <span className='green_underline'>Нижний Новгород</span>
                        </Link>
                      </div>

                    </div>   
                </div>
              </div>
          </section>


          <section id='press'>
              <div className='container'>
                <div className='row'>
                    <div className='col20-lg-20'>
                    </div>
                   
                    <div className='col20-lg-offset-1 col20-lg-18 col20-md-offset-1 col20-md-18'>
                     <h2>Пресс-центр</h2>
                    </div>
                    <div className='col20-lg-20 today_press_slider'>
                      <Slider  {...settings}>

                        {
                            Data.map(function(item){
                              return(
                                <div className='today_set'>
                                  <PressNewsItem data={item}/>
                                </div>
                              )

                            })

                          }
                  </Slider>

                      <Link className='today_link' title='Пресса' to='press'>
                        <span className='green_underline'>Посмотреть все материалы</span>

                      </Link>


                    </div>   
                </div>
              </div>
          </section>


          <section id = 'contact' className='today_contact'>
            

              <div className='container'>
                <div className='row'>
                    <div className='col20-lg-offset-4 col20-lg-14 col20-md-offset-3 col20-md-14'>
                      <div className='today_contact_image'>
                      </div>
                    </div>


                    <div className='col20-lg-offset-1 col20-lg-18 col20-md-offset-1 col20-md-18'>
                     <h2>Контактная<br/> информация</h2>
                    </div>
                    <div className='col20-lg-offset-2 col20-lg-14 col20-md-offset-2 col20-md-14'>
                      <a className='today_contact_phone' href='tel: +7-495-980-06-48' title='Наш телефон'>+7-495-980-06-48</a>
                      <button className='close_modal button' onClick={::this.lgShow}>Написать нам</button>
                      <Link className='today_link today_contact_more' title='Пресса' to='press'>
                          <span className='green_underline'>Контакты других подразделений</span>
                      </Link>
                    </div>
                </div>
              </div>
          </section>


          <ContactForm show={this.state.lgShow} onHide={this.lgShow}/>

          

      </div>
    )
  }
}

class PressNewsItem extends Component {
  render () {

    let img = 'http://' + window.location.host + '/' + this.props.data.image
    let link = this.props.data.link
    let title = wordlenght(this.props.data.title, 50)
    let hoverimg = 'http://' + window.location.host + '/' + this.props.data.imagehover
    let date = getDate(this.props.data.date)

    return(
      <div className='ready ready_pressnews_item'>
        <div className='ready_block'>
          <img src={img} className='ready_image' alt={title}/>
          <img src={hoverimg} className='ready_hover' alt={title}/>
          <div className='ready_addons ready_pressnews'>
              <span className='ready_date'>{date}</span>
              <Link to={link} title={title} className='ready_title'>
                {title}              
              </Link>
              <div className='ready_pressnews_bg'></div>
          
            </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    windowWidth: state.pageData.windowWidth,
    PressNews: state.pageData.PressNews,
    windowTop: state.pageData.windowTop
  }
}


export default connect(mapStateToProps)(Today)