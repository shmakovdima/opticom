import React, { Component } from 'react'
//import {Link} from 'react-router'
import {connect } from 'react-redux'
import Ready from '../Item/Ready'

import '../../../stylus/components/set.styl';


import { If, Then } from 'react-if';

class AllReadySet extends Component {
  render(){
    const windowWidth = this.props.windowWidth
    let allIsReady = JSON.parse(JSON.stringify(this.props.allSetReady))
  

    if ((windowWidth<=768) && (allIsReady.length>3))  {
      allIsReady = [allIsReady[0],allIsReady[1],allIsReady[2]]
    }

    let key = 14000
    return(
      <If condition={allIsReady.length>0}>
        <Then>
          <section className='catalog_preferences readyset'>
            <div className='container'>
              <div className='row'>
                <h2 className='col20-lg-offset-1 col-xs-12'>Есть в популярных наборах</h2>
              </div>
            </div>
            <div className='container'>
              <div className='row ready_container'>
              {
                allIsReady.map(function(item){
                  return(<div className='col-lg-4 col-xs-12 col-md-4 col-sm-6 ready_main'><Ready data={item} key={++key}/></div>)
                })
              }
              </div>
            </div>
          </section>
        </Then>
      </If>
    )
  }
}


function mapStateToProps (state) {
  return {
    AllIsReady: state.pageData.AllIsReady,
    windowWidth: state.pageData.windowWidth
  }
}


export default connect(mapStateToProps)(AllReadySet)