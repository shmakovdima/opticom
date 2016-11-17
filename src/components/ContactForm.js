import React, { Component } from 'react'
import { Modal } from 'react-bootstrap'
import $ from 'jquery'
import isValidEmailAddress from './function/isValidEmailAddress'
import '../stylus/components/modal.styl';
import '../stylus/components/login.styl';

export default class ContactForm extends Component {

  

  componentDidMount() {
     $(document).on('change', '.email', function(e){
      e.preventDefault();
      if (isValidEmailAddress($(this).val())){
        console.log('not valid')
        $(this).addClass('ok')
      }else{
        console.log('valid')
        $(this).removeClass('ok')
      }
    })
  }
  render() {
    return(
      <div className='contact'>
        <Modal {...this.props} bsSize='small' aria-labelledby='contained-modal-title-lg'>
          <Modal.Body>
            <button className='contact_close'></button>
            <div className='row'>
                <div className='well well-sm'>
                    <form className='form-horizontal' action='' method='post'>
                    <fieldset>
                      <legend className='text-center'>Cвяжитесь с нами</legend>
              
                      
                      <div className='form-group'>
                        <label className='col-md-4 control-label' htmlFor='name'>Ваше имя</label>
                        <div className='col-md-8'>
                          <input id='name' name='name' type='text' placeholder='Ваше имя' className='form-control'/>
                        </div>
                      </div>
              
                      
                      <div className='form-group'>
                        <label className='col-md-4 control-label ' htmlFor='email'>Ваш email</label>
                        <div className='col-md-8'>
                          <input id='email' name='email' type='text' placeholder='Ваш email' className='form-control email'/>
                        </div>
                      </div>
              
                      
                      <div className='form-group'>
                        <label className='col-md-4 control-label' htmlFor='message'>Ваше сообщение</label>
                        <div className='col-md-8'>
                          <textarea className='form-control' id='message' name='message' placeholder='Ваше сообщение...' rows='5'></textarea>
                        </div>
                      </div>
              
                      
                      <div className='form-group'>
                        <div className='col-md-12 text-center'>
                          <button type='submit' className='button'>Отправить</button>
                        </div>
                      </div>
                    </fieldset>
                    </form>
            </div>
          </div>
          </Modal.Body>
          
        </Modal>
        </div>
    )
  }

}