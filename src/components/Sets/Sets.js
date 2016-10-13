require('!style!css!slick-carousel/slick/slick.css'); 
require('!style!css!slick-carousel/slick/slick-theme.css');

import '../../stylus/components/slick.styl';
import '../../stylus/components/catalog.styl';
import '../../stylus/components/category.styl';
import '../../stylus/components/setspage.styl';

import EcoCheckbox from '../SubItems/Catalog/EcoCheckbox'

import {Link} from 'react-router'
import React, { Component } from 'react'
import HeaderLight from '../Headers/HeaderLight'
import {connect} from 'react-redux'
import ReadyPopular from '../SubItems/Item/ReadyPopular'



class Sets extends Component {
  render() {

    let Sets = this.props.Sets
    var breadcrumb_link = ''
    let breadcrumbs = [{link: 'catelog', title:'Каталог'}]
    let only_eco = this.props.only_eco
    return (
      <div>
        <HeaderLight/>
      <section className='category_header sets_header'>
        <div className='container'>
          <div className='row'>
              <div className='category_header_absolute'>
                <div className='col20-lg-offset-6 col20-md-offset-2 col20-sm-offset-2 col20-lg-12 col20-md-14 col20-sm-16'>
                <div className='hidden-xs category_header_white sets'>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='category_breadcrumb col20-lg-offset-1 col20-lg-19  col15-md-15 col15-sm-15 '>
              <ol className='breadcrumb'>
                {
                  breadcrumbs.map(function(item) {

                    breadcrumb_link+=item.link+'/'
                    return(
                      <li className='breadcrumb-item'>
                        <Link to={breadcrumb_link} title={item.title}>{item.title}</Link>
                      </li>
                    )
                  })
                }

              </ol>
              <h1 className='sub'>Популярные наборы</h1>
              <div className='pull-right'>
               <EcoCheckbox />
              </div>
              <div>
                <span className='sets_header_description'>Выберите один из готовых наборов, и вы сможете всегда изменить его состав под свою потребность</span>
              </div>
             
            </div>



          </div>
        </div>
      </section>

        <section className='catalog_section sets_section'>
            <div className='container'>
              <div className='row'>
                {
                  Sets.map(function(item, key) {

                    if ((only_eco == true) && (item.eco!=true)) return false;
                    return(
                      <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>

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
    Sets: state.pageData.Sets,
    only_eco: state.user.only_eco
  }
}

export default connect(mapStateToProps)(Sets)


