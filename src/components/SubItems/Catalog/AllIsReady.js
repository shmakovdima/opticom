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
            <h2 className='col20-lg-offset-1'>Все уже готово</h2>
            <span className='catalog_preferences_link'>
              <span className='col20-lg-offset-1'>Попробуйте наши </span>
              <Link  to='catalog/ready_set' className='green_underline' title='Готовые наборы' >готовые наборы</Link>
            </span>
          </div>
        </div>
        <div className='container'>
          <div className='row ready_main'>
          {
            allIsReady.map(function(item){
              return(<div className='col-lg-4'><Ready data={item} key={++key}/></div>)
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