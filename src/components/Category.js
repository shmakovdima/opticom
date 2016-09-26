require('!style!css!slick-carousel/slick/slick.css'); 
require('!style!css!slick-carousel/slick/slick-theme.css');

import '../stylus/components/slick.styl';
import '../stylus/components/category.styl';
import {connect } from 'react-redux'

import React, { Component } from 'react'
import HeaderLight from '../components/Headers/HeaderLight'
import CategoryHeader from './SubItems/Category/CategoryHeader'
import Interesed from './SubItems/Category/Interested'

import Item from './SubItems/Item/Item'

import { Accordion, Panel } from 'react-bootstrap'


class Catalog_Group extends Component {

  


  render() {

    const Items = this.props.items.items

    return(
       <div>
        {
          Items.map(function(item, key){
            return(
              <div className=''>
                <Item item={item} key={key}/>
              </div>
            )
            
          })

        }
      </div>

    )
  }
}


class Catalog extends Component {



  constructor(props) {
    super(props);
    this.state = {
      showgor: false
     
    }
  }

  render() {
    let categoryData = this.props.categoryData

    let categoryArray = this.props.categoryData.items


    return (
      <div>
        <HeaderLight/>
        <CategoryHeader categoryData={categoryData}/>
        <section className='category_section'>
          <div className='container'>
   
              <Accordion>
                {
                  categoryArray.map(function(item,key){

                    var Items = item

                    return(
                      <Panel header={item.title} eventKey={key}>
                        <Catalog_Group items={Items}/>
                      </Panel>
                    )

                  }) 

                }

               
              </Accordion>
          
          </div>
        </section>

        <Interesed/>
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    categoryData: state.pageData.categoryData
  }
}

export default connect(mapStateToProps)(Catalog)


