import wordend from '../function/wordend'
import React, { Component } from 'react'
import {Link} from 'react-router'
import {connect } from 'react-redux';
import $ from 'jquery';
import Slider from 'react-slick';
import * as pageActions from '../../actions/showMenu';
import { bindActionCreators } from 'redux';
import { If, Then, Else } from 'react-if';
import '../../stylus/components/categoryslider.styl';


class Carousel_Item extends Component {
  render() {
    const image = (this.props.greenMode) ? '/images/categories/'+this.props.Category.imagegreen : '/images/categories/'+this.props.Category.image
    const title = this.props.Category.title
    const count = this.props.Category.count + ' ' + wordend(this.props.Category.count,['товар','товара','товаров'])
    const link = '/'+this.props.Category.link

    return(
      <div className='catalog_header_slider_item '>
        <Link title={title} to={'catalog'+link}>
          <div style={{backgroundImage: 'url(' + image + ')'}} className='catalog_header_slider_item_image'>
          </div>
        </Link>
        <Link title={title} to={'catalog'+link} className='catalog_header_slider_item_title'>
          {title}
        </Link>
        <span className='catalog_header_slider_item_count'>{count}</span>
      </div>
    )
  }
}

class CategorySlider extends Component {
  constructor(props) {
    super(props);
    this.slideLength = 0;
    this.curSlide = 0;
    this.prevCategory = 0;
  }

  leftSlide(){
    this.setSlide(this.curSlide-1);
  }

  rightSlide(){
    this.setSlide(this.curSlide+1);
  }

  setSlide(newSlide){

    if (newSlide<0) newSlide = 0;

    if (newSlide>=(this.slideLength-1)) newSlide = this.slideLength-1;

    if (newSlide<1) {
      $('.categoryslider_left').addClass('disabled');
    }else{
      $('.categoryslider_left').removeClass('disabled');
    }

    this.curSlide = Math.round(newSlide);

  
    let left = newSlide * $('.categoryslider_slide').width();
    let containerWidth = $('.categoryslider').width();
    let lentWidth = $('.categoryslider_line').width();


    if (left>(lentWidth-containerWidth)) {
      left = lentWidth-containerWidth;
     
      $('.categoryslider_right').addClass('disabled')
     
    }else{
      $('.categoryslider_right').removeClass('disabled')
    }

    if (left < 0) left = 0;

  
    if ($('.categoryslider_right').hasClass('disabled')) {     
      left = lentWidth-containerWidth;
    }

    $('.categoryslider_line').css({
        left: -left
    }); 
  }

  showMenu(){
    $('body').addClass('overflow');
    this.props.pageActions.showMenu(!this.props.show_menu)
  }

  showCategory() {
    $('body').addClass('overflow');
    this.props.pageActions.showMenu('category')
  }

  hoverSlider(e) {

    e.preventDefault()
    e.stopPropagation()

    var x = e.pageX

    console.log(x);


    var containerWidth = $('.categoryslider').width()

    var windowWidth = this.props.windowWidth

    var checkWidth = (windowWidth-containerWidth)/2

    x = x - checkWidth

    if (x<=0) x = 0

    if (x>=containerWidth) x = containerWidth

    var curSlide = (x/containerWidth * this.slideLength)


    if (curSlide<=0) curSlide = 0


    this.setSlide(curSlide)
  }

  componentDidMount() {



    var self = this;
    self.slideLength = $('.categoryslider_slide').length;


    var screen = document.getElementById('catalog_slider_id');
    if(screen) {
      screen.removeEventListener('mousemove', self.hoverSlider.bind(self), false);
      screen.addEventListener('mousemove', self.hoverSlider.bind(self), false);
    }


  
    //$(document).on('mousemove', '.catalog_slider_id', self.hoverSlider.bind(self))
    
    $(window).resize(function(){
      self.slideLength = $('.categoryslider_slide').length;
    });

    $(window).load(function(){

      var screen = document.getElementById('catalog_slider_id');



      if(screen) {
        screen.removeEventListener('mousemove', self.hoverSlider.bind(self), false);
        screen.addEventListener('mousemove', self.hoverSlider.bind(self), false);
      }



      self.slideLength = $('.categoryslider_slide').length;

      $(document).on('click','.categoryslider_left', function(){
        self.leftSlide()
      })

      $(document).on('click','.categoryslider_right', function(){
        self.rightSlide()
      })
     
    })
  }



