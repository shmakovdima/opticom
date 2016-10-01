import '../../../stylus/components/item.styl';

import React, { Component } from 'react'
import {Link} from 'react-router'
import wordlenght from '../../function/wordlenght'
import cutnumber from '../../function/cutnumber'
import wordend from '../../function/wordend'



Date.prototype.getMonthName = function() {
    var month = ['Января','Февраля','Марта','Апреля','Мая','Июня',
    'Июля','Августа','Сентября','Октября','Ноября','Декабря'];
    return month[this.getMonth()];
}

//import $ from 'jquery'

export default class Order extends Component {

    refreshOrder() {
      console.log('Refresh Button - Refresh Array of Orders')
    }

    removeOrder() {
      console.log('Refresh Button - Send to Server and Refresh Array')
    }

    render() {

      var link =this.props.item.link
      var title = this.props.item.title 
      var category = this.props.item.category
      var address = this.props.item.address

      var date = new Date(this.props.item.date)
      date = date.getDate() + ' ' +date.getMonthName()

      var cost = cutnumber(this.props.item.cost) + ' ₽'
      var vendors = this.props.item.vendors+ ' ' + wordend(this.props.item.vendors, ['артикул','артикула','артикулов'])
      var editlink = this.props.item.editlink
      
      var status = this.props.item.status
      var statusClassName = 'item_orderblock_status'
      var statusText = ''
      
      switch(status){
        case 'active':
          statusClassName+= ' active'
          statusText = 'В обработке'
          break;
        case 'ready':
          statusClassName+= ' ready'
          statusText = 'Выполнен'
          break;
        default: 

      }


      return(
        <div className='item_gor item_orderitem'>
          <div className='item'>
            <div className='item_under'>
              <div className='item_orderblock'>
                 <Link className='item_orderblock_title' to={link} title={title}>{wordlenght(title,50)}</Link>
                 <span className='item_orderblock_category'>{category}</span>
                <span className='item_orderblock_address'>{address}</span>
              </div>

              <div className='item_orderblock_dateblock'>
                <span className='item_orderblock_date'>{date}</span>
              </div>

              <div className='item_orderblock_costblock'>
                <span className='item_orderblock_cost'>{cost}</span>
                <span className='item_orderblock_vendors'>{vendors}</span>
              </div>

              <div className='item_orderblock_statusblock'>
                <span className={statusClassName}>{statusText}
                </span>
              </div>

              <div className='item_orderblock_editblock'>
                <button className='item_orderblock_refresh' onClick={::this.refreshOrder}></button>
                <button className='item_orderblock_remove' onClick={::this.removeOrder}></button>
                <Link className='item_orderblock_edit' to={editlink} title='Изменить'></Link>
              </div>
            </div>
          </div>
        </div>  
      )


    }

}