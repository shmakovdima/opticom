import React, { Component } from 'react'
import $ from 'jquery'
import wordend from '../function/wordend'
import cutnumber from '../function/cutnumber'
export default class MountCost extends Component {

  SetData() {
    setTimeout(
      function() {
        $('span.cart_total_vendors').html($('.item').length + ' ' +wordend($('.item').length, ['артикул', 'артикула', 'артикулов']))
        
        var onecount = 0
        var alotcount = 0
        var totalprice = 0

        $('.item_cart').each(function(){

          var costone = parseInt($(this).attr('data-onecost'))
          var costpackage = parseInt($(this).attr('data-alotcost'))

          
          onecount+=parseInt($(this).attr('data-oneorder'));       
          alotcount+=parseInt($(this).attr('data-alotorder'));

          totalprice += costone * parseInt($(this).attr('data-oneorder')) + costpackage * parseInt($(this).attr('data-alotorder'))

        });

        var quant = (onecount>0) ? onecount+ ' ед.' : ''

        quant+= ((onecount>0) && (alotcount>0)) ? '  •  ' : ''
        quant+= (alotcount>0) ? alotcount+ ' шт.' : ''

        console.log(quant)


        $('.cart_total_cost').html(cutnumber(totalprice)+' ₽')
       $('.cart_total_qual').html(quant)
    }
    , 300);
  }

  componentDidMount() {
    this.SetData()
    var self = this
    $(document).on('click' ,'.item_order_plus, .item_order_minus, .item_cart_remove', function(){
      self.SetData()
    })
  }

  render(){
    return(
      <div>
      </div>
    )
  }
}