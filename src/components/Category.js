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
import { If, Then, Else } from 'react-if';
import { Accordion, Panel } from 'react-bootstrap'


class Catalog_Group extends Component {

  render() {

    const Items = this.props.items.items
    let itemgor = this.props.itemgor
    const windowWidth = this.props.windowWidth

    const only_eco = this.props.only_eco

    if (windowWidth<991) {
      itemgor = false
    }

    return(
       <div>
        {
          Items.map(function(item, key){
            if ((only_eco == true) && (item.eco!=true)) return false;
            return(
              <div className=''>
                <Item itemgor={itemgor} item={item} key={key}/>
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

  setGor() {
    this.setState({showgor: true})
  }

  setNorm() {
    this.setState({showgor: false})
  }

  render() {
    let categoryData = this.props.categoryData

    let categoryArray = this.props.categoryData.items
    var self = this

    const only_eco = this.props.only_eco

    var showgor = this.state.showgor

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
                        <div className='buttons hidden-sm hidden-xs'>
                          <If condition={showgor==false}>
                            <Then>
                              <div>
                                <button onClick={::self.setNorm} className='category_norm pull-right active'>
                                  <div>
                                  </div>
                                </button>
                                <button  onClick={::self.setGor} className='category_gor pull-right'>
                                  <div>
                                  </div>
                                </button>
                              </div>
                            </Then>
                          
                          <Else>
                            <Then>
                              <div>
                                <button onClick={::self.setNorm} className='category_norm pull-right'>
                                  <div>
                                  </div>
                                </button>
                              <button onClick={::self.setGor} className='category_gor pull-right  active'>
                                <div>
                                </div>
                              </button>
                              </div>
                            </Then>
                          </Else>
                        </If>

                        </div>
                        <div>                        
                         <Catalog_Group only_eco={only_eco} itemgor={showgor} items={Items}/>
                        </div>


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
    categoryData: state.pageData.categoryData,
    only_eco: state.user.only_eco
  }
}

export default connect(mapStateToProps)(Catalog)


