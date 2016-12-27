function removeByKey(array, params){
  array.some(function(item, index) {
    if(array[index][params.key] === params.value){
      // found it!
      array.splice(index, 1);
    }
  });
  return array;
}

import React, { Component } from 'react'
import '../../stylus/components/profile.styl'
import '../../stylus/components/item.styl';
import { If, Then } from 'react-if';
import * as pageActions from '../../actions/setReaded'
import getDate from '../function/getDate'
import { bindActionCreators } from 'redux'
import {connect } from 'react-redux'
import {DropdownButton, MenuItem} from 'react-bootstrap'
import $ from 'jquery'

class Message extends Component {


  render() {

    var title = this.props.item.message
    var date = getDate(this.props.item.date)
    var item = this.props.item


    return(
      <div className='item_gor item_message'>
        <div className='item'>
          <div className='item_under'>
            <span className='item_message_title'>{title}</span>
            <span className='item_message_date'>{date}</span>
            <button onClick={this.props.removeMessage.bind(this, item)} className='item_message_remove'></button>

          </div>
        </div>
      </div>
    )

  }
}

class ProfileMessages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sendto: 'person',
      FileList: []
    };
  }

  changeFiles() {
    this.setState({
      FileList: (document.getElementById('append_file')) ? document.getElementById('append_file').files : []

    })
  }

  addFile() {
    $('#append_file').click()
  }


  setSendto(variant) {
    this.setState({
      sendto: variant
    }) 
  }


  removeMessage(item){
    console.log(this.props.Messages)
    var Messages = JSON.parse(JSON.stringify(this.props.Messages))
    
    Messages = removeByKey(Messages, {
      key: 'id',
      value: item.id
    });
    console.log(Messages);

    this.props.setReaded(Messages)
  }

  setAllReaded(){


    var Messages = JSON.parse(JSON.stringify(this.props.Messages))

    Messages.map(function(item,key){
      if (item.status == 'unreaded') Messages[key].status = 'readed'
    })

    this.props.pageActions.setReaded(Messages)
  }


  


  render() {
    
    console.log(FileList)
  
    var New = []
    var Readed = []

    var Messages = this.props.Messages

      Messages.map(function(item){

      switch(item.status) {
        case 'readed':
          Readed.push(item);
          break;
        case 'unreaded':
          New.push(item);
          break;
        default:
          return false;
      }       
    })


    var self = this
    var setReaded = this.props.pageActions.setReaded

    var newlength = New.length


      var texttosend ;

    switch(this.state.sendto) {
      case 'person':
        texttosend = 'Персональному менеджеру'
        break;

      case 'departamentlead':
        texttosend = 'Руководителю отделения'
        break;
      case 'director':
        texttosend = 'Директору'
        break;
      default:
    }


  var FileNames = []
  var FileList = this.state.FileList

  for (var i = 0; i < FileList.length; i++) {
    var file = FileList[i];
    FileNames.push(file.name)
  }


  return(
      <div className='profile'>
        <section className='profile_sets_header'>
           <div className='container'>
              <div className='row'>
                <div className='col20-lg-9 col20-lg-offset-1 col20-md-9 col20-md-offset-1 col20-sm-9 '>
                  <h1>Сообщения</h1>
                </div>
              </div>
          </div>
        </section>
        <section className='profile_messages'>
          <div className='container'>
            <div className='row'>
              <div className='col20-lg-12 col20-md-12 col20-xs-20'>
                <If condition={New.length>0}>
                  <Then>
                    <div className='profile_orders_block '>
                      <div className='col20-xs-20'>
                        <h2 className='col-sm-offset-1'>Новые
                          
                        </h2>
                        <span className='profile_messages_lenght'>{newlength}</span>
                        <button className='profile_messages_new greenlighted text-left' onClick={::this.setAllReaded}>Отметить все как прочитанные</button>
                      </div>

                      <div>
                        {
                          New.map(function(item){
                            return(
                              <Message setReaded={setReaded} Messages = {Messages} removeMessage={self.removeMessage} item={item}/>
                            )
                            
                          })
                        }
                      </div>
                    </div>
                  </Then>
                </If>
                <If condition={Readed.length>0}>
                  <Then>
                    <div className='profile_orders_block '>
                      <div className=''>
                        <h2 className='col-sm-offset-1'>Просмотренные</h2>
                      </div>
                      <div>
                        {
                          Readed.map(function(item){
                            return(
                              <Message setReaded={setReaded} Messages = {Messages} removeMessage={self.removeMessage} item={item}/>
                            )
                          })
                        }
                      </div>
                    </div>
                  </Then>
                </If>

              
              </div>
              <div className='col20-lg-offset-2 col20-lg-6 col20-md-offset-2 col20-md-6 col20-xs-20'>
                <div className='profile_messages_block'>
                  <h2>Есть вопросы? Напишите нам</h2>

                    <div className='profile_orders_dropdown'>
                      <div className='profile_orders_dropdown_block'>
                       <DropdownButton title={texttosend} id='bg-nested-dropdown'>
                          
                          <MenuItem onClick={this.setSendto.bind(this, 'person')} eventKey={0}>Персональному менеджеру</MenuItem>
                          <MenuItem onClick={this.setSendto.bind(this, 'departamentlead')} eventKey={0}>Руководителю отделения</MenuItem>
                          <MenuItem onClick={this.setSendto.bind(this, 'director')} eventKey={0}>Директору</MenuItem>


                       </DropdownButton>
                      </div>
                    </div>
                    <div className='profile_block'>
                      <div className='profile_messages_input'>
                        <input placeholder='Тема' type='text'/>
                      </div>
                      <div className='profile_messages_textarea'>
                        <textarea placeholder='Ваше сообщение'></textarea>
                      </div>
                      <div className='profile_messages_checkbox'>
                        <input id='callback' type='checkbox'/>
                        <label htmlFor='callback'></label>
                        <span>Перезвоните мне</span>
                      </div>

                      <div className='profile_messages_append'>
                        <input onChange={::this.changeFiles} id='append_file' type='file' multiple/>
                        <button className='profile_messages_attach' onClick={::this.addFile}>Прикрепить файл</button>
                        <button className='pull-right profile_messages_send'>Отправить</button>
                      </div>
                      <div className='profile_messages_filelist'>
                        {
                          FileNames.map(function(item){
                            return(
                              <span>{item}</span>
                            )

                          })

                        } 
                      </div>
                      
                      
                    </div>
                </div>
                <span className='profile_messages_callback'>
                  <span>Или звоните</span>
                  <br/>
                  <a href='tel:+7-495-980-06-48' title='Телефон'>+7-495-980-06-48</a>

                </span>
              </div>
            </div>
          </div>
        </section>
      </div>

    )

  }

}




function mapStateToProps (state) {
  return {
    Messages: state.user.Messages,
    windowWidth: state.pageData.windowWidth
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProfileMessages)









