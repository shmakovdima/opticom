import React, { Component } from 'react'

import { connect } from 'react-redux'
import Slider from 'react-slick'
import Item from '../Item/Item'

class Interesed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loadmore: true,
      Data: this.props.Interesed
    }
  }

  loadMore() {
    var newData = JSON.parse(JSON.stringify(this.props.loadMore.Interesed));
    var oldData = JSON.parse(JSON.stringify(this.state.Data));
    this.setState({
      Data: oldData.concat(newData)
    })
   

    if (this.props.loadMore.final == true) {
      this.setState({
        loadmore: false
    })
    }
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

    let Interesedkey = 4000
    const Interesed = this.state.Data
    const only_eco = this.props.only_eco





    return(
      <section className='interested_slider'>
        <div className='container'>
          <div className='row'>
            <div className='Interesed_before'></div>
            <h2 className='col20-lg-offset-1'>
              <span>Вас могут </span>
              <wbr/>
              <span>заинтересовать</span>
            </h2>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
            <Slider  {...settings}>
              {
                Interesed.map(function(item) {
                  if ((only_eco == true) && (item.eco!=true)) return false;
                  return (
                    <div className='item_slide text-center'>
                      <Item item={item} key={++Interesedkey}/>
                  </div>)
                })
              }
           
            </Slider>            
          </div>
        </div>
      </section>
    )
  }
}


function mapStateToProps (state) {
  return {
    windowWidth: state.pageData.windowWidth,
    Interesed: state.pageData.InteresedCategory,
    only_eco: state.user.only_eco
  }
}


export default connect(mapStateToProps)(Interesed)