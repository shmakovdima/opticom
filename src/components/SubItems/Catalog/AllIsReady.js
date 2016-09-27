import React, { Component } from 'react'
import {Link} from 'react-router'
import {connect } from 'react-redux'
import Ready from '../Item/Ready'

import '../../../stylus/components/set.styl';

class AllIsReady extends Component {
  render(){
    const windowWidth = this.props.windowWidth
    let allIsReady = JSON.parse(JSON.stringify(this.props.AllIsReady))
  

    if (windowWidth<=768) {
      allIsReady = [allIsReady[0],allIsReady[1],allIsReady[2]]
    }

    let key = 14000
    return(
      <section className='catalog_preferences'>
        <div className='container'>
          <div className='row'>
            <h2 className='col-xs-12 col20-lg-offset-1'>Все уже готово</h2>
            <span className='col-xs-12 catalog_preferences_link'>
              <span className='col20-lg-offset-1'>Попробуйте наши </span>
              <Link  to='catalog/ready_set' className='green_underline' title='Готовые наборы' >готовые наборы</Link>
            </span>
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
    )
  }
}


function mapStateToProps (state) {
  return {
    AllIsReady: state.pageData.AllIsReady,
    windowWidth: state.pageData.windowWidth
  }
}


export default connect(mapStateToProps)(AllIsReady)