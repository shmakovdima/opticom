import '../../stylus/components/header.styl';
import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import * as pageActions from '../../actions/showMenu'

import { bindActionCreators } from 'redux'

class HeaderSearch extends Component {
  render() {
    return(
      <div className='pull-right header_search hidden-sm hidden-xs'>
        <input type='text' placeholder='ПОИСК'/>
      </div>
    )
  }
}

class HeaderLink extends Component {
  render() {
    return(
      <li>
        <Link className='greenlighted_left' activeClassName='header_link_active'  to={'/'+this.props.data.href} title={this.props.data.title}>{this.props.data.title}</Link>
      </li>
    )
  }
}

class HeaderCount extends Component {
  render() {
    return(
      <Link className='pull-right header_basket' to='/user/cart'>
        <span>{2}</span>
      </Link>
    )
  }
}

class Header extends Component {

  showMenu(){
    this.props.pageActions.showMenu(!this.props.show_menu)
  }

  render() {
    return (
        <div className='container'>
          <Link className='header_logo pull-left' to='/'></Link>
          <button className='header_menu pull-left pull-right-xs' onClick={::this.showMenu}></button>
          <ul className='header_links pull-left hidden-xs'>
            {
              this.props.FooterLinks.map(function(item, index) {
                return <HeaderLink data={item} key={index}/>
              })
            }
          </ul>
          <div>
            <Link className='header_user pull-right' title='Личный кабинет' to='/user'></Link>
            <HeaderCount/>
            <a href='tel:+74959800648' className='hidden-xs hidden-sm header_phone pull-right'>+7-495-980-06-48</a>
            <HeaderSearch/>   
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
    FooterLinks: state.pageData.HeaderLinks,
    showMenu: state.user.show_menu
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)