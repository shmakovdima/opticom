require('!style!css!slick-carousel/slick/slick.css'); 
require('!style!css!slick-carousel/slick/slick-theme.css');

import '../stylus/components/slick.styl';
import '../stylus/components/catalog.styl';
import '../stylus/components/subcategory.styl';

import {Link} from 'react-router'
import React, { Component } from 'react'
import HeaderLight from '../components/Headers/HeaderLight'
import SubCategoryHeader from './SubItems/SubCategory/SubCategoryHeader'
import {connect} from 'react-redux'
import ReadyPopular from './SubItems/Item/ReadyPopular'
import ReadySelect from './SubItems/Item/ReadySelect'


class SubCategory extends Component {
  render() {
    let subCategory= this.props.subCategory

    let popularSet = this.props.subCategory.popularSet
    let selectSet = this.props.subCategory.SelectSet

    return (
      <div>
        <HeaderLight/>
        <SubCategoryHeader categoryData={subCategory}/>
        <section className='subcategory_section'>
          <div className='container'>
            <div className='row'>
              <div className='col20-lg-4 col20-md-6 col-sm-12'>
                <span className='subcategory_popular_link '>
                  <span>Попробуйте наши </span>
                  <Link to='allisready' title='Популярные наборы' className='greenborderbottom'>
                    <span>популярные&shy;</span>
                    <wbr/> 
                    <span>наборы</span>
                  </Link>

                </span>

              </div>
              {
                popularSet.map(function(item, key) {
                  return(
                    <div className='col20-lg-8 col20-md-7 col-sm-6'>
                      <ReadyPopular data={item} key={++key} />
                    </div>
                  )
                })

              }
            </div>
          </div>
        </section>
        <section className='subcategory_section'>
          <div className='container'>
            <div className='row'>
              <h2 className='col-xs-12 col20-lg-offset-1 hidden-xs'>
                <span>Выбирайте, то что  </span>
                <br/>
                <span>подходит вам</span>
              </h2>

              <h2 className='col-xs-12 col20-lg-offset-1 hidden-lg hidden-md hidden-sm mobile_font_27'>
                <span>Выбирайте, то что  </span>
                <wbr/>
                <span>подходит вам</span>
              </h2>
            </div>
          </div>
            <div className='container'>
              <div className='row'>
                {
                  selectSet.map(function(item, key) {
                    return(
                      <div className='col-xs-12 col-sm-6 col-md-4 col-lg-4'>
                        <ReadySelect data={item} key={++key} />
                      </div>
                    )
                  })
                }
              </div>
            </div>
        </section>        
      </div>
    )
  }
}



function mapStateToProps (state) {
  return {
    subCategory: state.pageData.subCategory,
    only_eco: state.user.only_eco
  }
}

export default connect(mapStateToProps)(SubCategory)


