import '../stylus/components/item.styl';
import '../stylus/components/category.styl';


import {connect } from 'react-redux'
import React, { Component } from 'react'
import {Link} from 'react-router'
import HeaderLight from '../components/Headers/HeaderLight'

import cutnumber from './function/cutnumber'

import { bindActionCreators } from 'redux'
import * as pageActions from '../actions/setLove'

import AllReadySet from './SubItems/ItemPage/AllReadySet'
import BuyToo from './SubItems/ItemPage/BuyToo'

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




class LoveButton extends Component {
  changeLove() {
    let array = JSON.parse(JSON.stringify(this.props.data.lovedItems))
    let id = this.props.data.curItem.id
    if (array.indexOf(id) == -1) {
      this.props.setLove(array.concat(id))
    }else{
      console.log('indexof' + array.indexOf(id))
      this.props.setLove(array.removeByValue(id))
    }    
  } 
  render() {
    let loved = 'item_love itempage_love pull-left'
    let id = this.props.data.curItem.id
    let array = JSON.parse(JSON.stringify(this.props.data.lovedItems))




    if (array.indexOf(id) != -1) loved+=' active'
    return(
      <div>
        <button className={loved} onClick={::this.changeLove}></button>
        
      </div>
    )
  }
}






class ItemPage extends Component {

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
      this.setState({
        alotorder: --this.state.alotorder
      }) 
    }else{
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





  render(){

    const allSetReady = this.props.curItem.allSetReady

    const buyToo = this.props.curItem.BuyToo

    const data = this.props

    var breadcrumbs = []
    if (this.props.curItem.breadcrumbs!=undefined) {
      breadcrumbs = this.props.curItem.breadcrumbs
    }

    let title = this.props.curItem.title

    var breadcrumb_link =  'http://' + window.location.host + '/'

    const {setLove} = this.props.pageActions

    const eco = this.props.curItem.eco

    const fulldescriptionlink = this.props.curItem.fulldescriptionlink

    let Eco


    var AdditionItems = []

    if (this.props.curItem.accordings!=undefined) {
      AdditionItems = this.props.curItem.accordings
    }


    if (eco == true) {
      Eco = (<span className='item_eco itempage_eco pull-right'></span>)
    }

    const image = this.props.curItem.image

    let description = this.props.curItem.description
    let vendorcode = this.props.curItem.vendorcode

    var textcost = cutnumber(this.props.curItem.cost.one) + ' ₽'

    var cost;

    if (this.props.curItem.discount == false) {
      cost = (<div className='item_bottom itempage_bottom'>
        <span className='item_cost'>{textcost}</span>
     
      </div>)
    }else{
      const discountcost = cutnumber(this.props.curItem.cost.discountone)+ ' ₽'

      cost = (<div className='item_bottom itempage_bottom'>
        <span className='item_discount'>{textcost}</span>
        <span className='item_cost'>{discountcost}</span>
   
      </div>)
    }


    var item_order_buttons_one = 'item_order_buttons_one'
    if (this.state.one==true) item_order_buttons_one = 'item_order_buttons_one active'

    var item_order_buttons_alot = 'item_order_buttons_alot'
    if (this.state.one==false) item_order_buttons_alot = 'item_order_buttons_alot active'

    var inputValue

    if (this.state.one==true) {
      inputValue = this.state.oneorder
    }else{
      inputValue = this.state.alotorder
    }

    var boxdescription = this.props.curItem.boxdescription

    return(
      <div className='itempage'>
        <HeaderLight/>

        <section className='category_header'>
          <div className='container'>
            <div className='row'>
              <div className='category_header_absolute'>
                <div className='col20-lg-offset-3 col20-md-offset-2 col20-sm-offset-3 col20-lg-17 col20-md-17 col20-sm-17'>
                <div className='category_header_white'>
                  <LoveButton data={data} setLove={setLove} />
                  <Link className='itempage_fulldesc greenborderbottom' to={fulldescriptionlink} title='Подробная информация'>
                    <span>Подробная информация</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='itempage_pad col20-lg-offset-1 col15-lg-8  col15-md-8 col15-sm-8'>
              <ol className='breadcrumb'>
                {
                  breadcrumbs.map(function(item) {

                    breadcrumb_link+=item.link+'/'
                    return(
                      <li className='breadcrumb-item'>
                        <Link to={breadcrumb_link} title={item.title}>{item.title}</Link>
                      </li>
                    )
                  })
                }
              </ol>
              <h1 className='itempage_title'>{Eco}{title}</h1>
              <div className='col20-lg-offset-2'>
                <span className='itempage_vendorcode'>{vendorcode}</span>
                <span className='itempage_description'>{description}</span>
                {cost}


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
                <span className='itempage_box'>{boxdescription}</span>

              </div>

              
            </div>
            <div className='col15-lg-6 itempage_pad itempage_pic col15-md-6 col15-sm-6'>
              <div style={{backgroundImage: 'url(http://' + window.location.host + '/'+image + ')'}} className='pull-right itempage_image'>
              </div>
            </div>
          </div>
          <div className='row itempage_adddesc'>
            <div className='col20-lg-offset-1 col20-lg-19'>
              <div className='col20-lg-offset-1 col20-lg-19'>
                <div className='col-md-6 col-lg-6 col-sm-6'>
                  <h3>С этим товаром вам понадобятся</h3>
                  <div className='itempage_add'>
                  {
                    AdditionItems.map(function(item){    
                     
                      return(
                        <div className='span4 itempage_addings'  style={{backgroundImage: 'url(http://' + window.location.host + '/'+item.image + ')'}}>
                          <Link to={item.image} title={item.href}>{item.title}</Link>
                        </div>

                      )
                    })
                  }
                  </div>

                </div>
                <div className='col-md-5 col-lg-5 col-sm-5 pull-right'>
                  <span className='itempage_car'>
                    Мы доставляем товары в 83 региона России
                    <br/>
                    <Link className='greenborderbottom' to='delivery' title='Подробнее о доставке'><span>Подробнее о доставке</span></Link>
                  </span>
                  <div className='itempage_addons'>
                    <Link className='greenborderbottom' to={fulldescriptionlink} title='Подбор ассортимента для вас'>
                      <span>Подбор ассортимента для вас</span>
                    </Link>
                    <Link className='greenborderbottom' to={fulldescriptionlink} title='Запрос на финансирование в рассрочку'>
                      <span>Запрос на финансирование в рассрочку</span>
                    </Link>
                    <Link className='greenborderbottom' to={fulldescriptionlink} title='Обучение'>
                      <span>Обучение</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        </section>



        <BuyToo buyToo={buyToo}/>
        <AllReadySet allSetReady={allSetReady}/>
      </div>

    )
  }

}


function mapStateToProps (state) {
  return {
    curItem: state.pageData.curItem,
    lovedItems: state.pageData.lovedItems,
    windowWidth: state.pageData.windowWidth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ItemPage)