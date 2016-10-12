import React, { Component } from 'react'

import { connect } from 'react-redux'
import Slider from 'react-slick'
import { If, Then, Else } from 'react-if';
import Item from '../Item/Item'

class BuyToo extends Component {

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
    const Interesed = this.props.buyToo
    const windowWidth = this.props.windowWidth
    const only_eco = false



    return(
      <section className='interesed buytoo'>
        <div className='container'>
          <div className='row'>
            <div className='Interesed_before'></div>
            <h2 className='col20-lg-offset-1 col-xs-12'>
              <span>С этим товаром </span>
              <wbr/>
              <span>также покупают</span>


            </h2>
          </div>
        </div>
        <div className='container'>
          <div className='row'>
             <If condition={windowWidth<=768 }>
                <Then>
                  <div className='row'>
                    <Slider  {...settings}>
                      
                          <div className='padding_768'>
                          </div>

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
                </Then>
                <Else>
                  <Then>
                    <div>
                      {
                        Interesed.map(function(item) {
                          if ((only_eco == true) && (item.eco!=true)) return false;
                          return (
                            <div className='col20-lg-4 col20-md-5 col-sm-4'>
                              <Item item={item} key={++Interesedkey}/>
                          </div>)
                        })
                      }
                    </div>
                  </Then>
                </Else>
            </If>


            
          </div>
        </div>
      </section>
    )
  }
}


function mapStateToProps (state) {
  return {
    windowWidth: state.pageData.windowWidth,
    only_eco: state.user.only_eco
  
  }
}

export default connect(mapStateToProps)(BuyToo)