import React, { Component } from 'react'
import {Link} from 'react-router'
import wordlenght from '../../function/wordlenght'
import wordend from '../../function/wordend'

export default class Ready extends Component  {
  render() {
    let img = this.props.data.image
    let link = this.props.data.link
    let title = wordlenght(this.props.data.title, 50)
    let hoverimg = this.props.data.hoverimage
    let count = this.props.data.count + ' ' + wordend(this.props.data.count, ['товар','товара','товаров'])

    return(
      <div className='ready'>
        <div className='ready_block'>
          <img src={img} className='ready_image' alt={title}/>
          <img src={hoverimg} className='ready_hover' alt={title}/>
          <div className='ready_addons'>
            <Link to={link} title={title} className='ready_title'>{title}</Link>
            <div className='ready_count'>{count}</div>
          </div>
        </div>
      </div>
    )
  }
}