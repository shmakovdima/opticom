import React, { Component } from 'react'
import HeaderLight from '../Headers/HeaderLight'
import '../../stylus/components/press.styl';
import '../../stylus/components/profile.styl';



export default class Press extends Component {

  render() {
    return (
      <div className='press profile profile_sets'>
        <HeaderLight/>

        {this.props.children}
        
        
      </div>
    )
  }
}

