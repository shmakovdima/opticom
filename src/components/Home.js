import React, { Component } from 'react'
import HeaderLight from './Headers/HeaderLight'

export default class Home extends Component {
  render() {
    return (
      <div>
        <HeaderLight/>
        <div className='row'>
          <div className='col-md-12'>Раздел /</div>
        </div>
      </div>
    )
  }
}
