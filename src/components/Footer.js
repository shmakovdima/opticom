import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import $ from 'jquery';

class FooterLink extends Component {
  render() {
    return(
      <li>
        <Link className='gradient_underlinehover' to={'/'+this.props.data.href} title={this.props.data.title}>{this.props.data.title}</Link>
      </li>
    )
  }
}

class Footer extends Component {

  scrollTop()  {
    $('html, body').animate({
            scrollTop: 0
        }, 600);
    return false;
  }

  render() {
    console.log(this.props.FooterLinks)
    return(
        <footer className='footer'>
          <nav>
            <div className='container'>
                <ul className='pull-left'>
                 {
                    this.props.FooterLinks.map(function(item, index) {
                      return <FooterLink data={item} key={index}/>
                    })
                  }
                </ul>
                <a className='pull-right footer_up' title='Наверх' onClick={this.scrollTop.bind(this)}></a>
            </div>
          </nav>
          <div className='container footer_addons'>
            <div className='row'>
              <div className='col-md-4 col-xs-6 text-left'>
                © 1999-2016 ГК «Оптиком»
              </div>
              <div className='col-md-4 col-xs-6 text-center text-right-xs text-right-sm'>
                <a title='Мы в ВКонтакте' href='https://vk.com/gk_opticom' className='footer_vk'></a>
                <a title='Мы в Facebook' href='https://www.facebook.com/Opticom.ru' className='footer_fb'></a>
                — мы в соцсетях
              </div>
              <div className='col-md-4 col-xs-6 text-right text-left-xs text-left-sm'>
                С <span className='footer_love'></span> от&nbsp;
                <a href='http://futureaction.ru' title='FutureAction' className='green_underline'>FutureAction</a>
              </div>
            </div>
              <div className='pull-left icon-204275-digital-marketing'></div>
          </div>

        </footer>
    )
  }
}

function mapStateToProps (state) {
  return {
    FooterLinks: state.FooterLinks
  }
}

export default connect(mapStateToProps)(Footer)