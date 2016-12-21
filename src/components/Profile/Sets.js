import '../../stylus/components/profile.styl';

import {Link} from 'react-router'
import React, { Component } from 'react'
import {connect } from 'react-redux'
import ReadyPopular from '../SubItems/Item/ReadyPopular'


class ProfileSets extends Component {
  render(){
    let popularSet = (this.props.SetsPage.popularSets) ? this.props.SetsPage.popularSets : []
    let mySets = (this.props.SetsPage.mySets) ? this.props.SetsPage.mySets : []
    return(
    <div className='profile_sets'>
      <section className='profile_sets_header'>
        <div className='container'>
          <div className='row'>
            <div className='profile_sets_white'></div>
            <div className='col20-lg-9 col20-lg-offset-1 col20-md-9 col20-md-offset-1 col20-sm-9 '>
              <h1>Наборы</h1>
              <span className='profile_sets_popular'>Популярные наборы</span>
            </div>
            <div className='profile_sets_popular_block'>
              {
                popularSet.map(function(item, key) {
                  return(
                    <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                      <ReadyPopular data={item} key={++key} />
                    </div>
                  )
                })

              }
            </div>
          </div>
        </div>
      </section>
      <section className='profile_sets_section'>
        <div className='container'>
          <div className='row'>
            <div className='col20-lg-9 col20-lg-offset-1 col20-md-9 col20-md-offset-1 col20-sm-9 '>
              <h2>Мои наборы</h2>
            </div>
          </div>
          <div className='row'>
              <div className='col-lg-4 col-md-4 col-sm-6 col-xs-12'>
                <div className='profile_sets_white2'></div>
                <Link className='profile_sets_create' to='/addset' title='Coздать новый шаблон'>
                  <span>Создать новый</span>
                  <br/>
                  <span className='greenlighted'>набор</span>
                </Link>
                <span className='profile_sets_create_description'>Вы перейдёте в каталог
                </span>
              </div>

               {
                mySets.map(function(item, key) {
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

      </div>)
  }
}

function mapStateToProps (state) {
  return {
    SetsPage: state.user.SetsPage
  }
}



export default connect(mapStateToProps)(ProfileSets)


