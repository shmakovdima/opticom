

import '../../stylus/components/profile.styl'
import React, { Component } from 'react'
import {connect } from 'react-redux'



import ItemsSlider from './components/ItemSlider'



class ProfileSpecial extends Component {




  render(){
 


    var windowWidth = this.props.windowWidth
    var Special = (this.props.Special) ? this.props.Special : []


    return(
      <div className='profile'>
        <section className='profile_sets_header'>
           <div className='container'>
            <div className='row'>
              <div className='col20-lg-9 col20-lg-offset-1 col20-md-9 col20-md-offset-1 col20-sm-9 '>
                <h1>Спецпредложения</h1>
              </div>
            </div>
          </div>
        </section>
        <section className='profile_items special'>
          <div className='container'>
            <div className='profile_items_tabs'>
              <ItemsSlider windowWidth={windowWidth} data={Special}/>
            </div>
        
          </div>
        </section>

      </div>
    )
  }
}

function mapStateToProps (state) {
  return {
    Special: state.user.Special,
    windowWidth: state.pageData.windowWidth
  }
}



export default connect(mapStateToProps)(ProfileSpecial)


