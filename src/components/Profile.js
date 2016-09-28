import React, { Component } from 'react'
import HeaderLight from '../components/Headers/HeaderLight'

export default class Profile extends Component {

  render() {
    return (
      <div className='profile'>
        <HeaderLight/>
        {this.props.children}
      </div>
    )}
}