import React, { Component } from 'react'
import {connect } from 'react-redux'
import '../../../stylus/components/item.styl';
import {Link} from 'react-router'
import { bindActionCreators } from 'redux'
import * as pageActions from '../../../actions/setLove'

import wordlenght from '../../function/wordlenght'
import wordend from '../../function/wordend'

import {If ,Then ,Else } from 'react-if';
import cutnumber from '../../function/cutnumber'


import $ from 'jquery'

Array.prototype.removeByValue = function(item){
  var itemIndex = -1;
  for (var index = 0; index < this.length; index++)
  {
      if (this[index] == item){
          itemIndex=index;
      }
  }
  
  if (itemIndex == -1){
      return this;
  }
  
  var resultLeft = this.slice(0, itemIndex);
  var resultRight = this.slice(itemIndex+1, this.length);
  var resultTotal = resultLeft.concat(resultRight);

  return resultTotal;
 };

$.fn.ForceNumericOnly =function(){
    return this.each(function()
    {
        $(this).keydown(function(e)
        {
            var key = e.charCode || e.keyCode || 0;
            // allow backspace, tab, delete, enter, arrows, numbers and keypad numbers ONLY
            // home, end, period, and numpad decimal
            return (
                key == 8 || 
                key == 9 ||
                key == 13 ||
                key == 46 ||
                key == 110 ||
                key == 190 ||
                (key >= 35 && key <= 40) ||
                (key >= 48 && key <= 57) ||
                (key >= 96 && key <= 105));
        });
    });
};


class CartItem extends Component {

  constructor(props) {
    super(props);

    var oneorder = 0
    var packaging = 0
    if (this.props.item.buyed) {
      oneorder = ('one' in this.props.item.buyed) ? this.props.item.buyed.one : 0
      packaging = ('packaging' in this.props.item.buyed) ? this.props.item.buyed.packaging  : 0
    }

    this.state = {
      one: true,
      oneorder: oneorder,
      alotorder: packaging
    };
  }

  removeItem() {
    console.log('Удаление элемента')
  }

  setPlus() {
    if (this.state.one==false) {
      this.setState({
        alotorder: ++this.state.alotorder
      }) 
    }else{
      this.setState({
        oneorder: ++this.state.oneorder
      }) 
    }
  }

  setMinus() {
    if (this.state.one==false) {
      if (this.state.alotorder == 0) return;
      this.setState({
        alotorder: --this.state.alotorder
      }) 
    }else{
      if (this.state.oneorder == 0) return;
      this.setState({
        oneorder: --this.state.oneorder
      }) 
    }  }

  setChange(e) {
    e.preventDefault()

    let inputValue = e.target.value
    inputValue = inputValue.replace(/\s/g, '')
    let value = parseInt(inputValue)

    if (value > 999999) {
      value = Math.floor(value/10)
    }

  
    if ((value <= 0) || (value=='') || (isNaN(value))) value = 0;

    if (this.state.one==true) {
      this.setState({
        oneorder: value
      })
    }else{
      this.setState({
        alotorder: value
      })
    }
  }


  setOne() {
    this.setState({
      one: true
    })
    $('.btn-group').removeClass('open')
  }
  setAlot() {
    this.setState({
      one: false
    })
    $('.btn-group').removeClass('open')
  }

