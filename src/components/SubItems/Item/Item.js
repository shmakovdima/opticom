import React, { Component } from 'react'
import {connect } from 'react-redux'
import '../../../stylus/components/item.styl';
import {Link} from 'react-router'
import { bindActionCreators } from 'redux'
import * as pageActions from '../../../actions/setLove'

import wordlenght from '../../function/wordlenght'

import cutnumber from '../../function/cutnumber'

//import { DropdownButton, MenuItem} from 'react-bootstrap'

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


class LoveButton extends Component {

  constructor(props) {
    super(props);
    var loveindicator = this.props.data.item.loved

    console.log('loveindicator' + loveindicator)

    if (loveindicator==true) {
      this.changeLove(loveindicator)
    } 

  }

  changeLove(loveindicator) {
    let array = JSON.parse(JSON.stringify(this.props.data.lovedItems))
    let id = this.props.data.item.id

    if (array.indexOf(id) == -1) {
      this.props.setLove(array.concat(id))
    }else{
      console.log('indexof' + array.indexOf(id))
      this.props.setLove(array.removeByValue(id))
    }    

    if (loveindicator==true) {
      if (array.indexOf(id) == -1) {
        this.props.setLove(array.concat(id))
      }
    }


  } 
  render() {

    

    let loved = 'item_love pull-left'
    let id = this.props.data.item.id
    let array = JSON.parse(JSON.stringify(this.props.data.lovedItems))


    const eco = this.props.data.item.eco

    let Eco

    if (eco == true) {
      Eco = (<span className='item_eco pull-right'></span>)
    }

    if (array.indexOf(id) != -1) loved+=' active'
    return(
      <div>
        <button className={loved} onClick={::this.changeLove}></button>
        {Eco}
      </div>
    )
  }
}


class Item extends Component {

  constructor(props) {
    super(props);
    this.state = {
      one: true,
      oneorder: 0,
      alotorder: 0
    };
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
    }
  }

  setChange() {


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
    
    const windowWidth = this.props.windowWidth
    const itemgor = (this.props.itemgor && (windowWidth>991))  ? 'item_gor' : ''
    //var dropdownmode = (this.state.one) ? 'поштучно' : 'упаковки' 

    const data = this.props
    const {setLove} = this.props.pageActions
    const description = this.props.item.description

    const link = 'http://' + window.location.host + '/' + this.props.item.link
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

    if ((this.state.one==false) && (this.state.alotorder>0)) additiontext+=', отложено '+this.state.alotorder
    if ((this.state.one==true) && (this.state.oneorder >0)) additiontext+=', отложено '+this.state.oneorder


    var textcost, textcostgor 

    if (this.state.one==true) {
      textcost = this.props.item.cost.one
      textcostgor = textcost * this.state.oneorder
    }else{
      textcost = this.props.item.cost.packaging
      textcostgor = textcost * this.state.alotorder
    }
    textcost = cutnumber(textcost) + ' ₽'
    console.log('itemgor ' + itemgor)

    var cost;

    if ((itemgor!='item_gor')) {
      if (this.props.item.discount == false) {
        cost = (<div className='item_bottom'>
          <span className='item_cost'>{textcost}</span>
          <span className='item_cost_description'>{additiontext}</span>
          <button className='item_hide_gor item_order_button'>в корзину</button>
        </div>)
      }else{

        let discountcost;
        if (this.state.one==true) {
          discountcost = cutnumber(this.props.item.cost.discountone)+ ' ₽'
        }else{
          discountcost = cutnumber(this.props.item.cost.discountpackaging)+ ' ₽'
        }

        
        cost = (<div className='item_bottom'>
          <span className='item_discount'>{textcost}</span>
          <span className='item_cost'>{discountcost}</span>
          <span className='item_cost_description'>{additiontext}</span>
          <button className='item_hide_gor item_order_button'>в корзину</button>
        </div>)
      }
    }
    else {


      additiontext = (this.state.one==true) ? 'за шт.' : 'за уп.'

      if (this.props.item.discount == false) {
        cost = (<div className='item_bottom'>
          <span className='item_cost'>{cutnumber(textcostgor) + ' ₽'}</span>
          <span className='item_cost_description'>{textcost + ' ' + additiontext}</span>
          <button className='item_hide_gor item_order_button'>в корзину</button>
        </div>)
      }else{

        let discountcost;
        if (this.state.one==true) {
          discountcost = cutnumber(this.props.item.cost.discountone * this.state.oneorder)+ ' ₽'
        }else{
          discountcost = cutnumber(this.props.item.cost.discountpackaging * this.state.alotorder)+ ' ₽'
        }

        cost = (<div className='item_bottom'>
          <span className='item_discount'>{cutnumber(textcostgor) + ' ₽'}</span>
          <span className='item_cost'>{discountcost}</span>
          <span className='item_cost_description'>{textcost + ' ' + additiontext}</span>
          <button className='item_hide_gor item_order_button'>в корзину</button>
        </div>)
      }
    }



    const titleshow = wordlenght(title, 50)
    const titleshow_hover = wordlenght(title, 80)


    

    return(
      <div className={itemgor}>        
        <div className='item '>
          <div className='item_under'>
            <LoveButton data={data} setLove={setLove} />
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
             {cost}

        {/*
            <div className='item_dropdown item_hide_gor pull-right'>
              <DropdownButton title={dropdownmode} id='bg-nested-dropdown'>
                <div>
                  <MenuItem onClick={::this.setOne} eventKey='1'>поштучно</MenuItem>
                  <MenuItem onClick={::this.setAlot} eventKey='2'>упаковки</MenuItem>
                </div>
              </DropdownButton>
            </div>

          */}
            <div className='item_desription'>
              {
               description.map(function(item) {
                  return (
                    <div className='text-left'>
                      <span className='item_desription_value '><span className='item_desription_title'>{item.title}:</span> {item.value}</span>
                    </div>
                  )
                })
              }
            </div>
            <div className='item_order'>
              <div className='item_order_buttons'>
                <button className={item_order_buttons_one} onClick={::this.setOne}>штуки</button>
                <button className={item_order_buttons_alot} onClick={::this.setAlot}>упаковки</button>
              </div>
              <div className='item_order_body'>
                <button className='item_order_minus' onClick={::this.setMinus}>-</button>
                <input disabled pattern='[0-9]{1,3}' type='text' className='item_order_input' onChange={::this.setChange} value={inputValue}/>
                <button className='item_order_plus' onClick={::this.setPlus}>+</button>
                <button className='item_order_button'>В корзину</button>
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
    lovedItems: state.pageData.lovedItems,
    windowWidth: state.pageData.windowWidth
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Item)