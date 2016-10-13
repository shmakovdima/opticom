
import React, { Component } from 'react'
import MountCost from './MountCost'
export default class CartRight extends Component {
  render(){
    return(
      <div>
        <h2>Итого</h2>
        <span className='cart_total_cost'>18 056 ₽</span>
        <span className='cart_total_vendors'></span>
        <span className='cart_total_qual'>
          <span>32 ед.</span>
          <span> • </span>
          <span>4 уп.</span>                  
        </span>
        
        <span className='cart_total_waiting'>
          Ожидаемая дата поставки — 24 мая
        </span>
        <MountCost/>
      </div>
    )
  }
}