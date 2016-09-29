

//import '../stylus/components/catalog.styl';
//import '../stylus/components/subcategory.styl';
import '../../stylus/components/profile.styl';

//import {Link} from 'react-router'
import React, { Component } from 'react'
//import HeaderLight from '../components/Headers/HeaderLight'
//import CategoryHeader from './SubItems/Category/CategoryHeader'
import {connect } from 'react-redux'
import Slider from 'react-slick'
import {Tabs, Tab} from 'react-bootstrap'
import Item from '../SubItems/Item/Item'


class ItemsSlider extends Component {

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


class ProfileSets extends Component {
  render(){
    var Loved = (this.props.myItems.Loved) ? this.props.myItems.Loved : []
    var Ready = (this.props.myItems.Ready) ? this.props.myItems.Ready : []

    return(
      <div className='profile'>
        <section className='profile_sets_header'>
           <div className='container'>
            <div className='row'>
              <div className='col20-lg-9 col20-lg-offset-1 col20-md-9 col20-md-offset-1 col20-sm-9 '>
                <h1>Мои товары</h1>
              </div>
            </div>
          </div>
        </section>
        <section className='profile_items'>
          <div className='container'>
            <Tabs defaultActiveKey={1} id='uncontrolled-tab-example'>
              <Tab eventKey={1} title='Отложенные'>
                <div className='profile_items_tabs'>
                  <ItemsSlider  data={Loved}/>
                </div>
              </Tab>
              <Tab eventKey={2} title='Купленные'></Tab>
              <Tab eventKey={3} title='Заключен договор'>
                <div className='profile_items_tabs'>
                  <ItemsSlider  data={Ready}/>
                </div>
              </Tab>
            </Tabs>
          </div>
        </section>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    myItems: state.user.myItems
  }
}



export default connect(mapStateToProps)(ProfileSets)