  render() {
    

    var windowWidth = this.props.windowWidth
    const link = this.props.item.link
    const title = this.props.item.title
    const image = this.props.item.image
    const vendorcode = this.props.item.vendorcode

    var inputValue

    if (this.state.one==true) {
      inputValue = this.state.oneorder
    }else{
      inputValue = this.state.alotorder
    }

    var item_order_buttons_one = 'item_order_buttons_one'
    if (this.state.one==true) item_order_buttons_one = 'item_order_buttons_one active'

    var item_order_buttons_alot = 'item_order_buttons_alot'
    if (this.state.one==false) item_order_buttons_alot = 'item_order_buttons_alot active'

    var newitem
    if (this.props.item.new == true) {
      newitem = (<span className='item_new'>Новинка</span>)
    }

    var additiontext = 'за одну штуку'

    if (this.state.one==false) additiontext = 'за одну упаковку'


    var textcost = cutnumber(this.props.item.cost.one) + ' ₽'
  
    var cost;

    if (this.props.item.discount == false) {
      cost = (<div className='item_bottom'>
        <span className='item_cost'>{textcost}</span>
        <span className='item_cost_description'>{additiontext}</span>   
      </div>)
    }else{
      const discountcost = cutnumber(this.props.item.cost.discountone)+ ' ₽'
      cost = (<div className='item_bottom'>
        <span className='item_discount'>{textcost}</span>
        <span className='item_cost'>{discountcost}</span>
        <span className='item_cost_description'>{additiontext}</span>
      </div>)
    }

    var textcount = ''

    var onecost = (this.props.item.discount == false) ? this.props.item.cost.one : this.props.item.cost.discountone 
    var alotcost =  (this.props.item.discount == false) ? this.props.item.cost.packaging : this.props.item.cost.discountpackaging

    console.log(textcount)

    if ('buyed' in this.props.item) {
      if ('one' in this.props.item.buyed) textcount = this.props.item.buyed.one+ ' ' + wordend(this.props.item.buyed.one, ['штука','штуки','штук'])
      if ('packaging' in this.props.item.buyed) textcount = this.props.item.buyed.packaging+ ' ' + wordend(this.props.item.buyed.packaging, ['упаковка','упаковки','упаковок'])
    } 

    var submit = (this.props.submit) ? true : false


    const titleshow = wordlenght(title, 50)
    const titleshow_hover = wordlenght(title, 100)

    var classN = 'item_gor item_cart'
    if (windowWidth<1300) {
      classN = 'item_cart'
    }

    return(
      <div data-alotcost={alotcost} data-onecost={onecost}  data-alotorder={this.state.alotorder} data-oneorder={this.state.oneorder} className={classN}>
           
        <div className='item'>
          <div className='item_under'>
            <div className='item_image_block'>
              {newitem}
               <div className='item_image' style={{backgroundImage: 'url(http://' + window.location.host + '/'+image + ')'}}></div>
              {}
            </div>
            <div className='item_title_block'>
              <Link className='item_title text-left' to={link} title={title}>{titleshow}</Link>
              <Link className='item_title hover text-left' to={link} title={title}>{titleshow_hover}</Link>
              <span className='item_vendorcode'>{vendorcode}</span>
            </div>
            <If condition={this.props.remove == true}>
              <Then>
                <div className='item_cart_remove' onClick={::this.removeItem}></div> 
              </Then>
            </If>
              
             {cost}
            <div className='item_order_body item_hide_gor pull-right'>
              <div className='item_order_buttons'>
                <If condition={submit==false}>
                  <Then>
                    <div>
                      <div>
                          <button className={item_order_buttons_one} onClick={::this.setOne}>штуки</button>
                          <button className={item_order_buttons_alot} onClick={::this.setAlot}>упаковки</button>
                        </div>
                        <div className='item_cart_buttonbody text-center'>
                          <div className='item_cart_buttoninput text-center'>
                            <button className='item_order_minus' onClick={::this.setMinus}>-</button>
                            <input pattern='[0-9]{1,3}' type='text' className='item_order_input' onChange={::this.setChange} value={cutnumber(inputValue)} defaultValue={cutnumber(inputValue)}/>
                            <button className='item_order_plus' onClick={::this.setPlus}>+</button>
                          </div>
                        </div>  
                      </div>

                  </Then>
                  <Else>
                    <div>
                      <span className='item_cart_count'>{textcount}</span>
                    </div>
                  </Else>
                </If>
              </div> 

                
            </div>

            <div className='item_order'>
              <div className='item_order_buttons'>
                <button className={item_order_buttons_one} onClick={::this.setOne}>штуки</button>
                <button className={item_order_buttons_alot} onClick={::this.setAlot}>упаковки</button>
              </div>
              <div className='item_order_body text-center'>

                <button className='item_order_minus' onClick={::this.setMinus}>-</button>
                <input pattern='[0-9]{1,3}' type='text' className='item_order_input' onChange={::this.setChange} value={cutnumber(inputValue)} defaultValue={cutnumber(inputValue)}/>
                <button className='item_order_plus' onClick={::this.setPlus}>+</button>
              </div>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

function mapStateToProps (state) {
  return {
    windowWidth: state.pageData.windowWidth
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartItem)