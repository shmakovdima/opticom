import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router'
import {If, Then} from 'react-if'
import $ from 'jquery'
import Slider from 'react-slick'

class Photo extends Component {

  componentDidMount() {
    var self = this
    $(document).on('click','.press_lightbox_close', function(){
      self.closeSlide()
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      sliderOpen: false,
      curSlide: 0
    }
  }

  closeSlide(){
    this.setState({
      sliderOpen: false
    })
    $('body').removeClass('overflow')
  }

  openSlide(key){
    this.setState({
      sliderOpen: true,
      curSlide: key
    })
    $('body').addClass('overflow')
  }
  
  render() {
    var Photos = this.props.Photos
    var curSlide = this.state.curSlide
    var sliderOpen = this.state.sliderOpen
    //var category = this.props.key
    var self = this
    console.log(sliderOpen)
    return(
      <div>
        {
            Photos.map(function(item, key){
              let img = 'http://' + window.location.host + '/' + item.image
              let title = item.title
              return(
                <div className='col-lg-3 col-md-4 col-sm-4 col-xs-12 press_photo_item'>
                  
                  <img src={img} alt={title} onClick={self.openSlide.bind(self,key)}/>

                  <span className='press_photo_title'>{title}</span>
                </div>
                )
            })


        }
        <div>
          <If condition={sliderOpen==true}>
            <Then>
              <PhotosSlider Photos={Photos} curSlide = {curSlide} /> 
            </Then>
          </If>
        </div>
      </div>
    )                 
  }
}

class PhotosSlider extends Component {     
  render() {

    var curSlide = this.props.curSlide
    
    var settings = 
     {
      slidesToShow: curSlide,
      draggable: true,
      slidesToScroll: 1,
      autoplay: false,
      dots: false,
      adaptiveHeight: true,
      infinite: false,
      speed: 500,
      centerMode: true,
      variableWidth: true
    };

    var data = this.props.Photos

    return(
      <div className='press_lightbox'>
        <div className='press_lightbox_opacity'>
        </div>
        <div className='press_lightbox_body'>
          <div className='press_lightbox_close'>&times;</div>
            <div className='press_lightbox_slider'>
              <Slider  {...settings}>

                {
                  data.map(function(item) {
                    let img = 'http://' + window.location.host + '/' + item.imagebig
                    return (
                      <div className='press_lightbox_item'>
                        <img src={img} alt={item.title}/>
                        <span>{item.title}</span>
                      </div>              
                    )
                  })
                }




              </Slider>
            </div>
        </div>
      </div>
    )
  }
}

class PressPhoto extends Component {

  render() {

    var Data = this.props.PressPhoto

    return (
      <div className='press_projects'>
        <section className='profile_sets_header'>
            <div className='container'>
              <div className='row'>
                <div className='profile_sets_white'></div>
                <div className='col20-lg-9 col20-lg-offset-1 col20-md-9 col20-md-offset-1 col20-sm-9 '>
                  <h1>Преcc-центр</h1>
                </div>
              </div>
              <div className='row press_links'>
                <div className='col20-lg-19 col20-lg-offset-1 col20-md-19 col20-md-offset-1 col20-sm-20 '>
                  <Link to='/press/news' activeClassName='active'>Новости компании</Link>
                  <Link to='/press/projects' activeClassName='active'>Наши проекты</Link>
                  <Link to='/press/kit' activeClassName='active'>Пресс-кит</Link>
                  <Link to='/press/smi' activeClassName='active'>СМИ о нас</Link>
                  <Link to='/press/photo' activeClassName='active'>Фото-портфолио</Link>                               
                </div>
              </div>
            </div>
          </section>
          <section> 
            <div className='container'>
              
                {
                  Data.map(function(item, key){

                    var Photos = item.Photos

                    return(
                      <div className='press_photo'>
                        <div className='row'>
                          <div className='col20-lg-19 col20-lg-offset-1 col20-md-19 col20-md-offset-1 col20-sm-20'>
                            <h2>{item.category}</h2>
                          </div>  
                        </div>
                        <div className='row'>
                          <Photo Photos = {Photos} key = {key}/>
                        </div>
                      </div>
                    )
                  })
                }

              
            </div> 
                  
          </section>
        </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    windowWidth: state.pageData.windowWidth,
    PressPhoto: state.pageData.PressPhoto
  }
}


export default connect(mapStateToProps)(PressPhoto)