  componentWillUnmount() {

    var self = this
    var screen = document.getElementById('catalog_slider_id');
    if (screen) {
      screen.removeEventListener('mousemove', self.hoverSlider.bind(self), false);
    }
    
  }



  render() {
    const Categories = this.props.Categories;

    const greenMode = this.props.greenMode;
    
    let slidernumber = 0;

    const windowWidth = this.props.windowWidth;

    const settings = {
      draggable: true,
      slidesToShow: 2,
      slidesToScroll: 2,
      autoplay: false,
      dots: false,
      infinite: false,
      speed: 500,
      variableWidth: true
    };

    return(
      <div>
        <div className='catalog_header_slider_block'>
          <If condition={windowWidth>=768}>
            <Then>
              <div className='container'>
                <div className='categoryslider_left disabled'></div>
                <div className='categoryslider_right'></div> 
                <div className='row' >
                 
                  <div id='catalog_slider_id' className='catalog_slider_id col20-lg-18 col20-lg-offset-1 col20-md-18 col20-md-offset-1 col-sm-12  catalog_header_slider slick_white'>

                      <div className='categoryslider'>
                        
                        <div className='categoryslider_line'>
                          <div className='hidden-xs categoryslider_slide'>
                            <button onClick={::this.showMenu} className='text-left catalog_header_slider_loadmore greenborderbottom'>
                              <span >Показать все </span>
                              <br/>
                              <span >категории</span>
                            </button>
                          </div>
                          {
                            Categories.map(function(item) {
                              return (<div className='categoryslider_slide'><Carousel_Item greenMode={greenMode} Category={item} key={++slidernumber}/></div>)
                            })
                          }
                        </div>
                        
                       

                        
                      </div>

                    <div className='hidden-md hidden-lg hidden-sm '>
                      <button onClick={::this.showMenu} className='text-left catalog_header_slider_loadmore greenborderbottom'>
                        <span >Показать все категории</span>
                      </button>
                       <h3 className='catalog_header_consult home_hidden '>Нужна консультация?</h3>
                      <Link className='catalog_header_consult_link home_hidden ' to='/order' title='Пригласить торгового представителя'>
                        <span className='green_underline opacity'>Пригласить торгового представителя</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

            </Then>
            <Else>
             <div className='container'>
                  <div className='row' >
                    <div id='catalog_slider' className='col20-lg-18 col20-lg-offset-1 col20-md-18 col20-md-offset-1 col-sm-12  catalog_header_slider slick_white'>
                      <Slider ref='slider'  {...settings}>
                        <div  className='hidden-xs' key={slidernumber}>
                          <button onClick={::this.showMenu} className='text-left catalog_header_slider_loadmore greenborderbottom'>
                            <span >Показать все </span>
                            <br/>
                            <span >категории</span>
                          </button>
                        </div>
                        {
                          Categories.map(function(item) {
                            return (<div><Carousel_Item greenMode={greenMode} Category={item} key={++slidernumber}/></div>)
                          })
                        }
                      </Slider>
                      <div className='hidden-md hidden-lg hidden-sm '>
                        <button onClick={::this.showCategory} className='text-left catalog_header_slider_loadmore greenborderbottom'>
                          <span >Показать все категории</span>
                        </button>
                         <h3 className='catalog_header_consult addintion'>Нужна консультация?</h3>
                        <Link className='catalog_header_consult_link addintion' to='/order' title='Пригласить торгового представителя'>
                          <span className='green_underline opacity'>Пригласить торгового представителя</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

            </Else>
          </If>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    windowWidth: state.pageData.windowWidth,
    Categories: state.pageData.Categories,
    show_menu: state.user.show_menu
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CategorySlider)