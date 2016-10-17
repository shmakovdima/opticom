import React, { Component } from 'react'
import Item from './Item/Item'
import {connect } from 'react-redux'
import Slider from 'react-slick'

class MobileSlider extends Component {
  render(){
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
    var only_eco = this.props.only_eco
    var data= this.props.data
    const eco = this.props.eco

    return(
      <div>
        <Slider  {...settings}>
          {
            data.map(function(item, key) {
              if ((only_eco == true) && (item.eco!=true) && (eco==true)) return false;
              return (
                <div className='item_slide text-center'>
                  <Item item={item} key={key}/>
              </div>)
            })
          }
        </Slider>
      </div>
    )

  }
}

function mapStateToProps (state) {
  return {
    only_eco: state.user.only_eco
  }
}

export default connect(mapStateToProps)(MobileSlider)