import React, { Component } from 'react'
import Slider from 'react-slick'
import Item from '../../SubItems/Item/Item'

export default class ItemsSlider extends Component {

  render(){

    var windowWidth = this.props.windowWidth

    var slides =  (windowWidth > 768) ? 3 : 1

    var settings = {
      draggable: true,
      slidesToShow: 1,
      slidesToScroll: slides,
      autoplay: false,
      dots: false,
      infinite: false,
      speed: 500,
      variableWidth: true
    };

    var data = (this.props.data) ? this.props.data : []
    return(
      <div className='slider'>
        <Slider  {...settings}>
          <div className='padding_768'>
          </div>
          {
            data.map(function(item) {
              return (
                <div className='item_slide text-center'>
                  <Item item={item} />
                </div>)
            })
          }
        </Slider>
    </div>

    )
  }

}