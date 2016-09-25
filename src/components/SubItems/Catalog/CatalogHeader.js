import React, { Component } from 'react'
import EcoCheckbox from './EcoCheckbox'
import {Link} from 'react-router'
import wordend from '../../function/wordend'
import {connect } from 'react-redux'
import Slider from 'react-slick'



class Carousel_Item extends Component {


  render() {
    const image = '/images/categories/'+this.props.Category.image
    const title = this.props.Category.title
    const count = this.props.Category.count + ' ' + wordend(this.props.Category.count,['товар','товара','товаров'])
    const link = this.props.Category.link

    return(
      <div className='catalog_header_slider_item '>
        <Link title={title} to={'catalog/'+link}>
          <div style={{backgroundImage: 'url(' + image + ')'}} className='catalog_header_slider_item_image'>
          </div>
        </Link>
        <Link title={title} to={'catalog/'+link} className='catalog_header_slider_item_title'>
          {title}
        </Link>
        <span className='catalog_header_slider_item_count'>{count}</span>
      </div>

    )

  }

}

class CarouselCatalog extends Component {

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


    
    let slidernumber = 0

    console.log(windowWidth);
    console.log(Categories);
    
    return(
      <div className='catalog_header_slider_block'>
        <div className='container'>
          <div className='row'>
            <div className='col20-lg-18 col20-lg-offset-1 col20-md-18 col20-md-offset-1 col-sm-12 catalog_header_slider slick_white'>
              <Slider  {...settings}>
                <div  className='hidden-xs' key={slidernumber}>
                  <button className='text-left catalog_header_slider_loadmore greenborderbottom'>
                    <span >Показать все </span>
                    <wbr/>
                    <span >категории</span>
                  </button>
                </div>
                {
                  Categories.map(function(item) {
                    return (<div><Carousel_Item Category={item} key={++slidernumber}/></div>)
                  })
                }
              </Slider>
              <div className='hidden-md hidden-lg hidden-sm'>
                <button className='text-left catalog_header_slider_loadmore greenborderbottom'>
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
    )
  }
}


class CatalogHeader extends Component {
  render() {
    const windowWidth = this.props.windowWidth
    const Categories = this.props.Categories
    return(
      <section className='catalog_header'>
        <div className='container'>
          <div className='row'>
            <div className='col20-lg-9 col20-lg-offset-1 col20-md-9 col20-md-offset-1 col20-sm-9 '>
              <h1>Каталог</h1>
              <span className='catalog_header_leed'>
                <span>Более 15 000 товаров</span>
                <wbr/>
                <span> в 24 категориях</span>
              </span>
            </div>
            <div className='col20-lg-4 col20-lg-offset-1 col20-md-5 col20-sm-5 hidden-xs'>
              <EcoCheckbox/>
            </div>
            <div className='col20-lg-4 col20-md-4 col20-sm-6 hidden-xs'>
              <h3 className='catalog_header_consult'>Нужна консультация?</h3>
              <Link className='catalog_header_consult_link' to='/order' title='Пригласить торгового представителя'>
                <span className='green_underline opacity'>Пригласить торгового</span>
                <wbr/>
                <span className='green_underline opacity'>представителя</span>
              </Link>
            </div>
          </div>
        </div>
        <CarouselCatalog windowWidth={windowWidth} Categories={Categories}/>
      </section>
    )
  }
}

function mapStateToProps (state) {
  return {
    windowWidth: state.pageData.windowWidth,
    Categories: state.pageData.Categories
  }
}


export default connect(mapStateToProps)(CatalogHeader)