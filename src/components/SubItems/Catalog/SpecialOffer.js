import React, { Component } from 'react'
//import {Link} from 'react-router'
import { connect } from 'react-redux'
//import Slider from 'react-slick'
import '../../../stylus/components/specialoffer.styl';
import Item from '../Item/Item'

class SpecialOffer extends Component {
  render() {
    let specialofferkey = 1000
    const specialOffer = this.props.specialOffer
    const only_eco = this.props.only_eco
    return(
      <section className='specialoffer hidden-xs'>
        <div className='container'>
          <div className='row'>
            <div className='specialoffer_before'></div>
            <h2 className='col20-lg-offset-1'>
              <span>Специальное </span>
              <wbr/>
              <span>предложение</span>
            </h2>
          </div>
        </div>
        <div className='container item_nopadding'>
          <div className='row'>
            <div className='col20-lg-1 '></div>
            {
              specialOffer.map(function(item) {
                if ((only_eco == true) && (item.eco!=true)) return false;
                return (
                  <div className='col20-lg-4 col20-md-5 col-sm-4'>
                    <Item item={item} key={++specialofferkey}/>
                </div>)
              })
            }
          </div>
        </div>
      </section>
    )

  }

}


function mapStateToProps (state) {
  return {
    windowWidth: state.pageData.windowWidth,
    specialOffer: state.pageData.specialOffer,
    only_eco: state.user.only_eco
  }
}


export default connect(mapStateToProps)(SpecialOffer)