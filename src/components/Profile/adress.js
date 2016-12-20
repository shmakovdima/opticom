import React, { Component } from 'react'
import $ from 'jquery'
import {Link} from 'react-router'
import { If, Then, Else } from 'react-if';


export default class Adress extends Component {

  constructor(props) {
    super(props);
    this.state = {
      editAddress: false
    }
  }

  editAddress(){
    $('.address_edit_cancel').click()
    this.setState({editAddress: !this.state.editAddress })
  }

  render(){
    let key =this.props.keyitem
    let title = (this.props.item.title) ? this.props.item.title : ''
    let address = (this.props.item.address) ? this.props.item.address : ''
    let sendinvite = (this.props.item.sendinvite) ? this.props.item.sendinvite : ''
    let edit = (this.props.edit || this.state.editAddress) ? true : false


    return(
      
        <If condition={edit!=true}>
          <Then>
            <div className='item_gor address' data-key={key}>
              <div className='item'>
                <div className='item_under'>
                  <span className='item_title'>{title}</span>
                  <span className='item_address'>{address}</span>
                  <div className='item_address_links'>
                    <button className='greenborderbottom' onClick={::this.editAddress} title='Редактировать'><span>Редактировать</span></button>
                    <Link className='greenborderbottom' to={sendinvite} title='Выслать приглашение'><span>Выслать приглашение</span></Link>
                  </div>
                </div>
              </div>
            </div>
          </Then>
          <Else>
            <div className='item_gor address edit' data-key={key}>
              <div className='item'>
                <div className='item_under'>
                  <input type='text' defaultValue={title} refs='addressName' id='addressName' placeholder='Название'/>
                  <input type='text' defaultValue={address} refs='addressValue' id='addressValue' placeholder='Адрес'/>
                  <input type='hidden' refs='addressInvite' id='addressInvite' defaultValue={sendinvite}/>
                  <div>
                    <button className='button pull-right address_edit_save' data-key={key} onClick={::this.editAddress}>Сохранить</button>
                    <button className='button white pull-right address_edit_cancel' onClick={::this.editAddress}>Отменить</button>
                  </div>
                </div>
              </div>
            </div>
          </Else>
        </If>
    )
  }
}

