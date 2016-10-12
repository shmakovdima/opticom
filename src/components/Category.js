import '../stylus/components/slick.styl';
import '../stylus/components/category.styl';
import {connect } from 'react-redux'
import {Link} from 'react-router'
import React, { Component } from 'react'
import HeaderLight from '../components/Headers/HeaderLight'
import CategoryHeader from './SubItems/Category/CategoryHeader'
import Interesed from './SubItems/Category/Interested'
import MobileSlider from './SubItems/MobileSlider'

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
    console.log('windowWidth' + windowWidth)

    return(
       <div>
         <If condition={windowWidth<768}>
            <Then>
              <div>
                <MobileSlider eco={true} data={Items}/>
               </div>
            </Then>
            <Else>
              <div>
              {
                Items.map(function(item, key){
                  if ((only_eco == true) && (item.eco!=true)) return false;
                  return( 
                    <If condition={itemgor==false}>
                      <Then>
                        <div className='col20-lg-4 col20-md-4 col-sm-4'>
                          <Item itemgor={itemgor} item={item} key={key}/>
                        </div>
                      </Then>
                      <Else>
                        <div>
                          <Item itemgor={itemgor} item={item} key={key}/>
                        </div>
                      </Else>
                    </If>
                  )
                })
              }
              </div>
            </Else>
          </If>
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

    const isLogged = this.props.isLogged

    const showgormargin = (showgor) ?  '' : 'category_nologged_margin'
    let windowWidth = this.props.windowWidth
    return (
      <div>
        <HeaderLight/>
        <CategoryHeader categoryData={categoryData}/>
        <section className='category_section'>
          <div className='container'>
    
              <Accordion defaultActiveKey={0}>
                {
                  categoryArray.map(function(item,key){
                    var Items = item
                    return(
                      <Panel header={item.title} eventKey={key} >
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
                          </Else>
                        </If>
                        </div>
                        <div className='item_nopadding'>                        
                          <Catalog_Group only_eco={only_eco} windowWidth = {windowWidth} itemgor={showgor} items={Items}/>
                        </div>
                        <div>
                          <If condition={isLogged == false}>
                            <Then>
                              <div className={showgormargin}>
                                <div className='category_nologged hidden-xs'>
                                  <div className='category_nologged_absolute'>
                                    <Link className='category_nologged_link' to='/register' title='Регистрация'>Зарегистрируйтесь</Link>
                                    <span className='category_nologged_description'>Чтобы получать персональные предложения. Это займёт не более 2 минут.</span>
                                  </div>
                                </div>
                              </div>
                            </Then>
                          </If>
                        </div>
                      </Panel>
                    )

                  }) 
                }

               
              </Accordion>
          
          </div>
        </section>
        <div className='hidden-xs'>
          <Interesed />
        </div>
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    categoryData: state.pageData.categoryData,
    only_eco: state.user.only_eco,
    isLogged: state.user.isLogged,
    windowWidth: state.pageData.windowWidth
  }
}

export default connect(mapStateToProps)(Catalog)


