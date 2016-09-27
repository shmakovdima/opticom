require('!style!css!slick-carousel/slick/slick.css'); 
require('!style!css!slick-carousel/slick/slick-theme.css');

import '../stylus/components/slick.styl';
import '../stylus/components/catalog.styl';
import '../stylus/components/subcategory.styl';

import {Link} from 'react-router'
import React, { Component } from 'react'
import HeaderLight from '../components/Headers/HeaderLight'
import CategoryHeader from './SubItems/Category/CategoryHeader'
import {connect } from 'react-redux'
import ReadyPopular from './SubItems/Item/ReadyPopular'


class SubCategory extends Component {
  render() {
    let subCategory= this.props.subCategory

    let popularSet = this.props.subCategory.popularSet

    return (
      <div>
        <HeaderLight/>
        <CategoryHeader categoryData={subCategory}/>
        <section>
          <div className='container'>
            <div className='row'>
              <div className='col20-lg-4 col20-md-6 col-sm-12'>
                <span className='subcategory_popular_link'>
                  <span>Попробуйте </span>
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


