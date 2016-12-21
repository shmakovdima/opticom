import React, { Component } from 'react'
import { connect } from 'react-redux'

import { bindActionCreators } from 'redux'
import * as pageActions from '../../../actions/setEco'


class EcoCheckbox_Block extends Component {

  changeEco(){
    this.props.setEco(!this.props.only_eco)
  }

  render() {

    var windowWidth = this.props.windowWidth

    if (windowWidth < 768) {
      this.props.setEco(false)
    }

    let checked = this.props.only_eco ? 'checked' : ''
    return (
      <div className='ecocheckbox'>
        <input className='checkbox' type='checkbox' id='EcoCheckbox' onChange={::this.changeEco } checked={checked}/>
        <label htmlFor='EcoCheckbox'></label>
        <div className='ecocheckbox_block' onClick={::this.changeEco }>
          <span className='ecocheckbox-text'>Показать только</span>
          <br/>
          <span className='ecocheckbox-text'>эко-товары</span>
        </div>
      </div>
    )
  }
}

class EcoCheckbox extends Component {
  render() {
    const {only_eco} = this.props
    const {setEco} = this.props.pageActions
    return(
      <div>
        <EcoCheckbox_Block only_eco={only_eco} setEco={setEco}/>
      </div>
    )
  }
}


function mapStateToProps (state) {
  return {
    only_eco: state.user.only_eco,
    windowWidth: state.pageData.windowWidth
  }
}


function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EcoCheckbox)