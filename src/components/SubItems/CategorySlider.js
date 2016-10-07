import Slider from 'react-slick'
import wordend from '../function/wordend'
import React, { Component } from 'react'
import {Link} from 'react-router'
import {connect } from 'react-redux'
import $ from 'jquery'
import * as pageActions from '../../actions/showMenu'
import { bindActionCreators } from 'redux'


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


  showMenu(){
    $('body').addClass('overflow');
    this.props.pageActions.showMenu(!this.props.show_menu)
  }

  render() {
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

    const windowWidth = this.props.windowWidth
    const Categories = this.props.Categories

    var greenMode = this.props.greenMode
    
    let slidernumber = 0

    console.log(windowWidth);
    console.log(Categories);
    
    return(
      <div>
        <div className='catalog_header_slider_block'>
          <div className='container'>
            <div className='row'>
              <div className='col20-lg-18 col20-lg-offset-1 col20-md-18 col20-md-offset-1 col-sm-12  catalog_header_slider slick_white'>
                <Slider  {...settings}>
                  <div  className='hidden-xs' key={slidernumber}>
                    <button onClick={::this.showMenu} className='text-left catalog_header_slider_loadmore greenborderbottom'>
                      <span >Показать все </span>
                      <wbr/>
                      <span >категории</span>
                    </button>
                  </div>
                  {
                    Categories.map(function(item) {
                      return (<div><Carousel_Item greenMode={greenMode} Category={item} key={++slidernumber}/></div>)
                    })
                  }
                </Slider>
                <div className='hidden-md hidden-lg hidden-sm'>
                  <button onClick={::this.showMenu} className='text-left catalog_header_slider_loadmore greenborderbottom'>
                    <span >Показать все категории</span>
                  </button>
                   <h3 className='catalog_header_consult'>Нужна консультация?</h3>
                  <Link className='catalog_header_consult_link' to='/order' title='Пригласить торгового представителя'>
                    <span className='green_underline opacity'>Пригласить торгового представителя</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
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