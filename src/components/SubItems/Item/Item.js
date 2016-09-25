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




import React, { Component } from 'react'
import {connect } from 'react-redux'
import '../../../stylus/components/item.styl';

import { bindActionCreators } from 'redux'
import * as pageActions from '../../../actions/setLove'


class LoveButton extends Component {
  changeLove() {

    let array = JSON.parse(JSON.stringify(this.props.data.lovedItems))
    let id = this.props.data.item.id

    if (array.indexOf(id) == -1) {
      this.props.setLove(array.concat(id))
    }else{
      console.log('indexof' + array.indexOf(id))
      this.props.setLove(array.removeByValue(id))
    }



    
  } 
  render() {
    let loved = 'item_love'
    let id = this.props.data.item.id
    let array = JSON.parse(JSON.stringify(this.props.data.lovedItems))

    if (array.indexOf(id) != -1) loved+=' active'
    return(
      <div>
        <button className={loved} onClick={::this.changeLove}></button>
      </div>
    )
  }
}


class Item extends Component {
  render() {
    const data = this.props
    const {setLove} = this.props.pageActions


    return(
      <div className='item'>
        <LoveButton data={data} setLove={setLove} />
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
    lovedItems: state.pageData.lovedItems
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Item)